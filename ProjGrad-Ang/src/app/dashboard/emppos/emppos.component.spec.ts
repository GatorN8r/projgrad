/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmpposComponent } from './emppos.component';

describe('EmpposComponent', () => {
  let component: EmpposComponent;
  let fixture: ComponentFixture<EmpposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
