import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}