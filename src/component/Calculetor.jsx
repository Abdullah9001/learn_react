import React from "react";
import {
  convert,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} from "../lib/converter";
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
    const celsius =
      scale === "f" ? convert(temperature, fahrenheitToCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, celsiusToFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange}
        />
        <BoillingVardict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}
