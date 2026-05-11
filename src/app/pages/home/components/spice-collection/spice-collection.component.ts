import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Category = 'All' | 'Masala' | 'Powders' | 'Best Seller';

@Component({
  selector: 'app-spice-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spice-collection.component.html',
  styleUrls: ['./spice-collection.component.scss'],
})
export class SpiceCollectionComponent {
  selectedCategory: Category = 'All';

  categories: Category[] = ['All', 'Masala', 'Powders', 'Best Seller'];

  products = [
    {
      name: ' ASP Kala Masala',
      desc: 'Authentic Village Roasted',
      price: 150,
      category: 'Masala',
      image: 'assets/products/kala-masala.jpg',
    },
    {
      name: 'ASP All-in-One',
      desc: 'Daily Usage Special',
      price: 129,
      category: 'Masala',
      image: 'assets/products/all-in-one.jpg',
    },
    {
      name: 'ASP Garam Masala',
      desc: 'Intense Aroma & Spice',
      price: 110,
      category: 'Masala',
      image: 'assets/products/garam-masala.jpg',
    },
    {
      name: 'ASP Pavbhaji Masala',
      desc: 'Street Style Authenticity',
      price: 95,
      category: 'Masala',
      image: 'assets/products/pavbhaji.jpg',
    },
    {
      name: 'ASP Sambar Masala',
      desc: 'Coastal South Recipe',
      price: 105,
      category: 'Masala',
      image: 'assets/products/sambar.jpg',
    },
    {
      name: 'ASP Red Chilli',
      desc: 'Sun-Dried Extra Heat',
      price: 180,
      category: 'Powders',
      image: 'assets/products/red-chilli.jpg',
    },
    {
      name: 'ASP Organic Turmeric',
      desc: 'High Curcumin Content',
      price: 160,
      category: 'Powders',
      image: 'assets/products/turmeric.jpg',
    },
  ];

  get filteredProducts() {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter((p) => p.category === this.selectedCategory);
  }

  selectCategory(cat: Category) {
    this.selectedCategory = cat;
  }
}