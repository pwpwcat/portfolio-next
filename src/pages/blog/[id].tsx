import styled from "styled-components";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import Moment from 'react-moment'
import { client } from "@/libs/client";
import type { Blog } from "@/types/blog";
import MyHead from '@/components/include/MyHead';
import { pc, sp, tab } from '@/components/Media';

const Main = styled.main`
  margin-top: 60px;
  margin-bottom: 40px;
  ${sp`
      margin-top: 40px;
  `}

  code{
    border-radius: 10px;
    margin: 15px 0;
  }
`;

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

  time{
    font-size: 14px;
    display: block;
    margin-top: 5px;
  }
  
`;

const Content = styled.div`
  p{
    line-height: 1.8;
    margin-bottom: 10px;
  }

  a{
    color: rgb(213 123 145);
    text-decoration: underline;
    &::before{
      content: '🔗';
      display: inline-block;
      margin-right: 5px;
    }

    &:hover{
      text-decoration: unset;
    }
  }
`;

type Props = {
  blog: Blog;
  highlightedBody: string;
};

export default function BlogId({ blog,highlightedBody }: Props) {
  return (
    <>
    <MyHead 
        title={blog.icon + blog.title+' | Blog | pwpw-cat portfolio-site'}
        />
    <Main>
      <Heading>
        <div className="icon">{blog.icon}</div>
        <h1>
          {blog.title}
          <Moment format="YYYY.MM.DD">{blog.createdAt}</Moment>
        </h1>
      </Heading>
      <Content dangerouslySetInnerHTML={{ __html: highlightedBody }}></Content>
    </Main>
    </>
  );
}


// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
const data = await client.get({ endpoint: "blog" });

const paths = data.contents.map((content:any) => `/blog/${content.id}`);
return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context:any) => {
  
const id = context.params.id;
const data = await client.get({ endpoint: "blog", contentId: id });

const $ = cheerio.load(data.body);
$("pre code").each((_, elm) => {
const result = hljs.highlightAuto($(elm).text());
$(elm).html(result.value);
$(elm).addClass("hljs");
});
console.log($.html()); 

return {
  props: {
    blog: data,
    highlightedBody: $.html(),
    },
  };
};