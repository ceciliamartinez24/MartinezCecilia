let PokemonUnoE1
let PokemonDosE1
let PokemonTresE1
let NombreUno, NombreDos, NombreTres
let ImagenUno, ImagenDos, ImagenTres
let AtaqueUno = 0
let AtaqueDos = 0
let AtaqueTres = 0
let defensaUno = 0
let defensaDos = 0
let defensaTres = 0
let ataqueE1 = 0
let defensaE1 = 0

let PokemonUnoE2
let PokemonDosE2
let PokemonTresE2
let NombreUno2, NombreDos2, NombreTres2
let ImagenUno2, ImagenDos2, ImagenTres2
let AtaqueUno2 = 0
let AtaqueDos2 = 0
let AtaqueTres2 = 0
let defensaUno2 = 0
let defensaDos2 = 0
let defensaTres2 = 0
let ataqueE2 = 0
let defensaE2 = 0


document.getElementById('IngresoEquipoUno').addEventListener('click', async function() {

    let equipoUno  = {
        PokemonUnoE1 : document.getElementById('PokemonUnoE1').value.toLowerCase(),
        PokemonDosE1 : document.getElementById('PokemonDosE1').value.toLowerCase(),
        PokemonTresE1 : document.getElementById('PokemonTresE1').value.toLowerCase(),
    }

    await PrimerEquipo(equipoUno.PokemonUnoE1, equipoUno.PokemonDosE1, equipoUno.PokemonTresE1)
    await sumarE1 ()
})

document.getElementById('IngresoEquipoDos').addEventListener('click', async function() {

    let equipoDos  = {
        PokemonUnoE2 : document.getElementById('PokemonUnoE2').value.toLowerCase(),
        PokemonDosE2 : document.getElementById('PokemonDosE2').value.toLowerCase(),
        PokemonTresE2 : document.getElementById('PokemonTresE2').value.toLowerCase(),
    }
    
    await SegundoEquipo(equipoDos.PokemonUnoE2, equipoDos.PokemonDosE2, equipoDos.PokemonTresE2)
    await sumarE2 ()
})

async function PrimerEquipo (PokemonUnoE1, PokemonDosE1, PokemonTresE1) {

    try {
    
        const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonUnoE1}`)
        const data1 = await response1.json()

        NombreUno = data1.name
        ImagenUno = data1.sprites.front_default
        AtaqueUno = data1.stats.find(s=>s.stat.name === 'attack').base_stat
        defensaUno = data1.stats.find(s=>s.stat.name === 'defense').base_stat

        document.getElementById('TituloPokemonUno').innerHTML = NombreUno
        document.getElementById('ImagenPokemonUno').src = ImagenUno
        document.getElementById('AtaqueUno').innerHTML = AtaqueUno
        document.getElementById('defensaUno').innerHTML = defensaUno

    } catch (error) {
        console.log('Error Pokemon Uno')
    }

    try {

        const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonDosE1}`)
        const data2 = await response2.json()

        NombreDos = data2.name
        ImagenDos = data2.sprites.front_default
        AtaqueDos = data2.stats.find(s=>s.stat.name === 'attack').base_stat
        defensaDos = data2.stats.find(s=>s.stat.name === 'defense').base_stat

        document.getElementById('TituloPokemonDos').innerHTML = NombreDos
        document.getElementById('ImagenPokemonDos').src = ImagenDos
        document.getElementById('AtaqueDos').innerHTML = AtaqueDos
        document.getElementById('defensaDos').innerHTML = defensaDos

    } catch (error) {
       console.log('Error Pokemon Dos')
    }

    try {

        const response3 = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonTresE1}`)
        const data3 = await response3.json()

        NombreTres = data3.name
        ImagenTres = data3.sprites.front_default
        AtaqueTres = data3.stats.find(s=>s.stat.name === 'attack').base_stat
        defensaTres = data3.stats.find(s=>s.stat.name === 'defense').base_stat

        document.getElementById('TituloPokemonTres').innerHTML = NombreTres
        document.getElementById('ImagenPokemonTres').src = ImagenTres
        document.getElementById('AtaqueTres').innerHTML = AtaqueTres
        document.getElementById('defensaTres').innerHTML = defensaTres

    } catch (error) {
        console.log('Error Pokemon Tres')
    }

    console.log("Ataques:", AtaqueUno, AtaqueDos, AtaqueTres)
    console.log("Defensas:", defensaUno, defensaDos, defensaTres)

    document.getElementById('ataqueE1').textContent = 'Ataque del equipo uno: ' + ataqueE1
    document.getElementById('defensaE1').textContent = 'Ataque del equipo uno: ' + defensaE1
}


    async function SegundoEquipo (PokemonUnoE2, PokemonDosE2, PokemonTresE2) {

    try {
    
        const response1E2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonUnoE2}`)
        const data1E2 = await response1E2.json()

        NombreUno2 = data1E2.name
        ImagenUno2 = data1E2.sprites.front_default
        AtaqueUno2 = data1E2.stats.find(s2=>s2.stat.name === 'attack').base_stat
        defensaUno2 = data1E2.stats.find(s2=>s2.stat.name === 'defense').base_stat

        document.getElementById('TituloPokemonUno2').innerHTML = NombreUno2
        document.getElementById('ImagenPokemonUno2').src = ImagenUno2
        document.getElementById('AtaqueUno2').innerHTML = AtaqueUno2
        document.getElementById('defensaUno2').innerHTML = defensaUno2

    } catch (error) {
        console.log('Error Pokemon Uno')
    }

    try {

        const response2E2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonDosE2}`)
        const data2E2 = await response2E2.json()

        NombreDos2 = data2E2.name
        ImagenDos2 = data2E2.sprites.front_default
        AtaqueDos2 = data2E2.stats.find(s2=>s2.stat.name === 'attack').base_stat
        defensaDos2 = data2E2.stats.find(s2=>s2.stat.name === 'defense').base_stat

        document.getElementById('TituloPokemonDos2').innerHTML = NombreDos2
        document.getElementById('ImagenPokemonDos2').src = ImagenDos2
        document.getElementById('AtaqueDos2').innerHTML = AtaqueDos2
        document.getElementById('defensaDos2').innerHTML = defensaDos2
    
    } catch (error) {
        console.log('Error Pokemon Dos')
    }

    try {

        const response3E2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonTresE2}`)
        const data3E2 = await response3E2.json()

        NombreTres2 = data3E2.name
        ImagenTres2= data3E2.sprites.front_default
        AtaqueTres2 = data3E2.stats.find(s2=>s2.stat.name === 'attack').base_stat
        defensaTres2 = data3E2.stats.find(s2=>s2.stat.name === 'defense').base_stat

        document.getElementById('TituloPokemonTres2').innerHTML = NombreTres2
        document.getElementById('ImagenPokemonTres2').src = ImagenTres2
        document.getElementById('AtaqueTres2').innerHTML = AtaqueTres2
        document.getElementById('defensaTres2').innerHTML = defensaTres2

    } catch (error) {
        console.log('Error Pokemon Tres')
    }

    console.log("ataque 2:", AtaqueUno2,AtaqueDos2,AtaqueTres2)
    console.log("defensas 2:",defensaUno2,defensaDos2,defensaTres2)

    document.getElementById('ataqueE2').textContent = 'Ataque del equipo dos: ' + ataqueE2
    document.getElementById('defensaE2').textContent = 'Ataque del equipo dos: ' + defensaE2
}

