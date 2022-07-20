"use strict";
exports.__esModule = true;
exports.JournalLine = void 0;
var JournalLine = /** @class */ (function () {
    function JournalLine(code, account, debit, credit, journal) {
        this.code = code;
        this.account = account;
        this.debit = debit;
        this.credit = credit;
        this.journal = [];
    }
    return JournalLine;
}());
exports.JournalLine = JournalLine;
