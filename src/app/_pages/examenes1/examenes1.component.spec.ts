import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Examenes1Component } from './examenes1.component';

describe('Examenes1Component', () => {
  let component: Examenes1Component;
  let fixture: ComponentFixture<Examenes1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Examenes1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Examenes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
