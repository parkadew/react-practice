
import React from "react"
import styled from 'styled-components'
import Forminput from "./component1/Forminput"
import MButton from "./component1/MButton"
import TDButton from "./component1/TButton"
import Form from "./component1/style"
import { useNavigate } from 'react-router-dom'

const SignInForm = function () {

    const navigate = useNavigate()// 주소이동

    const handlePressSignIn = (event) => {
        event.preventDefault()
        // const email = event.target.email.value
        // const password = event.target.password.value
        //구조 분해할당을 활용해보자
        const { email, password } = event.target
        if (!email.value.trim() || !password.value.trim()) return
        //공백을 제거했을때 아무런 값도 없다면 아무것도 실행하지 말아라..?
        // 둘중 하나라도 값이 없다면 실행하진말아라
        //띄어쓰기를 포함해서 값이 있는지 없는지 확인
        if (email.value === "test" && password.value === "test") {
            return navigate("/todo/3")
            // 만약에 주소를 바꿔주기 위해 navigate와 routerdom을 공부했는데 그냥 todo컴포넌트를 보여주게되면 어떤문제가 발생하는걸까?
        }
        alert("아이디와 비밀번호를 확인해주세요")

    }
    return <S.Form onSubmit={handlePressSignIn}>
        <Forminput lable={"이메일"} placeholder={"e-mail"} size={3} containerStyle={{
            width: 300
        }} name='email'></Forminput>
        <Forminput lable={"비밀번호"} placeholder={"pass-word"} size={3} containerStyle={{
            width: 300
        }} name='password'></Forminput>
        <MButton variant={"primary"} size={"small"} shape={"shape"}>로그인</MButton>
    </S.Form>
}
export default SignInForm

// const Form = styled.form`
// background-color: '#fff';
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// padding: 32px;
// `
const InputBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-bottom: 16px;
width: 100%;
`
const Input = styled.input`
border: 1px solid #999;
border-radius: 4px;
padding-left: 16px;
width: 100%;
height: 48px;
&::placeholder{
    text-align: center;
   
}
`
const InputLabel = styled.label`
    position: absolute;
    left: 16px;
    top: -6px;
    font-size: 12px;
    background-color: aliceblue;
    z-index: 100;
    padding: 0 4px;
`

const S = {
    Form,
    InputBox,
    InputLabel,
    Input,
}
