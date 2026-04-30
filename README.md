# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/0ba6f939-e090-4d12-8b95-5b081f1d1644

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0ba6f939-e090-4d12-8b95-5b081f1d1644) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/0ba6f939-e090-4d12-8b95-5b081f1d1644) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Order Management & Persistence

- All orders placed by customers are saved and shown in the admin dashboard under "Today's Orders".
- Orders include all details: customer name, meal, price, time, delivery date, and delivery time.
- Orders are now persistent: they are saved in a file (`backend/orders.json`) and will not be lost when the backend restarts.

## Project Team & Responsibilities

- **Laetitia Kamangu** (Scrum Master): Project management, sprint planning, and team coordination
- **Lawrence Wambugu**: Frontend development (React, UI/UX, customer dashboard)
- **Andrew Tobiko**: Backend development (Flask API, authentication, order persistence)
- **George Mbugua**: Admin dashboard, order management, and integration
- **Lee Thuku**: Testing, documentation, and deployment
