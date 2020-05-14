import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerAutocompleteComponent } from './manufacturer-autocomplete.component';

describe('ManufacturerAutocompleteComponent', () => {
  let component: ManufacturerAutocompleteComponent;
  let fixture: ComponentFixture<ManufacturerAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
