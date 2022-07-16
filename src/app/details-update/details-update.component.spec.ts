import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUpdateComponent } from './details-update.component';

describe('DetailsUpdateComponent', () => {
  let component: DetailsUpdateComponent;
  let fixture: ComponentFixture<DetailsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
