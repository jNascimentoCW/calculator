import OutputTableData from "./OutputTableData";

import { calculateInvestmentResults, formatter } from "../../util/investment";

export default function Output({ input }) {
  const result = calculateInvestmentResults(input);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

  return (
    <div id="output">
      <table>
        <OutputTableData
          className="table-output-head"
          year="Year"
          investmentValue="Investment Value"
          interest="Interest (Year)"
          totalInterest="Total Interest"
          investedCapital="Invested Capital"
        />

        {result.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;
          const totalAmountInvested = result.valueEndOfYear - totalInterest;
          return (
            <OutputTableData
              key={result.year}
              className="table-output-content"
              year={result.year}
              investmentValue={formatter.format(result.valueEndOfYear)}
              interest={formatter.format(result.interest)}
              totalInterest={formatter.format(totalInterest)}
              investedCapital={formatter.format(totalAmountInvested)}
            />
          );
        })}
      </table>
    </div>
  );
}
