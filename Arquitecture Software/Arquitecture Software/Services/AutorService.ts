import { Autor } from "../Entities/Autor";
import { AutorRepository } from "../Repositories/AutorRepository";
import { IserviceAutor } from "../Interface/IserviceAutor";


export class AutorService implements IserviceAutor{
    constructor(private autorRepository: AutorRepository ) {}

    agregarAutor(nombre: string, fechaNacimiento: Date): Autor {
        const autor = new Autor(Date.now(), nombre, fechaNacimiento);
        this.autorRepository.agregar(autor);
        return autor;
    }

    obtenerAutor(id: number): Autor | undefined {
        return this.autorRepository.obtenerPorId(id);
    }
}
