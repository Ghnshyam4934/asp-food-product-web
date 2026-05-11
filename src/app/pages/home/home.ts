import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { SpiceCollectionComponent } from './components/spice-collection/spice-collection.component';
import { SignatureBlendsComponent } from './components/signature-blends/signature-blends.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SpiceCollectionComponent, SignatureBlendsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}