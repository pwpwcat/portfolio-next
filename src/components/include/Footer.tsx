import type { FC } from 'react';
import styled from "styled-components";

const Small = styled.small`
  display: block;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
  font-size: 12px;
`;


const Footer: FC = () =>{
    return (
        <footer>
          <Small>©︎2023 pwpw-cat portfolio site</Small>
        </footer>
    )
}

export default Footer;