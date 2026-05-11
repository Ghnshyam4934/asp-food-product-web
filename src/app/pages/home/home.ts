import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { SpiceCollectionComponent } from './components/spice-collection/spice-collection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SpiceCollectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}