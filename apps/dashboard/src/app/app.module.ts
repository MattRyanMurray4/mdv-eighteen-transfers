import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreStateModule } from '@therapy/core-state';
import { CoreDataModule } from '@therapy/core-data';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PtComponent } from './pt/pt.component';
import { PtListComponent } from './pt/pt-list/pt-list.component';
import { PtDetailsComponent } from './pt/pt-details/pt-details.component';
import { PtItemComponent } from './pt-item/pt-item.component';
import { PtInfoComponent } from './pt-item/pt-info/pt-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing.module';
import { MaterialModule } from '@therapy/material';
import { UiLibraryModule } from '@therapy/ui-library';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PtComponent,
    PtListComponent,
    PtDetailsComponent,
    PtItemComponent,
    PtInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    UiLibraryModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
