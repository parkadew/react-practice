import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const LAYOUT_METADATE = {
    "/": {
        header: true,
        footer: true,
    },
    "/todo": {
        header: false,
        footer: true,
    },
}

function dynamicLayoutMetadata(pathname) {
    return LAYOUT_METADATE(pathname);
    //여기에 키값 /가 들어가면 header,footer가
    // /todo가 들어가면 footer가 반환될것이다. 
}

const RootLayout = () => {
    const location = useLocation()
    console.log(location.pathname)
    // Outlet-react-router-dom
    // 하위에 있는 경로를 상위 경로(route)에서 사용하고 싶을떄
    // 내가 route를 만들었지 
    // <RootLayout>router.js</RootLayout>
    // 하위에 있는 router.js 중 "주소에 맞는" 요소를 RootLayout에 전달하여 보여주는 역할
    // 상위 컴포넌트를 만들고 주소에 맞는 하위 컴포넌트들을 전달하느 역할 --> 레이아웃을 만들기 위해

    return <>
        <header>header</header>
        <Outlet>
            {/**여기에 뭐가 들어와야할까? >>> <Main>.<Todo> 가들어올것이다
             * 지금 생성하고있는 RootLayout컴포넌트가 전에 생성한 router.js를 감싸줄것이다 
             * -> 현재주소에 맞는 경로를 Outlet에 렌더링 하는것이다
             */

            }
        </Outlet>
        <footer>footer</footer>
    </>
        ;
}
export default RootLayout;