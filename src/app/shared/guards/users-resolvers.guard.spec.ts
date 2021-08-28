import { TestBed } from '@angular/core/testing';

import { UsersResolversGuard } from './users-resolvers.guard';

describe('UsersResolversGuard', () => {
  let guard: UsersResolversGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersResolversGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
