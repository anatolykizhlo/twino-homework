import {ChangeDetectionStrategy, Component, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';
import {AppModalComponent, ModalType} from '../app-modal/app-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent implements OnInit {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {}

  openModal() {
    const modalModalFactory = this.componentFactoryResolver.resolveComponentFactory(AppModalComponent);
    const modal = this.viewContainerRef.createComponent(modalModalFactory);
    modal.instance.type = ModalType.Upload;
    modal.instance.destroyFn = () => modal.destroy();
  }

}
