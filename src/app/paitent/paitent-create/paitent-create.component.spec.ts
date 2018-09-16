import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaitentCreateComponent } from './paitent-create.component';

describe('PaitentCreateComponent', () => {
  let component: PaitentCreateComponent;
  let fixture: ComponentFixture<PaitentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaitentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaitentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
