import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDetailComponentComponent } from './case-detail-component.component';

describe('CaseDetailComponentComponent', () => {
  let component: CaseDetailComponentComponent;
  let fixture: ComponentFixture<CaseDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
