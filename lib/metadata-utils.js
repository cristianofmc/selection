export function generateUserMetadata(user, pageTitle = '') {
    const fullTitle = pageTitle ? `${pageTitle} - ${user.name}` : user.name;
  
    return {
      title: fullTitle,
      description: user.bio,
      openGraph: {
        title: fullTitle,
        description: user.bio,
        url: `https://selection-dun.vercel.app`, 
        type: 'website',
      },
      keywords: [
        'web design', 'development', 'portfólio', 'Cristiano', 'frontend', 'backend', 'freelancing'
      ],
    };
  }
  