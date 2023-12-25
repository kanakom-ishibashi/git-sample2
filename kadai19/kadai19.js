class CountButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 100 };
  }

  handleClick = () => {
    const { count } = this.state;
    if (count === 0) {
      this.setState({ count: 100 });
    } else {
      this.setState({ count: count - 1 });
    }
  };

  render() {
    return React.createElement(
      "button",
      { onClick: this.handleClick },
      "カウント数：" + this.state.count
    );
  }
}

const domContainer = document.querySelector("#app");

ReactDOM.render(
  React.createElement(CountButton),
  domContainer
);