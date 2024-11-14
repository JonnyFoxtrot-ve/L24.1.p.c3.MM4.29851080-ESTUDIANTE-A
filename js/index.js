/*Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que retorne los estudiantes de un semestre dado.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14} Función: estudiantesSemestre.
Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
Retorno: array de objetos estudiante que pertenecen al semestre indicado. */

const arrayEstudiantes = [
  {
    nombre: "Alejandro",
    semestre: 5,
    nota: 14,
  },
  {
    nombre: "Fernando",
    semestre: 6,
    nota: 15,
  },
  {
    nombre: "Maria",
    semestre: 5,
    nota: 12,
  },
  {
    nombre: "Luis",
    semestre: 6,
    nota: 16,
  },
  {
    nombre: "Fernando",
    semestre: 7,
    nota: 17,
  },
];

let estudiantesSemestre = (arrayEstudiantes, semestre) => {
  let array = [];
  arrayEstudiantes.forEach((estudiante) => {
    if (estudiante.semestre === semestre) {
      array.push(estudiante);
    }
  });
  return array;
};

let salida = document.getElementById("salida");
let semestreBuscado = parseInt(prompt("Ingrese el semestre"));
let estudiantesS = estudiantesSemestre(arrayEstudiantes, semestreBuscado);

if (estudiantesS.length === 0) {
  alert(`No existen estudiantes en el semestre ${semestreBuscado}`);
} else {
  salida.innerHTML += `<br>Estudaintes del mismo semestre ${semestreBuscado}<br>`;
  salida.innerHTML += `<br>${JSON.stringify(estudiantesS)}<br>`;
}

console.log(arrayEstudiantes);
console.log(estudiantesS);
