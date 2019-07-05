import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleblogComponent } from './singleblog.component';

describe('SingleblogComponent', () => {
  let component: SingleblogComponent;
  let fixture: ComponentFixture<SingleblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
