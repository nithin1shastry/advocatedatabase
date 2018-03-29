import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorcaseaddComponent } from './juniorcaseadd.component';

describe('JuniorcaseaddComponent', () => {
  let component: JuniorcaseaddComponent;
  let fixture: ComponentFixture<JuniorcaseaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniorcaseaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorcaseaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
