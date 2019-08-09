import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';


const routes: Routes = [
  //Make app go to dashboard automatically
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //Sets up connection to Dashboard Component
  { path: 'dashboard', component: DashboardComponent },
  //route to AppRoutingModule.routes (array) that matches path pattern to the hero detail view **??**
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
 ];
 
@NgModule({
  //Add RouterModule and configure it with routes
  //called forRoot because it's configured at the root level
  //forRoot() provides the service providers and directives needed for routing. Also does initial navigation based on current browser URL
  imports: [ RouterModule.forRoot(routes) ],
  //make router directives available for use in AppModule components that require them
  exports: [RouterModule]
})
export class AppRoutingModule { }
