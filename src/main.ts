import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as MongoStore from 'connect-mongo';
import * as passport from 'passport';
import * as mongoose from 'mongoose';
import { AppModule } from './app.module';

const Store = MongoStore(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'some secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000 * 60,
      },
      store: new Store({ mongooseConnection: mongoose.connection }),
    }),
  );


  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
