import React from "react";
import BoillingVardict from "./BoillingVardict";
import TemperatureInput from "./TemperatureInput";
export default class Calculetor extends React.Component {
  state = { temperature: "", scale: "c" };
  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
        {/* <BoillingVardict celsius={parseFloat(temperature)} /> */}
      </div>
    );
  }
}
