export async function getFilmes() {
    const url = 'http://10.107.134.40:8080/v2/acmefilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes
}

export async function getFilme (id) {
    const url = `http://10.107.134.40:8080/v2/acmefilmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme[0]
}



'use strict'

import {getFilmes, getFilme} from "./filmes.js"

const filmes = [
    {
        nome: "Pedro Barbosa"
    }, 
    {
        nome: "Cristiano Ronaldo"
    },
    {
        nome: "Senai e Sesi"
    }

]

function criarCard (filme) {
    const card = document.createElement('div')
    const title = document.createElement('h2')
    const duracao = document.createElement('button')

    title.textContent = filme.nome
    duracao.textContent = filme.sinopse
    
    card.append(title, duracao)
    return card
}

async function preencherContainer () {
    const container = document.querySelector('body')

    const filmes = await getFilmes()

    filmes.forEach (filme => {
        const card = criarCard (filme)
        container.appendChild(card)
    })

}

preencherContainer()