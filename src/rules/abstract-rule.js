export default class AbstractRule {

    constructor () {
        if (new.target == AbstractRule)
            throw new Error('Abstract classes can\'t be instantiated.');
        return this;
    }

    check (element) {
        throw new Error('Method "check()" must be implemented.');
    }
}