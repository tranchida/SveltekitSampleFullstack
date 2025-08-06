# SvelteKit Sample Fullstack

This is a fullstack sample project using [SvelteKit](https://kit.svelte.dev/), Prisma, and Vite. It demonstrates a modern web application setup with a Svelte frontend and a Node.js backend, including database integration.

## Features

- SvelteKit for frontend and backend routing
- Prisma ORM for database access
- Vite for fast development and builds
- Docker support
- User management example

## Getting Started

### Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Development

Start the development server:

```bash
pnpm run dev
# or
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Database Setup

Edit `prisma/schema.prisma` to configure your database.

Run migrations:

```bash
pnpm prisma migrate dev
```

Seed the database:

```bash
pnpm run seed
```

### Building for Production

```bash
pnpm run build
```

Preview the production build:

```bash
pnpm run preview
```

## Docker

Build and run the app in Docker:

```bash
docker build -t sveltekit-app .
docker run -p 5173:5173 sveltekit-app
```

## Deployment

To deploy, install the appropriate [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## License

MIT

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
