import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import tree from '@hotdogc1017/tree-node-cli';

function main() {
  const sourceDir = path.join(fileURLToPath(import.meta.url), '../..');
  console.log(
    tree(sourceDir, {
      allowGitignore: false,
    }),
  );
}

main();
