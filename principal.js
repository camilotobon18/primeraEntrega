const curso1 = require ('./modelo');
const fs = require ('fs');

//destructuracion del codigo
const {cursos, listarCursos, buscarCurso, crearArchivo} = require ('./modelo');

let {id, nombre, duracion, valor} = cursos;

listarCursos();

//console.log(buscarCurso());
//console.log(buscarCurso(1));

//crearArchivo(cursos, )

const opciones = {
	idcur:{
		demand: true,
		alias: 'id'
	},
	nombreEst:{
		demand: true,
		alias: 'n'
	},
	cedula:{
		demand: true,
		alias: 'c'
	}
}


const arg = require('yargs')
			.command('inscribirse', 'inscribirse a un curso', opciones)
			.arg

console.log(arg);
//crearArchivo(cursos, arg.n, arg.c, arg.id);