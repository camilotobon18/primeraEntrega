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
function setDelay(n){
	setTimeout(function(){
		console.log(n);
	},2000);
}

let listarCursos = () =>{
	
		for (var i = 0; i <= cursos.length - 1; i++) {
				
				/*setTimeout(function(){
						console.log('ID curso: ' + cursos[i].id + '. este curso de ' + cursos[i].nombre + 
									' tiene una duracion de ' + cursos[i].duracion + 
									' horas y su valor es de COP ' + cursos[i].valor);
				},2000);*/
						setDelay('ID curso: ' + cursos[i].id + '. este curso de ' + cursos[i].nombre + 
									' tiene una duracion de ' + cursos[i].duracion + 
									' horas y su valor es de COP ' + cursos[i].valor);

				
				//setTimeout(function(){let texto;callback(texto);},2000);
		}
	
}
//var idCurso = cursos.find(function(cursoId){ return cursoId.id == 1});
//let buscarCurso = cursos.find(cursoId => cursoId.cursos.id == id);
let buscarCurso = (identif) =>{var idCurso = cursos.find(function(cursoId){
	return cursoId.id == identif});
}



let crearArchivo = (cursos, nombreEst, idEst, idCur) =>{
	texto = 'El nombre del estudiante es ' + nombreEst + ' identificado con la C.C. ' + idEst + '\n' +
			'se ha inscrito al curso ' + buscarCurso(idCur);
	fs.writeFile('inscripcion.txt', texto, (err) =>{
		if (err) throw (err);
		console.log('se ha creado el archivo');
	});
}

module.exports = {
	cursos,
	listarCursos,
	buscarCurso,
	crearArchivo
};


