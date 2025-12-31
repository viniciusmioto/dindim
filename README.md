# Meu Dindim

The homepage for "Meu Dindim" blog — Personal finance without the nonsense.

## Key Features

- **Mobile-First Design**: Optimized for all devices.
- **Components**: Modular and reusable (Header, Hero, Highlights, Newsletter, etc.).
- **Styling**: Built with Tailwind CSS and custom comic-inspired design tokens.
- **Assets**: Optimized SVG assets using `next/image`.
- **Testing**: Unit tests for critical components using Jest & React Testing Library.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint, Prettier
- **Testing**: Jest, React Testing Library

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing

Run unit tests:

```bash
npm test
```

## Deployment

This project is Vercel-ready.

1.  Push the code to a Git repository.
2.  Import the project into Vercel.
3.  Vercel will automatically detect Next.js and deploy.

## Project Structure

- `/src/components`: UI components (Header, Hero, etc.)
- `/public/assets`: SVG assets
- `/src/app`: Page pages and layout
- `/src/lib`: Utilities (i18n placeholder)
