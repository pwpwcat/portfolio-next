import styled from "styled-components";
import Link from "next/link";
import { pc, sp, tab } from "@/components/Media";

type Props = {
  children: React.ReactNode;
};

const H2 = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  ${sp`
        font-size: 18px;
        margin-bottom: 15px;
    `}

  span {
    font-size: 16px;
    margin-left: 10px;
    ${sp`
        font-size: 15px;
    `}
  }
`;

const SecTitle: React.FC<Props> = ({ children }) => {
  return <H2>{children}</H2>;
};

export default SecTitle;
