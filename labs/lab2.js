/**     LABORATORIO II
 * 
 * Crea una nueva clase, ExtendedUser, que heredará de la clase User
 * 
 * Coloque un setter y un getter nombrados fullName en la clase.  El getter debe devolver el 
 * nombre y el apellido concatenados en un cadena. El setter toma el nombre y el apellido concatenados
 * (por ejemplo, 'Rafael Fifer') y los divide en nombre y apellido (el método split),
 * cambiando las propiedades apropiadas del objeto.
 * 
 * Basándose en la clase ExtenderUser, cree dos clases más Teacher y Student (herencia). No
 * deberían tener nuevos métodos ni propiedades, sino solo los roles predeterminados en
 * sus constructores para 'teacher' o 'student' respectivamente (es decir, sus constructores
 * tomarán tres parámetros en lugar de cuatro: name, surname y email);
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
}

class Teacher extends ExtendedUser{
   
}

class Student extends ExtendedUser{
  
}

let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.addCourse('chemistry', 4);
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses
student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses
