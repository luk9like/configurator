import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishConfigComponent } from './finish-config.component';

describe('FinishConfigComponent', () => {
  let component: FinishConfigComponent;
  let fixture: ComponentFixture<FinishConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
