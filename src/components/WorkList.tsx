import styled from "styled-components";
import Link from "next/link";
import More from "@/components/MoreButton";
import Moment from "react-moment";
import { pc, sp, tab } from "@/components/Media";
import Image from "next/image";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  src: string;
  title: string;
  date: string;
  id: string;
};

const List = styled.li`
  width: 47%;

  ${sp`
        width: 100%;
        margin-bottom: 30px;
    `}

  a {
    transition: 0.3s;
    &:hover {
      p {
        color: #e298aa;
        transition: 0.3s;
      }

      img {
        transform: scale(1.05, 1.05);
      }
    }
  }

  .thumb {
    margin-bottom: 15px;
    overflow: hidden;
    border-radius: 10px;

    img {
      transition: 0.3s;
    }
  }

  p {
    font-weight: 700;
    transition: 0.3s;
  }

  time {
    display: block;
    margin-top: 7px;
  }
`;

// const WorkList: React.FC<Props> = ({ children }) =>
const WorkList: React.FC<Props> = ({ src, title, date, id }) => {
  return (
    <>
      <List>
        <Link href={`/work/${id}`}>
          <div className="thumb">
            <img src={src} alt={title} />
          </div>
          <p>
            {title}
            <time>{dayjs.utc(date).tz("Asia/Tokyo").format("YYYY.MM")}</time>
          </p>
        </Link>
      </List>
    </>
  );
};

export default WorkList;
