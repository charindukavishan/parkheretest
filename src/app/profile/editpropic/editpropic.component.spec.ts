import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpropicComponent } from './editpropic.component';

describe('EditpropicComponent', () => {
  let component: EditpropicComponent;
  let fixture: ComponentFixture<EditpropicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpropicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpropicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
