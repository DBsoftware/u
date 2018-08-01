import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { ApiconsumerService } from '../../services/apiconsumer.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  data: Usuario[];
  constructor(private router: Router, public _apiconsumerService: ApiconsumerService) { }

  ngOnInit() {
    this.data = this._apiconsumerService.obtenerDatos();
  }

  borrar(id: any) {
    this._apiconsumerService.borrarDatos(id);
    this.data = this._apiconsumerService.obtenerDatos();
  }

  update(id: any) {
    this.router.navigate(['/form', id]);
  }

}
