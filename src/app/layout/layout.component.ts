import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  spinner: boolean = false;
  usuario: string = '';

  constructor() {}

  ngOnInit(): void {}

  promCrearReferidos(formPromReferidos: NgForm) {
    console.log('usuario: ', this.usuario);

    console.log('formPromReferidos value: ', formPromReferidos.value);
  }
}
