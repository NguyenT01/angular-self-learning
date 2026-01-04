import { Component, OnInit, signal } from '@angular/core';
import { Field, form, REQUIRED, validateStandardSchema } from '@angular/forms/signals';
import { Account } from '../register-component/register-component';
import { z } from 'zod/mini';

@Component({
  selector: 'app-register-zod-component',
  imports: [Field],
  templateUrl: './register-zod-component.html',
  styleUrl: './register-zod-component.css',
})
export class RegisterZodComponent implements OnInit {
  protected readonly REQUIRED = REQUIRED;

  private readonly account = signal<Account>({
    email: '',
    password: '',
    nickname: '' ,
    age: 10,
    year: 2000
  });

  protected readonly accountForm = form(this.account, (form) => {
    validateStandardSchema(form, 
      z.object({
        email: z.string().check(z.email({error: 'Email không hợp lệ'})),
        password: z.string().check(z.minLength(6, {
          error: (issue) => `Mật khẩu phải có ít nhất ${issue.minimum} ký tự. Bạn nhập ${issue.input?.length} ký tự`
        }))
      })
    )
  })

  submit(event: Event){
    event.preventDefault();
    
  }

  // Phải set locales trước, do Zod mini không set default locales.
  ngOnInit(): void {
    z.config(z.locales.vi())
  }
}
