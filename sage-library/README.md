# Sage Library

# Overview
Sage Library is an engaging web application developed using React and Vanilla CSS, designed to provide users with a seamless and interactive experience. As a virtual library platform, Sage Library allows users to explore an extensive collection of books with ease.

## Features:

- **Book Catalog:** Browse through a diverse selection of books available on the website. Each book is presented with a visually appealing layout.

- **Book Details Page:** Clicking on a book takes users to a dedicated page where they can find comprehensive details about the selected book. Users have the option to decide whether they want to read the book or not.

- **User Tracking:** Sage Library keeps track of its users, creating a personalized experience. Users can explore their reading history and preferences.

- **Weekly Recognition:** The homepage showcases the top readers or "sages" of the week, adding a competitive and community-driven element to the platform.

## Development Information:

While the frontend is the current focus of development, please note that the backend will be addressed in future phases of the project.

Sage Library aims to create an immersive reading experience for users, blending a user-friendly interface with dynamic features. Stay tuned for updates as the project evolves!

While the frontend is the current focus of development, it's essential to note that the project's current dataset is simulated due to the absence of a backend infrastructure. To provide a realistic user experience, books showcased on Sage Library are sourced from the Google Books API.

Please be aware that as the project progresses, including the completion of a Node.js course, the backend development will be a priority, and efforts will be made to integrate authentic data to enhance the accuracy and reliability of the library's content. Stay tuned for updates on these advancements.

## Folder structure
Within the `src` folder, the project is organized into the following six key directories:
 
- **Api:** This folder houses the `api.jsx` component, a versatile module utilized by various components throughout the project. This component encapsulates the fetching logic for API calls, offering a streamlined approach to handling data retrieval without redundant code.

- **assets:** `The assets` folder serves as a repository for all project images, ensuring a centralized and organized resource for graphical elements.This folder holds all the images used in the project.

- **Components:** In the `Components` directory, individual components crucial to the project's functionality are neatly organized. Examples include the `Navbar`, `Books`, `Footer`, and `Modal`, among others.

- **Pages:** The `Pages` directory encompasses all website pages. Each page has its own dedicated folder, and within these folders, section-specific components are housed. For instance:

e.g

|-- Pages
|   |--Home
|   |   |--Sections
|   |   |   |--Featured.jsx
|   |   |   |--Hero.jsx
|   |   |   |--HowItWorks.jsx.jsx

Styling for components within the Home folder is managed through the `Home.css` file located in the same directory.

- **Router:** The Router directory contains the `Router.jsx` file, which orchestrates all project routes. It's noteworthy that this project employs `react-router v6` for route management. The routing logic is encapsulated in a `Routed.jsx` file, imported into the `main.jsx` file.

- **Utils:** The `Utils` directory serves as the repository for utility functions integral to the project's operation. Notable examples include the `Auth.jsx` file, responsible for handling user authentication.

In the project's root folder, the `Index.css` file contains global styles, defining essential CSS classes such as `.section-padding` —a universally applied padding class used consistently across various sections. Additionally, this file defines project-wide variables, contributing to a standardized and cohesive design.