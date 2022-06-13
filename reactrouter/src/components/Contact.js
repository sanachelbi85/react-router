import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='cont'>
      <div className="box">
          <div className="box-form">
            <div className="box-login-tab" />
            <div className="box-login-title">
              <div className="i i-login" /><h2>CONTACT</h2>
            </div>
            <div className="box-login">
              <div className="fieldset-body" id="login_form">
                <button onclick="openLoginInfo();" className="b b-form i i-more" title="Mais Informações" />
                <p className="field">
                  <label htmlFor="user">Name</label>
                  <input type="text" id="user" name="user" title="userName"  />
                  <span id="valida" className="i i-warning" />
                </p>
                <p className="field">
                  <label htmlFor="user">E-MAIL</label>
                  <input type="text" id="user" name="user" title="userName" />
                  <span id="valida" className="i i-warning" />
                </p>
                <p className="field">
                  <label htmlFor="pass">PASSWORD</label>
                  <input type="password" id="pass" name="pass" title="Password" />
                  <span id="valida" className="i i-close" />
                </p>
                
                <input type="submit" id="do_login" defaultValue="GET STARTED" title="Get Started" />
              </div>
            </div>
          </div>
          <div className="box-info">
            <p><button onclick="closeLoginInfo();" className="b b-info i i-left" title="Back to Sign In" /></p><h3>Need Help?</h3>
            <p />
            <div className="line-wh" />
            <button onclick className="b-support" title="Forgot Password?"> Forgot Password?</button>
            <button onclick className="b-support" title="Contact Support"> Contact Support</button>
            <div className="line-wh" />
            <button onclick className="b-cta" title="Sign up now!"> CREATE ACCOUNT</button>
          </div>
        </div>
        <div className="icon-credits">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>, <a href="http://www.flaticon.com/authors/budi-tanrim" title="Budi Tanrim">Budi Tanrim</a> &amp; <a href="http://www.flaticon.com/authors/nice-and-serious" title="Nice and Serious">Nice and Serious</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }

        


export default Contact