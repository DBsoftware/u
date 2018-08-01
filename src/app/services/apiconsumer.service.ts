import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiconsumerService {
  data: Usuario[] = [
    {id: '1', nombre: 'uno', contactos : [{nombre: 'con1', tel: '32323'}], img: 'https://picsum.photos/300/300'},
    {id: '2', nombre: 'dos', contactos : [{nombre: 'con2', tel: '32323'}], img: 'https://picsum.photos/300/300'},
    {id: '3', nombre: 'tres', contactos : [{nombre: 'con3', tel: '32323'}], img: 'https://picsum.photos/300/300'},
  ];
  constructor() { }

  obtenerDatos() {
    return this.data = this.data;
  }
  obtenerUsuario(id: string): Usuario {
    return this.data.filter(e => e.id === id)[0];
  }

  añadirDatos(user: Usuario) {
    this.data.push(user);
  }

  actualizarDatos(user: Usuario) {
    this.data = this.data.filter(e => e.id !== user.id );
    this.data.push(user);
  }

  borrarDatos(id: string) {
    this.data = this.data.filter(e => e.id !== id );
  }
}



