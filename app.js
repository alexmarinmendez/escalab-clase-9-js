const d = document

//El State
const state = {
    listaCompras: [],
    cliente: "Leo Messi"
}

//Template UI
const template = () => {
    if (state.listaCompras.length < 1) {
        return `<p>Lista de compras vacía</p>`
    }

    let compras = state.listaCompras.map(item => `<li>${item}</li><button>Eliminar</button>`).join("")
    return compras
}

//Render UI
const render = () => {
    console.log(state)
    let list = d.getElementById('lista-compras')
    if (!list) return
    list.innerHTML = template()
}

d.addEventListener("DOMContentLoaded", render)

const setState = (obj) => {
    for (let key in obj) {
        if (state.hasOwnProperty(key)) {
            state[key] = obj[key]
        }
    }
    render()
}

//Función para obtener el estado
// const getState = () => state

//Función para obtener una COPIA del estado
const getState = () => JSON.parse(JSON.stringify(state))

//Estableciendo valores por defecto al State
setState({
    listaCompras: ['Azucar', 'Arroz'],
    total: 9000
})

const items = getState()
items.listaCompras.push('Pollo')
setState(items)

d.addEventListener("submit", e => {
    if (!e.target.matches('#formulario-compras')) return false
    e.preventDefault()

    let item = d.getElementById('item-compras')
    if (!item) return

    //Agregar elementos a la lista de compras
    // let li = d.createElement('li')
    // li.innerText = item.value
    // list.appendChild(li)

    //Actualizar el State y la UI
    // state.listaCompras.push(item.value)

    //Actualizar el State y la UI pero de forma reactiva
    const lastState = getState()
    lastState.listaCompras.push(item.value)
    setState(lastState)
        
    item.value = ""
    item.focus()
})