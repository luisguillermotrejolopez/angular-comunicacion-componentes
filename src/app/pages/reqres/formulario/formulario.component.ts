import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      youtube: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(https?\\:\\/\\/)?(www\\.youtube\\.com|youtu\\.?be)\\/.+$'
          ),
        ],
      ],
      type: [''],
      color: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: ['', [Validators.required, Validators.requiredTrue]],
    });

    // this.loadAPI();
  }

  public changeType(): void {
    console.log(this.formLogin.value.type);
    if (this.formLogin.value.type === 'carro') {
      this.formLogin.get('color').setValidators([Validators.required]);
      this.formLogin.get('color').updateValueAndValidity();
    } else {
      this.formLogin.get('color').clearValidators();
      this.formLogin.get('color').updateValueAndValidity();
    }
  }

  public getErrorMessage(): any {
    return this.formLogin.hasError('required')
      ? 'Required field'
      : this.formLogin.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  public send(): void {
    console.log(this.formLogin.value);
  }
}
