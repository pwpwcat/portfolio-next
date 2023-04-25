import styled from "styled-components";
import Link from "next/link";
import More from "@/components/MoreButton";
import Moment from "react-moment";
import { pc, sp, tab } from "@/components/Media";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  isText: boolean;
  title: string;
  icon: string;
  date: string;
  id: string;
  body: string;
};

const List = styled.li`
  line-height: 2;
  margin-bottom: 20px;

  a {
    transition: 0.3s;

    &:hover {
      div {
        color: #e298aa;
      }
    }
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: 24px;

    ${sp`
            font-size: 20px;
        `}
  }

  .date {
    font-size: 13px;
    margin-right: 15px;
    ${sp`
             font-size: 12px;
        `}
  }

  .title {
    margin-left: 15px;
    font-weight: 700;
    line-height: 1.5;
    ${sp`
            margin-left: 10px;
        `}

    span {
      ${sp`
                display: block;
            `}
    }
  }

  .body {
    display: block;
    font-size: 12px;
  }
`;

const Content = styled.div`
  p {
    font-size: 13px;
    color: #9b9bb5;
    line-height: 1.5;

    ${sp`
        margin-top: 10px;
    `}
  }
`;

// const WorkList: React.FC<Props> = ({ children }) =>
const BlogList: React.FC<Props> = ({ isText, icon, title, date, id, body }) => {
  return (
    <>
      <List>
        <Link href={`/blog/${id}`}>
          <div className="flex">
            <div className="icon">{icon}</div>
            <div className="title">
              <span className="date">
                <time>
                  {dayjs.utc(date).tz("Asia/Tokyo").format("YYYY.MM.DD")}
                </time>
              </span>
              {title}
            </div>
          </div>
          {isText && (
            <Content
              dangerouslySetInnerHTML={{ __html: body.slice(0, 60) + "..." }}
            />
          )}
        </Link>
      </List>
    </>
  );
};

export default BlogList;
