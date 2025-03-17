export default function OutputTableData({
  year,
  investmentValue,
  interest,
  totalInterest,
  investedCapital,
  ...props
}) {
  return (
    <thead>
      <tr {...props}>
        <th>{year}</th>
        <th>{investmentValue}</th>
        <th>{interest}</th>
        <th>{totalInterest}</th>
        <th>{investedCapital}</th>
      </tr>
    </thead>
  );
}
