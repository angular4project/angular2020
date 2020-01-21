import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtopsComponent } from './labtops.component';

describe('LabtopsComponent', () => {
  let component: LabtopsComponent;
  let fixture: ComponentFixture<LabtopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
