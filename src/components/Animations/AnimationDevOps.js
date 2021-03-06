import React, { Component } from "react"
import Lottie from "react-lottie"
import Data from "../../data/devOps_animation.json"

class AnimationUx extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationChange: 500,
    }
  }
  componentDidMount() {
    this.handleAnimation()
  }
  handleAnimation = () => {
    const back = window.matchMedia("(max-width: 1080px)")
    if (back.matches) {
      this.setState({
        animationChange: 200,
      })
    } else {
      this.setState({
        animationChange: 500,
      })
    }
  }
  render() {
    const defaultOptions = {
      loop: true,
      renderer: "svg",
      autoplay: true,
      id: "lottie",
      className: "ux-image-img",
      animationData: Data,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }

    return (
      <Lottie
        options={defaultOptions}
        width={`${this.state.animationChange}`}
      />
    )
  }
}

export default AnimationUx
