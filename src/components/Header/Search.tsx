/* jsxImportSource: react */
import 'instantsearch.css/themes/algolia-min.css';
import React from 'react';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight
} from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const searchClient = instantMeiliSearch(
  'http://127.0.0.1:7700',
  'q7QHwGiX841a509c8b05ef29e55f2d94c02c00635f729ccf097a734cbdf7961530f47c47'
);

const Search = () => (
  <InstantSearch indexName="*" searchClient={searchClient}>
    <SearchBox autoFocus />
    <Hits hitComponent={Hit} />
  </InstantSearch>
);

const Hit = ({ hit }) => <Highlight attribute="name" hit={hit} />;

export default Search;
