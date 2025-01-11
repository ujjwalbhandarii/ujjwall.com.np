type BlogMeta = {
  id: string;
  date: string;
  title: string;
  tags: string[];
};

type BlogPost = {
  meta: BlogMeta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
