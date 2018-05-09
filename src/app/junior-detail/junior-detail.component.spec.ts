import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorDetailComponent } from './junior-detail.component';

describe('JuniorDetailComponent', () => {
  let component: JuniorDetailComponent;
  let fixture: ComponentFixture<JuniorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
