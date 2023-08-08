import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { jwtConstants } from './constants';

@Module({
  controllers: [AuthController],
  imports: [
    UserModule,
    PassportModule,
    ConfigModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1 day' }
    })
  ],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule { }
