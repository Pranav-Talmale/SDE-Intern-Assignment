import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async validateAndRegister(
    username: string,
    password: string,
    email: string,
  ): Promise<User> {
    const existingUser = await this.userModel.findOne({ username });
    if (existingUser) {
      throw new BadRequestException('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({
      username,
      password: hashedPassword,
      email,
    });
    return newUser.save();
  }

  async addTreeNode(
    userId: string,
    nodeName: string,
    parentNodeId: string = null,
  ): Promise<User> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const newNode = { name: nodeName, children: [] };
    if (parentNodeId) {
      const parentNode = await this.findNodeById(user.tree, parentNodeId);
      if (!parentNode) {
        throw new BadRequestException('Parent node not found');
      }
      parentNode.children.push(newNode);
    } else {
      user.tree = newNode;
    }

    return user.save();
  }

  private async findNodeById(tree: any, nodeId: string): Promise<any> {
    if (tree._id === nodeId) {
      return tree;
    }
    for (const child of tree.children) {
      const result = await this.findNodeById(child, nodeId);
      if (result) {
        return result;
      }
    }
    return null;
  }
}
