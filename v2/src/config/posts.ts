import ContentProps from "../types/ContentProps";

const posts: ContentProps[] = [
  {
    title: "Posts",
    description: "",
    points: {
      type: "decimal",
      data: [
        {
          type: "link",
          link: "/blog/1",
          openInNewTab: false,
          title: "How do show error bag in laravel?",
          suffix: "Oct 24, 2023 ⋅ Code",
        },
        {
          type: "link",
          link: "/blog/2",
          openInNewTab: false,
          title: "How do show error bag in laravel?",
          suffix: "Oct 26, 2023 ⋅ Code",
        },
        {
          type: "link",
          link: "/blog/3",
          openInNewTab: false,
          title: "Blog post 3",
          suffix: "Oct 30, 2023 ⋅ Life",
        },
      ],
    },
  },
];

export default posts;
