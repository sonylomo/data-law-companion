import { PortableTextComponents } from "@portabletext/react";

export const components: PortableTextComponents = {
    marks: {
      em: ({ children }) => (
        <em className="text-gray-600 font-semibold">{children}</em>
      ),

      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <a
            href={value?.href}
            target={target}
            rel={target === "_blank" ? "noindex nofollow" : ""}
          >
            {children}
          </a>
        );
      },
    },
    block: {
      h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
      h2: ({ children }) => (
        <h2 className="text-2xl text-dark-grey">{children}</h2>
      ),
      normal: ({ children }) => <p className="text-lg py-3">{children}</p>,
    },
  };
