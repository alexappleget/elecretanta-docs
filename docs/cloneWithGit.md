---
sidebar_position: 2
---

# Cloning the Repository with Git

To get started with the project, you'll need to clone the repository onto your local computer. This means making a copy of all the project files and history so you can work on them.

## Prerequisites

- Make sure you have [Git Install](https://git-scm.com/) on your computer.

## Steps

1. **Open your terminal in VSCode.**
2. **Navigate to the folder where you want to clone the project to.**
   ```sh
   cd path/to/your/folder
   ```
3. **Run the clone command:**
   ```sh
   git clone https://github.com/LetsGetTechnical/elecretanta.git
   ```
4. **Open the newly created project folder in VS Code.**
   (You can drag and drop the folder into VS Code.)
5. **Install dependencies:**
   In the terminal, type:
   ```sh
   pnpm i
   ```
   and hit enter to install all necessary node modules.

> **Important:** We use `pnpm` and NOT `npm`. Do not use `npm`.
