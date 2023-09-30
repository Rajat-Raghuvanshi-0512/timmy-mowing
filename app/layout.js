import './globals.css';
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: '../public/fonts/acid-grotesk-regular.otf',
});

export const metadata = {
  title: "Timmy's Mowing",
  description: 'Best gardening service provider in Australia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
