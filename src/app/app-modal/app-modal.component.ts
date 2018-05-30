import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

export enum ModalType {
  Upload = 'upload',
  Success = 'success',
}

@Component({
  animations: [
    trigger('animation', [
      state('in', style({transform: 'scale(1)', opacity: 1})),
      transition('void => *', [
        style({transform: 'scale(0)', opacity: 0}),
        animate(250)
      ]),
      transition('* => void', [
        animate(250, style({transform: 'scale(0)', opacity: 0}))
      ])
    ])
  ],
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppModalComponent implements OnInit {

  public destroyFn: Function;
  public type: ModalType;
  public data: any;

  @HostBinding('@animation') animation = 'in';

  constructor() {}

  ngOnInit() {}

  close() {
    if (this.destroyFn) {
      this.destroyFn();
    }
  }

}
