#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Prompt the user for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function getFolderName(defaultName) {
  return new Promise((resolve) => {
    rl.question(
      `Enter the folder name (or use './' for the current directory) [${defaultName}]: `,
      (input) => {
        resolve(input || defaultName);
      }
    );
  });
}

async function initApp() {
  try {
    // Get the folder name from the user or command-line argument
    const argFolderName = process.argv[2];
    const folderName = argFolderName || (await getFolderName("my-tanstack-app"));
    rl.close();

    const dest =
      folderName === "./" ? process.cwd() : path.join(process.cwd(), folderName);

    // Check if the destination already exists
    if (fs.existsSync(dest)) {
      console.log(
        "❌ Directory already exists. Please choose another name or delete the existing directory."
      );
      return;
    }

    console.log("📥 Cloning TanStack app template from GitHub...");

    // Clone the repository
    execSync(
      `git clone https://github.com/SH20RAJ/tanstack-start.git ${dest}`,
      {
        stdio: "inherit",
      }
    );

    console.log("✅ Template successfully cloned!");

    // Install dependencies
    console.log("📦 Installing dependencies...");
    execSync("npm install", { cwd: dest, stdio: "inherit" });

    console.log(`🎉 Setup complete! Navigate to your project folder:\n`);
    console.log(`   cd ${folderName === "./" ? "." : folderName}`);
    console.log(`   npm run dev`);
    console.log("\n🚀 Happy coding with TanStack!");
  } catch (error) {
    console.error("❌ Error during setup:", error.message);
  }
}

initApp();
