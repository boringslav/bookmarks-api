import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [AuthModule, BookmarkModule, UserModule, RepositoryModule],
})
export class AppModule {}
