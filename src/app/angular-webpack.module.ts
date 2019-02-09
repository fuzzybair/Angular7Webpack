import { AngularWebpackComponent } from './angular-webpack.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule
  ],
  declarations: [AngularWebpackComponent],
  bootstrap: [AngularWebpackComponent]
})
export class AngularWebpackModule {
}
