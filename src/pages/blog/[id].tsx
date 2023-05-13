import styled from "styled-components";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import Moment from "react-moment";
import { client } from "@/libs/client";
import type { Blog } from "@/types/blog";
import MyHead from "@/components/include/MyHead";
import { pc, sp, tab } from "@/components/Media";
import { motion } from "framer-motion";

const Main = styled.main`
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

const Heading = styled.div`
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

const Content = styled.div`
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

type Props = {
  blog: Blog;
  highlightedBody: string;
};

export default function BlogId({ blog, highlightedBody }: Props) {
  if (blog.updatedAt === undefined) {
    blog.updatedAt = "";
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <>
        <MyHead
          title={blog.icon + blog.title + " | Blog | pwpw-cat portfolio-site"}
        />
        <Main>
          <Heading>
            <div className="icon">{blog.icon}</div>
            <h1>
              {blog.title}
              <div className="date">
                <Moment format="YYYY.MM.DD">{blog.createdAt}</Moment>
                <p className="update">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  <Moment format="YYYY.MM.DD">{blog.updatedAt}</Moment>
                </p>
              </div>
            </h1>
          </Heading>
          <Content
            dangerouslySetInnerHTML={{ __html: highlightedBody }}
          ></Content>
        </Main>
      </>
    </motion.div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
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
