import { Component } from '@angular/core';
import { ApiconsumerService } from './services/apiconsumer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _servicio: ApiconsumerService) {
    // this._servicio.obtenerDatos();
  }
}
