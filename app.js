const fetch = require('node-fetch')

async function getNombre(username) {
    const url = 'https://api.github.com/users/${username}'
    const respuesta = await fetch(url)
    const json = await respuesta.json()

    console.log(json.name)
}

getNombre('rickitan')
    .then((nombre) => console.log(nombre))

//**** Para manejar errores *****

const fetch = require('node-fetch')

async function getNombre(username) {
    const url = 'https://api.github.com/users/${username}'
    const respuesta = await fetch(url)
    const json = await respuesta.json()

    if (respuesta.status != 200)
        throw Error('El usuario no existe')

    return json.name
}

/* getNombre('yonoexistoengit')
    .then((nombre) => )console.log(nombre))
.catch ((e) => console.log('error: ${e}')) */

//*** otro manejo de error ***

(async function () {
    try {
        const nombre = await getNombre('yonoexistoengit')
        console.log(nombre)
    } catch (e) {
        console.log('error: ${e}')
    }
})