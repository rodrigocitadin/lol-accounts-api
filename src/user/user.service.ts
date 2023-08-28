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

  async create(createUserDto: CreateUserDto): Promise<ReturnUserDto> {
    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(createUserDto.password, salt);
    createUserDto.password = encryptedPassword;

    const user: User = await this.prisma.user.create({ data: createUserDto });

    if (!user) throw new BadRequestException();

    const { createdAt, updatedAt, password, role, ...userReturn } = user

    return userReturn;
  }

  async findAll(): Promise<User[]> {
    const users: User[] = await this.prisma.user.findMany();

    return users;
  }

  async findOne(id: string): Promise<ReturnUserDto> {
    const user: User = await this.prisma.user.findFirst({
      where: { id }
    })

    if (!user) throw new NotFoundException();

    const { createdAt, updatedAt, password, role, ...userReturn } = user

    return userReturn;
  }

  async findByUsername(username: string): Promise<ReturnUserDto> {
    const user: User = await this.prisma.user.findFirst({
      where: { username }
    })

    if (!user) throw new NotFoundException();


    const { createdAt, updatedAt, password, role, ...userReturn } = user

    return userReturn;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<ReturnUserDto> {
    if (updateUserDto.password) {
      let salt = await bcrypt.genSalt();
      let encryptedPassword = await bcrypt.hash(updateUserDto.password, salt);
      updateUserDto.password = encryptedPassword;
    }

    const updatedUser: User = await this.prisma.user.update({
      where: { id },
      data: updateUserDto
    })

    if (!updatedUser) throw new BadRequestException();

    const { createdAt, updatedAt, password, role, ...userReturn } = updatedUser

    return userReturn;
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
