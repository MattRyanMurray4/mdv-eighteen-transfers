import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransfersFacade } from '@therapy/core-state';

@Component({
  selector: 'therapy-pt-item',
  templateUrl: './pt-item.component.html',
  styleUrls: ['./pt-item.component.scss'],
})
export class PtItemComponent implements OnInit {
  currentTransfer$ = this.transfersFacade.selectedTransfers$;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transfersFacade: TransfersFacade
  ) {}

  ngOnInit() {
    const transferId = this.route.snapshot.params.id;
    this.loadTransfer(transferId);
  }

  loadTransfer(transferId: string) {
    this.transfersFacade.selectTransfer(transferId);
    this.transfersFacade.loadTransfer(transferId);
  }

  goBack() {
    this.router.navigate(['/pt']);
  }
}
