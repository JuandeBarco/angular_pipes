import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_pipes';

  public nombre : string = "Juan de Dios";
  public pi : number = Math.PI;
  public porcentaje : number = 0.234;
  public salario : number = 1234.5;
  public fecha : Date = new Date();
  public persona : any = {nombre : "Juan de Dios", apellido : "Barajas"};

  public valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llego la data'), 3500);
  });

  public activar : boolean = true;

  public arrNumeros : number[] = [1,2,3,4,5,6,7,8,9,10];

  public video : string = "dQw4w9WgXcQ";
}
