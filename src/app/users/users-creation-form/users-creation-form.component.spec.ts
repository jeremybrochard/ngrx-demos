import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCreationFormComponent } from './users-creation-form.component';

describe('UsersCreationFormComponent', () => {
  let component: UsersCreationFormComponent;
  let fixture: ComponentFixture<UsersCreationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCreationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
