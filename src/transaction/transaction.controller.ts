import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) { }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post(':id')
  async create(@Param('id') id: string, @Body() createTransactionDto: CreateTransactionDto) {
    await this.transactionService.create(id, createTransactionDto);
  }
}
