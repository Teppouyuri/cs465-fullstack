# cs465-fullstack
CS-465 Full Stack Development with MEAN - 
CS-465 Travlr Getaways

Project Overview:
This project is a complete web application created for Travlr Getaways, a travel booking website. It includes both customer and admin interfaces. Customers can create accounts, search for travel packages, book trips, and view itineraries. Admins can manage customer data, travel packages, and pricing. Security features are added to ensure secure admin logins.

Architecture:
Frontend Development:
For this project, both traditional multi-page and single-page applications (SPA) were used. The customer-facing side was built with Express HTML and JavaScript, which involves reloading the entire page for new content. For a more dynamic experience, Angular was used to create the SPA for the admin interface. Unlike traditional web pages, the Angular SPA updates content dynamically without full page reloads, making it faster and more interactive.

Backend Development:
The backend used a NoSQL MongoDB database. This type of database is flexible and can handle different types of data easily, which is perfect for travel packages that have varying details. MongoDB allows for easy changes to the data model, making it ideal for projects that need to adapt quickly.

Functionality:

JSON and JavaScript:
JSON (JavaScript Object Notation) is a format for structuring data, making it easy to exchange between the frontend and backend. While JavaScript is used to create dynamic content on web pages, JSON is used to send and receive data. In this project, JSON was essential for communication between the Angular frontend and the Express backend.

Code Refactoring:
Throughout the project, code was refactored to improve functionality and efficiency. Reusable UI components were created in Angular, such as form inputs and data tables. This reduced code duplication and made the application easier to maintain and extend. Benefits of reusable components include better readability, fewer errors, and faster development.

Testing:
API Testing and Security:
Testing the application involved several methods to ensure it worked correctly. Unit tests checked individual components and services. Integration tests made sure the frontend and backend worked together. End-to-end tests simulated user interactions to verify the entire workflow. API testing involved checking different methods (GET, POST, PUT, DELETE) to ensure data was handled correctly. Security testing was crucial, especially for secure admin logins, to ensure only authorized users could access admin features.

Reflection:
Course Impact:
This course has greatly helped me in my professional development by providing practical experience in building a full stack web application. I have learned and improved skills in both frontend and backend development, including using frameworks like Angular and Express and managing databases with MongoDB. These skills make me a stronger candidate for jobs, as I can now develop complex web applications and understand full stack development. The project also enhanced my understanding of integrating security features, which is essential for creating secure and reliable applications.
