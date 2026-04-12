export default class Validations{
    static isString(value: string): boolean {
        return String(value).trim().length > 0 && value !== "null" && value !== "undefined"? true : false;
    }
}

console.log(Validations.isString('b'));
