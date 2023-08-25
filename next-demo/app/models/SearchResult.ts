export interface ISearchResult {
  hits: IHits[];
}

export interface IHits {
  id: string;
  headline: string;
  employer: IEmployer;
}

export interface IEmployer {
  name: string;
}
