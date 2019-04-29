import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AuthComponent } from './core/auth/auth.component';
import { ArticleDetailComponent } from './core/article-detail/article-detail.component';
import { GuestGuard } from './guards/guest.guard';
import { UserGuard } from './guards/user.guard';
import { UserComponent } from './core/user/user.component';
import { HistoryComponent } from './core/history/history.component';
import { GuidelinesComponent } from './core/guidelines/guidelines.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'guidelines',
    component: GuidelinesComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule',
    canActivate: [UserGuard]
  },
  {
    path: 'users/:uid',
    component: UserComponent
  },
  {
    path: ':id',
    component: ArticleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
