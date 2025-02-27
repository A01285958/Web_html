console.log("Hola Mundo");
const colores = ["red", "blue"];
console.log(colores[0]);
colores[0] = 523;
console.log(colores[0]);
colores[2] = 8;
console.log(colores[2]);

let alumno = {
    nombre: "Rosy",
    edad: 20,
    imprime(){
        console.log(this.nombre + " " + this.edad);
    },
};
alumno.imprime();
alumno["edad"]++;
alumno.imprime();

function fun2(){
    console.log("Holaa 2");
}

const funcion = (name) => {
    console.log("Hola " + name);
};

funcion("Rosy");
