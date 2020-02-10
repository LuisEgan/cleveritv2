import React, { Component } from "react";
import Lottie from "react-lottie";
import Data from "../../data/AnimationSendEmail.json";

const back = window.matchMedia("(max-width: 1080px)");
class AnimationSendEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationChange: 500
    };
  }
  componentDidMount() {
    this.handleAnimation();
  }
  handleAnimation = () => {
    if (back.matches) {
      this.setState({
        animationChange: 200
      });
    } else {
      this.setState({
        animationChange: 500
      });
    }
  };
  render() {
    const defaultOptions = {
      loop: true,
      renderer: "svg",
      autoplay: true,
      id: "lottie",

      animationData: Data,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <Lottie
        options={defaultOptions}
        width={`${this.state.animationChange}`}
        className="size-animation"
      />
    );
  }
}

export default AnimationSendEmail;
