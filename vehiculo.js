class Vehiculo {
    constructor(marca, modelo, color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.encendido = false;
    }
    // metodos
    encender(){
        //console.log('encendio el motor');
        var x = this.encendido = true;
        return x;//true
    }
    apagar(){
        console.log('apago el motor');
        this.encendido = false;
    }

    // metodo para mostrar datos    
    mostrar_datos(z){
        console.log(z)
    }
}

// creamos un objeto vehiculo
const carro = new Vehiculo(
    'Toyota',
    'Corolla',
    'Azul',
);

// hereda de vehiculo
class Moto extends Vehiculo {
    constructor(marca, modelo, color){
        super(marca, modelo, color);
        this.cambio = 'manual';
        this.manubrio = true;
        this.llantas = 2;
    }
    // metodos
    acelerar(){
        console.log('Acelerando en moto');
    }
    frenar(){
        console.log('Frenando en moto');
    }
}

// creamos un objeto moto
const moto1 = new Moto(
    'Honda',
    'CBR',
    'rojo',
    );


//concepto de herencia y polimorfismo