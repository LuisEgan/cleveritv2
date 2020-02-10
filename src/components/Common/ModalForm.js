import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Modal, ButtonGroup, ButtonToolbar, InputGroup } from "react-bootstrap"
import { sendEmail } from "../../utils/emails"
import { getCompanySize, getSuiteColor } from "../../utils/page"
import Image from "react-bootstrap/Image"
import { Formik, Form, Field, ErrorMessage } from "formik"
import success from "../../images/succes.svg"
import { connect } from "react-redux"
import { getData } from "../../utils/page"
import ReCAPTCHA from "react-google-recaptcha"
import AnimationSendEmail from "../Animations/AnimationSendEmail.js"

let ModalForm = props => {
  const {
    app: { showModal, lang },
    showModalFunc,
    location,
  } = props

  const data = getData("common", lang)
  const color = getSuiteColor(location)
  const emailTo = data.modal.emailTo[props.location]
  const [companySize, setCompanySize] = useState("1")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showError, setShowError] = useState(false)
  const [captcha, setCaptcha] = useState()

  let isButtonDisabled

  const handleClose = () => {
    showModalFunc(false)
    setSubmitted(false)
  }
  const handleSuccess = () => setSubmitted(true)

  const onSendEmail = async (values, data) => {
    const { email, company } = values
    const { sizeOfCompany } = getCompanySize(companySize)
    let html = `<h2> Contacto Suite: ${location} </h2> <br/>`
    html += `<b>Correo: </b> ${email} <br/>`
    html += `<b>Empresa: </b> ${company} <br/>`
    html += `<b>Tamaño de Empresa: </b> ${sizeOfCompany} <br/>`

    setSubmitted(true)
    const res = await sendEmail({
      from: "no-reply@cleverit.cl",
      to: [
        {
          email: emailTo,
          name: location,
        },
      ],
      html,
      text: "Suite",
      subject: "Suite Contact",
    })

    if (res.data === "Sent!") {
      handleSuccess()
    } else {
      alert("Sorry, there was a problem")
    }
  }

  const CustomErrorMessage = styled.div`
    color: red;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  `

  const RowTitle = styled.div`
    & h3 {
      font-size: 2rem;
      color: #373a3c;
      margin-bottom: 2rem;
    }
    & p {
      margin-bottom: 0.5rem;
    }
  `
  const ContainerModal = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
    & input {
      min-height: 52px;
      font-size: 1rem;
      line-height: 20px;
      padding: 0 15px;
    }
    @media screen and (max-width: 400px) {
      padding-left: 0rem;
      padding-right: 0rem;
    }
  `

  const RowName = styled.div`
    & p {
      font-size: 0.8rem;
      color: #818a91;
    }
  `
  const RowCompany = styled.div`
    & p {
      margin-bottom: 0.5rem;
    }
    & .recaptcha {
      width: 100%;
      margin-top: 1rem;
    }
    & .recaptcha > div > div > div {
      width: 100% !important;
      background-color: #f9f9f9;
      overflow: hidden;
      height: 75px !important;
      position: relative;
    }
    iframe {
      display: block;
      position: absolute;
      top: -1px;
      left: -1px;
      width: 300px;
      height: 70px;
    }
    & .rc-anchor-light {
      transform: scale(0.9);
      -webkit-transform: scale(0.9);
    }
  `
  const RowOption = styled.div`
    margin-top: 2rem;
  `
  const RowCheck = styled.div`
    justify-content: space-between;
    width: 100%;
    & .btn-group-toggle > .btn input[type="radio"] {
      clip: auto;
      min-height: auto !important;
      top: 35%;
      left: 5px;
    }
    & label.btn {
      padding: 10px 10px 10px 20px;
      box-sizing: content-box;
      margin: 0 5px;
    }
  `

  const BtnClose = styled.button`
    margin-left: auto;
    margin-right: auto;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 35%;
    padding-left: 35%;
    background-color: #6c757d;
    border-color: #6c757d;
    color: white;
    :hover,
    :focus,
    :visited:active {
      background-color: #6c757d !important;
      border-color: #6c757d !important;
    }
  `
  const RowBtnSubmit = styled.div`
    margin-top: 2rem;
    & button.disabled,
    button:disabled {
      opacity: 0.5;
    }
    button {
      width: 100%;
    }
    @media screen and (max-width: 400px) {
      button {
        margin-bottom: 20px;
      }
    }
  `
  const RowImgSucess = styled.div`
    width: 100%;
    padding: 4rem;
    margin-right: auto;
    margin-left: auto;
    & img {
      margin-right: auto;
      margin-left: auto;
      width: 100%;
    }
  `
  const RowSuccesText = styled.div`
    justify-content: center;
    text-align: center;
    padding-bottom: 2rem;
  `

  const BtnNavMobile = styled.button`
    font-size: 1rem;
    color: white;
    border-color: ${color};
    background-color: ${color};
    padding-right: 1rem;
    padding-left: 1rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    :hover,
    :focus,
    :visited:active {
      background-color: ${color} !important;
      border-color: ${color} !important;
    }
  `
  const BtnCheck = styled.label`
    background-color: transparent;
    border-color: transparent;
    color: ${color};

    border-radius: 0.25rem;
    :hover,
    :focus,
    :visited:active {
      background-color: transparent;
      border-color: ${color} !important;
      color: ${color};
    }
  `
  const BtnSuccess = styled.button`
    font-size: 1rem;
    color: white;
    border-color: ${color};
    background-color: ${color};
    padding-right: 3rem;
    padding-left: 3rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    :hover,
    :focus,
    :visited:active {
      background-color: ${color} !important;
      border-color: ${color} !important;
    }
  `

  return (
    <>
      <Modal show={showModal} onHide={handleClose} className="modal-form">
        <Modal.Header closeButton></Modal.Header>
        {!submitted && (
          <Modal.Body>
            <Formik
              initialValues={{ email: "", company: "" }}
              validate={values => {
                const errors = {}
                if (!values.email) {
                  errors.email = data.modal.emailRequired
                  setShowError(true)
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = data.modal.emailError
                  setShowError(true)
                } else {
                  setShowError(false)
                }

                return errors
              }}
              onSubmit={(values, data) => {
                setLoading(true)
                onSendEmail(values, data)
                setLoading(false)
              }}
            >
              {({ isSubmitting }) => {
                isButtonDisabled = isSubmitting || loading || !captcha
                return (
                  <Form>
                    <ContainerModal className="row">
                      <RowTitle>
                        <h3>{data.modal.completeYourInfo}</h3>
                        <p>{data.modal.name}</p>
                      </RowTitle>
                      <RowName className="row ">
                        <Field name="email" type="text" className="input" />
                        <ErrorMessage name="email">
                          {message => (
                            <CustomErrorMessage>{message}</CustomErrorMessage>
                          )}
                        </ErrorMessage>
                        {!showError && <p>{data.modal.dontShareInfo}</p>}
                      </RowName>
                      <RowCompany className="row">
                        <p>{data.modal.companyName}</p>
                        <Field name="company" type="text" className="input" />
                        <ErrorMessage name="company">
                          {message => (
                            <CustomErrorMessage>{message}</CustomErrorMessage>
                          )}
                        </ErrorMessage>
                      </RowCompany>
                      <RowCompany className="row">
                        <div id="recaptcha" className="recaptcha">
                          <ReCAPTCHA
                            sitekey="6LfQhsYUAAAAALZxJmKDQEE8J1oTpTh3ELnLNrG9"
                            onChange={e => setCaptcha(!!e)}
                          />
                        </div>
                      </RowCompany>
                      <RowOption className="row">
                        <p>{data.modal.howBigCompany}</p>
                      </RowOption>
                      <RowCheck className="row justify-content-center">
                        <ButtonToolbar
                          aria-label="Toolbar with button groups"
                          className="mt-2 justify-content-center toggle-btn"
                          onChange={e => setCompanySize(e.target.value)}
                        >
                          <ButtonGroup toggle className="button-check-group">
                            <BtnCheck className="btn btn-primary">
                              <input
                                name="radio"
                                type="radio"
                                value="1"
                              ></input>
                              {data.modal.justMe}
                            </BtnCheck>
                          </ButtonGroup>
                          <ButtonGroup toggle className="button-check-group">
                            <BtnCheck className="btn btn-primary">
                              <input
                                name="radio"
                                type="radio"
                                value="2"
                              ></input>
                              0-50
                            </BtnCheck>
                          </ButtonGroup>
                          <ButtonGroup toggle className="button-check-group">
                            <BtnCheck className="btn btn-primary">
                              <input
                                name="radio"
                                type="radio"
                                value="1"
                              ></input>
                              50-250
                            </BtnCheck>
                          </ButtonGroup>
                          <ButtonGroup toggle className="button-check-group">
                            <BtnCheck className="btn btn-primary">
                              <input
                                name="radio"
                                type="radio"
                                value="1"
                              ></input>
                              +250
                            </BtnCheck>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </RowCheck>
                      <RowBtnSubmit className="row">
                        <div className="col-xl-6  col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12 align-items-center">
                          <BtnNavMobile
                            data-toggle="modal"
                            data-target="#myModal2"
                            type="submit"
                            disabled={isButtonDisabled}
                          >
                            {data.modal.asForQuote}
                          </BtnNavMobile>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12 align-items-center">
                          <BtnClose
                            variant="secondary"
                            onClick={() => handleClose()}
                          >
                            {data.modal.buttonClose}
                          </BtnClose>
                        </div>
                      </RowBtnSubmit>
                    </ContainerModal>
                  </Form>
                )
              }}
            </Formik>
          </Modal.Body>
        )}

        {submitted && (
          <>
            {loading ? (
              <Modal.Body>
                <RowImgSucess className="row">
                  <AnimationSendEmail></AnimationSendEmail>
                </RowImgSucess>
              </Modal.Body>
            ) : (
              <Modal.Body>
                <RowImgSucess className="row">
                  <Image src={success}></Image>
                </RowImgSucess>
                <RowSuccesText className="row ">
                  <h3>{data.modal.success}</h3>
                </RowSuccesText>
                <div className="row ">
                  <BtnSuccess onClick={() => handleClose()}>
                    {data.modal.continue}
                  </BtnSuccess>
                </div>
              </Modal.Body>
            )}
          </>
        )}
      </Modal>
    </>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    showModalFunc: show => dispatch({ type: "SHOW_MODAL", payload: show }),
  }
}

ModalForm = connect(mapStateToProps, mapDispatchToProps)(ModalForm)
export default ModalForm
