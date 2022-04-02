import { Global, Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';

@Global()
@Module({
  providers: [RepositoryService],
  exports: [RepositoryService],
})
export class RepositoryModule {}
