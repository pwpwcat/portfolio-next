import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import Moment from "react-moment";
import { client } from "@/libs/client";
import type { Blog } from "@/types/blog";
import MyHead from "@/components/include/MyHead";
import { motion } from "framer-motion";
import { Main, Heading, Content } from "@/components/pageStyles/blog/styles";

type Props = {
  blog: Blog;
  highlightedBody: string;
  previousBlog: Blog | null;
  nextBlog: Blog | null;
};

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  const $ = cheerio.load(data.body);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  // console.log($.html());

  const blogList = await client.get({ endpoint: "blog" });
  const currentBlogIndex = blogList.contents.findIndex(
    (blog: Blog) => blog.id === id
  );

  const previousBlog =
    currentBlogIndex > 0 ? blogList.contents[currentBlogIndex - 1] : null;
  const nextBlog =
    currentBlogIndex < blogList.contents.length - 1
      ? blogList.contents[currentBlogIndex + 1]
      : null;

  return {
    props: {
      blog: data,
      highlightedBody: $.html(),
      previousBlog,
      nextBlog,
    },
  };
};

export default function BlogId({
  blog,
  highlightedBody,
  previousBlog,
  nextBlog,
}: Props) {
  //更新日がない場合は非表示
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
          <div>
            {previousBlog && (
              <Link href={`/blog/${previousBlog.id}`}>前のページへ</Link>
            )}
            {nextBlog && (
              <Link href={`/blog/${nextBlog.id}`}>次のページへ</Link>
            )}
          </div>
        </Main>
      </>
    </motion.div>
  );
}
