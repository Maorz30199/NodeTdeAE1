listaCursos = [{
    id: 1,
    nombre: 'JavaScript Essential',
    duracion: 20,
    valor: 300000
},
{
    id: 2,
    nombre: 'Scrum',
    duracion: 40,
    valor: 350000
},
{
    id: 3,
    nombre: 'Nodejs Avanzado',
    duracion: 35,
    valor: 400000
}]


    setTimeout(function(){
        listaCursos
    }, 2000)

console.log(listaCursos, listaCursos.length)

module.exports = {
    listaCursos
}