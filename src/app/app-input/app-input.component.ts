import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

enum InputType {
  Text = 'text',
  Radio = 'radio'
}

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppInputComponent implements OnInit {

  @Input() label: string;
  @Input() name: string;
  @Input() value: any;
  @Input() formGroup: any;
  @Input() placeholder: string;
  @Input() type: InputType = InputType.Text;

  constructor() {}

  ngOnInit() {}

}
