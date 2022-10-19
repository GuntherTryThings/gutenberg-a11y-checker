import AbstractRule from './abstract-rule.js';

export default class FontSizeRule extends AbstractRule {

    check (element) {
        console.log(element.style);
    }
}