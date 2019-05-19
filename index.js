const cursos = require('./listaCursos');
const fs = require('fs');

const opciones = {
    id : {
        demand: true,
        alias: 'i'
    },
    nombre :{
        demand: true,
        alias: 'n'
    },
    cedula : {
        demand: true,
        alias: 'c'
    }
}

const argv = require('yargs')
    .command('inscribir', 'datos: ', opciones)
    .argv

for (let i = 0; i < cursos.listaCursos.length; i++) {
    setTimeout(() => {
        // mostrar información del curso cada 2 segundos
       console.log("El Id del Curso es " + cursos.listaCursos[i].id +
       " nombre del Curso es " + cursos.listaCursos[i].nombre +
       " el valor del curso es $" + cursos.listaCursos[i].valor +
       " y la duración es " + cursos.listaCursos[i].duracion + " horas")
    }, i * 2000);
}


let buscarCurso = cursos.listaCursos.find(function(listaCursos) {
        return listaCursos.id == argv.i
    });

let generarArchivo = (listaCursos) =>{
    texto = 'Hola, ' + argv.n  + '\n' +
    'Cedula ' + argv.c + '\n' +
    'Bienvenido al curso ' + listaCursos.nombre + ' Id: '+  listaCursos.id + '\n' +
    'Duración ' + listaCursos.duracion + ' Valor: '+ listaCursos.valor;
    fs.writeFile('Incripcion_'+argv.n+'.txt', texto, (err) => {
        if(err) throw(err);
    });
    return 'Generando archivo... \n';
}  



console.log(buscarCurso===undefined?"Lo sentimos, no encontramos en curso que buscas, a continuación te mostramos un listado de cursos disponibles: ":generarArchivo(buscarCurso) +
"Felicitades por tu inscripción al curso: " + buscarCurso.nombre + '\n' +
"Se ha generado un archivo con la infomación que registraste" + '\n' +
"A continuación, te mostramos un listado otros cursos disponibles: ")
