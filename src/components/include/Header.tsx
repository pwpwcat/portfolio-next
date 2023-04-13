import React, { FC, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Logo from '@/components/include/parts/logo'
import { Nav } from '@/components/include/parts/Nav'
import { ToggleBtn } from "@/components/include/parts/ToggleBtn";
import { pc, sp, tab } from '@/components/Media';

const HeaderArea = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;

    /* ${sp`
        margin-bottom: 15px;
    `} */
`;


const Header: FC = () =>{
    const [open, setOpen] = useState(false);
    const toggleFunction = () => {
      setOpen((prevState) => !prevState);
    };
    return (
        <HeaderArea id="top">
            <Logo />
            <ToggleBtn
            open={open}
            controls="navigation"
            label="メニューを開きます"
            onClick={toggleFunction}
            />
            <Nav id="navigation" open={open} onClick={toggleFunction}/>
        </HeaderArea>
    )
}

export default Header;