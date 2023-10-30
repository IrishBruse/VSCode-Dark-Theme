import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import * as fs from "fs";

// Normal Comments
/* Line Comments */
/**
 * Doc Comments
 * param:
 * @param {*function} g Lorem Ipsum Explain Yadda Yadda
 */
function coroutine(g) {
    let it = new Test();
    fs.read();
    return function () {
        return it.next().apply(it, arguments);
    };
}

var step = coroutine(function* () {
    var x = 1 + (yield);
    var y = 1 + (yield);
    yield x + y;
});

/*
 * Block Comments
 */
step();
step(10);
console.log(`Meaning of life: #${step(30).value}.`);

const pattern =
    /^(([^<>()\[\]\\.,;\:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Test {
    Test() {}
}

class MyComponent extends PolymerElement {
    test;

    constructor() {
        super();
    }

    static get template() {
        return `<div> I'm the Component! </div>`;
    }

    static get is() {
        return "my-component";
    }
}

customElements.define("my-component", MyComponent);
