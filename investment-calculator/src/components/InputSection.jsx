export default function InputSection({ text, handleChange, value }) {
  return (
    <div className="input-div">
      <label htmlFor="">{text}</label>
      <input
        type="number"
        value={value}
        onChange={(prevEvent) => handleChange(prevEvent, text)}
      />
    </div>
  );
}
