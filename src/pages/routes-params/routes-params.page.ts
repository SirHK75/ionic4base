import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'routes-params',
  templateUrl: 'routes-params.page.html',
  styleUrls: ['routes-params.page.scss'],
})
export class RoutesParamsPage implements OnInit {

  theme: string;
  subtheme: string;
  id: string;

  route = '';
  themes = ['series', 'results'];
  subthemes = ['entrainement', 'examen'];
  randomUrl = '';

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.theme = this.activatedRoute.snapshot.paramMap.get('theme');
    this.subtheme = this.activatedRoute.snapshot.paramMap.get('subtheme');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    const randomTheme = this.themes[Math.round(Math.random() * (this.themes.length - 1))];
    const randomSubTheme = this.subthemes[Math.round(Math.random() * (this.subthemes.length - 1))];

    this.route = this.router.url.split('/')[1];
    this.randomUrl = '/routesparams/' + randomTheme + '/' + randomSubTheme + '/' + this.getRandomRange(1, 1000);
  }

  getRandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
