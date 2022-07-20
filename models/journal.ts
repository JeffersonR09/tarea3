import { Cliente } from "./cliente";
import { JournalLine } from "./journalLine";
import * as yup from "yup";

interface JournalDTO {
  code: string;
  account: string;
  amount: number;
  operation: string;
}

class Journal {
  date: Date;
  cliente: Cliente;
  consept: string;
  lines: JournalLine[];

  constructor(date: Date, cliente: Cliente, consept: string) {
    this.date = date;
    this.cliente = cliente;
    this.consept = consept;
    this.lines = [];
  }

  getTotalDebit(): number {
    return this.lines.reduce((acc, line) => acc + line.debit, 0);
  }

  getTotalCredit(): number {
    return this.lines.reduce((acc, line) => acc + line.credit, 0);
  }

  validateTotalAreEquals(): boolean {
    return this.getTotalCredit() === this.getTotalDebit();
  }
  addLine(journalDto: JournalDTO) {
    let schema = yup.object().shape({
      code: yup.string().required(),
      account: yup.string().required(),
      amount: yup.number().required(),
      operation: yup.string().max(1).required(),
    });

    const validatedData = schema.validateSync(journalDto);

    if (journalDto.operation === "C") {
      this.lines.push(
        new JournalLine(
          validatedData.code,
          validatedData.account,
          0,
          validatedData.amount,
          this
        )
      );
    } else {
      this.lines.push(
        new JournalLine(
          validatedData.code,
          validatedData.account,
          validatedData.amount,
          0,
          this
        )
      );
    }
  }
  deliteLine() {
    console.log("Primer copia");

    for (let copia = 0; copia <= this.lines.length; copia++) {
      console.log(this.lines[copia]);
    }

    console.log("Arreglo modificado");
    this.lines.pop();

    console.log(this.lines);
  }
}

export { Journal };
