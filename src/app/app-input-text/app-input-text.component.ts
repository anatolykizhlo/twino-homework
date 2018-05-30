import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './app-input-text.component.html',
  styleUrls: ['./app-input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppInputTextComponent implements OnInit {

  @Input() label: string;
  @Input() name: string;
  @Input() value: string;
  @Input() placeholder: string;
  @Input() formGroup: any;

  constructor() { }

  ngOnInit() {
  }

}
