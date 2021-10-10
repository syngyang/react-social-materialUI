import './register.css'


export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Seoulite</h3>
                    <span className="loginDesc">
                        Connect with friends and the world aroud you on Seoulite
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="User Name" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">SIgn Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
