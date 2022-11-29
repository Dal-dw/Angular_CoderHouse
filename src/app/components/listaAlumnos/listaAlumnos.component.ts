import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaAlumnos',
  templateUrl: './listaAlumnos.component.html',
  styleUrls: ['./listaAlumnos.component.css'],
})
export class ListaAlumnosComponent implements OnInit {
  public alumnos = [
    { Nombre: 'José', Apellido: 'Perez', Edad: 20, Deuda: 900 },
    { Nombre: 'Carlos', Apellido: 'Gomez', Edad: 29, Deuda: 1000 },
    { Nombre: 'María', Apellido: 'Gimenez', Edad: 18, Deuda: 0 },
    { Nombre: 'Julian', Apellido: 'Robledo', Edad: 22, Deuda: 1800 },
    { Nombre: 'Gabriela', Apellido: 'Brito', Edad: 33, Deuda: 0 },
    { Nombre: 'Ramón', Apellido: 'Lopez', Edad: 27, Deuda: 0 },
    { Nombre: 'Roberto', Apellido: 'García', Edad: 32, Deuda: 1200 },
  ];

  constructor() {}

  ngOnInit() {}
}
