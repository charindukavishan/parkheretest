import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkkeepersComponent } from './parkkeepers.component';

describe('ParkkeepersComponent', () => {
  let component: ParkkeepersComponent;
  let fixture: ComponentFixture<ParkkeepersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkkeepersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkkeepersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
