module.exports = {
  testEnvironment: "jsdom",
  testMatch: [
    "**/server/tests/**/*.test.[jt]s?(x)",
    "**/client/src/tests/**/*.test.[jt]s?(x)"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/client/src/tests/setupTests.js"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "server/src/**/*.{js,jsx}",
    "client/src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/cypress/**"
  ],
  coverageDirectory: "coverage"
};
