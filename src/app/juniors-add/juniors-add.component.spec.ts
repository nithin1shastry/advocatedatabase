import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorsAddComponent } from './juniors-add.component';

describe('JuniorsAddComponent', () => {
  let component: JuniorsAddComponent;
  let fixture: ComponentFixture<JuniorsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniorsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
