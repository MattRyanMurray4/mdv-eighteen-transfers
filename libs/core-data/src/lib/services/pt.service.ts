import { mapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transfer } from '@therapy/api-interfaces';

export const BASE_URL = 'https://db-30x30.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class PtService {
  private model = 'transfers';
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Transfer[]>(this.getUrl());
  }

  find(id: string) {
    return this.httpClient.get<Transfer>(this.getUrlById(id));
  }

  create(transfer: Transfer) {
    return this.httpClient.post<Transfer>(this.getUrl(), transfer);
  }

  update(transfer: Transfer) {
    return this.httpClient.patch<Transfer>(
      this.getUrlById(transfer.id),
      transfer
    );
  }

  delete(transferId: string) {
    return this.httpClient
      .delete<string>(this.getUrlById(transferId))
      .pipe(mapTo(transferId));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
