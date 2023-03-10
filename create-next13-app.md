# Create Next 13 app with TypeScript, TailwindCSS, Google font, React Icons

### Replace application-name your project name
```
npx create-next-app@latest --experimental-app application-name
```

### Change directory to Project  
```
cd application-name
```  

### Open VS Code
```
code .
```  

### Install TailwindCSS, PostCSS, Prettier, Tailwind Forms plugin, React Icons
```
npm install -D tailwindcss postcss autoprefixer prettier prettier-plugin-tailwindcss @tailwindcss/forms react-icons --save
```  

### Autogenrate Tailwind and PostCSS config files
```
npx tailwindcss init -p
```  

### Add code to tailwind.config.js and save
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['var(--font-raleway)'],
        Inter: ['var(--font-inter)'],
      },
      colors: {
        brand: {
          primary: '#BD00FF',
          input: '#393939',
          card: '#262626',
          action: '#39399',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
```

### Add code in ./app/globals.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  [type='email'],
  [type='text'],
  [type='url'],
  [type='password'],
  [type='number'],
  [type='date'],
  [type='datetime-local'],
  [type='month'],
  [type='search'],
  [type='tel'],
  [type='time'],
  [type='week'],
  [multiple],
  textarea,
  select {
    @apply w-full border-b border-l-0 border-r-0 border-t-0 border-b-gray-500 bg-brand-input px-6 py-4 focus:outline-1 focus:outline-white;
  }

  svg {
    @apply inline;
  }
}
```

### Add code in ./app/layout.tsx
```
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${inter.variable} bg-black font-Inter text-white`}>
        {children}
      </body>
    </html>
  )
}
```

### Add code ./app/page.tsx
```
export default function Home() {
  return (
    <main>
      <h1 className='text-6xl'>Next 13</h1>
    </main>
  )
}
```
### Remove ./app/page.module.css
### Remove ./public all files
### Create images folder
### Create brand folder
### Create ./componenets folder

## Run app
```
npm run dev
```






