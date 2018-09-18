import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RohingaComponent } from './rohinga.component';

describe('RohingaComponent', () => {
  let component: RohingaComponent;
  let fixture: ComponentFixture<RohingaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RohingaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RohingaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
