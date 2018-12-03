import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'transitions',
  templateUrl: 'transitions.page.html',
  styleUrls: ['transitions.page.scss'],
})
export class TransitionsPage implements OnInit {

  constructor(
    private navController: NavController,
  ) {}

  ngOnInit() {}

  segueToHome() {
    this.navController.navigateForward('/home');
  }

}
