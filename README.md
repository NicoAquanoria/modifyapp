# Modify App — Expo React Native, Storybook, Atomic Design System

## Project Structure & Version Control

### Previous Folder Structure Issue

Initially, the project had a nested `modify/modify/.git` repository, which caused confusion and version control issues. This was resolved by restructuring the project so that all files and the `.git` directory are at the root level.

### Importance of Version Control

Version control is essential for collaboration, tracking changes, and maintaining professionalism in software development. This repository is now set up for robust React Native development with Storybook and an atomic design system, ensuring a scalable and maintainable codebase.

### Current Setup

- Expo React Native project at the root
- Storybook for component-driven development
- Atomic design system for UI consistency

## Storybook Usage & Contribution

Storybook is used for developing, documenting, and visually testing all UI components in isolation.

### Running Storybook
- **Option 1:** Toggle Storybook in `App.tsx` by setting `SHOW_STORYBOOK = true` and run the app as usual:
  ```bash
  npm start
  # or
  npx expo start
  ```
- **Option 2:** If a dedicated Storybook script is available:
  ```bash
  npm run storybook
  ```

### Adding/Updating Stories
- Add new stories in the same directory as the component (e.g., `components/Button.stories.tsx`).
- Document all relevant states: default, loading, error, interactive, disabled, etc.
- Use clear, descriptive story names and props.
- Reference Figma for design alignment.

### Best Practices
- Keep stories up to date as components evolve.
- Use Storybook for design review and QA before merging new UI work.
- Ensure all new components and states are covered in Storybook before submitting a PR.
- Use stories to communicate component usage and edge cases to the team.

## Git & GitHub Best Practices

- **Commit Messages:**
  - Use clear, descriptive commit messages (e.g., `feat: add login screen`, `fix: correct button color`).
  - Keep commits small and focused on a single change or fix.

- **Branching:**
  - Create a new branch for each feature or bugfix (e.g., `feature/auth-flow`, `fix/image-upload-bug`).
  - Use descriptive branch names that reflect the work being done.

- **Pull Requests:**
  - Open a pull request (PR) for every change, even if working solo, to document history and enable code review.
  - Link PRs to relevant issues or tasks when possible.
  - Request reviews and provide feedback on others' PRs.

- **Collaboration Tips:**
  - Communicate early and often about what you’re working on.
  - Rebase or merge `main` regularly to avoid conflicts.
  - Review code for clarity, maintainability, and adherence to project standards.

- **Onboarding & Clean History:**
  - Keep the `main` branch deployable and stable.
  - Document setup steps and project conventions in the README.
  - Squash or rebase commits before merging to keep history clean.

### Recommended Improvements

- **Feature Branches:** Always start new work on a feature branch and open a PR for merging.
- **CI/CD:** Set up GitHub Actions or Expo EAS for automated testing, builds, and deployments.
- **Code Quality:** Use tools like ESLint, Prettier, and Husky for linting, formatting, and pre-commit checks (if not already configured).

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
