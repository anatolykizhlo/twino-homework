import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { AppIconComponent } from './app-icon/app-icon.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppBannerComponent } from './app-banner/app-banner.component';
import { AppFormComponent } from './app-form/app-form.component';
import { AppInputComponent } from './app-input/app-input.component';
import { AppInputTextComponent } from './app-input-text/app-input-text.component';
import { AppInputRadioComponent } from './app-input-radio/app-input-radio.component';
import { AppModalComponent } from './app-modal/app-modal.component';
import { AppModalUploadComponent } from './app-modal-upload/app-modal-upload.component';
import { AppModalSuccessComponent } from './app-modal-success/app-modal-success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  entryComponents: [
    AppModalComponent
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppBodyComponent,
    AppButtonComponent,
    AppIconComponent,
    AppFooterComponent,
    AppBannerComponent,
    AppFormComponent,
    AppInputComponent,
    AppInputTextComponent,
    AppInputRadioComponent,
    AppModalComponent,
    AppModalUploadComponent,
    AppModalSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
