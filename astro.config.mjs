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
        // Author / Creator
        {
          tag: "meta",
          attrs: {
            name: "author",
            content: "Rizqy Fajrul Syabani",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "creator",
            content: "Rzfan03",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "publisher",
            content: "Samawa-Language",
          },
        },
        // Primary SEO
        {
          tag: "meta",
          attrs: {
            name: "description",
            content: "SamaLang — bahasa pemrograman open-source berbasis Lua dengan keywords bahasa Samawa. Transpiler cepat, ringan, dan sarat nilai budaya. Created by Rzfan03.",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "keywords",
            content: "SamaLang, Samawa, programming language, bahasa pemrograman, Lua transpiler, Samawa culture, open-source, Rzfan03, Rizqy Fajrul Syabani",
          },
        },
        // Canonical
        {
          tag: "link",
          attrs: {
            rel: "canonical",
            href: "https://samalang.netlify.app/",
          },
        },
        // Open Graph
        {
          tag: "meta",
          attrs: {
            property: "og:title",
            content: "SamaLang — Programming Language with Samawa Cultural Roots",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:description",
            content: "SamaLang is an open-source Lua-based transpiler using Samawa language keywords. Fast, lightweight, and culturally rooted. Created by Rzfan03 (Rizqy Fajrul Syabani).",
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
            property: "og:url",
            content: "https://samalang.netlify.app/",
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
            property: "og:site_name",
            content: "SamaLang",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:locale",
            content: "en_US",
          },
        },
        // Twitter Card
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:title",
            content: "SamaLang — Programming Language with Samawa Cultural Roots",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:description",
            content: "Open-source Lua-based transpiler using Samawa language keywords. Created by Rzfan03.",
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
            name: "twitter:creator",
            content: "@Rzfan03",
          },
        },
        // Robots
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content: "index, follow, max-image-preview:large, max-snippet:-1",
          },
        },
        // Geo
        {
          tag: "meta",
          attrs: {
            name: "geo.region",
            content: "ID-NTB",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "geo.placename",
            content: "Sumbawa",
          },
        },
        // JSON-LD Structured Data
        {
          tag: "script",
          attrs: {
            type: "application/ld+json",
          },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": "SamaLang",
            "description": "An open-source Lua-based transpiler using Samawa language keywords. Fast, lightweight, and culturally rooted.",
            "url": "https://samalang.netlify.app/",
            "codeRepository": "https://github.com/Samawa-Language/samawa-language",
            "programmingLanguage": "Lua",
            "license": "https://opensource.org/licenses/MIT",
            "author": {
              "@type": "Person",
              "name": "Rizqy Fajrul Syabani",
              "alternateName": "Rzfan03",
              "url": "https://github.com/Rzfan03"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Samawa-Language",
              "url": "https://github.com/Samawa-Language"
            },
            "keywords": ["SamaLang", "Samawa", "Lua", "programming language", "transpiler", "Indonesian programming"],
            "inLanguage": ["en", "id"],
            "operatingSystem": ["Linux", "macOS", "Windows"]
          }),
        },
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
