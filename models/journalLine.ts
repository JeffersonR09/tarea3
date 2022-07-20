import { Journal } from "./journal";

class JournalLine {
  code: string;
  account: string;
  debit: number;
  credit: number;
  journal: Journal[];

  constructor(
    code: string,
    account: string,
    debit: number,
    credit: number,
    journal: Journal
  ) {
    this.code = code;
    this.account = account;
    this.debit = debit;
    this.credit = credit;
    this.journal = [];
  }
}

export { JournalLine };
