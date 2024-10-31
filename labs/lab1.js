/**          LABORATORIO I
 * 
 * Prepare un sistema simple para almacenar información sobre
 * estudiantes y profesores y combinarlos para la tutoría
 * 
 * Para iniciar este laboratorio crea una clase User, la cuál creará objetos tanto para
 * profesores como para estudiantes.
 * El constructor debe tomar los datos del usuario (name, surname, email, role), pero
 * asegúrate de crear las propiedades adecuadas.
 * 
 * También deberás crear los siguientes métodos:
 * 
 *   + addCourse(course, level) - que el permitirá agregar un curso (poe ejemplo, matemáticas)
 *     y un nivel (por ejemplo, 2: cuanto mayor sea el número, mayor será el nivel); en el
 *     caso de un estudiante, significará que está buscando ayuda en este nivel, y en el
 *     caso de un profesor, significará que puede ayudar hasta este nivel.
 * 
 *   + removeCourse(course) - que le permitirá eliminar el curso (por ejemplo, si el estudiante
 *     ya no está interesado en aprender matemáticas)
 * 
 *  + editCourse(course, level) - que le permitirá cambiar el nivel asociado al curso;
 * 
 *  + sendMessage(from, message) - que le permitirá enviar un 'message' mensaje del usuario
 *    'from' al usuario descrito en el objeto; la información completa sobre el mensaje
 *    enviado debe almacenarse en el caché local (sugerencia: use una matriz para esto);
 *    el envío del mensaje en sí solo se simulará, declare la función sendEmail(from, to, message) {}
 *    de antemano y úsela en el lugar apropiado.
 * 
 *  + showMessagesHistory() - qué mostrará el historial de todos los mensajes enviados al
 *                            usiario en la consola.
 * 
 * 
 * Prueba la solución utilizando el siguiente código   
 */

class User {
    constructor(user) {
      this.name = user.name;
      this.surname = user.surname;
      this.email = user.email;
      this.role = user.role;
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


let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});
const matrix = [];

student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);
console.log(`${student1.name}: ${student1.courses.length} courses`); // -> Rafael: 1 courses
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // -> Paula: 1 courses
teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
teacher1.showMessagesHistory();
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: test message
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: another message




