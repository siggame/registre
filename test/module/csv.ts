import * as chai from "chai";
import * as fse from "fs-extra";

import * as csv from "../../src/csv";

describe("CSV Module", function() {

    describe("fileExists", function() {
        const VALID_TEST_FILE: string = "VALID_TEST_FILE.txt";
        const INVALID_TEST_FILE: string = "INVALID_TEST_FILE.txt";
        before("Create test file", async () => {
            await fse.writeFile(VALID_TEST_FILE, "dang");
        });
        after("Create test file", async () => {
            await fse.remove(VALID_TEST_FILE);
        });

        it("should resolve true if the file does exist", async function() {
            const exists = await csv.fileExists(VALID_TEST_FILE);
            chai.expect(exists).to.be.true;
        });
        it("should resolve false if the file does not exist", async function() {
            const exists = await csv.fileExists(INVALID_TEST_FILE);
            chai.expect(exists).to.be.false;
        });
    });

    //TODO: Test initialize()
    //TODO: Test writeRow()
});