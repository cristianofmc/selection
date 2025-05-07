import { getUserDetails, getReposDetails } from '../lib/github-api';
import { generateUserMetadata } from '../lib/metadata-utils';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import ProjectArea from '../components/ProjectArea'; // Novo client component

export async function generateMetadata() {
  const user = await getUserDetails();
  return generateUserMetadata(user, 'Projects');
}

export default async function HomePage() {
  const user = await getUserDetails();
  const repos = await getReposDetails();

  const menuItems = [
    { name: 'Projects', href: '' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <div className="max-w-7xl mx-auto sm:px-6 md:px-8 pb-4 font-roboto">
      <Hero>{user.name}</Hero>
      <Menu items={menuItems} />
      <ProjectArea user={user} repos={repos} />
    </div>
  );
}
