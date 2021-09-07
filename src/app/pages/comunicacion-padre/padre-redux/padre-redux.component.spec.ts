import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreReduxComponent } from './padre-redux.component';

describe('PadreReduxComponent', () => {
  let component: PadreReduxComponent;
  let fixture: ComponentFixture<PadreReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreReduxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
