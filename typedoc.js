module.exports = {
  mode: 'modules',
  out: 'docs/api',
  theme: 'default',
  ignoreCompilerErrors: true,
  includeDeclarations: true,
  // excludePrivate: true,
  // excludeNotExported: 'true',
  excludeExternals: true,
  target: 'ES6',
  moduleResolution: 'node',
  preserveConstEnums: true,
  stripInternal: false,
  // suppressExcessPropertyErrors: 'true',
  // suppressImplicitAnyIndexErrors: 'true',
  module: 'commonjs',
  readme: 'README.md',
  tsconfig: 'tsconfig.json',
  includes: './',
  exclude: [
    'node_modules',
    'node_modules/*',
    '**/node_modules/**/*',
    '**/*.spec.*',
    '**/__tests__/**/*',
    '**/__test_utils__/**/*',
    '**/__fixtures__/**/*',
    '**/testsuite/**/*',
    '.expo',
    '.expo/**/*',
    '**/.expo/**/*',
    '.vscode',
    '.vscode/**/*',
    '**/.vscode/**/*',
  ],
};
