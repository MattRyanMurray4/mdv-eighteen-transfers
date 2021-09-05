import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transfer } from '@therapy/api-interfaces';
import { TransfersFacade } from '@therapy/core-state';

@Component({
  selector: 'therapy-pt-info',
  templateUrl: './pt-info.component.html',
  styleUrls: ['./pt-info.component.scss'],
})
export class PtInfoComponent {
  @Input() transfer: Transfer | null;
  constructor(
    private transfersFacade: TransfersFacade,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  goBack() {
    this.router.navigate(['/pt']);
  }
}
