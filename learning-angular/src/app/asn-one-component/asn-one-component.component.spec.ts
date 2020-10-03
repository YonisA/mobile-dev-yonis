import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnOneComponentComponent } from './asn-one-component.component';

describe('AsnOneComponentComponent', () => {
  let component: AsnOneComponentComponent;
  let fixture: ComponentFixture<AsnOneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsnOneComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsnOneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
