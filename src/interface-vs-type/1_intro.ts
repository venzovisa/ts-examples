/*
    Source: https://blog.logrocket.com/types-vs-interfaces-typescript/
    GitHub: https://www.github.com/venzovisa/ts-examples

    Types vs. interfaces in TypeScript

    What is TS afterall?

    JavaScript
    - String
    - Boolean
    - Number
    - Array

    TypeScript
    - Tuple [number, string, boolean], (string | number | boolean)[], string[], number[], Custom[]
    - Enum { ADMIN, USER }
    - Custom types
*/

// enum AccountTypes { ADMIN = 0, USER = 1 }
const admin = 'ADMIN';
const user = 'user';
// AccountTypes.ADMIN
// console.log(AccountTypes[admin]);