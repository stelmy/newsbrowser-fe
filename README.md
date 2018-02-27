# News Browser - web client

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Prerequisites
1. GIT
2. Node.js and npm (Node v6.11.1, npm 3.10.10)
3. Bower (`npm install --global bower`)
4. Grunt (`npm install --global grunt-cli`)

## Developing
### Install npm dependencies
`npm install`
### Install Bower dependencies
`bower install`
### Run backend
Run [News Browser REST server](https://github.com/stelmy/newsbrowser) first.
### Run server# News Browser

## Requirements
1. Java 8
2. Maven
3. GIT

## Install Maven project
`mvn clean install`

## Run server
`mvn spring-boot:run`

## Run tests
`mvn test`

## API
### Top News
http://localhost:8080/news/{lang}/{category}

The `lang` parameter is language. Only `pl` is supported.

The `category` parameter is news category. Supported values are `business`, `entertainment`, `general`, `health`, `science` `sports` and `technology`

### Searching
http://localhost:8080/news/search/{query}/{page}

The `query` parameter is key word to find an article.

The `page` parameter is page of results. The function sends 10 articles per page.

`grunt server`
Client should be automatically opened in your browser.
