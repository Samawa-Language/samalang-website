import type { StarlightPlugin } from '@astrojs/starlight/types';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export default function versionSelectorPlugin(): StarlightPlugin {
  return {
    name: 'version-selector',
    hooks: {
      'config:setup'({ updateConfig }) {
        const componentPath = path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          '../components/VersionSelector.astro'
        );
        updateConfig({
          components: {
            Header: componentPath,
          },
        });
      },
    },
  };
}
