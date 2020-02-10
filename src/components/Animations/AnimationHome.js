import React, { Component } from "react";
import Lottie from "react-lottie";
import Data from "../../data/home_animation.json";
import styled from "styled-components";

const back = window.matchMedia("(max-width: 1080px)");
class AnimationHome extends Component {
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
      className: "size-animation",
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

export default AnimationHome;

const Image = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`;
