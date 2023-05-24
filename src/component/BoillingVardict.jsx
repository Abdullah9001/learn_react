export default function BoillingVardict({ celsius = 0 }) {
  if (celsius > 100) {
    return <p>The water would boiled</p>;
  }
  return <p>Water would not boiled</p>;
}
