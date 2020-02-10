import React from "react";
import YouTube from "react-youtube";
import "../../style/Common/common.css";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

class YoutubeVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideoPlayer: props.show
    };
  }

  render() {
    const opts = {
      height: "780",
      width: "1280",
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <>
        {this.props.show && (
          <Row
            className={
              this.props.show === true
                ? "popup-video-youtube"
                : "popup-video-youtube-off"
            }
          >
            <ContainerYoutube onClick={this.props.handleVideo}>
              <RowSectionClose className="row">
                <SectionClose>
                  <LineOne></LineOne>
                  <LineTwo></LineTwo>
                </SectionClose>
              </RowSectionClose>
              <Row>
                <Col xl={12} lg={6}>
                  <YouTube
                    videoId="0Ha3BSCn-qE"
                    opts={opts}
                    onReady={this._onReady}
                  />
                </Col>
              </Row>
            </ContainerYoutube>
          </Row>
        )}
      </>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}
export default YoutubeVideo;

const ContainerYoutube = styled.div`
  position: relative;
  padding-bottom: 56.25% /* 16:9 */;
  padding-top: 25;
  height: 0;
  width: 100%;
  max-width: 1640px;
  margin-left: auto;
  margin-right: auto;

  justify-content: center;
  text-align: center;
`;
const LineOne = styled.div`
  top: 11px;
  left: 2px;
  position: absolute;
  width: 20px;
  height: 2px;
  transform: rotate(-45deg);
  background-color: white;
`;
const LineTwo = styled.div`
  top: 11px;
  left: 2px;
  position: absolute;
  width: 20px;
  height: 2px;
  transform: rotate(45deg);
  background-color: white;
`;
const RowSectionClose = styled.div`
  margin-bottom: 4rem;
  width: 100%;
`;
const SectionClose = styled.div`
  position: absolute;
  top: 19px;
  right: 26px;
  width: 24px;
  height: 24px;
  transition: opacity 0.2;
`;
