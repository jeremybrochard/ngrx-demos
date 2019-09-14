import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UsersCreationFormComponent } from './users-creation-form/users-creation-form.component';
import { UsersItemComponent } from './users-item/users-item.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { usersReducer, UsersState } from './reducer/users.reducer';

export interface UserFeatureState {
  users: UsersState;
}

export const reducers: ActionReducerMap<UserFeatureState> = {
  users: usersReducer
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature<UserFeatureState>('usersFeature', reducers),
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    UsersListComponent,
    UsersItemComponent,
    UsersCreationFormComponent
  ]
})
export class UsersModule {}
