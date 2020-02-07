import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaptiBhojnalayComponent } from './tapti-bhojnalay.component';

describe('TaptiBhojnalayComponent', () => {
  let component: TaptiBhojnalayComponent;
  let fixture: ComponentFixture<TaptiBhojnalayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaptiBhojnalayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaptiBhojnalayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
