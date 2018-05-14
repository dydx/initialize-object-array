const initializeObjectArray = require('../src')
const faker = require('faker')

const createPost = () => ({
    id: faker.random.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph()
});

const posts = initializeObjectArray(5, createPost);

console.log(posts);
