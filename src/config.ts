export const SITE = {
  title: 'Devs Docs',
  description: 'Comparative Literature: JavaScript, Python, and Rust',
  defaultLanguage: 'en_US'
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
};

export const KNOWN_LANGUAGES = {
  English: 'en'
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   algolia_app: import.meta.env.PUBLIC_ALGOLIA_APP_ID,
//   algolia_api: import.meta.env.PUBLIC_ALGOLIA_API_KEY,
//   algolia_index: import.meta.env.PUBLIC_ALGOLIA_INDEX // search only API key, not admin API key
// };

export const SIDEBAR = {
  en: [
    { text: '', header: true },
    { text: 'Programming Language', header: true },
    { text: 'Introduction', link: 'en/introduction' },
    { text: 'Javascript/Typescript', link: 'en/javascript' },
    { text: 'Python', link: 'en/python' },
    { text: 'Rust', link: 'en/rust' },

    { text: 'Comparative Analysis', header: true },
    { text: 'Syntax', link: 'en/syntax' },
    { text: 'Common Cases', link: 'en/cases' },
    { text: 'Similarities', link: 'en/similar' },
    { text: 'Differences', link: 'en/difference' },

    { text: 'Reference', header: true },
    { text: 'Javascript', link: 'en/jsref' },
    { text: 'Python', link: 'en/pyref' },
    { text: 'Rust', link: 'en/rsref' }
  ]
};
