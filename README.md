# React TypeScript Starter Setup

![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)
![ESLint](https://img.shields.io/badge/ESLint-9.25.0-yellow)
![Prettier](https://img.shields.io/badge/Prettier-3.5.3-pink)
![React Router](https://img.shields.io/badge/React_Router-7.5.3-red)
![Vitest](https://img.shields.io/badge/Vitest-3.1.4-green)
![Testing Library](https://img.shields.io/badge/Testing_Library-16.3.0-orange)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-latest-blue)

A modern, optimized React TypeScript starter template designed to accelerate your development workflow. This template comes pre-configured with best practices and tools to help you build high-quality React applications quickly.

## Features

- 🚀 **Optimized Build Setup** - Vite for lightning-fast development and production builds
- ✅ **Type Safety** - Full TypeScript integration with strict type checking
- 📱 **Routing** - React Router pre-configured with example routes
- 🧪 **Testing Framework** - Vitest + React Testing Library for robust testing
- 🔍 **Code Quality Tools** - ESLint and Prettier with intelligent defaults
- 🔄 **CI/CD Ready** - GitHub Actions workflows for linting, type checking, testing, and formatting
- 🐳 **Docker Support** - Production-ready Dockerfile for containerized deployment with Nginx
- 🧩 **Component Architecture** - Organized layout and page structure
- 💅 **Styling Solution** - Tailwind CSS for utility-first styling

## Technologies

### Core

- **React** (v19.1.0) - UI component library
- **TypeScript** (v5.8.3) - Type-safe JavaScript
- **React Router DOM** (v7.5.3) - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### Build Tools

- **Vite** (v6.3.5) - Next-generation frontend tooling
- **Node.js** (>=20.0.0) - JavaScript runtime

### Testing

- **Vitest** (v3.1.4) - Unit testing framework
- **React Testing Library** (v16.3.0) - React component testing
- **Testing Library/User Event** (v14.6.1) - User interaction simulation
- **jsdom** (v26.1.0) - Browser environment simulation

### Code Quality

- **ESLint** (v9.25.0) - JavaScript/TypeScript linting
- **Prettier** (v3.5.3) - Code formatting
- **TypeScript-ESLint** (v8.32.1) - TypeScript-specific linting
- **Multiple Prettier plugins** - Organized imports, package.json formatting, JSDoc, etc.
- **Tailwind CSS Plugin** - Tailwind-specific formatting optimization

### Deployment

- **Docker** - Containerization
- **Nginx** - Web server for serving static assets

### CI/CD

- **GitHub Actions** - Automated workflows for:
  - Unit Testing
  - Type Checking
  - Linting
  - Code Formatting

## Getting Started

### Prerequisites

- Node.js (version 20.0.0 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-ts-setup.git
cd react-ts-setup
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if files are formatted correctly
- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with Vitest UI
- `npm run ts-check` - Run TypeScript type checking

## Using Tailwind CSS

This starter comes with Tailwind CSS pre-configured. You can use Tailwind's utility classes directly in your components:

## Docker Deployment

Build and run the Docker container:

```bash
# Build the Docker image
docker build -t react-ts-app .

# Run the container
docker run -p 8080:80 react-ts-app
```

Your application will be available at `http://localhost:8080`

## Project Structure

```
├── .github/workflows/   # GitHub Actions workflows
├── src/
│   ├── assets/          # Static assets
│   ├── lib/             # Reusable components and utilities
│   │   ├── components/  # Shared UI components
│   │   └── layouts/     # Layout components
│   ├── pages/           # Application pages
│   ├── router/          # Routing configuration
│   ├── styles/          # Global styles and Tailwind customizations
│   ├── app.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Public static files
├── tailwind.config.js   # Tailwind CSS configuration
└── ...config files      # Various configuration files
```

## Development Workflow

1. Create new components in the appropriate directories
2. Add routes in `src/router/routes.tsx`
3. Write tests for your components in `__tests__` directories
4. Run tests with `npm run test` to ensure code quality
5. Use `npm run lint` and `npm run format` before committing changes

## Best Practices

- Keep components small and focused on a single responsibility
- Use TypeScript interfaces for props and state
- Leverage the pre-configured ESLint and Prettier rules
- Write tests for critical functionality
- Utilize the layout system for consistent UI
- Follow Tailwind CSS best practices for styling components

## Contribution

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- React Team
- TypeScript Team
- Vite Contributors
- Testing Library Team
- Tailwind CSS Team

---

Happy coding! 🚀
