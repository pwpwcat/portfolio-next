import styled from "styled-components";
import { pc, sp, tab } from "@/components/Media";

export const Section = styled.section`
  border-bottom: 3px dotted #e0e0e0;
  padding: 40px 0;

  ${sp`
      padding: 30px 0;
  `}
`;

export const Mv = styled.div`
  height: 250px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  ${sp`
    height: 140px;
`}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Detail = styled.ul`
  padding-top: 40px;
  li {
    /* border-top: 1px solid #e0e0e0; */
    padding-bottom: 40px;

    ${sp`
    padding-bottom:35px;
`}

    &:last-child {
      padding-bottom: 0;
    }
  }

  h3 {
    margin-bottom: 10px;
    font-size: 15px;

    span {
      font-size: 12px;
      margin-left: 10px;
      font-weight: 500;
    }

    svg {
      width: 18px;
      position: relative;
      top: 3px;
      margin-right: 8px;
    }
  }

  a {
    display: inline-block;
    line-height: 1.8;
    margin-right: 10px;
  }

  .DetailText,
  a {
    font-size: 13px;
    line-height: 1.8;
  }
`;

export const ContactList = styled.ul`
  margin-top: 15px;
  li {
    line-height: 1.9;

    a {
      font-weight: 700;
      display: inline-block;
    }
  }
`;

export const WorkUl = styled.ul`
  padding-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${sp`
      display: block;
  `}
`;

export const BlogUl = styled.ul`
  padding-top: 5px;

  li {
    margin-bottom: 10px;
    ${sp`
      margin-bottom: 20px;
    `}
  }
`;
