import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdblistComponent } from './getdblist.component';

describe('GetdblistComponent', () => {
  let component: GetdblistComponent;
  let fixture: ComponentFixture<GetdblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
