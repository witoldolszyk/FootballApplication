import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsTableComponent } from './country-details-table.component';

describe('CountryDetailsTableComponent', () => {
  let component: CountryDetailsTableComponent;
  let fixture: ComponentFixture<CountryDetailsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryDetailsTableComponent]
    });
    fixture = TestBed.createComponent(CountryDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
