
export class Usuario {
    id?: string;
    nombre?: string;
    contactos?: any[];
    img?: string;
    constructor() {
        this.id = null;
        this.nombre = null;
        this.contactos = [];
        this.img = 'https://picsum.photos/300/300';
    }
}
