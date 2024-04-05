import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StaticpagesRoutingModule } from './staticpages-routing.module';

@NgModule({
  declarations: [
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    StaticpagesRoutingModule
  ]
})
export class StaticpagesModule { }
