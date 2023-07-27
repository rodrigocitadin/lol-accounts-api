import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    const account = await this.accountService.create(createAccountDto);
    return account;
  }

  @Get()
  async findAll() {
    const accounts = await this.accountService.findAll();
    return accounts;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const account = await this.accountService.findOne(id);
    return account;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    const account = this.accountService.update(id, updateAccountDto);
    return account;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.accountService.remove(id);
  }
}
