import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Doc2pdfComponent } from './doc2pdf/doc2pdf.component';
import { CoronaComponent } from './corona/corona.component';
import { DomainComponent } from './domain/domain.component';
import { FreedomainComponent } from './freedomain/freedomain.component';
import { LinksComponent } from './links/links.component';
import { MoneyctrlComponent } from './moneyctrl/moneyctrl.component';
import { AllcalcComponent } from './allcalc/allcalc.component';
import { ClasscentralComponent } from './classcentral/classcentral.component';
import { GmeComponent } from './gme/gme.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'doc2pdf', component: Doc2pdfComponent },
  { path: 'corona', component: CoronaComponent },
  { path: 'domain', component: DomainComponent },
  { path: 'freedomain', component: FreedomainComponent },
  { path: 'links', component: LinksComponent },
  { path: 'nse', component: MoneyctrlComponent },
  { path: 'allcalc', component: AllcalcComponent },
  { path: 'classcentral', component: ClasscentralComponent },
  { path: 'gme', component: GmeComponent },
  { path: 'tools', component: ToolsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
