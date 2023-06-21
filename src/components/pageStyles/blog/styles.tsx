import styled from "styled-components";
import { pc, sp, tab } from "@/components/Media";

export const Main = styled.main`
  margin-top: 60px;
  margin-bottom: 40px;
  ${sp`
      margin-top: 40px;
  `}

  code {
    border-radius: 10px;
    margin: 15px 0;
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 3px dotted #e0e0e0;

  .icon {
    display: inline-block;
    margin-right: 15px;
    font-size: 30px;
  }

  h1 {
    font-size: 20px;
    ${sp`
      font-size: 18px;
    `}
  }

  time {
    font-size: 14px;
    display: block;
    margin-top: 5px;
    font-weight: 700;
  }

  .date {
    display: flex;

    .update {
      margin-left: 15px;
      display: flex;
      align-items: center;
      color: #8e8e9d;
    }

    svg {
      width: 15px;
      height: 15px;
      position: relative;
      top: 3px;
      margin-right: 3px;
    }
  }
`;

export const Content = styled.div`
  p {
    line-height: 1.9;
    margin-bottom: 10px;
  }

  a {
    color: rgb(213 123 145);
    text-decoration: underline;
    &::before {
      content: "🔗";
      display: inline-block;
      margin-right: 5px;
    }

    &:hover {
      text-decoration: unset;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 8px;
  }
`;
