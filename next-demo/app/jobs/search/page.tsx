"use client";

import { ISearchResult } from "@/app/models/SearchResult";
import { ChangeEvent, FormEvent, useState } from "react";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState<ISearchResult>();

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      "https://jobsearch.api.jobtechdev.se/search?q=" +
        userInput +
        "&offset=0&limit=10"
    );
    const result: ISearchResult = await response.json();
    setSearchResults(result);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={userInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUserInput(e.target.value);
          }}
        />
        <button>Sök</button>
      </form>

      {searchResults && (
        <section>
          {searchResults.hits.map((hit) => (
            <article key={hit.id}>
              <h4>{hit.headline}</h4>
              <p>{hit.employer.name}</p>
            </article>
          ))}
        </section>
      )}
    </>
  );
};

export default Search;
