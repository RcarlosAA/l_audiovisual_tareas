//mostrar en un log de info, toda la informacion del usuario que se esta prestando un libro
//mostrar en un log de info toda informacion del usuario que esta retornando un libro
//tip debe mostar el objeto completo del usuario

/*Tarea 1 /Problema:
Supongamos que queremos expandir nuestro sistema para gestionar multas para aquellos usuarios que no devuelvan los libros a tiempo. Cada libro que se pase de la fecha de devolución generará una multa diaria.
Requisitos:
1.	Cada libro tiene un tiempo de préstamo estándar de 7 días.
2.	Una vez que un libro se presta, se debe registrar la fecha de préstamo.
3.	Cuando un libro es devuelto, el sistema debe calcular si se ha pasado del tiempo estándar y, si es así, determinar cuántos días se ha pasado.
4.	Por cada día de retraso, se debe generar una multa de $1.*/

/*Tarea 2
Expandamos aún más nuestro sistema para incorporar una funcionalidad de membresía y categorización de libros.
Requisitos:
1.	Membresías de usuario:
•	Tres tipos de membresías: Básico, Premium y Platino.
•	Básico: Puede pedir prestado un máximo de 2 libros a la vez.
•	Premium: Puede pedir prestado un máximo de 5 libros a la vez.
•	Platino: Puede pedir prestado un número ilimitado de libros.
2.	Categorización de libros:
•	Los libros se categorizan en Ficción, No Ficción, y Referencia.
•	Los libros de Referencia no se pueden prestar. Son solo para leer en la biblioteca.
3.	Historial de préstamos:
•	Mantener un registro de todos los préstamos que ha hecho un usuario, independientemente de si el libro ha sido devuelto o no.*/


class Book{
    constructor(public title: string, public author: string
        ,public isLoaded: boolean = false
        ,public isAvailable: string
        ,public loantimedays: number=7
        , public loandate:Date
        ,public category: string) {}
}

class User {
    constructor(
        public userID: string, 
        public name: string,
        public membership: string,
        public loanHistory: Book[] = []
        ) {}
}

interface ILoadManager {
    loadBook(book: Book, user: User): void;
    returnBook(book: Book): void;
}

interface ILogger {
    log(message: string) : void;
}

interface ILogger_ {
    logError(message: string): void;
    logInfo(message: string): void;
    logSuccess(message: string): void;
}


class ConsoleLogger implements ILogger {
    log(message: string): void {
       console.log(message);
    }
}

class Library implements ILoadManager {
    private books: Book[] = [];
    private loadBooks: Map<string, User> = new Map();
    private currentdate: Date;
    private maxBooksByMembership = {
        Basic: 2,
        Premium: 5,
        Platino: Infinity,
    };


    constructor(private logger: ILogger_) {}

    

    loadBook(book: Book, user: User): void {
        if(book.isLoaded) {
            this.logger.logInfo('Book is loaded');
            return
        }

        const maxBooksAllowed = this.maxBooksByMembership[user.membership];
        const borrowedBooks = Array.from(this.loadBooks.values()).filter((u) => u === user);

        if (borrowedBooks.length >= maxBooksAllowed) {
            this.logger.logError(`User ${user.name} has reached the maximum books limit.`);
            return;
        }

        if (book.category === 'Referencia') {
            this.logger.logError('Reference books cannot be borrowed.');
            return;
        }

        this.loadBooks.set(book.isAvailable, user);
        book.isLoaded = true;
        this.logger.logInfo(`${user.name} has borrowed ${book.title}.`);
        user.loanHistory.push(book);
    }

    returnBook(book: Book): void {
       if(!book.isLoaded) {
            this.logger.logInfo('Book is not loaded');
            return
        }

        const currentDate = new Date();
        const daysLate = Math.max(0, currentDate.getDate() - book.loandate.getDate());
        if( daysLate>book.loantimedays){
            const multa = daysLate-book.loantimedays * 1; 
            this.logger.logInfo(`${book.title} returned ${daysLate} days late.`);
            this.logger.logInfo(`Multa: $${multa}`);
        }
        this.loadBooks.delete(book.isAvailable);
        book.isLoaded = false;
        this.logger.logInfo(`${book.title} has been returned.`);
    }

    addBook(book: Book) {
        debugger
        this.logger.logInfo('inicio de operacion');
        this.books.push(book);
        this.logger.logInfo('fin de operacion');
    }

    findBookByTitle(title: string) : Book | undefined {
        this.logger.logInfo('inicio de operacion');
        return this.books.find(book => book.title === title);
    }

    

}

//Uso del codigo
/*const logger = new ConsoleLogger();
const library = new Library(logger);
const book1 = new Book('libro1', 'autor1');

library.addBook(book1);
library.findBookByTitle('libro1');*/
