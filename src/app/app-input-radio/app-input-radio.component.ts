import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

export interface RadioOption {
  value: string;
  text: string;
}

@Component({
  selector: 'app-input-radio',
  templateUrl: './app-input-radio.component.html',
  styleUrls: ['./app-input-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppInputRadioComponent implements OnInit {

  @Input() label: string;
  @Input() name: string;
  @Input() value: any[];
  @Input() formGroup: any;

  constructor() { }

  ngOnInit() {
  }

}
