import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureBlends } from './signature-blends';

describe('SignatureBlends', () => {
  let component: SignatureBlends;
  let fixture: ComponentFixture<SignatureBlends>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignatureBlends],
    }).compileComponents();

    fixture = TestBed.createComponent(SignatureBlends);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
