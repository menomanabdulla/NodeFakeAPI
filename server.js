
const fs = require('fs')
const faker = require('faker')

function generate(){
    let person = []
    for(let i = 0; i<10; i++){
        obj = {}
        obj.name = faker.name.findName()
        obj.email = faker.internet.email()
        person.push(obj)
    }
    return person
}

fs.appendFile('person.json', JSON.stringify(generate()), (err) => {
    if (err) {
        console.log(`Here Error occured for ${err}`)
    }

    console.log("Successfuly Write person")
});

let objFinal = {}
fs.readFile('person.json', 'utf8',(err, data) => {
    if (err) throw err;
    objFinal = JSON.parse(data)
    console.log(objFinal)
});

fs.appendFile('clonePerson.json', JSON.stringify(objFinal), (err) => {
    if (err) {
        console.log(`Here Error occured for ${err}`)
    }

    console.log("Successfuly Write clonePerson")
})

/*const os = require('os')

//console.log(os.networkInterfaces())

const crypto = require('crypto')

const hash = crypto.createHash('sha256')

hash.on('readable', () => {
  const data = hash.read();
  if (data) {
    console.log(data.toString('hex'));
    // Prints:
    //   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
  }
});
hash.write('some data to hash');
hash.end();

/*const utility = require('./utility')

const math = require('./math')

const obj = require('./persons')

const func = (name,type,obj) => {
    obj.person.name = name
    obj.person.type = type
    console.log(obj.person)
}

func('Abdulla','Mail',obj)
func('Bappy','Mail',obj)
func('Ruposhi','Femail',obj)

console.log('This is server.js');
 utility.something()

 console.log(math.add(10,20))
 console.log(math.sub(10,20))*/