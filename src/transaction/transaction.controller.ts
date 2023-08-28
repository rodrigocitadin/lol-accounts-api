import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) { }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    const soldAccount = await this.transactionService.create(createTransactionDto);
    return soldAccount;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const transactions = await this.transactionService.findById(id);
    return transactions;
  }
}
