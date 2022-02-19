interface ImportMetaEnv {
  readonly PUBLIC_ALGOLIA: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
