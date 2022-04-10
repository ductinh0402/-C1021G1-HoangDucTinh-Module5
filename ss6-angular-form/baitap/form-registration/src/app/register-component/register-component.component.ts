import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      country: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required,Validators.min(18)]),
      gender: new FormControl('',[Validators.required]),
      phone: ['',[Validators.required,,Validators.pattern( /^\+84\d{9,10}$/)]]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

   MustMatch(password1: string, confirmPassword1: string) {
    return (formGroup: FormGroup) => {
      const pass = formGroup.controls[password1];
      const confirm = formGroup.controls[confirmPassword1];

      if (confirm.errors && !confirm.errors.mustMatch) {
        // trả về nếu trình xác thực khác đã tìm thấy lỗi trên MatchControl
        return;
      }
        // đặt lỗi trên confirm nếu xác thực không thành công
      if (pass.value !== confirm.value) {
        confirm.setErrors({mustMatch: true});
      } else {
        confirm.setErrors(null);
      }
    }
  }



  saveRegister() {
     if (!this.registerForm.invalid)
    console.log(this.registerForm.value);
  }

}
