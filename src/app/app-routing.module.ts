import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: '../pages/home/home.module#HomePageModule'
  },
  {
    path: 'routesparams',
    loadChildren: '../pages/routes-params/routes-params.module#RoutesParamsModule'
  },
  {
    path: 'routesparams/:theme/:subtheme/:id',
    loadChildren: '../pages/routes-params/routes-params.module#RoutesParamsModule'
  },
  {
    path: 'transitions',
    loadChildren: '../pages/transitions/transitions.module#TransitionsModule'
  },
  {
    path: 'bootstrap',
    loadChildren: '../pages/bootstrap/bootstrap.module#BootstrapCssModule'
  },
  {
    path: 'ionic4',
    loadChildren: '../pages/ionic4/ionic4.module#Ionic4ComponentsModule'
  },
  {
    path: 'pipes',
    loadChildren: '../pages/pipes/pipes.module#PipesPageModule'
  },
  {
    path: 'directives',
    loadChildren: '../pages/directives/directives.module#DirectivesPageModule'
  },
  {
    path: 'unit-test',
    loadChildren: '../pages/unit-test/unit-test.module#UnitTestPageModule'
  },
  {
    path: 'list',
    loadChildren: '../pages/list/list.module#ListPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
