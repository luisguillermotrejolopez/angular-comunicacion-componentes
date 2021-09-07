import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoReduxComponent } from './hijo-redux.component';

describe('HijoReduxComponent', () => {
  let component: HijoReduxComponent;
  let fixture: ComponentFixture<HijoReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoReduxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
