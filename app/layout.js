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
      {/* <script>(function(w,d,s,l,i){w[l]=w[l] ||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MG2KHT7G');
      </script> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MG2KHT7G"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
    </html>
  );
}
