import { Module } from '@nestjs/common';
import { userProviders } from 'src/providers/user.provider';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    UsersController,
  ],
  providers: [
    UsersService,
    ...userProviders,
  ],
  exports: [UsersService],
})
export class UsersModule {}
