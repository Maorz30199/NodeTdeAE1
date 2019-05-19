const cursos = require('./listaCursos')

for (let i = 0; i < cursos.listaCursos.length; i++) {
    setTimeout(() => {
       console.log("El Id del Curso es " + cursos.listaCursos[i].id +
       " nombre del Curso es " + cursos.listaCursos[i].nombre +
       " el valor del curso es $" + cursos.listaCursos[i].valor +
       " y la duración es " + cursos.listaCursos[i].duracion + " horas")
    }, i * 2000);
  }
