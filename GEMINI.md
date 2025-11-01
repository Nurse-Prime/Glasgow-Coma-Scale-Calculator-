# GEMINI.md

## Project Overview

This project is a "Glasgow Score Clinical GCS Calculator". It is a web application built using React, TypeScript, and Vite. The application provides a user interface to calculate the Glasgow Coma Scale (GCS), a neurological scale used to assess the level of consciousness in a person after a traumatic brain injury.

The main application component is `App.tsx`, which renders the `GcsCalculator` component. The project uses Vite for the development server and build process.

## Project Structure

*   `src/`: This directory contains the main source code of the application.
*   `components/`: This directory contains the reusable React components used in the application.
*   `public/`: This directory contains the public assets of the application, such as the `logo.png` file.
*   `App.tsx`: This is the main application component.
*   `index.tsx`: This is the entry point of the application.
*   `constants.ts`: This file contains the constants used in the application.
*   `types.ts`: This file contains the TypeScript types used in the application.

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

*   **TypeScript:** The project uses TypeScript for static typing. Ensure that all new code is properly typed.
*   **Styling:** The project uses utility-first CSS classes, which suggests the use of a framework like Tailwind CSS. Please adhere to this style when adding or modifying components.
*   **Component-Based Architecture:** The application is structured into reusable React components, located in the `components` directory. When creating new components, please follow the existing structure and naming conventions.
*   **Vite:** The project uses Vite for fast development and builds. Please refer to the Vite documentation for more information on how to use it.
*   **Linting:** The project uses ESLint for code linting. Please run `npm run lint` before committing your changes to ensure that your code adheres to the project's coding style.
*   **Commits:** Please follow the conventional commit format when writing your commit messages.
