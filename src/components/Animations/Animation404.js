import React, { Component } from "react"
import Lottie from "react-lottie"
import Data from "../../data/404_animation.json"

class Animation404 extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      renderer: "svg",
      autoplay: true,
      id: "lottie",
      className: "Agile-image-img",
      animationData: Data,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }

    return (
      <Lottie
        options={defaultOptions}
        width={"400px"}
        className="size-animation"
      />
    )
  }
}

export default Animation404
