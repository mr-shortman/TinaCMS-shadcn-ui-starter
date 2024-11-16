import { Collection } from "tinacms";

export default {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
    {
      name: "content",
      label: "Blog Post Content",
      type: "rich-text",
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
} as Collection;
