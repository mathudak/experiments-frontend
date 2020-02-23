import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SimpleLayoutComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule],
  exports: [SimpleLayoutComponent],
})
export class LayoutModule {}
