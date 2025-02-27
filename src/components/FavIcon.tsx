import { Helmet } from 'react-helmet-async';

export default function FavIcon() {
  return (
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon.ico"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/favicon.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="/site.webmanifest"
      />
      <meta
        name="theme-color"
        content="#4f46e5"
      />
    </Helmet>
  );
} 