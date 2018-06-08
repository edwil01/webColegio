import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
  
  constructor(private http : Http) { }

  getDatos(){
    return this.http.get('https://colegio-58b86.firebaseio.com/profesores/.json')
    .map((response:Response)=>response.json())
  }
  sendDatos(usuario: any){
    const datos =JSON.stringify(usuario);
    return this.http.post('https://colegio-58b86.firebaseio.com/profesores/.json',datos)
    .map((response: Response) => response.json())
  }
}
