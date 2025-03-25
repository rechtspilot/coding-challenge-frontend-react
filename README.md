# Frontend Challenge: E-Commerce Product Management App

This challenge is designed to evaluate your React skills in state management, application structure, separation of concerns, API integration, and logical reasoning. 
You will build a simplified product management application for an e-commerce store.

## Challenge Objective
Build a Product Management Dashboard where users can:

- [ ] View a list of products.
- [ ] Search and filter products.
- [ ] Edit product details.
- [ ] Add a new product.
- [ ] Delete a product.

You will interact with a provided API for managing the product data.

## Prerequisites
*Duration:* Duration: We estimate this task should take approximately 4 hours. Please provide an estimation of the total time you spent on this challenge if it is not evident from your commit history.
*Technology:* React with Typescript
*Testing:* Write at least one unit test for a critical function/component.


## Evaluation Criteria
1. State Management: Effective handling of state (local/global).
2. Code Structure: Modular, readable, and reusable components.
3. Separation of Concerns: Clear delineation between presentation, business logic, and API communication layers.
4. API Interaction: Handling API calls, errors (you can limit this to some common errors), and loading states.
5. Logical Reasoning: Correct implementation of filtering, searching, and other business logic.
6. Design: Clean and functional UI. You can use any UI framework or custom styling.
7. Best Practices: Type definitions, code comments, accessibility considerations, etc.
8. Collaboration: Readme, commit history
9. Optional: Showcase of architectural patterns

## Functional Requirements
1. Product List
- [ ] Fetch and display a list of products from the API.
- [ ] Include the following columns:
  - [ ] Product Name
  - [ ] Price
  - [ ] Category
  - [ ] Stock Quantity
  - [ ] Actions (Edit/Delete)

2. Search and Filter
- [ ] Add a search input to filter products by name.
- [ ] Add a filter dropdown for category.

3. Add Product
- [ ] Clicking "Add Product" should open a form to add a new product.

4. Edit Product
- [ ] Clicking "Edit" in the product list should allow users to edit the product's details.

5. Delete Product
- [ ] Allow users to delete a product with a confirmation dialog.

## Non-Functional Requirements
1. Error Handling: Gracefully handle API errors with appropriate feedback to users.
2. Loading States: Show loading indicators while fetching data.
3. Responsiveness: The application should be mobile-friendly.
4. Scalability: Design components and the architecture to be extendable for future features.

## Provided API Definition
Use the mocked endpoints

### Endpoints
| Method | Endpoint |	Description |
|--------|----------|-------------|
| GET |	/	| Get a list of all products. |
| POST | / | Add a new product. |
| Opt: PATCH |	/:id | Update an existing product. |
| DELETE | /:id | Delete a product. |

### Example Payloads
#### `GET` /
```
[
  {
    "id": 1,
    "name": "Sample Product 1",
    "price": 10.99,
    "category": "Electronics",
    "stock": 15
  },
  {
    "id": 2,
    "name": "Sample Product 2",
    "price": 29.99,
    "category": "Books",
    "stock": 10
  }
]
```

#### `POST` /
```
201
{
  "name": "New Product",
  "price": 19.99,
  "category": "Home",
  "stock": 20
}
```
#### Opt: `PATCH` /:id
```
200
{
  "price": 25.99, // updated value
}
```
#### `DELETE` /:id
Response: 204 No Content

## Suggested Features (Optional)
If time allows, consider adding:
- Pagination: Add pagination for the product list.
- Sort Functionality: Allow sorting by price, name, or stock.
- BFF Architecture: Use Next.js API routes to act as a backend proxy for the frontend. This adds a layer of abstraction for managing API requests.

## Submission
- Repository: Provide a link to a GitHub repository with your code in a private repository.
- Access: Invite the user [@FloHiwg](https://github.com/FloHiwg) to your repository. Ensure the username is correct and that access is granted.
- Instructions: Include clear instructions in the `README.md` for setting up and running the application.
- Time Spent: Please give an estimation of the total time you needed to complete the challenge if the commit history does not clearly reflect it.
- Testing: Ensure the app can be run locally, and include instructions on how to run.

## Final Notes
This challenge aims to simulate a real-world task with an emphasis on clean architecture and maintainable code. Focus on delivering a high-quality solution rather than rushing to complete all features. Good luck! 🚀
