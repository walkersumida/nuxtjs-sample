# nuxtjs-sample

[![CircleCI](https://circleci.com/gh/walkersumida/nuxtjs-sample.svg?style=svg)](https://circleci.com/gh/walkersumida/nuxtjs-sample)

TypeScript + Nuxt.js + Vuetify + Jest

![nuxtjs-sample](https://user-images.githubusercontent.com/12683375/79627129-b880f200-8170-11ea-8502-0c94c58e65e7.gif)

## Run docker

```bash
# run docker
$ make docker_up
```

## Run test

```bash
$ make docker_bash
$ yarn test
```

## Sample Pages
### Demo user
[Demo user](https://github.com/walkersumida/rails-api-for-nuxtjs#demo-user).

### sign in
http://0.0.0.0:8080/sign_in
### sign out
http://0.0.0.0:8080/sign_out
### post index page(Authorization: required)
http://0.0.0.0:8080/posts
### post new page(Authorization: required)
http://0.0.0.0:8080/posts/new

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
