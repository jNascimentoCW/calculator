import logo from "../../public/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="a bag full of money" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
