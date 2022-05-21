//Clase Curso 
class Course {
    constructor({
        name,
        classes = [],
    }) 
    
    {
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombrecito) {
        if (nuevoNombrecito.length <= 15){
            this._name = nuevoNombrecito;
            console.log("El nombre del curso es muy largo");
        }
    }
    crear_curso(){

    }
}

// Clase curva de aprendizaje
class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}


// Creacion clase Estudiante
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

// Creacion de Objetos

// creacion de objetos de un curso 
// const cursito = new Course({name: "Curso Gratis",});
const cursoProgBasica = new Course({name: "Curso Gratis de Programación Básica",});
const cursoDefinitivoHTML = new Course({name: "Curso Definitivo de HTML y CSS",});
const cursoPracticoHTML = new Course({name: "Curso Practico de HTML y CSS",});

// creacion de clase para curvas de aprendizaje
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});



// creacion de objetos curva de aprendizaje
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso Dataviz",
    ],
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
})

//  creacion de  objetos estudiantes
const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});


//console.log(document.getElementById('name').value)
