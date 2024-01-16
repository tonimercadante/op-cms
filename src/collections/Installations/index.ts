import { CollectionConfig } from "payload/types";

export const Installations: CollectionConfig = {
  slug: "installations",
  access: { read: () => true },
  fields: [
    {
      name: "Name",
      type: "text",
    },
    {
      name: "locationImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: false,
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
