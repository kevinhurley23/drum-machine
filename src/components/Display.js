export default function Display({ text, color }) {
  return (
    <div
      id="display"
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: color }}
    >
      <p id="displayText" className="m-0">
        {text}
      </p>
    </div>
  );
}
