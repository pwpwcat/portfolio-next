import BlogList from '@/components/BlogList'
import styled from "styled-components";
import Link from "next/link";
import type { InferGetStaticPropsType, NextPage } from "next";
import { client } from "@/libs/client";    // srcから見た絶対パスで指定
import type { Blog } from "@/types/blog";
import SecTitle from '@/components/SecTitle'
import MyHead from '@/components/include/MyHead';
import { pc, sp, tab } from '@/components/Media';

const Ul = styled.ul`
  padding-top: 5px;
`;

const Section = styled.section`
  margin-top: 60px;
  ${sp`
      margin-top: 40px;
  `}
`;

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
    const blog = await client.get({ 
        endpoint: "blog",
        queries: { 
            limit: 3000 ,
            // orders: 'publishedAt' 並び替え
        }
       });
    return {
      props: {
        blogs: blog.contents,
      },
    };
  };
  
  type Props = {
    blogs: Array<Blog>;
  };
  
  export default function BlogHome({ blogs }: Props){
    console.log(blogs)
    return(
        <>
        <MyHead 
        title={'Blog | pwpw-cat portfolio site'}
        />
        <Section>
          <SecTitle>Blog</SecTitle>
            <Ul>
            {blogs.map((blog) => (
                <BlogList
                isText={false}
                body={blog.body}
                key={blog.id}
                id={blog.id}
                icon={blog.icon}
                title={blog.title}
                date={blog.updatedAt}
                />
                
            ))}
            </Ul>
          </Section>
        </>
    )
  }