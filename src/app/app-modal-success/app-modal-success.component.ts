import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-success',
  templateUrl: './app-modal-success.component.html',
  styleUrls: ['./app-modal-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppModalSuccessComponent implements OnInit {

  @Input() destroyFn;
  @Input() data;

  constructor() {}

  ngOnInit() {}

  close() {
    if (this.destroyFn) {
      this.destroyFn();
    }
  }
}
