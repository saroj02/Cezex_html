import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,    
    BsDropdownModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
