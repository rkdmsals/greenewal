const GOOGLE_ID = "386023874179-9lnnjq6rp0jhh0hfinvf50j160qj5251.apps.googleusercontent.com";
const GoogleURL= `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_ID}&response_type=token&redirect_uri=http://localhost:3000/redirect&scope=https://www.googleapis.com/auth/userinfo.email`;

const LoginButton= ()=> {
  const oAuthHandler = ()=> {
    window.location.assign(GoogleURL);
  };



  return (
  <div> 
      <button onClick={oAuthHandler}>Google Login하기</button>
  </div>
  );
}

export default LoginButton;