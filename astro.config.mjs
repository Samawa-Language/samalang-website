import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Samalang",
      favicon: "/icon-extension.ico",
      logo: {
        src: "./src/assets/icon-extension.png",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Samawa-Language/samawa-language",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [{ label: "Get Started", slug: "guides/get-started" }, { label: "Installation Guide", slug: "guides/example" }],
        },
      
          {
            label: 'Syntax',
            items: [
              { label: 'local', slug: 'syntax/ada' },
              { label: 'while', slug: 'syntax/untu' },
              { label: 'break', slug: 'syntax/jangka_mo' },
              { label: 'nil', slug: 'syntax/null' },
              { label: 'print', slug: 'syntax/print' },
              { label: 'if', slug: 'syntax/if-statement' },
              { label: 'then', slug: 'syntax/then' },
              { label: 'end', slug: 'syntax/end' },
              { label: 'function', slug: 'syntax/function' },
              { label: 'return', slug: 'syntax/return' },
              { label: 'while (alternative)', slug: 'syntax/while' },
              { label: 'do', slug: 'syntax/do' },
              { label: 'else', slug: 'syntax/else' },
              { label: 'elseif', slug: 'syntax/else-if' },
              { label: 'until', slug: 'syntax/until' },
              { label: 'for', slug: 'syntax/for' },
              { label: 'not', slug: 'syntax/not' },
              { label: 'comments', slug: 'syntax/comments' },
            ],
          },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
