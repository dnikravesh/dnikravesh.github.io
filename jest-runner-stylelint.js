module.exports = {
  displayName: {
    name: 'STYLELINT',
    color: 'cyan',
  },
  runner: 'stylelint',
  modulePathIgnorePatterns: ['/node_modules/', '/.next/', '/public/'],
  moduleFileExtensions: ['css'],
  testMatch: ['**/*.css'],
  watchPlugins: ['jest-runner-stylelint/watch-fix'],
};
