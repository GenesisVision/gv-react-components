module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  testRegex: "test\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(scss)$": "identity-obj-proxy"
  },
  setupFiles: ["<rootDir>/setupTests.ts"]
};
