
const faker = require('faker')

module.exports.fakerData = () =>{
    let arr = []
    let obj = null
    for(let i = 0; i<10; i++){
        obj = {
            name: faker.name.findName(),
            email:  faker.internet.email()
        }
       arr.push(obj)
    }
    return arr
} 