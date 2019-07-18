import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDesignComponent } from './select-design.component';

describe('SelectDesignComponent', () => {
  let component: SelectDesignComponent;
  let fixture: ComponentFixture<SelectDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
