# initialize-object-array
Initialize a size N collection/array of objects

## Installation
1.) `yarn add @dydx/initialize-object-array`

## Usage
```js
const initializeObjectArray = require('@dydx/initialize-object-array')
const faker = require('faker')

const createPost = () => ({
    id: faker.random.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph()
});

const posts = initializeObjectArray(5, createPost);

// and now `posts` contains an array of 5 `post` objects
```
