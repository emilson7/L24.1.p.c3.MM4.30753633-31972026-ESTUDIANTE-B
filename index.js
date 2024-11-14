let estudiantes = [
    {nombre: "Juan", semestre: 4, nota: 5},
    {nombre: "Pedro", semestre: 5, nota: 12},
    {nombre: "Pablo", semestre: 3, nota: 9},
    {nombre: "Diana", semestre: 1, nota: 17},
    {nombre: "Marta", semestre: 2, nota: 20},
    {nombre: "Javier", semestre: 6, nota: 8},
]

let salida01 = document.getElementById("salida")

let nombreAprobados = (estudiantes) => {
    return estudiantes.filter((estudiante) => estudiante.nota >= 10)
}

let nombreEstudiantes = (estudiantes, salida) => {
    let aprobados = nombreAprobados(estudiantes)
    salida.innerHTML = `
    Los nombres de los estudiantes que aprobaron son:`
    aprobados.forEach(estudiante => {
        salida.innerHTML += `<br>${estudiante.nombre}</br>`
    })
    }

    nombreEstudiantes(estudiantes, salida01)

