# Create TanStack App

This CLI tool helps you quickly set up a new TanStack app by downloading and initializing the template from [GitHub](https://github.com/SH20RAJ/tanstack-start). It's perfect for building full-stack applications using TanStack's powerful router and full-stack capabilities.

## Features:
- Full-Document SSR
- Streaming
- Server Functions (RPCs)
- Automatic type-safe routing with TanStack Router
- Deployment-ready app setup

## Getting Started

### Install

You can use the CLI to set up a new TanStack app directly from GitHub with:

```bash
npx create-tanstack-app@latest
```

This will:
1. Download the starter template from [https://github.com/SH20RAJ/tanstack-start](https://github.com/SH20RAJ/tanstack-start)
2. Initialize the project with all necessary dependencies and configurations.

### Dependencies

Your new project will include:
- **TanStack Router**: A powerful type-safe routing system for React.
- **Vinxi**: A bundler and deployment tool.
- **Vite**: For fast build and development.
- **React**: Frontend library to build the app.
- **TypeScript**: For type safety throughout the app.

### Project Structure

Once the setup is complete, your project will have a structure similar to this:

```
my-app/
├── app/
│   ├── routes/
│   │   └── __root.tsx
│   ├── client.tsx
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   └── ssr.tsx
├── .gitignore
├── app.config.ts
├── package.json
└── tsconfig.json
```

### Running the App

Once the setup is complete, run the following command to start the app:

```bash
npm run dev
```

This will start the development server, and you can start building your app with TanStack's full-stack routing and SSR features.

For more details on how to configure your app, refer to the official [TanStack Start Docs](https://tanstack.com/start/latest).

---

Make sure that your `index.js` for this npm package initializes the necessary steps to clone the repo from GitHub and set it up locally. You can use Node's `child_process` module to clone the repository and run the initial npm setup commands for users. For example:

```js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoUrl = 'https://github.com/SH20RAJ/tanstack-start.git';
const targetDir = path.join(process.cwd(), 'tanstack-app');

try {
  if (!fs.existsSync(targetDir)) {
    console.log('Cloning TanStack app template...');
    execSync(`git clone ${repoUrl} ${targetDir}`, { stdio: 'inherit' });

    console.log('Installing dependencies...');
    execSync('npm install', { cwd: targetDir, stdio: 'inherit' });

    console.log('Setup complete! You can now run "npm run dev" in the project directory.');
  } else {
    console.log('Directory already exists.');
  }
} catch (error) {
  console.error('Error setting up TanStack app:', error);
}
```