import React from 'react'

const AuthApiCards = (props) => {
  return (
    <div className="row mt-2">
        <div className="col-12 col-lg-7 col-md-9 m-auto">
            <div className="card px-4 py-2 bg-transparent border-light text-white rounded-pill">
                <div className="row">
                    {props.logo &&
                    <div className="col-3 d-flex align-items-center">
                        <img src={props.logo} width={20} alt="google logo" />
                    </div>
                    }
                    <div className={props.align}>{props.name}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthApiCards