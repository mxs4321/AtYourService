# AtYourService

##Dev Environment

 - [Node v4.3](https://nodejs.org/dist/v4.3.1/node-v4.3.1-x64.msi) (this is the maxiumn version supported by Elastic Beanstalk)
 - Cmder (for windows)
 - recommended: JetBrains WebStorm (its free for students until we commercialize)

##Global npm packages

 - sails@0.12.1
 - grunt
 - grunt-cli
 - bower
 - karma
 - pm2

##Compass

[Compass](http://compass-style.org/install/) is a CSS preprocessor (build in ruby) that already is integrated into our build scripts. It
is used by [Bootstrap](http://getbootstrap.com/) (awesome UI framework by twitter).

##Setup and Running the App

Unless otherwise noted, you should run commands from the root directory of the project.

Every time `package.json` changes, you will need to run `npm i`. This command installs all *local* NPM modules defined for the project.

To start the Sails server, you need to run `npm start`. This command points to a script defined in `package.json` that runs the server.
