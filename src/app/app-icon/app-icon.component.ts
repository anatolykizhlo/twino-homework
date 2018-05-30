import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppIconComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
