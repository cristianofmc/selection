import { getUserDetails } from '../../lib/github-api';
import { generateUserMetadata } from '../../lib/metadata-utils';
import Hero from '../../components/Hero';
import Menu from '../../components/Menu';
import ReactMarkdown from 'react-markdown';
import configData from '../../lib/config.json';
import LinkRenderer from '../../components/LinkRender';

export async function generateMetadata() {
  const user = await getUserDetails();
  return generateUserMetadata(user, 'Contact');
}

export default async function ContactPage() {
  const user = await getUserDetails();

  const contactMd = `Let me help you **innovate**, **produce better**, or have a **good conversation**!  
  Please, contact me via [linkedin](${configData.LINKEDIN_URL}).  
  I will answer you as soon as possible. 😀`;

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
          <div id="contact" className="flex mx-4 space-x-4">
            <div className="pt-2 max-w-md">
              <ReactMarkdown components={{ a: LinkRenderer }}>
                {contactMd}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
