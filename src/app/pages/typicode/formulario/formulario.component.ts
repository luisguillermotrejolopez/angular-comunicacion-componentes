import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserValidator } from '../../../shared/validators/user-validator';
import { TypicodeService } from '../../../services/typicode.service';
import { checkUserName } from '../../../shared/validators/async-validator';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _typicodeService: TypicodeService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.formLogin = this.formBuilder.group({
      username: [
        '',
        {
          valitors: [Validators.required, UserValidator.verificateSpaces],
          asyncValidators: [checkUserName(this._typicodeService)],
          updateOn: 'blur', //change
        },
      ],
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
      topics: this.formBuilder.array([
        this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(5),
        ]),
      ]),
    });

    // this.loadAPI();
  }

  get topics(): FormArray {
    return this.formLogin.get('topics') as FormArray;
  }

  public addTopic(): void {
    this.topics.push(
      this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),
      ])
    );
  }

  public removeTopic(index: number): void {
    this.topics.removeAt(index);
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
