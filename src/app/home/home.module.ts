import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),    
  ],
  declarations: [HomeComponent],
  providers:[BsModalService]
})
export class HomeModule { }
