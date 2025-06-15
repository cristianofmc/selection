'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ContentRender = ({ repo }) => {
  const [readme, setReadme] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!repo?.html_url || !repo?.default_branch) return;

    const url = repo.html_url
      .replace('https://github.com/', 'https://raw.githubusercontent.com/')
      + `/${repo.default_branch}/README.md`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('README not found');
        return res.text();
      })
      .then(setReadme)
      .catch(err => setError(err.message));
  }, [repo]);

  if (!readme) {
    return (
      <div>
        <h1 className="text-xl font-normal pt-4 pb-3">
          {repo.name}
        </h1>
        <p className="text-base font-normal pb-3">
          {repo.description}
        </p>
      </div>
    );
  }

  return (
    <div className="prose dark:prose-invert max-w-none py-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {readme}
      </ReactMarkdown>
    </div>
  );
};

export default ContentRender;
