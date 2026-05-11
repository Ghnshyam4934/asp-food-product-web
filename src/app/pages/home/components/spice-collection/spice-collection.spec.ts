import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpiceCollectionComponent } from './spice-collection.component';

describe('SpiceCollectionComponent', () => {
  let component: SpiceCollectionComponent;
  let fixture: ComponentFixture<SpiceCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpiceCollectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpiceCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});