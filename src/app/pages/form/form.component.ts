import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { ApiconsumerService } from '../../services/apiconsumer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: Usuario;
  contacto: {nombre: string; tel: string} = {nombre: null, tel: null};
  update = false;
  constructor(private service: ApiconsumerService,
    private router: Router,
    private _params: ActivatedRoute ) {
      this._params.params.subscribe(e => {
        this.update = (e['kind'] !== 'new');
        this.user = (e['kind'] !== 'new') ?
                    service.obtenerUsuario(e['kind']) :
                    new Usuario();
        console.log(this.update);
        console.log(service.obtenerUsuario(e['kind']));
      });
  }

  ngOnInit() {
  }

  guardar() {
    if (!this.update) {
      this.user.id = `${Math.floor(Math.random() * 100)}${new Date().getMilliseconds()}`;
      this.service.añadirDatos(this.user);
      this.router.navigate(['/form', this.user.id]);
    } else {
      this.service.actualizarDatos(this.user);
      this.router.navigate(['']);
    }

  }


  addContact() {
    this.user.contactos.push(this.contacto);
    this.service.actualizarDatos(this.user);
    this.contacto = {nombre: null, tel: null};
  }
}
