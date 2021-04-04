// jest.config.js

module.exports = {
  clearMocks: true,
  verbose: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    "\\.jsx?$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
  },
  testRegex: "\\.test\\.jsx?$",
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
