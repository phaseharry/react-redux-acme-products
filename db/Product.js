const Sequelize = require('sequelize')
const connection = new Sequelize(process.env.DATABASE_URL)
const faker = require('faker')

const Product = connection.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER
    }
})

const syncAndSeed = () => {
    connection.sync()
    .then(() => {
        Promise.all([
            Product.create({ name : faker.commerce.product()}),
            Product.create({ name : faker.commerce.product()}),
            Product.create({ name : faker.commerce.product()}),
            Product.create({ name : faker.commerce.product()}),
            Product.create({ name : faker.commerce.product()})
        ]).then(() => console.log('synced and seeded (HOPEFULLY!)'))
    }).catch((error) => console.log(error))
}

module.exports = {
    models : {
        Product
    },
    syncAndSeed
}