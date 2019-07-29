---
title: My Go To Technology Stack for 2019
description: Technologies for 2019
date: "2019-07-29T14:42:00.276Z"
---

![https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80](https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)

---

If you are on rush, skip to [TLDR](#tldr)

### TypeScript

The is from far the best choise I've made for my latest projects.

It's ok to use vanilla JavaScript if you are only testing a concept or making a 1 day project to play around with some technology, but if you want to build a solid project, TypeScript is your hero.

Having types really encourages you to write more reliable scalable code. It may be a little bit of a learning curve in the beginning, but trust me, it will all pay off when you ship applications that don't break often

> I have to admit, I was skeptical when TypeScript came to the scene a few years ago. From 2012 to 2015, I was a .NET developer, and I wanted to switch my career path to work with full stack JavaScript because I was tired of Windows and Visual Studio. I remember when I finally quit .NET and all those typings and classes and I didn't took to long to TypeScript start to gain popularity and show it's true potential.

### NestJS

NestJS is a progressive Node.js web framework. It gives architecture standards to build robust backends with NodeJS and is completely built with TypeScript.

The nice thing about NestJS is that it already implemented all the fundamentals that a backend application needs, it encourages you to follow good practices and keep your modules organized. You will learn a lot about application architecture and [design patterns](https://refactoring.guru/design-patterns/what-is-pattern) when using NestJS.

Also it has integration with famous libraries like [Mongoose](https://github.com/nestjs/mongoose), [Passport](https://github.com/nestjs/passport), [TypeORM](https://github.com/nestjs/typeorm), [GraphQL](https://github.com/nestjs/graphql) and the list goes on.

### GraphQL

I can't express enough how I am in love with GraphQL 💕

Having the GraphiQL Explorer to visualize and explore the schema takes the developer experience to the next level.

Using GraphQL gives you auto generated documentation for our APIs. This means whoever is using our API don't have to spend hours trying to discover how it works.

Also, the huge benefits of having a [schema](https://graphql.org/learn/schema/) represeting your backend is allowing the creation of tools to auto generate code and validate your frontend integration with the API before it goes live without much effort. With tools like [GraphQL Inspector](https://graphql-inspector.com/docs/) and [GraphQL Code Generator](https://graphql-code-generator.com) it makes frontend so reliable compared to using REST apis.

### React or Vue

You are probably familiar with one of this two.

I personally use React beucase I like it a more opinionated approach rather than following more rules like when you use Vue. With React you can use [create-react-app](https://github.com/facebook/create-react-app/) to start your project or configure [webpack](https://webpack.js.org/) yourself.

Vue in the other hand gives you application structure and [development guidelines](https://cli.vuejs.org/guide/) which can be a huge benefit. Not even talking about the [Vue CLI](https://cli.vuejs.org/) which in terms of developing experience, helps you setting up libraries, managing your bundle and much more.

I can't recommend both enough!

### Apollo Client

For managing data fetching and your application state, Apollo Client provides

### Mobx

tbd

## TLDR;

- TypeScript - Your base full stack language
- GraphQL - Communication layer between your server and client
- NestJS - For building robust API's
- React or Vue - For component oriented frontends
- Apollo Client - Primary client to communicate with GraphQL servers
- Mobx - For managing complex UI state
- AWS Lambda - To deploy your backend without worrying about servers
- Netlify - For modern websites deployment
- Mongoose - ORM for MongoDB
- TypeORM - ORM for SQL databases

<center><i>"The reason why one man is great and another man is living in mediocrity is simply because one understood the value of time while the other did not."</i></center>
