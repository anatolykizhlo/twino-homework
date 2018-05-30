import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './app-modal-upload.component.html',
  styleUrls: ['./app-modal-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppModalUploadComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  @Input() destroyFn;
  fileName: string;
  fileSize: string;
  zoneIsActive = false;

  constructor() {}

  ngOnInit() {}

  close() {
    if (this.destroyFn) {
      this.destroyFn();
    }
  }

  fileChange() {
    const input = this.fileInput.nativeElement;
    if (input.files.length) {
      this.fileName = input.files[0].name;
      this.fileSize = Number(input.files[0].size / 1024 / 1024).toFixed(2);
    }
  }

  onDragEnter() {
    this.zoneIsActive = true;
  }

  onDragLeave() {
    this.zoneIsActive = false;
  }

  onDrop() {
    this.zoneIsActive = false;
  }
}
