import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: 'https://samalang.netlify.app/',
  integrations: [
    starlight({
      title: {
        en: 'SamaLang',
        id: 'SamaLang',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        id: {
          label: 'Bahasa Indonesia',
          lang: 'id',
        },
      },
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
          label: "Concepts",
          items: [
            { label: "Data Types", slug: "concepts/data-types" },
            { label: "Operators", slug: "concepts/operators" },
            { label: "Tables", slug: "concepts/tables" },
            { label: "Strings", slug: "concepts/strings" },
          ],
        },
        {
          label: 'Syntax',
          items: [
            { label: 'ada (local)', slug: 'syntax/ada' },
            { label: 'fungsi (function)', slug: 'syntax/function' },
            { label: 'semalik (return)', slug: 'syntax/return' },
            { label: 'lamen (if)', slug: 'syntax/if-statement' },
            { label: 'tres (then)', slug: 'syntax/then' },
            { label: 'lamen_no (else)', slug: 'syntax/else' },
            { label: 'lamen_no_kebali (elseif)', slug: 'syntax/else-if' },
            { label: 'jure_mo (end)', slug: 'syntax/end' },
            { label: 'selama (while)', slug: 'syntax/while' },
            { label: 'untu (while alt)', slug: 'syntax/untu' },
            { label: 'boat (do)', slug: 'syntax/do' },
            { label: 'untuk (for)', slug: 'syntax/for' },
            { label: 'sampe (until)', slug: 'syntax/until' },
            { label: 'jangka_mo (break)', slug: 'syntax/jangka_mo' },
            { label: 'tulis (print)', slug: 'syntax/print' },
            { label: 'nda_isi (nil)', slug: 'syntax/null' },
            { label: 'no (not)', slug: 'syntax/not' },
            { label: 'dan (and)', slug: 'syntax/dan' },
            { label: 'atau (or)', slug: 'syntax/atau' },
            { label: 'tutu (true)', slug: 'syntax/tutu' },
            { label: 'siong (false)', slug: 'syntax/siong' },
            { label: 'lalo (goto)', slug: 'syntax/lalo' },
            { label: 'kenang (require)', slug: 'syntax/kenang' },
            { label: '# (comments)', slug: 'syntax/comments' },
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
