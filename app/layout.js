import '../styles/globals.css';

export const metadata = {
  title: 'Projects',
  description: 'Portifolio',
  keywords: [
    'web design', 'web', 'development', 'website', 'portifolio',
    'backend', 'frontend', 'architecture', 'cristiano',
    'cristiano felipe', 'cristiano castro', 'castro', 'felipe',
    'designer', 'freelancing'
  ],
  openGraph: {
    title: 'Projects',
    description: 'Portifolio',
    url: 'https://selection-dun.vercel.app',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
