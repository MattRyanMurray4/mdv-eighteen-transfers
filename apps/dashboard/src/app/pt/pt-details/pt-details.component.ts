import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Transfer } from '@therapy/api-interfaces';

@Component({
  selector: 'therapy-pt-details',
  templateUrl: './pt-details.component.html',
  styleUrls: ['./pt-details.component.scss'],
})
export class PtDetailsComponent {
  currentTransfer: Transfer;
  originalName: string;

  @Input() set transfer(value: Transfer | null) {
    if (value) this.originalName = value.name;
    this.currentTransfer = Object.assign({}, value);
  }

  @Input() form: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  save(transfer: Transfer) {
    this.saved.emit(transfer);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    if (formDirective.invalid) return;
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
