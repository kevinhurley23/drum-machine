import Pad from "./Pad";

export default function PadBank({ bank, color, playSound, power }) {
  function importAll(r) {
    return r.keys().map(r);
  }

  const clips = importAll(require.context("../audio"));

  return (
    <div
      id="pad-bank"
      className="d-flex flex-wrap p-1 justify-content-evenly align-items-center"
    >
      {bank.map((btn) => (
        <Pad
          power={power}
          key={btn.id}
          id={btn.id}
          src={btn.src}
          color={color}
          playSound={playSound}
          clips={clips}
        />
      ))}
    </div>
  );
}
