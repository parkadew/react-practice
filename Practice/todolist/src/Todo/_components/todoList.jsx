import styled from "styled-components"
import OneTodo from "./oneTodo"

const Todolist = ({ todos }) => {
    <S.Wrapper>
        {todos.map((todo) => (<OneTodo todo={todo}></OneTodo>))}
    </S.Wrapper>

}
export default Todolist

const Wrapper = styled.div`
    padding: 32px 0;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`
const S = {
    Wrapper
}