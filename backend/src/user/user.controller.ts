import { Controller, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { IsString, IsOptional } from 'class-validator';

class RegisterUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  email: string;
}

class AddTreeNodeDto {
  @IsString()
  nodeName: string;

  @IsOptional()
  @IsString()
  parentNodeId?: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.validateAndRegister(
      registerUserDto.username,
      registerUserDto.password,
      registerUserDto.email,
    );
  }

  @Post(':id/tree')
  async addTreeNode(
    @Param('id') userId: string,
    @Body() addTreeNodeDto: AddTreeNodeDto,
  ) {
    return this.userService.addTreeNode(
      userId,
      addTreeNodeDto.nodeName,
      addTreeNodeDto.parentNodeId,
    );
  }
}
