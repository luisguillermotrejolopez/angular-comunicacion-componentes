import { TestBed } from '@angular/core/testing';

import { TypicodeInterceptor } from './typicode.interceptor';

describe('TypicodeInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [TypicodeInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: TypicodeInterceptor =
      TestBed.inject(TypicodeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
