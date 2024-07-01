import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class TreeNode {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TreeNode' }] })
  children: TreeNode[];
}

const TreeNodeSchema = SchemaFactory.createForClass(TreeNode);

@Schema()
export class User extends Document {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  email: string;

  @Prop({ type: TreeNodeSchema })
  tree: TreeNode;
}

export const UserSchema = SchemaFactory.createForClass(User);
