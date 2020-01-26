module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@element/(.*)$': '<rootDir>/src/components/element/$1',
  },
};
