import React, { useRef } from "react";

function Form() {
  const textRef = useRef();
  const pwdRef = useRef();

  const getData = () => {
    console.log(textRef.current.value);
    console.log(pwdRef.current.value);
  };
  return (
    <div classname="container">
      <div className="row ">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <div classname="card">
            <div className="card-header bg-dark text-white"> Login form</div>
            <div className="card-body mt-5 align-center">
              <div>
                <input
                  ref={textRef}
                  type="text"
                  className="form-control"
                  placeholder="enter name"
                ></input>
              </div>
              <div className="mt-3">
                <input
                  ref={pwdRef}
                  type="text"
                  className="form-control"
                  placeholder="enter password"
                ></input>
              </div>
              <button className="btn btn-primary" onClick={getData}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
