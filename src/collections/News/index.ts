import { CollectionConfig } from "payload/types";

export const News: CollectionConfig = {
  slug: "news",
  access: {
    read: () => {
      return true;
    },
    // {
    //   return {
    //     _status: {
    //       equals: "published",
    //     },
    //   };
    // },
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      index: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
