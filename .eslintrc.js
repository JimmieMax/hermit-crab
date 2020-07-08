module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"], // 分号
        "indent": ["error", 2], // 缩紧
        "quotes": ["warn", "single"], // 单引号
        "eqeqeq": "warn", // 使用全等
    }
};