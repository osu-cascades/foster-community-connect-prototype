import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;


  constructor(
    //holds info about the route to this instance of the HeroDetailComponent
    private route: ActivatedRoute,
    //gets hero data from the server used to display hero
    private heroService: HeroService,
    //Angular service for interacting with browser used to navigate back to the view that navigated here **??**
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    //route.snapshot is an image of the route information just after component was created
    //paramMap is a dictionary of route parameter values extracted from the URL. {id:11}
    //+ converts route parameter string to number
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
