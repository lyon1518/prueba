import React, { useContext, useState } from "react";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import SendData from "./SendData";
import Functions from "../../scripts/control/Functions";
import { StoreContext } from "../../store/StoreProvider";
import Pop from "../others/Pop";
// import Validation from "../../scripts/validty/Validation";

const Login = (props) => {
  const [Pass, setPass] = useState(false)
  const [ActivePop, setActivePop] = useState(false)
  const [Data, setData] = useState(false)
  const [store] = useContext(StoreContext)
  const handleSingIn = async() => {
    // console.log('iniciar');
    window.event.preventDefault()
    let correo = document.querySelector('#signinSrEmail')
    let pass = document.querySelector('#signupSrPassword')
    let sesion = await Functions.signIn(correo,pass,'ErrorLogin')
    // let sesion = Functions.signIn(correo,pass,Apis.sesion,'')
    setData(sesion)
    setActivePop(true)
    if(sesion.typeClas === 'success'){
      setTimeout(() => {
        let obj = {}
        obj.type = 'singIn'
        setData(obj)
        setActivePop(true)
        // props.setSesion(true)
      }, 2000);
    }
  }
  return (
    <div className="container-fluid p-20 baground-login">
      {store.pop.active?<Pop/>:''}
      <SendData type={Data.type} setActivePop={setActivePop} data={Data} active={ActivePop}/>
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-5">
          {/* <!-- Card --> */}
          <div className="card card-lg mb-5">
            <div className="card-body">
              {/* <!-- Form --> */}
              <form className="js-validate">
                <div className="text-center">
                  <div className="mb-5">
                    <h1 className="display-4">Sign in</h1>
                    <p>Don't have an account yet? <a href="authentication-signup-basic.html">Sign up here</a></p>
                  </div>

                  <span className="divider text-muted mb-4">OR</span>
                </div>

                {/* <!-- Form Group --> */}
                <div className="js-form-message form-group">
                  <label className="input-label">Your email</label>
                  <input type="email" className="form-control form-control-lg" name="email" id="signinSrEmail" placeholder="email@address.com" aria-label="email@address.com" required data-msg="Please enter a valid email address." />
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div className="js-form-message form-group">
                  <label className="input-label w-100">
                    <span className="d-flex justify-content-between align-items-center">
                      <div className="row w-100">
                        <div className="col col-sm-12 col-md-6">
                          Password
                                </div>
                        <div className="col col-sm-12 col-md-6 text-right">
                          <a className="input-label-secondary" href="/">Forgot Password?</a>
                        </div>
                      </div>
                    </span>
                  </label>

                  <div className="input-group input-group-merge">
                    <input type={Pass ? "text" : "password"} className="js-toggle-password form-control form-control-lg" name="password" id="signupSrPassword" placeholder="8+ characters required" aria-label="8+ characters required" required
                      data-msg="Your password is invalid. Please try again." />
                    <div id="changePassTarget" className="input-group-append">
                      <div className="input-group-text" onClick={() => setPass(!Pass)}>
                        {Pass ?
                          <Visibility /> :
                          <VisibilityOff />
                        }
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Checkbox --> */}
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="termsCheckbox" name="termsCheckbox" />
                    <label className="custom-control-label text-muted"> Remember me</label>
                  </div>
                </div>
                {/* <!-- End Checkbox --> */}

                <button type="submit" className="btn btn-lg btn-block btn-primary" onClick={() => handleSingIn()}>Inciar sesión</button>
              </form>
              {/* <!-- End Form --> */}
            </div>
          </div>
          {/* <!-- End Card --> */}

        </div>
      </div>
    </div>
  )
}
export default Login