module.exports = {
  testEnvironment: "node",
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/tests/**/*.test.js"],
};
