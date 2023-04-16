import styled from "styled-components";
import Link from 'next/link'
import More from '@/components/MoreButton'
import Moment from 'react-moment'
import { pc, sp, tab } from '@/components/Media';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
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
    
    a{
        display: flex;
        align-items: center;
        transition: .3s;

        &:hover{
            div{
                color: #E298AA;
            }
        }
    }

    .icon{
        font-size: 24px;

        ${sp`
            font-size: 20px;
        `}
    }

    .date{
        font-size: 13px;
        margin-right: 15px;
        ${sp`
             font-size: 12px;
        `}
    }

    .title{
        margin-left: 15px;
        font-weight: 700;
        ${sp`
            margin-left: 5px;
        `}

        span{
            ${sp`
                display: block;
            `}
        }
    }

    .body{
        display: block;
        font-size: 12px;
    }

`;

const Content = styled.div`
  p{
    font-size: 13px;
    color: #9b9bb5;
    line-height: 1.5;
  }
`;



// const WorkList: React.FC<Props> = ({ children }) =>
const BlogList: React.FC<Props> = ({isText, icon, title, date, id, body}) =>  {
    
    return (
        <>
            <List>
                <Link href={`/blog/${id}`}>
                <div className="icon">{icon}</div>
                <div className="title">
                    <span className="date"><time>{dayjs.utc(date).tz('Asia/Tokyo').format('YYYY.MM.DD')}</time></span>
                    {title}
                    {isText && <Content dangerouslySetInnerHTML={{ __html: body.slice( 0, 60 ) + '...' }}></Content>}
                </div>
                
                </Link>
            </List>
        </>
    );
  };
  
  export default BlogList;