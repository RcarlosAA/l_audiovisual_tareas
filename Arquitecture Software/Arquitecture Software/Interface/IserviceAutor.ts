import { Autor } from "../Entities/Autor";
export interface IserviceAutor{
    agregarAutor(nombre: string, fechaNacimiento: Date): Autor;
    obtenerAutor(id: number): Autor | undefined ;
}