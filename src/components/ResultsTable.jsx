import { calculateInvestmentResults, formatter } from "../util/investment";

const ResultsTable = ({ userInput }) => {
  const annualData = calculateInvestmentResults(userInput);
  let totalInterest = null;
  let investedCapital = userInput.initialInvestment;
  let investmentValue = null;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => {
          totalInterest += data.interest;
          investedCapital += data.annualInvestment;
          investmentValue = investedCapital + totalInterest;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(investmentValue)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
