export default function Pad({ power, id, src, color, playSound, clips }) {
  const regex = new RegExp(src);

  return (
    <div
      onMouseDown={() => {
        playSound(id);
      }}
      id={src}
      className="drum-pad d-flex justify-content-center align-items-center"
      style={{ backgroundColor: color }}
    >
      <p className="m-0">{id}</p>
      {power && (
        <audio
          className="clip"
          id={id}
          src={clips.find((value) => regex.test(value))}
        ></audio>
      )}
    </div>
  );
}
