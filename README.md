# React Native Test Assignment: Product Listing Application

## Objective
This project is a React Native-based Product Listing Application. The app interacts with a product API to display a list of products, handles user authentication with login and registration screens, and stores user data locally using AsyncStorage.

## Features
- **User Authentication**: 
  - User registration and login with data stored in AsyncStorage.
  - Persistent user sessions.
  - Logout functionality to clear user data and navigate back to the login screen.
  
- **Product Listing**:
  - Fetch products from the DummyJSON API.
  - Display product details like image, title, description, and price.
  - Implement pagination or infinite scroll for large product lists.
  
- **Product Details**:
  - Display detailed information about a selected product.
  - "Add to Favorites" feature using AsyncStorage to save favorite products locally.

- **Navigation**:
  - Seamless navigation between Login, Registration, Product Listing, and Product Details screens using React Navigation.

## Requirements
- **React Native CLI**
- **React Navigation** for managing in-app navigation.
- **AsyncStorage** for local data storage.
- **DummyJSON API** for fetching product data.

## Screens
- **LoginScreen**: User login interface.
- **RegisterScreen**: User registration interface.
- **ProductsScreen**: Displays a list of products fetched from the API.
- **ProductScreen**: Shows detailed information for a selected product.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/peterchijioke/ProLiApp.git
   cd PrLiApp
