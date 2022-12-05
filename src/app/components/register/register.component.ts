import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(
      '^[a-zA-ZÀ-ÿ\u00E0\u00FC ]+(s*[a-zA-ZÀ-ÿ\u00E0\u00FC]*)*[a-zA-ZÀ-ÿ\u00E0\u00FC]+$'
    ),
  ]);
  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(
      '^[a-zA-ZÀ-ÿ\u00E0\u00FC ]+(s*[a-zA-ZÀ-ÿ\u00E0\u00FC]*)*[a-zA-ZÀ-ÿ\u00E0\u00FC]+$'
    ),
    this.apellidosPermitidosValidator, //Esta es la validación personalizada.
  ]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  password2Control = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  registerForm = new FormGroup(
    {
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      email: this.emailControl,
      password: this.passwordControl,
      password2: this.password2Control,
    },
    {
      validators: [this.passwordsMatchValidator],
      //Este validador no funciona, no encontré el porque aún.
    }
  );

  //Esta funcion no está validando la diferencia entre los campos password. Todavia no encontré el porque.
  passwordsMatchValidator(): () => { passwordsMatch: boolean } {
    return () => {
      if (
        this.passwordControl.value.toLowerCase() !==
        this.password2Control.value.toLowerCase()
      ) {
        return {
          passwordsMatch: true,
        };
      }
      return null;
    };
  }
  //Esta es la validación personalizada.
  apellidosPermitidosValidator(control: FormControl) {
    if (
      control.value.toLowerCase() !== 'lópez' &&
      control.value.toLowerCase() !== 'pérez' &&
      control.value.toLowerCase() !== 'gómez'
    ) {
      return {
        permittedLastname: true,
      };
    }
    return null;
  }

  onSubmit() {
    this.registerForm.valid
      ? console.log('Datos de Registro:', this.registerForm.value)
      : alert('Verifique sus datos');
  }

  constructor() {}

  ngOnInit(): void {}
}
