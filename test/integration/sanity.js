"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
describe("Sanity", function () {
    it("shall be sane", function () {
        chai.expect(true).is.true;
        chai.expect(false).is.false;
    });
    it("shall not be insane", function () {
        chai.expect(true).is.not.false;
        chai.expect(false).is.not.true;
    });
});
