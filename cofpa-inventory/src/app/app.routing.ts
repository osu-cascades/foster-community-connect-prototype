import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './get';
import { GiveComponent} from './give';
import { HomeComponent} from './home';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'get', component: GetComponent },
    { path: 'give', component: GiveComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);