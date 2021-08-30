import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubUsersComponent } from './git-hub-users.component';

describe('GitHubUsersComponent', () => {
  let component: GitHubUsersComponent;
  let fixture: ComponentFixture<GitHubUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitHubUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
