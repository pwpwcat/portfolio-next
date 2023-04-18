import styled from "styled-components";
import Link from 'next/link'
import More from '@/components/MoreButton'
import Moment from 'react-moment'
import { pc, sp, tab } from '@/components/Media';
import Image from 'next/image'

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
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

    .thumb{
        margin-bottom: 15px;
        overflow: hidden;
        border-radius: 10px;
        
        img{
            transition: .3s;

            &:hover{
                transform:scale(1.05,1.05);
            }
        }
    }

    time{
        display: block;
        margin-top: 7px;
    }
`;



// const WorkList: React.FC<Props> = ({ children }) =>
const WorkList: React.FC<Props> = ({src, title, date, id}) =>  {
    return (
        <>
            <List>
                <Link href={`/work/${id}`}>
                <div className="thumb">
                <img src={src} alt={title} />
                </div>
                <p>{title}<Moment format="YYYY.MM">{date}</Moment></p>
                </Link>
            </List>
        </>
    );
  };
  
  export default WorkList;