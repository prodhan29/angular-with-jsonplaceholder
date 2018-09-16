import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaitentDetailComponent } from './paitent-detail.component';

describe('PaitentDetailComponent', () => {
  let component: PaitentDetailComponent;
  let fixture: ComponentFixture<PaitentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaitentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaitentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
