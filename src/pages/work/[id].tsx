import {
    GetStaticPaths,
    GetStaticProps,
    InferGetStaticPropsType,
    NextPage,
    GetStaticPropsContext
  } from "next";
  import Moment from 'react-moment'
  import { client } from "@/libs/client";
  import type { WorkType } from "@/types/blog";
  import styled from "styled-components";
  import Link from 'next/link'
  import Image from 'next/image'
  import MyHead from '@/components/include/MyHead';
  import { pc, sp, tab } from '@/components/Media';

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 3px dotted #e0e0e0;

  .icon{
    display: inline-block;
    margin-right: 15px;
    font-size: 30px;
  }

  h1{
    font-size: 20px;
    ${sp`
      font-size: 18px;
    `}
  }

  span{
    font-size: 14px;
    display: block;
    margin-top: 5px;

    a{
      display: inline-block;
    }
  }

  time{
    margin-right: 10px;
  }
`;

const Main = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  ${sp`
      margin-top: 40px;
  `}

  .thumb{
    overflow: hidden;
    border-radius: 10px;
  }

  .mainCtt{
    margin-top: 30px;
  }

  .link{
    margin-bottom: 10px;
    display: inline-block;
  }

  .back{
    margin-top: 30px;
    svg{
      width: 18px;
      position: relative;
      top: 3px;
      display: inline-block;
      margin-right: 3px;
    }
  }
`;

  type Props = {
    work: WorkType;
  };

  export default function WorkId({ work }: Props) {
    // let link:any = work.link;
    // let linkHtml:any = document.querySelectorAll<HTMLElement>('.siteLink');
    // if(link !== undefined){
    //   linkHtml.remove();
    // }
    return (
      <>
      <MyHead 
        title={work.title+' | Work | pwpw-cat portfolio-site'}
        />
      <Main>
        <Heading>
          <h1>
            {work.title}
            <span>制作年月：<Moment format="YYYY.MM">{work.date}</Moment>
            <a href={work.link} target="_blank" rel="noopener" className="siteLink">{work.link}</a>
            </span>
          </h1>
        </Heading>
        <div className="thumb">
          <img src={work.thumb.url} alt={work.title} />
        </div>
        <div className="mainCtt">
          <div
            dangerouslySetInnerHTML={{
              __html: `${work.body}`,
            }}
          />
        </div>
        <Link href="/work" className="back">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>実績一覧へ
        </Link>
      </Main>
      </>
    );
  }
  
  // 静的生成のためのパスを指定します
  export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "work" });
  
    const paths = data.contents.map((content:any) => `/work/${content.id}`);
    return { paths, fallback: false };
  };
  
  // データをテンプレートに受け渡す部分の処理を記述します
  export const getStaticProps = async (context:any) => {
    
    const id = context.params.id;
    const data = await client.get({ endpoint: "work", contentId: id });
  
    return {
      props: {
        work: data,
      },
    };
  };