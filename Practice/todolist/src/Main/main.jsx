
import styled from 'styled-components'
import SignUpForm from '../component/Sign-UP-form'
import SignInForm from '../component/Sign-IN-form'



const Main = () => {
    let formState = "SIGN-UP"
    //내가 formState 변수를 설장하고 사용하려는 이유가 뭘까
    // 버튼 클릭에따라 보여주고싶은것들이 다르기 떄문이다.
    // Sign-IN을 클릭하면 Sign-IN이 보여야지요
    // 그냥 {중괄호} 활용 컴포넌트 안에 떄려박아도 보인다
    const handlePressSignTab = (tabname) => {
        formState = tabname
    }

    const TAB_ARRAY = [
        {
            id: 1,
            name: "SIGN-IN",
            p: formState === "SIGN-IN"
        },
        {
            id: 2,
            name: "SIGN-UP",
            p: formState === "SIGN-UP"
        },
    ]

    return <S.Wrapper>
        <S.Container>
            <S.Header>
                {TAB_ARRAY.map((tab) => <S.Tab
                    $p={tab.p} key={tab.id}
                    onClick={() => handlePressSignTab}>
                    {tab.name}
                </S.Tab>)}
            </S.Header>
            {
                formState === 'SIGN-IN' ? <SignInForm /> : <SignUpForm />
            }
        </S.Container>
    </S.Wrapper>

}
export default Main


const Wrapper = styled.div`
height: calc(100vh - 140px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Container = styled.div`
    width: 360px;
    border : 1px solid #999;
    border-radius: 3px;
`

const Header = styled.header`
    background-color: #11dcc1;
    display: flex;
    border-radius: 2px;
`
const Tab = styled.div`
    font-size: 32px;
    padding: 16px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #e3f0fa;
    }   
    ${(props) => props.$p && 'background-color: "#e0e0e0;'}
`
const S = {
    Wrapper,
    Container,
    Header,
    Tab
}
