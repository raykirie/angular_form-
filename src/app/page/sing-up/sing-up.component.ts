import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent implements OnInit {
  public dataForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    secondPasssword: new FormControl(''),
  })

  constructor(private FormBuilder: FormBuilder){}


  ngOnInit(): void {
    this.dataForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      secondPasssword: ['', Validators.required]
    },{
      validator: this.checkPassword
    }
  )
}

public checkPassword(group: FormGroup){
  const password = group.get('password')?.value
  const secondPasssword = group.get('secondPasssword')?.value
    return password === secondPasssword ? null : {passValidate: true}
}

public onSubmit():void {
  console.log(this.dataForm.valid, this.dataForm.value)
}
}
