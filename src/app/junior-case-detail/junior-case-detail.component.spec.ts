import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorCaseDetailComponent } from './junior-case-detail.component';

describe('JuniorCaseDetailComponent', () => {
  let component: JuniorCaseDetailComponent;
  let fixture: ComponentFixture<JuniorCaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniorCaseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorCaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
