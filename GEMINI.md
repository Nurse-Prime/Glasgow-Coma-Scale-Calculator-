# GEMINI.md

## Project Overview

This project is a "Glasgow Score Clinical GCS Calculator". It is a web application built using React, TypeScript, and Vite. The application provides a user interface to calculate the Glasgow Coma Scale (GCS), a neurological scale used to assess the level of consciousness in a person after a traumatic brain injury.

The main application component is `App.tsx`, which renders the `GcsCalculator` component. The project uses Vite for the development server and build process.

## Building and Running

To build and run this project, you will need to have Node.js and npm installed.

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Set Environment Variables:**

    The project requires a Gemini API key to be set as an environment variable. Create a `.env.local` file in the root of the project and add the following line:

    ```
    GEMINI_API_KEY=your_api_key
    ```

3.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

    This will start the development server, typically at `http://localhost:3000`.

4.  **Build for Production:**

    ```bash
    npm run build
    ```

    This will create a production-ready build in the `dist` directory.

5.  **Preview the Production Build:**

    ```bash
    npm run preview
    ```

    This will serve the production build locally for previewing.

## Development Conventions

*   **TypeScript:** The project uses TypeScript for static typing.
*   **Styling:** The project uses CSS classes like `bg-slate-950`, which suggests a utility-first CSS framework like Tailwind CSS might be in use (although not explicitly configured in the files I have read).
*   **Component-Based Architecture:** The application is structured into reusable React components, located in the `components` directory.
*   **Vite:** The project uses Vite for fast development and builds.
