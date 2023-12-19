import styled from "styled-components";
import Link from "next/link";

type Props = {
  url: string;
};

const MoreButton = styled.div`
  margin-top: 20px;
  text-align: right;
  display: flex;
  justify-content: right;
  a {
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
    border-bottom: 1px solid #51516e;

    &:hover {
      border-bottom: 1px solid #e298aa;
    }
  }

  span {
    font-size: 12px;
    margin-left: 3px;
    /* position: relative;
    top: 1px; */
  }
`;

const More: React.FC<Props> = ({ url }) => {
  return (
    <MoreButton>
      <Link href={url}>
        More<span>→</span>
      </Link>
    </MoreButton>
  );
};

export default More;
