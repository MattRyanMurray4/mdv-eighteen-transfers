import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transfer } from '@therapy/api-interfaces';

@Component({
  selector: 'therapy-pt-list',
  templateUrl: './pt-list.component.html',
  styleUrls: ['./pt-list.component.scss'],
})
export class PtListComponent {
  @Input() transfers: Transfer[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() transferViewed = new EventEmitter();
}
