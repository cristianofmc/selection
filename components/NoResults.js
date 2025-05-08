import TopicContext from "../lib/topicContext";
import React, { useContext } from "react";

const NoResults = () => {
  const [topicSearch] = useContext(TopicContext);

  const lastTag = topicSearch.length > 0 ? topicSearch.at(-1) : '';

  return (
    <div className="grid justify-items-center pt-3">
      <div id="contact" className="flex mx-4 space-x-4">
        <div className="my-8 pt-2 max-w-md">
          <p>No matching results.</p>
          {lastTag && (
            <p>
              Verify that <strong>{lastTag}</strong> was typed correctly.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoResults;
