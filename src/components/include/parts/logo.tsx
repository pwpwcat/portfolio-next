import styled from "styled-components";
import Link from 'next/link'

const Logo = styled.div`
    width: 300px;
    h1{
        font-size: 30px;
        margin-bottom: 5px;
    }
`;
export default function logo(){
    return (
        <Link href="/">
            <Logo>
                <h1>pwpw-cat</h1>
                <p>Portfolio site</p>
            </Logo>
        </Link>
    )
}