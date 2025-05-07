import Hero from '../../components/Hero';
import Menu from '../../components/Menu';
import configData from '../../lib/config.json';
import { getUserDetails } from '../../lib/github-api';
import ReactMarkdown from 'react-markdown';
import LinkRenderer from '../../components/LinkRender';
import { generateUserMetadata } from '../../lib/metadata-utils';
import Image from 'next/image';

export async function generateMetadata() {
  const user = await getUserDetails();
  return generateUserMetadata(user, 'About');
}

export default async function AboutPage() {
  const user = await getUserDetails();
  const aboutMd = user.bio;

  const menuItems = [
    { name: 'Projects', href: '' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <div className="font-roboto">
      <Hero>{user.name}</Hero>
      <Menu items={menuItems} />
      <section className="mt-16 max-w-7xl mx-auto sm:px-6 md:px-8">
        <div className="grid justify-items-center pt-3">
          <div id="about" className="flex mx-4 space-x-4">
            <Image
                src={user.avatar_url}
                alt="Photo"
                width={112}
                height={112}
                className="rounded-full mr-2"
            />

            <div className="pt-2 max-w-md">
              <ReactMarkdown>{aboutMd}</ReactMarkdown>
              <div className="mt-3">
                <LinkRenderer href={configData.LINKEDIN_URL} className="mr-4">
                  linkedin
                </LinkRenderer>
                <LinkRenderer href={user.html_url} className="mr-4">
                  github
                </LinkRenderer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
