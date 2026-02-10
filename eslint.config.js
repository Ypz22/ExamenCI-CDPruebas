export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 'latest',
            },
        },
        rules: {
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
        },
    }
];