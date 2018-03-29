import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseaddComponent } from './caseadd.component';

describe('CaseaddComponent', () => {
  let component: CaseaddComponent;
  let fixture: ComponentFixture<CaseaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
