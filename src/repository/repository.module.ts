import { Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';

@Module({
  providers: [RepositoryService]
})
export class RepositoryModule {}
