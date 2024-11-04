/******************** LABORATORIO III ****************************
 * 
 * Modifica la clase Extended (reescríbela) añadiéndole un método match estático.
 * El métoddo debe recuperar el objeto teacher, objeto student y, opcionalmente,
 * el nombre del curso.  Tu tarea es encontrar la correspondencia entre el
 * estudiante y el profesor.
 * 
 * En caso de que no se proporcione el nombre del curso, el método debe devolver:
 * 
 *    + Una matriz vacía si no hay coincidencias (el profesor no imparte cursos en los
 *      que está interesado el estudiante o imparte cursos de un nivel inferior)
 *    + Una matriz con objetos {course, level}, si el profesor enseña los cursos que le
 *      interesan al estudiante.
 * 
 * Si el nombre del curso se pasa como último argumento, entonces el método debe devolver
 * el objeto {course, level} en caso de una coincidencia correcta o undefined en caso contrario.
 * 
 * Pruebe su solución utilizando el siguiente código:
 * 
 * 
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

    static match(teacher, student, course){
        const output = [];
        for (let i = 0; i < teacher.courses.length; i++) {
                    for (let j = 0; j < student.courses.length; j++) {
                        if (!course){
                            if (teacher.courses[i].name == student.courses[j].name && teacher.courses[i].level >= student.courses[j].level) {
                               output.push(student.courses[j]);
                            }
                        }else{
                            if ((teacher.courses[i].name == student.courses[j].name) && (teacher.courses[i].name == course) ) {
                                output.push(student.courses[j]);
                            }
                        }
                    }
                }

        
        if (output.length > 0 || !course) {
            return output;
        }
    }
    
}

class Teacher extends ExtendedUser{
   
}

class Student extends ExtendedUser{
  
}

let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);
let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]
teacher1.editCourse('maths', 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []
teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match); // -> {course: 'physics', level: 4}

console.log(student1)



