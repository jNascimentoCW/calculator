import InputSection from "./InputSection";

export default function Input({ handleChange, input }) {
  return (
    <div id="input">
      <InputSection
        text="INITIAL INVESTMENT"
        value={input.initialInvestment}
        handleChange={(event) =>
          handleChange(event.target.value, "initialInvestment")
        }
      />
      <InputSection
        text="ANNUAL INVESTMENT"
        value={input.annualInvestment}
        handleChange={(event) =>
          handleChange(event.target.value, "annualInvestment")
        }
      />
      <InputSection
        text="EXPECTED RETURN"
        value={input.expectedReturn}
        handleChange={(event) =>
          handleChange(event.target.value, "expectedReturn")
        }
      />
      <InputSection
        text="DURATION"
        value={input.duration}
        handleChange={(event) => handleChange(event.target.value, "duration")}
      />
    </div>
  );
}
