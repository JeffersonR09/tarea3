"use strict";
exports.__esModule = true;
exports.Journal = void 0;
var journalLine_1 = require("./journalLine");
var yup = require("yup");
var Journal = /** @class */ (function () {
    function Journal(date, cliente, consept) {
        this.date = date;
        this.cliente = cliente;
        this.consept = consept;
        this.lines = [];
    }
    Journal.prototype.getTotalDebit = function () {
        return this.lines.reduce(function (acc, line) { return acc + line.debit; }, 0);
    };
    Journal.prototype.getTotalCredit = function () {
        return this.lines.reduce(function (acc, line) { return acc + line.credit; }, 0);
    };
    Journal.prototype.validateTotalAreEquals = function () {
        return this.getTotalCredit() === this.getTotalDebit();
    };
    Journal.prototype.addLine = function (journalDto) {
        var schema = yup.object().shape({
            code: yup.string().required(),
            account: yup.string().required(),
            amount: yup.number().required(),
            operation: yup.string().max(1).required()
        });
        var validatedData = schema.validateSync(journalDto);
        if (journalDto.operation === "C") {
            this.lines.push(new journalLine_1.JournalLine(validatedData.code, validatedData.account, 0, validatedData.amount, this));
        }
        else {
            this.lines.push(new journalLine_1.JournalLine(validatedData.code, validatedData.account, validatedData.amount, 0, this));
        }
    };
    Journal.prototype.deliteLine = function () {
        console.log("Primer copia");
        for (var copia = 0; copia <= this.lines.length; copia++) {
            console.log(this.lines[copia]);
        }
        console.log("Arreglo modificado");
        this.lines.pop();
        console.log(this.lines);
    };
    return Journal;
}());
exports.Journal = Journal;
