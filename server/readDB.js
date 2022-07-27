const fs = require('fs');
const path = require('path');

class DbMgmt {
    constructor() {}

    async readDbData(dbName) {
        const fullPath = path.join(__dirname, `db/${dbName}`);
        const data = fs.readFileSync(fullPath);
        return data;
    }
}

module.exports = new DbMgmt();