# backend

## Instalação e configuração do ambiente Dev

### O Nodejs

<https://nodejs.org/en/download/>

alternativa nvm: <https://github.com/nvm-sh/nvm>

alternativa asdf: <https://asdf-vm.com>

### O Docker

<https://docs.docker.com/get-docker/>

## Diferenças entre Javascript e Node.js

        Javascript é uma linguagem de script
    interpretada desenvolvida pela Mozila, de
    tipagem dinâmica, single thread, eventsource, com algumas características de OOP e
    de FP, com o propósito de executar conteúdo dinâmico para o Browser, fazendo uso da
    webAPI.
        Modelo de OOP em Javascript se diferencia por trazer uma Herança
    Prototípica, isto é, a criação de objetos seguem um
    clone" do objeto, inicialmente instanciados a partir de uma unção
    que executa o "prototype chain", posteriormente foi adicionado a
    palavra chave class, e foi possível construir os objetos a partir
    deste constructo. Ainda sobre OOP em JS verificamos a
    ausência de interface, logo o polimorfismo pode ser
    implementado usando curry.
    ....

...
...

```js
//literal
const literal_person = {
    fisrtName: `testFirstName`,
    lastName: `testLastName`
}

console.log(literal_person)

// object
const object_person = new Object()
object_person.fisrtName = `testFirstName`
object_person.lastName = `testLastName`

console.log(object_person)

// function constructor
function Person(fname, lname) {
    this.fisrtName = fname
    this.lastName = lname
}
const personOne = new Person(`testFirstName`, `testLastName`)

console.log(personOne)

// object.create
const ocPerson = Object.create(personOne, { age: { value: 12 } })

console.log(ocPerson)
console.log(ocPerson.firstName)
console.log(ocPerson.lastName)

// Object.assign

const oaPerson = Object.assign(
    {},
    { fisrtName: "fisrtName" },
    { lastName: "lastName" }
)

console.log(oaPerson)

// class

class CPerson {
    constructor(fname, lname) {
        this.fisrtName = fname
        this.lastName = lname
    }
}

const CPerson = new CPerson(`testFirstName`, `testLastName`)

console.log(cPerson.firstName) //testFirstName
console.log(cPerson.lastName) //testLastName

// Object factoring

function ofPerson(fname, lname) {
    return {
        firstName: fname,
        lastName: lname
    }
}

var ofiPerson = ofPerson("name", "last")

// prototype

function pPerson() {
    var o = Object.create(pPerson.prototype)

    return o
}

pPerson.prototype.firstName = "first"
pPerson.prototype.lastName = "last"

var o = pPerson()
console.log(o)
```

node backend/polimorphic-prototype.js

```js
const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello from server")
        res.end()
    }
})

server.on("connection", stream => {
    console.log("Some one connected")
})

server.listen(4000)
console.log("server listen on http://localhost:4000")
```
