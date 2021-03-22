import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'shop', component: BoutiqueComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [BoutiqueComponent, AboutComponent, ContactComponent]
