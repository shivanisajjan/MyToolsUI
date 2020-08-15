import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { Doc2pdfComponent } from './doc2pdf/doc2pdf.component';

import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { UploadModule } from '@progress/kendo-angular-upload';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import { CoronaComponent } from './corona/corona.component';
import { DomainComponent } from './domain/domain.component';
import { FreedomainComponent } from './freedomain/freedomain.component';
import { LinksComponent } from './links/links.component';
import { MoneyctrlComponent } from './moneyctrl/moneyctrl.component';
import { AllcalcComponent } from './allcalc/allcalc.component';
import { ClasscentralComponent } from './classcentral/classcentral.component';
import { GmeComponent } from './gme/gme.component';
import { ToolsComponent } from './tools/tools.component';


// import { NgZorroAntdModule } from 'ng-zorro-antd';

registerLocaleData(en);
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    Doc2pdfComponent,
    CoronaComponent,
    DomainComponent,
    FreedomainComponent,
    LinksComponent,
    MoneyctrlComponent,
    AllcalcComponent,
    ClasscentralComponent,
    GmeComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzUploadModule,
    NzButtonModule,
    ButtonsModule,
    UploadModule,
    CardModule,
    ButtonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
