# NestJS Project Structure

This lesson covers different files and folders in the NestJS project. NestJS is inspired by Angular and follows a similar project structure. If you're coming from Java Spring framework, you might be familiar with similar project structure.

Below are the important files and directories.

- `package.json` - This file contains information about your project, such as the name, version, and description.
- `src/` - This directory contains the source code for your application. This includes the `main.ts` file, which is the entry point for your application. This file includes a boilerplate code. The main module is `app.module.ts` file. By default, the project `src/` directory includes `main.ts` and `app.module.ts` files along with controller and service files. However, you can modify this structure as per your requirements. You can define following items in the `src/` directory.

    - **Controllers:** They are responsible for handling incoming HTTP requests and route them to their respective services. They are defined with `.controller.ts` extension but it's more of a convention.
    - **Services:** They are responsible for handling business logic. They are defined with `.service.ts` extension but it's more of a convention.
    - **Providers:** They are responsible for providing dependencies to other classes. They can be combinations of services, repositories, factories and other custom code. They help keep your controllers clean.
    - **Modules:** These are defined to group specific application domain logic. You can also imagine them as being different parts of your application. All modules should have a `.module.ts` extension file which is the entry point for each module. By default you have a single module defined in the `app.module.ts` file. In industry, you may find that each module is defined in their own directory with its dependencies. This way you can easily reuse the module in other projects.
- `dist/` - This directory contains the compiled output of your application. Evertime you run the `npm run build` command, this directory will have Typescript code transpiled into Javascript code and the results of your `*.ts` files are stored in this directory.
- `node_modules/` - This directory contains all the dependencies installed for your project. You shouldn't modify anything in this directory.
- `test/` - This directory contains the tests for your project. You can use Jest for writing unit tests and you can also have your end to end tests in this directory.
- `tsconfig.json` - This file defines Typescript rules and configurations for transpilation. 
- `nest-cli.json` configuration file is used for NestJS CLI and to define how the CLI interacts with your project.

## Brief Overview of Code

When you open `main.ts`, this is what you will find in this file.

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

At the top of the file, it's importing `NestFactory` from `@nestjs/core` and `AppModule` from `./app.module`. `NestFactory` is a factory that is used to create a NestJS application and `AppModule` is the main module of your NestJS application. These are used in the `bootstrap()` function to create a NestJS application and start listening on a port. Finally, you simply call this function. That's all this file contains.

### Modules

If you look at `app.module.ts` file, you will see below content.

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

In this case, a module is decorated with `@Module()` decorator. This decorator is used to define a module. It takes an object as an argument and it has the following properties.

- `imports`: This is an array of other modules that this module depends on.
- `controllers`: This is an array of controllers that this module provides.
- `providers`: This is an array of providers that this module provides.

The `AppController` and `AppService` are defined in the `app.controller.ts` and `app.service.ts` files respectively and they are imported in this file to pass them as controllers and providers respectively.

### Controllers

If you look at `app.controller.ts` file, you will see below content.

```ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

In this case, a controller is decorated with `@Controller()` decorator. The controller is defined using a class which is exported from this file. The controller can handle HTTP requests. For each HTTP method, you can define a method that will be called when a request is sent with that HTTP method. In this case, the `getHello()` method is defined that will be called when a request is sent with `GET` method. In this file, `AppService` is imported and it is used in the `getHello()` method to get the response from the service. The `AppService` is injected into the controller using the `constructor()` method.

### Services

The services are used to define custom business logic. If you look at `app.service.ts` file, you will see below content.

```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

The `AppService` is decorated with `@Injectable` decorator. Again this is a class that is exported and it defines a method `getHello()` that returns a string. This method is used in the `app.controller.ts` file to return the response.