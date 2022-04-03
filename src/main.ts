import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

(async () => {
  const PORT = process.env.PORT || 8000;

  const app = await NestFactory.create(AppModule);

  /**
   * Global validation pipe
   * @property whitelist - when true it strips the properties from the request
   *  that are not used in the application
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(PORT, () => {
    console.info('App running on port: ', PORT);
  });
})();
