import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products=[
    {
      "id": 1,
      "name": "Sample Product 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "brand": "ABC Brand",
      "gender": "Male",
      "category": "Shoes",
      "size": [8, 9, 10],
      "color": ["Red", "Blue", "Green"],
      "price": 49.99,
      "is_in_inventory": true,
      "items_left": 30,
      "imageURL": "https://n1.sdlcdn.com/imgs/g/s/v/Boltt-Xfit-Running-Shoes-Black-SDL789843251-6-4230e.jpg",
      "slug": "sample-product-1",
      "discountPrice":12
    },
    {
      "id": 2,
      "name": "Sample Product 2",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "brand": "XYZ Brand",
      "gender": "Female",
      "category": "Sneakers",
      "size": [7, 8, 9],
      "color": ["Black", "White", "Pink"],
      "price": 64.99,
      "is_in_inventory": true,
      "items_left": 20,
      "imageURL": "https://n1.sdlcdn.com/imgs/g/s/v/Boltt-Xfit-Running-Shoes-Black-SDL789843251-6-4230e.jpg",
      "slug": "sample-product-2"
    },
    {
      "id": 3,
      "name": "Sample Product 3",
      "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "brand": "LMN Brand",
      "gender": "Male",
      "category": "Boots",
      "size": [11, 12, 13],
      "color": ["Brown", "Tan", "Gray"],
      "price": 79.99,
      "is_in_inventory": true,
      "items_left": 15,
      "imageURL": "https://n1.sdlcdn.com/imgs/g/s/v/Boltt-Xfit-Running-Shoes-Black-SDL789843251-6-4230e.jpg",
      "slug": "sample-product-3",
      "discountPrice":12
    },
    {
      "id": 4,
      "name": "Sample Product 4",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "brand": "PQR Brand",
      "gender": "Female",
      "category": "Sandals",
      "size": [6, 7, 8],
      "color": ["Yellow", "Blue", "Orange"],
      "price": 39.99,
      "is_in_inventory": false,
      "items_left": 0,
      "imageURL": "https://n1.sdlcdn.com/imgs/g/s/v/Boltt-Xfit-Running-Shoes-Black-SDL789843251-6-4230e.jpg",
      "slug": "sample-product-4"
    },
    {
      "id": 5,
      "name": "Sample Product 5",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "brand": "XYZ Brand",
      "gender": "Male",
      "category": "Athletic Shoes",
      "size": [9, 10, 11],
      "color": ["Black", "Gray", "Green"],
      "price": 54.99,
      "is_in_inventory": true,
      "items_left": 25,
      "imageURL": "https://n1.sdlcdn.com/imgs/g/s/v/Boltt-Xfit-Running-Shoes-Black-SDL789843251-6-4230e.jpg",
      "slug": "sample-product-5"
    },
    {
      "id": 6,
      "name": "Sample Product 6",
      "description": "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "brand": "ABC Brand",
      "gender": "Female",
      "category": "Heels",
      "size": [7, 8, 9],
      "color": ["Red", "Black", "Silver"],
      "price": 69.99,
      "is_in_inventory": true,
      "items_left": 18,
      "imageURL": "https://n1.sdlcdn.com/imgs/g/s/v/Boltt-Xfit-Running-Shoes-Black-SDL789843251-6-4230e.jpg",
      "slug": "sample-product-6",
      "discountPrice":12
    },
    {
      "id": 7,
      "name": "Sample Product 7",
      "description": "Dolore eu fugiat nulla pariatur.",
      "brand": "LMN Brand",
      "gender": "Male",
      "category": "Loafers",
      "size": [8, 9, 10],
      "color": ["Brown", "Tan", "Beige"],
      "price": 59.99,
      "is_in_inventory": true,
      "items_left": 22,
      "imageURL": "https://n1.sdlcdn.com/imgs/g/s/v/Boltt-Xfit-Running-Shoes-Black-SDL789843251-6-4230e.jpg",
      "slug": "sample-product-7"
    },
    {
      "id": 8,
      "name": "Sample Product 8",
      "description": "Magna aliqua. Ut enim ad minim veniam.",
      "brand": "PQR Brand",
      "gender": "Female",
      "category": "Flats",
      "size": [6, 7, 8],
      "color": ["Blue", "White", "Pink"],
      "price": 44.99,
      "is_in_inventory": true,
      "items_left": 28,
      "imageURL": "https://n1.sdlcdn.com/imgs/g/s/v/Boltt-Xfit-Running-Shoes-Black-SDL789843251-6-4230e.jpg",
      "slug": "sample-product-8",
      "discountPrice":12

    },
    {
      "id": 9,
      "name": "Sample Product 9",
      "description": "Culpa qui officia deserunt mollit anim id est laborum.",
      "brand": "XYZ Brand",
      "gender": "Male",
      "category": "Slippers",
      "size": [10, 11, 12],
      "color": ["Gray", "Black", "Brown"],
      "price": 34.99,
      "is_in_inventory": true,
      "items_left": 15,
      "imageURL": "https://n1.sdlcdn.com/imgs/g/s/v/Boltt-Xfit-Running-Shoes-Black-SDL789843251-6-4230e.jpg",
      "slug": "sample-product-9"
    },
    {
      "id": 10,
      "name": "Sample Product 10",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "brand": "ABC Brand",
      "gender": "Female",
      "category": "Wedges",
      "size": [7, 8, 9],
      "color": ["Red", "Black", "Gold"],
      "price": 74.99,
      "is_in_inventory": true,
      "items_left": 12,
      "imageURL": "https://n1.sdlcdn.com/imgs/g/s/v/Boltt-Xfit-Running-Shoes-Black-SDL789843251-6-4230e.jpg",
      "slug": "sample-product-10",
      "discountPrice":12

    }]
  

}
