/*************  LABORATORIO IV   
 * 
 * Vamos a intentar juntar todos los elementos que hemos preparado anteriormente.
 * Creamos una clase Tutoring que tendrá dos listas de usuarios: alumnos y profesores
 * por separado
 * 
 * Define los métpdps en la clase:
 * 
 * + getStudentByName(name, surname)- que devolverá un studentobjeto con el nombre y 
 *                                    apellido indicados (o undefinedsi el estudiante no ha 
 *                                    sido agregado antes)
 * + getTeacherByName(name, surname)- que devolverá el teacherobjeto con el nombre y apellido 
 *                                    indicados (o undefinedsi el profesor no ha sido agregado
 *                                    antes)
 * + getStudentsForTeacher(teacher)- que devolverá una matriz de estudiantes a los que el 
 *                                   profesor puede dar tutoría;
 * + getTeacherForStudent(student)- que devolverá un conjunto de profesores capaces de dar 
 *                                  tutoría al estudiante;
 * + addStudent(name, surname, email)- que agregará un nuevo studentobjeto a la lista;
 * + addTeacher(name, surname, email)- que agregará un nuevo teacherobjeto a la lista.
 * 
 * Utilice clases previamente preparadas y sus métodos (por ejemplo match).
 * 
 * Pruebe su solución utilizando el siguiente código:
 */

class User {
    constructor(user) {
      this.name = user.name;
      this.surname = user.surname;
      this.email = user.email;
    }

    addCourse(course, level){
        if (this.courses == null){
            this.courses = [{name: course, level: level}];
        }else{
            this.courses.push({name: course, level: level})
        }
    }

    removeCourse(course){
        if (this.courses == null){console.log("Not found")}
        else{
            let array = this.courses;
            this.courses = null;
            this.courses = [];
            for (let i = 0; i < array.length; i++){
                if(array[i].name != course){
                    this.courses.push(array[i]);

                }
            }
        }
    }

    editCourse(course, level){
        for (let i = 0; i < this.courses.length; i++){
            if(this.courses[i].name == course){
                this.courses[i].level = level;
            }
        }
    }


    sendMessage(from, message){
        function sendEmail(from, to, message){
            matrix.push([from.email, to, message]);
        }
        sendEmail(from, this.email, message);
    }

    showMessagesHistory(){
        for (let i = 0; i < matrix.length; i++){
            console.log(`${matrix[i][0]} -> ${matrix[i][1]}: ${matrix[i][2]} `);
        }
    }

  }


class ExtendedUser extends User{
    get fullName() {
        return `${this.name} ${this.surname}`;
      }
    
      set fullName(value) {
        [this.name, this.surname] = value.split(" ");
      }

    static match(user){
        const output = [];
        if (user instanceof Teacher) {
            for (let i = 0; i < user.courses.length; i++) {
                for (let j = 0; j < studentsList.length; j++) {
                    if (studentsList[j].courses != undefined) {
                        for (let k = 0; k < studentsList[j].courses.length; k++) {
                            if ((user.courses[i].name == studentsList[j].courses[k].name) && (user.courses[i].level >= studentsList[j].courses[k].level) ) {
                                output.push(studentsList[j]);
                                break;
                            }
                        }   
                    }
                     
                }
            }
        }if (user instanceof Student && user.courses != undefined){
            for (let i = 0; i < user.courses.length; i++) {
                for (let j = 0; j < teachersList.length; j++) {
                    if (teachersList[j] != undefined) {
                        for (let k = 0; k < teachersList[j].courses.length; k++) {
                            if ((user.courses[i].name == teachersList[j].courses[k].name) && (user.courses[i].level <= teachersList[j].courses[k].level)) {
                                output.push(teachersList[j]);
                            }
                        }
                    }
                } 
            }
        }

    return output;
                
    }
    
}

class Teacher extends ExtendedUser{
   
}

class Student extends ExtendedUser{
  
}

class Tutoring{
    getStudentByName(name, surname){
        let noResults = true;
        for (let i = 0; i < studentsList.length; i++) {
            if((studentsList[i].name == name) && (studentsList[i].surname == surname)){
                noResults = false;
                return studentsList[i];
            }
       } 
       if (noResults) {
            return undefined;
       }
    }

    getTeacherByName(name, surname){
        let noResults = true;
        for (let i = 0; i < teachersList.length; i++) {
            if((teachersList[i].name == name) && (teachersList[i].surname == surname)){
                noResults = false;
                return teachersList[i];
            }
       } 
       if (noResults) {
            return undefined;
       }
    }

    addStudent(name, surname, email){
        let student = new Student({name: name, surname: surname, email: email});
        studentsList.push(student);
    }

    addTeacher(name, surname, email){
        let teacher = new Teacher({name: name, surname: surname, email: email});
        teachersList.push(teacher);
    }

    getStudentsForTeacher(teacher){
        let match = ExtendedUser.match(teacher);
        return match;
    }
    getTeacherForStudent(student){
        let match = ExtendedUser.match(student);
        return match;
    }
}

const studentsList = [];
const teachersList = [];
let tutoring = new Tutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);
let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);
let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...
student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...