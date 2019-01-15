/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GendergraphComponent } from './gendergraph.component';

describe('GendergraphComponent', () => {
  let component: GendergraphComponent;
  let fixture: ComponentFixture<GendergraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GendergraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GendergraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
