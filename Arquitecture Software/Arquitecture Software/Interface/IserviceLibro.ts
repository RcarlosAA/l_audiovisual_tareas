import { Libro } from "../Entities/Libro";
export interface IserviceLibro{
    agregarLibro(titulo: string, autorId: number): Libro;
    obtenerLibro(id: number): Libro | undefined;

}