const fs = require('fs');

let cursos = [{
	id: 1,
	nombre: "Microeconomia",
	duracion: 40,
	valor: 250000
},
{
	id: 2,
	nombre: "Matematicas Financieras",
	duracion: 50,
	valor: 300000
},
{
	id: 3,
	nombre: "Logica de Programacion",
	duracion: 32,
	valor: 210000
}];

function setDelay(n, callback){
	setTimeout(function(){
		n;
		callback(n);
	},2000);
}

let listarCursos = () =>{
	
		for (var i = 0; i <= cursos.length - 1; i++) {
						setDelay('ID curso: ' + cursos[i].id + '. este curso de ' + cursos[i].nombre + 
									' tiene una duracion de ' + cursos[i].duracion + 
									' horas y su valor es de COP ' + cursos[i].valor, function(n){
									console.log(n);
									});
		}
	
}

let buscarCurso = (identif) => cursos.find(cursosId => cursosId.id == identif);


let crearArchivo = (nombreEst, idEst, idCur) =>{
	texto = 'El nombre del estudiante es ' + nombreEst + ' identificado con la C.C. ' + idEst + ' ' +
			'se ha inscrito al curso ' + buscarCurso(idCur);
	fs.writeFile('inscripcion.txt', texto, (err) =>{
		if (err) throw (err);
		console.log('se ha inscrito exitosamente');
	});
}

module.exports = {
	cursos,
	listarCursos,
	buscarCurso,
	crearArchivo
};


