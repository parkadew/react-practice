
import React from "react"
import Form from "./component1/style"
import Forminput from "./component1/Forminput"
import MButton from "./component1/MButton"
import TDButton from "./component1/TButton"

const SIGNFORM_ARRAY = [{
    lable: "이메일",
    size: 3,
    name: "email",
    option: {
        placeholder: "이메일을 입력해주세요"
    }
},
{
    lable: "비밀번호",
    size: 3,
    name: "password"
},
{
    lable: "비밀번호 확인",
    size: 3,
    name: "password-confirm"
},
]

const SignUpForm = function ({ formState }) {

    const onSUbmitSignUp = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        alert(`${email}님 환영합니다`)
        formState = 'SIGN-IN'
    }
    return <S.Form onSubmit={onSUbmitSignUp}>
        {SIGNFORM_ARRAY.map((form, index) =>
            <Forminput key={index} size={form.size} lable={form.lable} name={form.name}
                placeholder={form.option?.placeholder}></Forminput>
        )}

        <MButton size={'full'} variant={'primary'}>회원가입</MButton>
    </S.Form>



}
export default SignUpForm

const S = {
    Form,
}