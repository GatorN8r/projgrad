/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumofempComponent } from './numofemp.component';

describe('NumofempComponent', () => {
  let component: NumofempComponent;
  let fixture: ComponentFixture<NumofempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumofempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumofempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
