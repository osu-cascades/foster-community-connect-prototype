import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './get';
//import { AppComponent} from './app.component';
import { HomeComponent} from './home';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'get', component: GetComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);