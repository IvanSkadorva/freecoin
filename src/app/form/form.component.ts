import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from "../../app.service";

@Component({
  selector: 'send-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;


  constructor(private formBuilder: FormBuilder, private formService: AppService
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      amount: [null, Validators.required]
    });
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }
    this.formService.sendMoney(this.form.value)
  }

}
