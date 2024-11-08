import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
  });
  await app.listen(process.env.PORT ?? 3000);

  console.log('----------------------------------------------------------');
  console.log(`Server running on port ${3000}`);
  console.log('----------------------------------------------------------');
}
bootstrap();
