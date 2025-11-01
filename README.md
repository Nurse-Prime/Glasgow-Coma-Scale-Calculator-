
# Glasgow Score Clinical GCS Calculator

This project is a web application designed to calculate the Glasgow Coma Scale (GCS), a crucial neurological assessment tool. It provides a user-friendly interface for healthcare professionals to quickly and accurately determine a patient's level of consciousness following a traumatic brain injury.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A superset of JavaScript that adds static typing.
*   **Vite:** A fast build tool that provides an excellent development experience.

## Features

*   **Intuitive Interface:** A user-friendly design for quick and easy GCS calculation.
*   **Real-time Calculation:** The GCS score is updated in real-time as you select the different response options.
*   **Responsive Design:** The application is optimized for use on both desktop and mobile devices.
*   **Copy to Clipboard:** Easily copy the GCS score and its components to the clipboard for documentation.
*   **Reset Functionality:** Quickly reset the calculator to its initial state for a new assessment.

## Run Locally

**Prerequisites:**

*   Node.js (LTS version recommended)
*   npm (Node Package Manager)

**Getting Started:**

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Set Environment Variables:**

    This project may require a Gemini API key for certain functionalities. Create a `.env.local` file in the root of your project and add your API key:

    ```
    GEMINI_API_KEY=your_api_key_here
    ```

    Replace `your_api_key_here` with your actual Gemini API key.

3.  **Run the Development Server:**

    To start the development server and view the application in your browser (usually at `http://localhost:3000`):

    ```bash
    npm run dev
    ```

4.  **Build for Production:**

    To create an optimized production build of the application:

    ```bash
    npm run build
    ```

    The build artifacts will be located in the `dist` directory.

5.  **Preview the Production Build:**

        To locally serve and preview the production build:

    

        ```bash

        npm run preview

        ```

    

    ## Contributing

    

    Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. See the `GEMINI.md` file for more information on how to contribute.

    
