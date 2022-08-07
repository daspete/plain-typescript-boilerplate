module.exports = {
    displayName: {
        name: 'testproject',
        color: 'yellow'
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: "coverage",
    collectCoverageFrom: [
        "**/*.ts"
    ],
    coveragePathIgnorePatterns: [
        "jest.config.js",
        "/node_modules/",
        "/build/",
    ],
    coverageThreshold: {
        './**/**/*.ts': {
            branches: 60,
            functions: 70,
            lines: 70,
            statements: -10
        }
    }
};
