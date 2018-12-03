import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    TopNavComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    TopNavComponent,
  ],
  entryComponents: [
    TopNavComponent,
  ]
})
export class ComponentsModule {}
