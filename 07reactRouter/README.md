# React Router Playground

## Overview
This project is a hands-on exploration of modern React routing using `react-router-dom` (v7) and Vite. It demonstrates how to create a multi-page feel in a single-page application (SPA) while sharing common layout elements like Headers and Footers. The project is styled using Tailwind CSS.

## Key Features & Concepts Learned

This project implements several powerful features of React Router:

* **Layouts & Nested Routes (`<Outlet />`)**: 
    The `App.jsx` file acts as a root layout wrapper. It contains a persistent `<Header />` and `<Footer />`, while the `<Outlet />` dynamically swaps out the middle content based on the current URL (e.g., Home, About, Contact).
* **Data Loaders (`loader` & `useLoaderData`)**: 
    The `/github` route demonstrates how to fetch data *before* a component renders. Instead of using `useEffect` inside the component, it uses a custom `githubInfoLoader` function to fetch GitHub profile data (followers and avatar) from the GitHub API. The component then easily accesses this data using the `useLoaderData` hook.
* **Dynamic Routing (`useParams`)**: 
    The `/user/:userid` route shows how to capture dynamic values from the URL. The `User` component uses the `useParams` hook to read the `userid` from the web address and display it directly on the screen.
* **Error Handling (`errorElement`)**: 
    The GitHub route is equipped with a custom `<ErrorPage />` fallback, ensuring that if the data fetch fails or the route breaks, the application doesn't crash but instead shows a graceful error screen.

## Technologies Used
* **React** (v19)
* **Vite** (Build tool)
* **React Router DOM** (v7.17 for client-side routing)
* **Tailwind CSS** (v4 for utility-first styling)

## Project Structure

* `src/main.jsx`: The entry point where the router is configured using `createBrowserRouter`. It maps URL paths to their respective components.
* `src/App.jsx`: The main layout component utilizing `<Outlet />`.
* `src/components/`: Contains all the individual page components (Home, About, Contact, User, Github) and layout sections (Header, Footer).

## How to Run Locally

1. **Clone the repository** (if you haven't already).
2. **Install dependencies**:
   ```bash
   npm install