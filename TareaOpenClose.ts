//Ejemplo de Clase

// class Libro3 {
//     titulo: string;
//     autor: string;
//     contenido: string;
//     tipo: string;

//     constructor(titulo: string, autor: string, contenido: string, tipo: string) {
//         this.titulo = titulo;
//         this.autor = autor;
//         this.contenido = contenido;
//         this.tipo = tipo;
//     }

//     mostrarDescripcion(){
//         if(this.tipo === 'texto'){
//             return 'Libro de texto titulado "${this.titulo}" escrtito por ${this.autor}';
//         }
//     }
// }


// Definición de la clase base Libro3
abstract class Libro {
    titulo: string;
    autor: string;

    // Constructor de la clase
    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }

    abstract mostrarDescripcion(); string;
    }
class LibroDeTexto extends Libro{
    contenido:string;
    constructor(titulo:string,autor:string,contenido:string){
        super(titulo,autor);
        this.contenido= contenido;
    }
    mostrarDescripcion() {
        return 'libro de texto titulado "${this.titulo}" escrito por ${this.autor}';  
    }
}

class LibroDeAudio extends Libro{
    url:string;
    constructor(titulo:string,autor:string,url:string){
        super(titulo,autor);
        this.url= url;
    }
    mostrarDescripcion() {
        return 'libro de audio titulado "${this.titulo}" narrado por ${this.autor} url ${this.url} ';  
    }
}


