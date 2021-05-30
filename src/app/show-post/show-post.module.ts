import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPostPageRoutingModule } from './show-post-routing.module';

import { ShowPostPage } from './show-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPostPageRoutingModule
  ],
  declarations: [ShowPostPage]
})
export class ShowPostPageModule {}
