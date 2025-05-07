
export const metadata = {
    title: 'Cristiano Felipe - Projects',
    description: 'Bio ou descrição aqui...',
    keywords: [
      'web design', 'web', 'development', 'website', 'portifolio',
      'backend', 'frontend', 'architecture', 'cristiano',
      'cristiano felipe', 'cristiano castro', 'castro', 'felipe',
      'designer', 'freelancing'
    ],
    openGraph: {
      title: 'Cristiano Felipe - Projects',
      description: 'Bio ou descrição aqui...',
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
  