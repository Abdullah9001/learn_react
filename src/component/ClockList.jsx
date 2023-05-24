import Clock from "./clock";

export default function ClockList({ quantities = [] }) {
  return (
    <>
      <div>
        {quantities.map((key) => (
          <Clock key={key} />
        ))}
      </div>
    </>
  );
}
