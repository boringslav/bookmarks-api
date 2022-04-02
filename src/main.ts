import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () => {
  const PORT = process.env.PORT || 8000;

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.info("App running on port: ", PORT);
  });
})();
