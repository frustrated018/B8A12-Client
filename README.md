# Trending Tech

Welcome to the Tech Discover Platform, a web application where users can explore and share the latest tech products. This platform provides a space for users to submit new products, upvote or downvote existing ones, and post reviews. It incorporates user authentication with different roles (normal users, moderators, and admins) and features a product moderation system. Additionally, a payment system is integrated for premium features and subscriptions.

## Features

### Homepage

- **Navbar:**
  - Logo/website name and navigation links (Home, Products).
  - Login/Registration button (visible if the user is not logged in).
  - User profile picture (visible if the user is logged in).
  - Dropdown menu on the profile picture with options: User name (not clickable), Dashboard, Logout button.

- **Banner/Slider/Carousel:**
  - Beautiful and meaningful background images with text decoration.

- **Featured Products Section:**
  - Display at least 4 product cards sorted by timestamp.
  - Each card includes product image, name, tags, upvote button, and a disabled upvote button for the product owner.
  - Clicking on the Upvote button increases the vote count (requires login).
  - Clicking on the product name redirects users to the PRODUCT DETAILS page.

- **Trending Products Section:**
  - Display 6 product cards sorted by vote count.
  - Similar layout and functionality as Featured Products Section.

- **Footer:**
  - Reasonable and meaningful footer with website logo, copyright, contact information, social media links, address, etc.

### Authentication

- **Login Page:**
  - Email/Password login, Google Sign-in, and a link to the registration page.

- **Registration Page:**
  - Name, Email, Password, and PhotoURL fields.

### Product Details Page (Private Route)

- Show product details, upvote button, and report button.
- Reviews section with a form to post reviews.

### Products Page

- Display all accepted products with a search bar based on tags.
- Pagination with 20 cards per page.

### User Dashboard (Private Route)

- Dashboard layout with routes: My Profile, Add Product, My Products.
- My Profile Page: User information, membership subscribe button, and subscription status.
- Add Product Page: Form to add a new product.
- My Products Page: Display user's posted products with options to update or delete.

### Moderator Dashboard (Private Route)

- Dashboard layout with routes: Product Review Queue, Reported Contents.
- Product Review Queue Page: Review and manage pending products.
- Reported Contents Page: Review and delete reported products.

### Admin Dashboard (Private Route)

- Dashboard layout with routes: Statistics Page, Manage Users, Manage Coupons.
- Manage Users: Tabular view of users with options to make them Admin or Moderator.

## Live Link

- if you want to visit our project (Click Here)[http://exampleweb.com]
