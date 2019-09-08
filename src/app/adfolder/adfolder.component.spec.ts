import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdfolderComponent } from './adfolder.component';

describe('AdfolderComponent', () => {
  let component: AdfolderComponent;
  let fixture: ComponentFixture<AdfolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdfolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
