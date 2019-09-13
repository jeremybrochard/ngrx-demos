import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.scss']
})
export class UsersItemComponent {
  @Input() user: User;
  @Output() delete: EventEmitter<void>;

  constructor() {
    this.delete = new EventEmitter<void>();
  }

  emitDeleteEvent() {
    this.delete.emit();
  }
}
