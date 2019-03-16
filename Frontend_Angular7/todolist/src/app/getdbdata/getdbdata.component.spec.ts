import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdbdataComponent } from './getdbdata.component';

describe('GetdbdataComponent', () => {
  let component: GetdbdataComponent;
  let fixture: ComponentFixture<GetdbdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdbdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdbdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
