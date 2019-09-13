import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { FormUtilsService } from 'src/app/shared/services/form-utils';

@Component({
  selector: 'app-users-creation-form',
  templateUrl: './users-creation-form.component.html',
  styleUrls: ['./users-creation-form.component.scss']
})
export class UsersCreationFormComponent implements OnInit {
  @Output() userCreated: EventEmitter<User>;

  newUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private formUtils: FormUtilsService) {
    this.userCreated = new EventEmitter<User>();
  }

  ngOnInit() {
    this.newUserForm = this.createUserForm();
  }

  validateForm(form: FormGroup) {
    this.formUtils.markFormGroupAsDirty(form);
    if (form.valid) {
      this.emitNewUser(form);
      this.newUserForm = this.createUserForm(); // Reset form state
    }
  }

  private createUserForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]]
    });
  }

  private emitNewUser(form: FormGroup) {
    this.userCreated.emit(form.value);
  }
}
