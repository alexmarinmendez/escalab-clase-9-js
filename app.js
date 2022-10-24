const d = document

//El State
const state = {
    listaCompras: []
}

//Template UI
const template = () => {
    if (state.listaCompras.length < 1) {
        return `<p>Lista de compras vacía</p>`
    }

    let compras = state.listaCompras.map(item => `<li>${item}</li>`)
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
    state.listaCompras.push(item.value)
    render()

    item.value = ""
    item.focus()
})