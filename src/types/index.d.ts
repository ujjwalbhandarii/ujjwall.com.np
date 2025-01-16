type BlogMetaT = {
  id: string;
  date: string;
  title: string;
  tags: string[];
};

type BlogPostT = {
  meta: BlogMeta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

type GithubFiletreeT = {
  tree: [
    {
      path: string;
    },
  ];
};

type MDXT = {
  date: string;
  title: string;
  tags: string[];
};
