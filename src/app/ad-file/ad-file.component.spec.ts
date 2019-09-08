import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFileComponent } from './ad-file.component';

describe('AdFileComponent', () => {
  let component: AdFileComponent;
  let fixture: ComponentFixture<AdFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
