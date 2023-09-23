/*class Cinema {
    movies: any[] = [];
    snacks: any[] = [];
    tickets: any[] = [];
    employees: any[] = [];

    // Métodos relacionados con películas
    addMovie(movie: any) {
        this.movies.push(movie);
    }

    // Métodos relacionados con snacks
    buySnack(snack: any) {
        this.snacks.push(snack);
    }

    // Métodos relacionados con entradas
    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }

    // Métodos relacionados con empleados
    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}*/

class Cinema {
    movies: Movie[] = [];
    snacks: Snack[] = [];
    tickets: Ticket[] = [];
    employees: Employee[] = [];

    // Métodos relacionados con películas
    addMovie(movie: Movie) {
        this.movies.push(movie);
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    // Métodos relacionados con snacks
    buySnack(snack: Snack) {
        this.snacks.push(snack);
    }

    getSnacks(): Snack[] {
        return this.snacks;
    }

    // Métodos relacionados con entradas
    buyTicket(ticket: Ticket) {
        this.tickets.push(ticket);
    }

    getTickets(): Ticket[] {
        return this.tickets;
    }

    // Métodos relacionados con empleados
    hireEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    getEmployees(): Employee[] {
        return this.employees;
    }
}

class Movie {
    constructor(public title: string, public director: string, public releaseDate: Date) {}
}

class Snack {
    constructor(public name: string, public price: number) {}
}

class Ticket {
    constructor(public movie: Movie, public price: number, public seatNumber: string) {}
}

class Employee {
    constructor(public name: string, public role: string) {}
}
