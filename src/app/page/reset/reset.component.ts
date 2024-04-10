import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent implements OnInit {
  public dataForm: FormGroup = new FormGroup({
    email: new FormControl(''),
  })

  constructor(private FormBuilder: FormBuilder){}

  ngOnInit(): void {
      this.dataForm = this.FormBuilder.group({
        email: ['', [Validators.required, Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)]]
      })
  }

  public onSubmit():void {
    console.log(this.dataForm.valid, this.dataForm.value)
  }
}
