import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() name;
  @Input() control: FormControl;
  @Input() type: 'text' | 'email' = 'text';
  @Input() placeholder?: string;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() showRequiredMarker: boolean;

  constructor() {}

  ngOnInit() {}
}
