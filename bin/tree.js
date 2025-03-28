#!/usr/bin/env node
'use strict';

const program = require('commander');

const pkg = require('../package.json');
const tree = require('../src/index');

const PATTERN_SEPARATOR = '|';

program
  .version(pkg.version)
  .option('-a, --all-files', 'All files, include hidden files, are printed.')
  .option('--dirs-first', 'List directories before files.')
  .option('-d, --dirs-only', 'List directories only.')
  .option(
    '-s, --sizes',
    'Print the size of each file in bytes along with the name.',
  )
  .option(
    '-I, --exclude [patterns]',
    'Exclude files that match the pattern. | separates alternate patterns. ' +
      'Wrap your entire pattern in double quotes. E.g. `"node_modules|coverage".',
    (string) => string.split(PATTERN_SEPARATOR),
  )
  .option(
    '-L, --max-depth <n>',
    'Max display depth of the directory tree.',
    parseInt,
  )
  .option('-r, --reverse', 'Sort the output in reverse alphabetic order.')
  .option('-F, --trailing-slash', "Append a '/' for directories.")
  .option('-S, --line-ascii', 'Turn on ASCII line graphics.')
  .option('--allow-gitignore', 'Allow .gitignore to exclude files.');

program.parse(process.argv);
const path = program.args[0] || '.'; // Defaults to CWD if not specified.

const options = {
  allFiles: program.allFiles,
  dirsFirst: program.dirsFirst,
  dirsOnly: program.dirsOnly,
  sizes: program.sizes,
  exclude: program.exclude,
  maxDepth: program.maxDepth,
  reverse: program.reverse,
  trailingSlash: program.trailingSlash,
  ascii: program.lineAscii,
  allowGitignore: program.allowGitignore,
};

Object.keys(options).forEach((key) => {
  if (options[key] === undefined) {
    delete options[key];
  }
});

if (options.exclude) {
  options.exclude = options.exclude.map((pattern) => new RegExp(pattern));
}

const output = tree(path, options);
console.log(output);
