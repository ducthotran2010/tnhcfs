import React from 'react'
import Head from '../components/head'
import ReCAPTCHA from 'react-google-recaptcha'

export default class extends React.Component {
   constructor(props) {
      super(props)
      this.state = {recaptchaFilled: false, value: ''}
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleFilled = this.handleFilled.bind(this)
      this.handleExpired = this.handleExpired.bind(this)
      this.handleTextChange = this.handleTextChange.bind(this)
   }
   handleSubmit(event) {
      if (this.state.recaptchaFilled) return true
      event.preventDefault()
      alert('Fill the captcha!')
   }
   handleFilled() {
      this.setState({recaptchaFilled: true})
   }
   handleExpired() {
      this.setState({recaptchaFilled: false})
   }
   handleTextChange(event) {
      this.setState({value: event.target.value})
   }
   render() {
      return (
         <div>
            <Head title="TNH CFS"/>
            <h1>~ ARIGATOU GOZAIMASU ~</h1>
            <form method="post" action="?query=submit" onSubmit={this.handleSubmit}>
               <textarea
                  type="text"
                  name="content"
                  placeholder="Enter your comments"
                  rows="5"
                  cols="50"
                  autoFocus
                  value={this.state.value}
                  onChange={this.handleTextChange}
                  />
               <ReCAPTCHA
                  ref="recaptcha"
                  sitekey="6Ldy80YUAAAAAFk1TycvEjZ7wu_tQb3ti5_vq7Qp"
                  onChange={this.handleFilled}
                  onExpired={this.handleExpired}
               />
               <input type="submit"/><br/><br/>
            </form>
         </div>
      )
   }
}
