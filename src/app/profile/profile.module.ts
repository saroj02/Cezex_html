import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [MyProfileComponent, EditProfileComponent]
})
export class ProfileModule { }
