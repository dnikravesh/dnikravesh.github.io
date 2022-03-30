module.exports = {
  displayName: {
    name: 'ESLINT',
    color: 'magentaBright',
  },
  runner: 'eslint',
  modulePathIgnorePatterns: ['/node_modules/', '/.next/', '/public/'],
  testPathIgnorePatterns: ['/graphql/*', '/analytics/*'],
  testMatch: ['./**/*.(js|jsx|ts|tsx)'],
  watchPlugins: ['jest-runner-eslint/watch-fix'],
};