async function sumarE1 () {

    ataqueE1 = (AtaqueUno+AtaqueDos+AtaqueTres)
    defensaE1 = (defensaUno+defensaDos+defensaTres)

    console.log(ataqueE1,defensaE1)

    document.getElementById('ataqueE1').innerHTML = ataqueE1
    document.getElementById('defensaE1').innerHTML = defensaE1

    document.getElementById('ataqueE1').textContent = ('ATAQUE DEL EQUIPO: ' + ataqueE1)
    document.getElementById('defensaE1').textContent = ('DEFENSA DEL EQUIPO: ' + defensaE1)
   

}

async function sumarE2 () {

    ataqueE2 = (AtaqueUno2+AtaqueDos2+AtaqueTres2)
    defensaE2 = (defensaUno2+defensaDos2+defensaTres2)

    console.log(ataqueE2,defensaE2)

    document.getElementById('ataqueE2').innerHTML = ataqueE2
    document.getElementById('defensaE2').innerHTML = defensaE2

    document.getElementById('ataqueE2').textContent = ('ATAQUE DEL EQUIPO: '+ ataqueE2)
    document.getElementById('defensaE2').textContent = ('DEFENSA DEL EQUIPO: '+ defensaE2)
    
}

document.getElementById('IniciarGuerra').addEventListener('click', async function() {


    if (ataqueE1 > defensaE2) {

        let ganador = document.getElementById('ganador')
        ganador.textContent = ('Ganador : EQUIPO A')
        console.log('Gana el equipo 1')
    } else if (ataqueE2 > defensaE1) {

        let ganador = document.getElementById('ganador')
        ganador.textContent = ('Ganador : EQUIPO B')
        console.log('Gana el equipo 2')
    } else {

        ganador.textContent = ('EMPATE')
    console.log ('Es un empate!')
    } 
})

function pokeAleatorio() {
    return Math.floor(Math.random() * 151) + 1 
}

function idPokeAleatorio() {
    return [pokeAleatorio(), pokeAleatorio(), pokeAleatorio()]
}

document.getElementById('equipoAleatorio1').addEventListener('click', async function () {
    const [id1, id2, id3] = idPokeAleatorio()

    document.getElementById('PokemonUnoE1').value = id1
    document.getElementById('PokemonDosE1').value = id2
    document.getElementById('PokemonTresE1').value = id3

    await PrimerEquipo(id1, id2, id3)
    await sumarE1()
})

document.getElementById('equipoAleatorio2').addEventListener('click', async function () {
    const [id1, id2, id3] = idPokeAleatorio()

    document.getElementById('PokemonUnoE2').value = id1
    document.getElementById('PokemonDosE2').value = id2
    document.getElementById('PokemonTresE2').value = id3

    await SegundoEquipo(id1, id2, id3)
    await sumarE2()
})
