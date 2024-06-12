import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../styles/common";
import TDButton from "../component/component1/TButton";
import AddTodoModal from "./_components/addTodoModal";
import Todolist from "./_components/todoList";

const Todo = () => {

    let isOpenAddTodoModal = false;


    const todos = [
        {
            id: 1,
            title: "example-1",
            content: "example-1",
            state: true
        },
        {
            id: 2,
            title: "example-2",
            content: "example-2",
            state: false
        }
    ]

    return <div>
        <>
            {isOpenAddTodoModal && <AddTodoModal todos={todos} />}
            <S.Wrapper>
                <S.Container>
                    <S.Title>TODOLIST</S.Title>
                    <Todolist todos={todos} />
                    <TDButton size={'full'} variant={'primary'}>
                        추가
                    </TDButton>
                </S.Container>
            </S.Wrapper>
        </>
    </div>
}
export default Todo

const Wrapper = styled.div`
  height: 100vh;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;
const Title = styled.h1`
  background-color: ${(props) => props.theme.colors.primary};
  // themeProvider로 전달된 theme 객체는
  // 콜백함수의 theme이라는 key로 전달 theme.colors.primary

  color: ${({ theme }) => theme.colors.text.white};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;


const S = {
    Wrapper,
    Container,
    Title
}

