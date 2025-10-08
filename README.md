# Next.js Frontend Boilerplate

A clean and modern Next.js frontend boilerplate with TypeScript and Tailwind CSS, designed for rapid development and easy customization.

## 🚀 Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **ESLint** for code quality
- **Fast Refresh** for instant feedback during development
- **Optimized builds** for production

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with Tailwind
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Home page (your custom component)
│   └── components/              # Reusable components directory
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot workspace instructions
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

The project is already set up and ready to use. Dependencies are installed and the development server is running.

### Development

The development server is currently running on:
```
http://localhost:3002
```

To start the development server manually:
```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📝 Usage

### Adding Your TSX Components

You can replace the content in `src/app/page.tsx` with your own TSX code. The current component demonstrates:

- React hooks (useState)
- Tailwind CSS styling
- TypeScript usage
- Component structure
- Client-side interactivity

### Creating New Components

Add your reusable components in the `src/components/` directory:

```tsx
// src/components/MyComponent.tsx
interface MyComponentProps {
  title: string;
}

export default function MyComponent({ title }: MyComponentProps) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}
```

Then import and use in your pages:

```tsx
// src/app/page.tsx
import MyComponent from '@/components/MyComponent';

export default function Home() {
  return <MyComponent title="Hello World" />;
}
```

## 🎨 Styling

This project uses Tailwind CSS for styling. You can:

- Use utility classes directly in your TSX
- Customize colors and themes in `tailwind.config.js`
- Add custom CSS in `src/app/globals.css`

## 🔧 Configuration

### TypeScript

The TypeScript configuration (`tsconfig.json`) is optimized for Next.js development with:
- Strict mode disabled for easier development
- Path mapping for `@/*` imports
- ES2015+ support for modern JavaScript features

### Tailwind CSS

Tailwind is configured to scan all TSX/JSX files in the `src/` directory. Customize colors, fonts, and other design tokens in `tailwind.config.js`.

### Next.js

The Next.js configuration (`next.config.js`) is minimal and ready for customization as your project grows.

## 📦 Dependencies

### Production Dependencies
- `react` & `react-dom` - React framework
- `next` - Next.js framework
- `lucide-react` - Icon library (if used in your components)

### Development Dependencies
- `typescript` - TypeScript support
- `@types/*` - Type definitions
- `tailwindcss` - Utility-first CSS framework
- `eslint` - Code linting
- `postcss` & `autoprefixer` - CSS processing

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 💡 Tips

1. **Client Components**: Use `"use client"` directive for components that need browser APIs or React hooks
2. **Server Components**: Default in App Router - great for data fetching and SEO
3. **Path Mapping**: Use `@/` prefix for clean imports from the `src/` directory
4. **Tailwind**: Utilize the Tailwind CSS IntelliSense extension for better development experience

## 🎯 Ready for Your Code

The boilerplate is set up and running. Simply replace the content in `src/app/page.tsx` with your TSX components and start building your application!

Visit [http://localhost:3002](http://localhost:3002) to see your application running.