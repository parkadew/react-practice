
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

const SignUpForm = function () {
    return <S.Form>
        {SIGNFORM_ARRAY.map((form, index) =>
            <Forminput key={index} size={form.size} lable={form.lable}
                placeholder={form.option?.placeholder}></Forminput>
        )}

        <MButton size={'full'} variant={'primary'}>회원가입</MButton>
    </S.Form>



}
export default SignUpForm

const S = {
    Form,
}