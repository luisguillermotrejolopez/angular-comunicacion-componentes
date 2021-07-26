import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitHubUserRoutingModule } from './git-hub-user-routing.module';
import { GitHubUserComponent } from './git-hub-user.component';

import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GitHubUserComponent],
  imports: [CommonModule, GitHubUserRoutingModule, HttpClientModule],
  providers: [UserService],
})
export class GitHubUserModule {}
