import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCupComponent } from './select-cup.component';

describe('SelectCupComponent', () => {
  let component: SelectCupComponent;
  let fixture: ComponentFixture<SelectCupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
