export type WorkType = {
    id: string;
    title: string;
    thumb:{
      url: string;
    };
    body: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    tags: Tag[];
    link: string;
  };

  export type Tag = {
    id: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  };

  export type Blog = {
    id: string;
    title: string;
    icon: string;
    thumb:{
      url: string;
    };
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  };