import React from "react";
import { useParams, useSearchParams } from "react-router-dom";


const Todo = function () {
    const { id } = useParams()
    // 구글링으로 해석하길 useParams를 통해 id 값을 가져온것이다
    // usePrams로 id 를 가져오지않으면 useSearchParams가 id를 찾지못한다
    // 그러면 주소를 가져올떄 근데 어떻게 todo의 id를 가져온것이지? --> "react-router-dom"?
    // SearchParams를 통해 그 주소의 값을 가져올수있다
    console.log(id)
    const [SearchParams] = useSearchParams()
    console.log(SearchParams.get("goods"))
    return <div>todo페이지요</div>



}

export default Todo