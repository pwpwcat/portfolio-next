import styled from "styled-components";
import Link from 'next/link'

  type Props = {
    children: React.ReactNode;
  };

  const Paragraph = styled.p`
    line-height: 1.8;
`;

const Text: React.FC<Props> = ({ children }) =>  {
    return <Paragraph>{children}</Paragraph>;
  };
  
  export default Text;