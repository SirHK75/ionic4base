import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Ionic components',
      url: '/ionic4',
      icon: 'logo-angular'
    },
    {
      title: 'Bootstrap CSS',
      url: '/bootstrap',
      icon: 'md-square'
    },
    {
      title: 'Pipes',
      url: '/pipes',
      icon: 'ios-funnel'
    },
    {
      title: 'Directives',
      url: '/directives',
      icon: 'alert'
    },
    {
      title: 'Routes / Params',
      url: '/routesparams/series/entrainement/12345',
      icon: 'git-network'
    },
    {
      title: 'Transitions / Segues',
      url: '/transitions',
      icon: 'md-albums'
    },
    {
      title: 'Unit Test',
      url: '/unit-test',
      icon: 'md-checkbox-outline'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
