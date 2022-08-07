module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    settings: {

    },
    extends: [
        'airbnb/base',
        'airbnb-typescript/base',
        // 'airbnb/hooks',
        // 'plugin:@typescript-eslint/eslint-recommended',
        // 'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        // 'plugin:jest/recommended',
        'prettier',
        // 'prettier/react',
    ],
    env: {
        node: true,
        browser: true,
        jest: true,
        serviceworker: true,
    },
    // ignorePatterns: ['build', 'test', '*.js', '*.config.js', 'node_modules'],
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'comma-dangle': ['error', 'never'],
        semi: ['error', 'always'],
        'array-element-newline': [
            'error',
            {
                ArrayExpression: 'consistent',
                ArrayPattern: { minItems: 3 }
            }
        ],
        'space-before-function-paren': ['error', 'never'],
        'space-before-blocks': ['error', 'always'],
        'keyword-spacing': 'error',

        'no-undef': 'warn',
        'no-underscore-dangle': 'warn',
        'no-param-reassign': 'warn',
        // '@typescript-eslint/explicit-module-boundary-types': 'off',
        // '@typescript-eslint/no-use-before-define': 'warn',
        // '@typescript-eslint/no-unused-vars': 'error',
        'import/no-extraneous-dependencies': ['off'],
        // 'import/extensions': ['off'],
        // 'import/no-self-import': 'error',
        // 'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
        // 'import/prefer-default-export': 'off',
        // 'react/destructuring-assignment': 'off',
        // 'react/jsx-props-no-spreading': 'warn',
        // 'react/prop-types': 'off',
    },
};
