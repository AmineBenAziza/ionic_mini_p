import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPostPageRoutingModule } from './show-post-routing.module';

import { ShowPostPage } from './show-post.page';
import { NavbarPage } from '../navbar/navbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPostPageRoutingModule
  ],
  declarations: [ShowPostPage , NavbarPage]
})
export class ShowPostPageModule {}
