export default function Login() {
    return (
        <div className='login-container'>
            <h1 className='text-gradient'>BrainBin</h1>
            <h2>Note taking made easy</h2>
            <p>
                Build your own archive of notes, ideas, and thoughts. BrainBin
                is designed to help you organize your mind and keep track of
                everything that matters to you.
            </p>
            <div className='full-line'></div>
            <h6>Sign in</h6>
            <div>
                <p>Email</p>
                <input type='text' placeholder='Enter your email address' />
            </div>
            <div>
                <p>Password</p>
                <input type='password' placeholder='*******' />
            </div>
            <button className='submit-btn'>
                <h6>Submit</h6>
            </button>
            <div className='secondary-btns-container'>
                <button className='card-button-secondary'>
                    <small>Log in</small>
                </button>
                <button className='card-button-secondary'>
                    <small>Forgot password</small>
                </button>
            </div>
            <div className='full-line'></div>
            <footer>
                <a href='#' target='_black'>
                    <img
                        src='https://avatars.githubusercontent.com/u/134772460?v=4'
                        alt='pfp'
                    />
                    <h6>@BoduBhai</h6>
                    <i className='fa-brands fa-github'></i>
                </a>
            </footer>
        </div>
    );
}
