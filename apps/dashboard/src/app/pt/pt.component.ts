import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emptyTransfer, Transfer } from '@therapy/api-interfaces';
import { TransfersFacade } from '@therapy/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'therapy-pt',
  templateUrl: './pt.component.html',
  styleUrls: ['./pt.component.scss'],
})
export class PtComponent implements OnInit {
  form: FormGroup;
  transfers$: Observable<Transfer[]> = this.transfersFacade.allTransfers$;
  selectedTransfer$: Observable<Transfer> =
    this.transfersFacade.selectedTransfers$;
  constructor(
    private transfersFacade: TransfersFacade,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initForm();
    this.transfersFacade.loadTransfers();
    this.reset();

    const transferRouteId = this.route.snapshot.params['id'];
    if (transferRouteId) {
      this.loadTransfer(transferRouteId);
    } else {
      console.error('Failed To Load Transfer');
    }
  }

  selectTransfer(transfer: Transfer) {
    this.transfersFacade.selectTransfer(transfer.id);
    this.form.patchValue(transfer);
  }

  reset() {
    this.selectTransfer(emptyTransfer);
    this.form.reset();
  }

  loadTransfer(transferId: string) {
    this.transfersFacade.selectTransfer(transferId);
    this.transfersFacade.loadTransfer(transferId);
  }

  viewTransfer(transferId: string) {
    this.router.navigate(['/pt', transferId]);
  }

  createTransfer(transfer: Transfer) {
    this.transfersFacade.createTransfer(transfer);
    this.reset();
  }

  updateTransfer(transfer: Transfer) {
    this.transfersFacade.updateTransfer(transfer);
    this.reset();
  }

  saveTransfer(transfer: Transfer) {
    transfer.id
      ? this.transfersFacade.updateTransfer(transfer)
      : this.transfersFacade.createTransfer(transfer);
    this.reset();
  }

  deleteTransfer(transfer: Transfer) {
    this.transfersFacade.deleteTransfer(transfer);
    this.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      type: ['', Validators.required],
      cueing: ['', Validators.required],
      functional: [''],
    });
  }
}
