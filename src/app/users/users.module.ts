import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule, Action } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { UsersEffects } from './reducer/users.effects';
import { usersReducer, UsersState } from './reducer/users.reducer';
import { UsersCreationFormComponent } from './users-creation-form/users-creation-form.component';
import { UsersItemComponent } from './users-item/users-item.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

export interface UserFeatureState {
  users: UsersState;
}

export const reducers: ActionReducerMap<any> = {
  users: usersReducer
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature<UserFeatureState>('usersFeature', reducers),
    EffectsModule.forFeature([UsersEffects]),
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent, UsersListComponent, UsersItemComponent, UsersCreationFormComponent],
  providers: [UsersService]
})
export class UsersModule {}
