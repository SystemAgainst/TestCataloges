module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    plugins: ['vue', 'prettier'],
    rules: {
        'max-len': [
            "warn",
            {
                "code": 120
            }
        ],
        "no-undef": "off",
        'vue/multi-word-component-names': 'off',
    },
};
