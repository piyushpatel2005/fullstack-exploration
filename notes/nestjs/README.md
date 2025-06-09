# Nest.js Tutorials

These are set of tutorials to learn Nest.js from ground up.

## Table of Contents

### Basics

- [Overview of Nest.js](overview/index.md)
- [Set up Nest.js](setup/index.md)
- [Create New Nest.js Project](create-project/index.md)
- [NestJS Project Structure](project-structure/index.md)

### Create To Do App

- Generate New Nest JS Project, Overview of the Project
- Explanation of what's needed: Pipes, Guard, Controller, Service, Repository for few end points, GET, POST, GET specific item
- Genereate To Do Module using `nest cli`
- Generate Controller using nest cli with `--flat` option with directory `todo` to host module, controller, services, and repository
- Set up routes: starting with routes for each method and then move `/todo` to controller level decorator
- Extracting items with decorator `@Headers`, `@Body`, `@Param`, `@Query`
- For creating items first you extract data from body using `@Body()`, then individual properties are extracted using `@Body('title')`, `@Body('description')` and then modify it to use DTO object.
- Create validation pipe using `class-transformer` and `class-validator` with explanation of how it works
- Create DTO to validate incoming data
- Create services and repositories and explain what those are. They have similar methods but serve different purposes
- Have dependencies wired using constructor and test application
- Introduce inversion of control

Classes should not create its own dependencies.

```ts
export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor() {
        this.messagesRepo = new MessagesRepository();
    }
}
```

The instance can be passed by the caller.

```ts
export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor(messagesRepo: MessagesRepository) {
        this.messagesRepo = messagesRepo;
    }
}
```

Instance doesn't need to depend on specific implementation. useful in testing
```ts
interface Repository {
    findOne(id: string);
    findAll();
    create(message: string);
}

export class MessagesRepository implements Repository {
    
}

export class MessagesService {
    messagesRepo: Repository;

    constructor(messagesRepo: Repository) {
        this.messagesRepo = messagesRepo;
    }
}
```

Now, this is so far good, but now if we have to create instance of `MessageController`, we will need to create `MessageService` and `MessageRepository`. If our service depends on multiple repositories, we would need to create all of them and that would simply add to the complexity of code and lines of code.

- Introduce dependency injection and refactor code

This includes Dependency injection container or injector. This container includes two sets of information: (1) List of classes and their dependencies, (2) List of instances that has been created.

- Dependency injection across modules using `imports`, `exports`. Write example application for this.
- Create new project structure
- Install `@nestjs/typeorm` and `typeorm` for database and `sqlite3` for in-memory database
- Overview of architecture of application
    - Create connection in `app.module.ts` and share with downstream modules
    - Create entity, repository, service and controller in other modules. Repository will be created behind the scenes when entity is created
- Create database configuration in `app.module.ts`. `synchronize` option synchronizes properties to column in DBMS. Good for development migrations
- Create entities
    1. Create entity file and class that lists properties for this entity
    2. Connect entity to its parent module to create repository using `TypeOrmModule.forFeature()`
    3. Connect the entity to the root connection in `app.module.ts`