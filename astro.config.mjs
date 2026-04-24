import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: 'https://samalang.netlify.app/',
  integrations: [
    starlight({
      title: "Samalang",
      favicon: "/icon-extension.ico",
      logo: {
        src: "./src/assets/icon-extension.png",
      },
      head: [
        // Google Site Verification
        {
          tag: "meta",
          attrs: {
            name: "google-site-verification",
            content: "GM7nwkL1De6nDTqyLvcNws0aBA97tgP-SCoCjAFu628",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://samalang.netlify.app/og-image.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://samalang.netlify.app/og-image.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "description",
            content: "Samalang - Dokumentasi bahasa pemrograman berbasis bahasa Samawa. Pelajari sintaksis, instalasi, dan panduan lengkap di sini.",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:description",
            content: "Pelajari Samalang, bahasa pemrograman unik berbasis kearifan lokal Samawa.",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "website",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        }
      ],
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
          items: [
            { label: "Get Started", slug: "guides/get-started" },
            { label: "Installation Guide", slug: "guides/example" }
          ],
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
          label: "Editor Support",
          items: [
            {label: "VSCode", slug: "editor-support/vscode" },
            {label: "Zed", slug: "editor-support/zed" },
          ]
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
