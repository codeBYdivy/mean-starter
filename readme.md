# MEAN-STACK starter

### This repo can be used as boilerplate starter for any mean-stack application, 

## Installation

1. Check out this repository
2. Ensure you have node and mongoDb installed
3. Run `npm install` in the root directory (this will install dependencies inside a folder 'node_modules')

## Project Structure

The project ships with a directory structure like:

    /mean-starter
    |
    |---- /app_api
    |
    |---- /app_client
    |
    |---- /bin
    |
    |---- .env
    |
    |---- .gitignore
    |
    |---- app.js 
    |
    |---- package.json 
    |
    |---- Procfile 
    |
    |---- readme.md
    

__Let's break this down..__

#### [/app_api](./app_api)

Server-side implementation source code.

#### [/app_client](./app_client)

Clinet-side implementation source code.

#### [/bin](./bin)

includes starter file for running application.

#### [.env](.env)

environment specific URLs for DB.

#### [app.js](app.js)

starter file that starts the application and server.

#### [package.json](package.json)

Server-side (command-line) dependencies.

#### [Procfile](Procfile)

Heruko deployment file.


## Run Tasks

All of the following are available from the command line.

- __`npm start`__ starts the application with debug.
- __`npm run debug`__ starts the application with debug and node-inspector enabled.
- __`npm run prod`__ script that run on heroku.
