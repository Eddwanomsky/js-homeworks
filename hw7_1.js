var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    }
];

const regexx = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
const trusted = arr
    .map(item => item.email)
    .filter(email => regexx.test(email));
console.log(trusted);
