const curso1 = require ('./modelo');
const fs = require ('fs');

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
			.command('inscribir', 'inscribirse a un curso', opciones)
			.arg

console.log(arg);
//destructuracion del codigo
const {cursos, listarCursos, buscarCurso, crearArchivo} = require ('./modelo');

let {id, nombre, duracion, valor} = cursos;

listarCursos();

console.log(buscarCurso(1));


crearArchivo("camilo", 1035225341, 2);