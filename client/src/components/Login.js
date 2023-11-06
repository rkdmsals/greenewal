//import { application } from "express";
import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import useAuthStore from "../store/auth";


//LoginPage에서 로그인 버튼을 누른 후 계정을 선택하면 리디액트되어 현재 페이지로 전환
//1. url의 accessToken를 통해 구글 api로 유저정보를 가져오기
//3. 이후 메인화면으로 전환


const Login = () => {
  //const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash;
    if (!hash) return;
    // 주소에서 acesstoken 따오기
    const accessToken = hash.split("=")[1].split("&")[0];
    //login(accessToken);

    //백엔드로 보내기
    //const { data } = await Api.post("oauth/google", { accessToken});
    
    navigate("/");
  }, [navigate]);
  return <div></div>;
};

export default Login;