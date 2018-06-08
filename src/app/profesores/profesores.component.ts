import { Component, OnInit} from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
  providers:[LogService]
})
export class ProfesoresComponent implements OnInit {

  constructor(private logService:LogService) { }

  ngOnInit() {}

  mostrarLog(valor){
    this.logService.escribirLog(valor);
  }
}
