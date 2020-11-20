import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { AuthGuardService } from './core/services/auth-guard.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { SubcatagoryComponent } from './components/sub-catagory/sub-catagory.component';
import { LoginComponent } from './components/login/login.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { settingsComponent } from './components/settings/settings.component'
import { UserSearchComponent } from './components/user-search/user-search.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoaderService } from './components/providers/loaderService';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http';
import { Configuration } from 'msal';
import {
  MsalModule,
  MsalInterceptor,
  MSAL_CONFIG,
  MSAL_CONFIG_ANGULAR,
  MsalService,
  MsalAngularConfiguration
} from '@azure/msal-angular';
import { MsalGuard } from '@azure/msal-angular';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

function MSALConfigFactory(): Configuration {
  return {
    auth: {
      clientId: environment.clientId,
      authority: environment.authority,
      validateAuthority: true,
      redirectUri: environment.redirectUrl,
      postLogoutRedirectUri: environment.redirectUrl,
      navigateToLoginRequestUrl: true
    },
    cache: {
      storeAuthStateInCookie: false,
    }
  };
}

function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return {
    popUp: false
  };
}


const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix',
    canActivate: [MsalGuard]
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [MsalGuard],

  },
  {
    path: 'redirect',
    component: AppComponent,
    canActivate: [MsalGuard],
    pathMatch: 'prefix',
  },
  {
    // Needed for hash routing
    path: 'code',
    component: HomePageComponent
  },
  {
    path: 'category',
    pathMatch: 'full',
    component: SubcatagoryComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'reports-search',
    component: UserSearchComponent
  },
  {
    path: 'settings',
    component: settingsComponent
  }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    SubcatagoryComponent,
    LoginComponent,
    ReportsComponent,
    SidebarComponent,
    HomePageComponent,
    SpinnerComponent,
    settingsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    CommonModule,
    NgtUniversalModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes, { useHash: true, initialNavigation: !isIframe ? 'enabled' : 'disabled' }),
    FormsModule,
    HttpClientModule,
    MsalModule.forRoot({
      auth: {
        clientId: environment.clientId,
        authority: environment.authority,
        redirectUri: environment.redirectUrl,
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // set to true for IE 11
      },
    },
    {
      popUp: !isIE,
      consentScopes: [
        'user.read',
        'openid',
        'profile',
      ],
      unprotectedResources: [],
      protectedResourceMap: [
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
      ],
      extraQueryParameters: {}
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    LoaderService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }

