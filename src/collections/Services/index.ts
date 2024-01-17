import { CollectionConfig } from "payload/types";

export const Services: CollectionConfig = {
  slug: "services",
  access: { read: () => true },
  fields: [
    {
      name: "Title",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "anchor",
      type: "text",
    },
    {
      name: "serviceIcon",
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
