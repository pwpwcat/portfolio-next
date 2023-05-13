import { useEffect } from "react";
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
        transition: 0.3s;
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

  .new-icon {
    color: #e298aa;
    margin-left: 5px;
    font-size: 12px;
    position: relative;
    top: -1px;
  }

  .title {
    margin-left: 15px;
    font-weight: 700;
    line-height: 1.5;
    transition: 0.3s;

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

function NewIcon({ date }: { date: string }) {
  const keepday = 20;
  const upday = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY.MM.DD");
  const today = dayjs();
  const newcalc = today.diff(upday, "day");

  return newcalc <= keepday ? <span className="new-icon">NEW</span> : null;
}

const BlogList: React.FC<Props> = ({ isText, icon, title, date, id, body }) => {
  const upday = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY.MM.DD");
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
              <NewIcon date={date} />
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
