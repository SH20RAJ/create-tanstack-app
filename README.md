# 🚀 Create TanStack App

[![Visitors](https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2Fcreate-tanstack-app&labelColor=%232ccce4&countColor=%23263759&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2Fcreate-tanstack-app) [![NPM Version](https://img.shields.io/npm/v/create-tanstack-app)](https://www.npmjs.com/package/create-tanstack-app) [![NPM Downloads](https://img.shields.io/npm/dm/create-tanstack-app)](https://www.npmjs.com/package/create-tanstack-app) [![GitHub Stars](https://img.shields.io/github/stars/SH20RAJ/create-tanstack-app)](https://github.com/SH20RAJ/create-tanstack-app) [![GitHub Issues](https://img.shields.io/github/issues/SH20RAJ/create-tanstack-app)](https://github.com/SH20RAJ/create-tanstack-app/issues)

Welcome to **Create TanStack App** — your one-stop CLI tool to quickly scaffold a new TanStack-powered app and get started in no time! 🌟 Whether you're building full-stack apps or experimenting with TanStack's cutting-edge features, this CLI has got you covered.

---

## 🎯 Features

✨ **Full-Document SSR**: Enjoy seamless server-side rendering for a fully hydrated client experience.  
✨ **Streaming**: Take advantage of blazing-fast streaming capabilities.  
✨ **Server Functions (RPCs)**: Write server-side functions like a pro!  
✨ **Automatic Type-Safe Routing**: Powered by TanStack Router, making navigation a breeze.  
✨ **Deployment-Ready**: A setup that’s good to go for production from day one!

---

## 🛠 Getting Started

### 🔧 Install

Ready to dive in? Use this CLI to set up your app directly from GitHub:

```bash
npx create-tanstack-app@latest folder-name
```

🌟 **What happens next?**
1. The starter template is downloaded from [GitHub](https://github.com/SH20RAJ/tanstack-start).
2. All necessary dependencies and configurations are initialized automatically. Easy, right? 😎

### 🗂 Custom Folder Name or Current Directory Support
- If no folder name is provided, the CLI will **prompt you** for a name.
- Enter `./` to create the app in your current directory.

Example:
```bash
npx create-tanstack-app@latest
```
```plaintext
Enter the folder name (or use './' for the current directory) [my-tanstack-app]:
```

---

## 📦 What’s Inside?

Your new project will include the following goodies:
- **TanStack Router**: A powerful and type-safe router for React.
- **Vinxi**: A bundler and deployment tool to streamline your workflow.
- **Vite**: Enjoy the fastest development and build experience.
- **React**: The most popular library for building UIs.
- **TypeScript**: Supercharge your development with type safety everywhere!

---

## 🏗 Project Structure

After the setup, your project will look like this:

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

---

## 🚴 Running the App

Once the setup is complete, navigate to your app folder and start the development server:

```bash
cd your-app-name
npm run dev
```

🚀 Open your browser and watch your TanStack app come to life! 🎉

---

## ✨ Highlights of the CLI

1. **Interactive Setup**: The CLI will guide you if you don’t provide a folder name. Just sit back and relax. 😌
2. **Automatic Dependency Installation**: No need to manually install dependencies. The CLI does it for you. 💻
3. **Clear Instructions**: Navigate, develop, and deploy effortlessly with our easy-to-follow steps.
4. **Error Prevention**: The tool checks if the directory already exists and avoids overwriting.

---

## 🌐 Template Contribution

The template for this CLI is hosted [here](https://github.com/SH20RAJ/tanstack-start). Feel free to contribute, modify, or create your own version of the template to suit your needs! 💡

---

## 🛡 Safeguards
- The CLI ensures that existing directories are not accidentally overwritten.
- Provides meaningful error messages in case something goes wrong. 🛠

---

🌟 **Happy Coding!** 🌟  
💬 Have feedback or questions? Feel free to drop by the [GitHub Repo](https://github.com/SH20RAJ/create-tanstack-app).

