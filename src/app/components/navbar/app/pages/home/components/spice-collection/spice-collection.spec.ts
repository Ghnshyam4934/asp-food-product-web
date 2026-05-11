import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiceCollection } from './spice-collection';

describe('SpiceCollection', () => {
  let component: SpiceCollection;
  let fixture: ComponentFixture<SpiceCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpiceCollection],
    }).compileComponents();

    fixture = TestBed.createComponent(SpiceCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
