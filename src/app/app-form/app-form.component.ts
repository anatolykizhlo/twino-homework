import {ChangeDetectionStrategy, Component, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';
import {RadioOption} from "../app-input-radio/app-input-radio.component";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppModalComponent, ModalType} from '../app-modal/app-modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFormComponent implements OnInit {
  email = '';
  priceOptions: RadioOption[] = [
    {
      value: '120',
      text: 'Mounthly'
    },
    {
      value: '40',
      text: 'Weekly'
    }
  ];
  priceForm = new FormGroup ({
    email: new FormControl('', [Validators.email, Validators.required]),
    price: new FormControl(this.priceOptions[0].value),
  });

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.priceForm.updateValueAndValidity();
  }

  onSend() {
   if (this.priceForm.valid) {
       const modalModalFactory = this.componentFactoryResolver.resolveComponentFactory(AppModalComponent);
       const modal = this.viewContainerRef.createComponent(modalModalFactory);
       modal.instance.data = this.priceForm.getRawValue();
       modal.instance.type = ModalType.Success;
       modal.instance.destroyFn = () => modal.destroy();
   }
  }

}
