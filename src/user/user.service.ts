import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { ReturnUserDto } from './dto/return-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  returnUser = {
    id: true,
    email: true,
    balance: true,
    username: true,
  }

  async create(createUserDto: CreateUserDto): Promise<ReturnUserDto> {
    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(createUserDto.password, salt);
    createUserDto.password = encryptedPassword;

    const user: User = await this.prisma.user.create({ data: createUserDto });

    if (!user) throw new BadRequestException();

    const { createdAt, updatedAt, password, role, ...userReturn } = user

    return userReturn;
  }

  async findAll(): Promise<ReturnUserDto[]> {
    const users: ReturnUserDto[] = await this.prisma.user.findMany({ select: this.returnUser });

    return users;
  }

  async findOne(id: string): Promise<ReturnUserDto> {
    const user: ReturnUserDto = await this.prisma.user.findFirst({
      where: { id },
      select: this.returnUser
    })

    if (!user) throw new NotFoundException();

    return user;
  }

  async findByUsername(username: string): Promise<ReturnUserDto> {
    const user: ReturnUserDto = await this.prisma.user.findFirst({
      where: { username },
      select: this.returnUser
    })

    if (!user) throw new NotFoundException();

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<ReturnUserDto> {
    if (updateUserDto.password) {
      let salt = await bcrypt.genSalt();
      let encryptedPassword = await bcrypt.hash(updateUserDto.password, salt);
      updateUserDto.password = encryptedPassword;
    }

    const updatedUser: ReturnUserDto = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: this.returnUser,
    })

    if (!updatedUser) throw new BadRequestException();

    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    const user: User = await this.prisma.user.delete({
      where: { id }
    })

    if (!user) throw new NotFoundException()
  }

  async givePass(username: string): Promise<{
    id: string,
    username: string,
    password: string
  }> {
    const user = await this.prisma.user.findFirst({
      where: { username },
      select: {
        id: true,
        username: true,
        password: true
      }
    })

    if (!user) throw new NotFoundException();

    return user;
  }
}
