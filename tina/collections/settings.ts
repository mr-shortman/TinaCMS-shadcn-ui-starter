import { Collection } from "tinacms";

export default {
  label: "Site Settings",
  name: "settings",
  path: "content/settings",
  format: "json",
  fields: [
    {
      type: "string",
      label: "Site Title",
      name: "title",
    },
    {
      type: "object",
      label: "Navigation",
      name: "navigation",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.label }),
        defaultItem: {
          label: "Nav Item Label",
          link: "/",
          external: false,
        },
      },
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
        {
          name: "external",
          label: "External Link",
          type: "boolean",
        },
      ],
    },
  ],
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
} as Collection;
