import { CollectionConfig } from "payload/types";

export const Containers: CollectionConfig = {
  slug: "containers",
  access: { read: () => true },
  fields: [
    {
      name: "type",
      type: "text",
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
    {
      name: "relations",
      type: "array",
      required: true,
      minRows: 2,
      maxRows: 10,
      interfaceName: "Slider",
      fields: [
        {
          type: "relationship",
          name: "relation",
          label: "Categories To Show",
          relationTo: ["installations", "news"],
          hasMany: false,
        },
      ],
    },
  ],
};
