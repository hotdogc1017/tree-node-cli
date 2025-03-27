# tree-node-cli

## Installation

As a one-time command tool:
```bash
npx @hotdogc1017/tree-node-cli@latest
```

As a development dependency:
```bash
npm add -D @hotdogc1017/tree-node-cli
```

## Usage
Extends the original `tree-node-cli` with the following options:

  - `--allow-gitignore` (in Node as `allowGitignore`): Ignores `.gitignore` file rules and shows all files. Defaults to `false`.

For other usage and configurations, please refer to the [original repository's README](https://github.com/yangshun/tree-node-cli)

## Notes
Includes the following changes:
  - Removed support for getting folder size: The fast-folder-size dependency doesn't support ESM. Therefore the dependency has been removed.
  - Respects `.gitignore` file rules: By default excludes files ignored in `.gitignore`. Can be overridden by specifying the option: pass `allowGitignore` in Node or `--allow-gitignore` in CLI.

## Credits
Thanks to [yangshun](https://github.com/yangshun)
