# Set up NestJS Environment

In this lesson, you will learn how to set up your development environment for NestJS.

## Install Node.js

NestJS is a Node.js application framework. So, naturally we will need Node.js installed to work with NestJS. Node.js is a runtime environment which enables Javascript execution on the server side. If you're not familiar with Node.js, please check out our crash course on Node.js.

You can download and install Node.js from [here](https://nodejs.org/en). Depending on the operating system, run the installer or follow the instructions on this page to download Node for your respective operating system.

Once you've installed, go to command prompt or terminal and type `node --version` to see the version of Node.js you've installed.

```shell
node --version
```

You will see the version of the Node.js you've installed.

Node.js also comes with a package manager to easily work with packages developed by other developers. This is called Node Package Manager or NPM in short. You can verify the version of NPM by typing `npm --version` in your terminal.

## Install NestJS CLI

NestJS makes it very easy to set up your project or even to create files with boilerplate code using the NestJS CLI. To install the NestJS CLI, run the following command in your terminal. NestJS CLI comes as a package which you can install using an `npm` command.

```shell
npm install -g @nestjs/cli
```

Verify the installation of nest by typing `nest --version` in your terminal.

```shell
nest --version
```

Alternatively, you can use `nest info` command to see detailed information about the installation.

If you need information on the options with `nest` command, you can always use `--help` option like this.

```shell
nest --help
```

To get more detail on specific command, you can use the format `nest <command> --help`. This will provide information on specific command. For example, below command will provide more information on how to generate new application.

```shell
nest new --help
```

With this, you're ready to develop NestJS application.