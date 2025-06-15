'use client';

import { useState } from 'react';
import TopicSearch from './TopicSearch';
import Projects from './Projects';
import TopicContext from '../lib/topicContext';
import { filterReposByTopics } from '../lib/github-api';

export default function ProjectArea({ user, repos }) {
  const [topicSearch, setTopicSearch] = useState([]);
  const filteredRepos = filterReposByTopics(repos, topicSearch);

  return (
    <TopicContext.Provider value={[topicSearch, setTopicSearch]}>
      <div className="mt-11">
        <TopicSearch />
      </div>
      <section className="mt-4">
        <Projects>{filteredRepos}</Projects>
      </section>
    </TopicContext.Provider>
  );
}
