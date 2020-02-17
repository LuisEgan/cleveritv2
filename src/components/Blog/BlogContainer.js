import styled from "styled-components"

export const BlogContainer = styled.div`
  margin: 0 auto !important;
  width: 90% !important;
  padding-bottom: 100px !important;

  h1 {
    text-align: left;
    padding-bottom: 20px;
  }

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
  text-align: justify;
  width: 80% !important;
  padding-top: 14vh;

  @media only screen and (max-width: 768px) {
    width: 80% !important;
  }
`

export default BlogContainer
