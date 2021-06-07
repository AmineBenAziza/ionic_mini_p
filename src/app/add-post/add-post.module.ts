import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostPageRoutingModule } from './add-post-routing.module';

import { AddPostPage } from './add-post.page';
import { NavbarPage } from '../navbar/navbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPostPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddPostPage , NavbarPage]
})
export class AddPostPageModule {}
