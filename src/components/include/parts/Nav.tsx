import styled from "styled-components";
import Link from 'next/link'
import { pc, sp, tab } from '@/components/Media';
import React, { FC, useRef, useState, useEffect, MouseEventHandler } from "react";

const NavList = styled.nav`
        ${sp`
            padding-top: 25vh;
            border-left: 3px solid #fff;
        `}

    ul{
        display: flex;

        ${sp`
            display: block;
        `}
    }

    li{
        margin: 0 10px;

        ${sp`
            line-height: 3;
        `}
    }

    a{
        font-weight: bold;
        font-size: 15px;

        ${sp`
            font-size: 20px;
            color: #fff;
        `}
    }

    .navBtn{
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;

        ${pc`
            display: none;
        `}

        
        span{
            width: 100%;
            height: 3px;
            border-radius: 100vmax;
        }
    }
`;

type Props = {
    open: boolean;
    id: string;
    onClick: MouseEventHandler;
  };

export const Nav: FC<Props> = ({ open, id, onClick }) =>{
    return (
        <NavList id={id} aria-hidden={!open} className="navigation">
            <ul>
                <li><Link onClick={onClick} href="/">Top</Link></li>
                {/* <li><Link href="/about">About</Link></li> */}
                <li><Link onClick={onClick} href="/work">Work</Link></li>
                <li><Link onClick={onClick} href="/blog">Blog</Link></li>
                <li><Link onClick={onClick} href="/#contact">Contact</Link></li>
            </ul>
        </NavList>
    )
}