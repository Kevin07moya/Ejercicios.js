/*Metodos
    -Metodo estatico: Permite ser ejecutada sin necesidad de instanciar la clase
    -Metodo Setter: Permite establecer los valores de atributos de nuestra clase
    -Metodo Getter: Permite obtener los valores de los atributos de nuestra clase
*/

class Animal{
    constructor(nombre, genero){
        this.nombre=nombre;
        this.genero=genero;
    }

    saludar(){
    console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero)
        this.tamanio=tamanio;
        //Atributo raza se crea nulo para luego pedirlo con el método setter
        this.raza= null;
    }

    saludar(){
        console.log(`Hola! Soy un perro y mi nombre es ${this.nombre}`)
    }

    static queEres(){ //Método estatico
        console.log("Los perros somos animales mamiferos que pertenecemos a la familia de los caninos")
    }

    //Getter. Obtiene el valor.
    get getRaza(){
        return this.raza;
    }

    //Setter. Modificador o establecedor del valor.
    set setRaza(raza){
        this.raza=raza;
    }
}

const scooby= new Perro("Scooby Doo", "Macho", "Grande")

//Metodo estatico
Perro.queEres();

//Metodos setter y getter
scooby.setRaza = "Gran Danes"
console.log(scooby.getRaza)

console.log("---------------------------------practica--------------------------")

class Persona {
    constructor(nombre,apellido,edad,nacionalidad) {
    nombre = null;
    apellido = null;
    edad = null;
    nacionalidad = null;
    }
    static msj() {
      return "Hay 8.010.359.063 personas en el mundo";
    }


  
    get getNombre() {
      return this.nombre;
    }
    get getApellido() {
      return this.apellido;
    }
  
    get getEdad() {
      return this, this.edad;
    }
  
    get getNacionalidad() {
      return this.nacionalidad;
    }
  
    set setNombre(nombre) {
      this.nombre = nombre;
    }
    set setApellido(apellido) {
      this.apellido = apellido;
    }
    set setEdad(edad) {
      this.edad = edad;
    }
  
    set setNacionalidad(nacionalidad) {
      this.nacionalidad = nacionalidad;
    }
  }
  
  let Kevin = new Persona();
  Kevin.setApellido = "Daniel Moya";
  
  console.log(Kevin.getApellido);
  console.log(Persona.msj())