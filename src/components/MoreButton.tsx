import styled from "styled-components";
import Link from 'next/link'

type Props = {
    url : string;
}

const MoreButton = styled.div`
margin-top: 20px;
font-weight: 600;
font-size: 14px;
text-align: right;
display: flex;
justify-content: right;
a{
    display: inline-block;
}
`;

const More: React.FC<Props> = ({url}) =>  {
    return (
        <MoreButton>
            <Link href={url}>More</Link>
        </MoreButton>
    );
  };
  
  export default More;