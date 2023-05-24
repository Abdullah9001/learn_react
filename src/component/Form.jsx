import React from "react";

export default class Form extends React.Component {
  state = {
    title: "Javascript",
    text: "Javascript is awesome",
    library: "React",
    isAwesome: false,
  };
  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log(e.target.type);
      console.log("Nothing here");
    }
  };
  submitHandler = (e) => {
    const { title, text, library, isAwesome } = this.state;
    e.preventDefault();
    console.log(title, text, library, isAwesome);
  };
  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea name="text" value={text} onChange={this.handleChange}>
            Javascrip Is Awesome
          </textarea>
          <br />
          <br />
          <select value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
