import React from 'react'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.theme}`} data-bs-theme={props.theme}>
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">TextUtils</Link> */}
                    <a className="navbar-brand" href="">TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/">Home</Link> */}
                                <a className="nav-link" aria-current="page" href="">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                        <input onClick={props.changeMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.theme==='light'?'Light Mode':'Dark mode'}</label>
                    </div>
                </div>
            </nav>
        </>
    )
}
