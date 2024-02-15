# Frontend Setup

This guide will help you set up and run the frontend using Vite and React.

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your system.

- **Node.js**: Download and install Node.js from the [official website](https://nodejs.org/).
- **npm**: npm is included with Node.js. You can check its version by running `npm -v` in your terminal.

## Setup Instructions

Follow these steps to set up and run the frontend:

1. **Copy Environment Variables**: Copy the `.env.sample` file and rename it to `.env`. If your backend API URL is different, update the `VITE_BACKEND_API_URL` variable in the `.env` file accordingly.

    ```bash
    cp .env.sample .env
    ```

2. **Install Dependencies**: Install the required dependencies by running the following command:

    ```bash
    npm install
    ```

3. **Run the Development Server**: Start the development server by running:

    ```bash
    npm run dev
    ```

    This will build the project and start the development server. You can access the application at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run the following scripts:

- **Development Mode**: Start the development server with hot-reloading:

```bash
npm run dev
```

- **Build**: Build the project for production:

```bash
npm run build
```
- **Preview** the Production Build: Serve the production build locally:

```bash
npm run serve
```