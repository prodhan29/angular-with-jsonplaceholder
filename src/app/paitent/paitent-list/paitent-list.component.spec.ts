import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaitentListComponent } from './paitent-list.component';

describe('PaitentListComponent', () => {
  let component: PaitentListComponent;
  let fixture: ComponentFixture<PaitentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaitentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaitentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
