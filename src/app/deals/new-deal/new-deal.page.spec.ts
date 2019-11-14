import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDealPage } from './new-deal.page';

describe('NewDealPage', () => {
  let component: NewDealPage;
  let fixture: ComponentFixture<NewDealPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDealPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
