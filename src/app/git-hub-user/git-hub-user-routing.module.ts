import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitHubUserComponent } from './git-hub-user.component';

//const routes: Routes = [];

const routes: Routes = [
  {
    path: 'githubuser',
    component: GitHubUserComponent,
    children: [
      { path: '', component: GitHubUserComponent } /*,
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },*/,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GitHubUserRoutingModule {}
