import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { metaReducers, reducers } from './reducers';
import { SharedModule } from './shared/shared.module';
import { UsersItemComponent } from './users/users-item/users-item.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersComponent } from './users/users.component';
import { UsersCreationFormComponent } from './users/users-creation-form/users-creation-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    UsersItemComponent,
    UsersCreationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
