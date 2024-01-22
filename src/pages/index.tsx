import { NextPage } from "next";
import { client } from "@/libs/client";
import type { WorkType, Blog } from "@/types/blog";
import Text from "@/components/Text";
import SecTitle from "@/components/SecTitle";
import WorkList from "@/components/WorkList";
import BlogList from "@/components/BlogList";
import More from "@/components/MoreButton";
import MyHead from "@/components/include/MyHead";
import { motion } from "framer-motion";
import {
  Section,
  Mv,
  Detail,
  ContactList,
  WorkUl,
  BlogUl,
} from "@/components/pageStyles/home/styles";

//記事をシャッフルするための関数
function shuffleArray(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const getStaticProps = async () => {
  const work = await client.get({
    endpoint: "work",
    queries: { limit: 999 }, //とりあえず全件取得
  });

  const blog = await client.get({
    endpoint: "blog",
    queries: { limit: 3 },
  });

  const shuffledWorks = shuffleArray(work.contents); //取得した記事をシャッフル
  const randomWorks = shuffledWorks.slice(0, 2); //2件だけ表示

  return {
    props: {
      works: randomWorks,
      blogs: blog.contents,
    },
  };
};

type Props = {
  works: Array<WorkType>;
  blogs: Array<Blog>;
};

export default function Home({ works, blogs }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <>
        <MyHead />
        <Mv>
          <img src="images/mv.svg" alt="メインビジュアル" />
        </Mv>
        <Section>
          <SecTitle>
            MIYA<span>Web Engineer / Designer</span>
          </SecTitle>
          <Text>1996年3月8日生 茨城県出身</Text>
          <Text>MIYAという名前は旧姓と誕生日から取っています。</Text>
          <Text>
            WEB制作会社での経験を活かし、茨城を拠点としてWEBサイト制作を行っています。
          </Text>
          <Text>
            2017年からWEB制作会社でアルバイトを始め、その後2018年までWEBデザイナーとして活動していました。
          </Text>
          <Text>
            現在は茨城を拠点に、主にフロントエンドエンジニアとして活動しています。
          </Text>
          <Detail>
            <li>
              <h3>
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
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
                SKILL
              </h3>
              <p className="DetailText">
                HTML / SCSS / WordPress / Javascript / jQuery / React /
                PhotoShop / Illustrator / CLIP studio paint
              </p>
            </li>
            <li>
              <h3>
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
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
                Work
              </h3>
              <p className="DetailText">
                Wordpressオリジナルテンプレート作成 /
                WebサイトやLPのデザイン・実装 / バナー制作 /
                キャラクターデザイン / イラスト制作 / DTPデザイン
              </p>
            </li>
          </Detail>
          <More url={"./about"} />
        </Section>
        <Section>
          <SecTitle>Work</SecTitle>
          <WorkUl>
            {works.map((work) => (
              <WorkList
                key={work.id}
                id={work.id}
                src={work.thumb.url}
                title={work.title}
                date={work.date}
              />
            ))}
          </WorkUl>
          <More url={"./work"} />
        </Section>
        <Section>
          <SecTitle>Blog</SecTitle>
          <BlogUl>
            {blogs.map((blog) => (
              <BlogList
                isText={false}
                body={blog.body}
                key={blog.id}
                icon={blog.icon}
                id={blog.id}
                title={blog.title}
                date={blog.createdAt}
              />
            ))}
          </BlogUl>
          <More url={"./blog"} />
        </Section>
        <Section id="contact">
          <SecTitle>Contact</SecTitle>
          <Text>下記のEメールにてご連絡ください。</Text>
          <ContactList>
            {/* <li>
              <a
                href="https://twitter.com/pwpw_cat"
                target={"_blank"}
                rel="noopener"
              >
                Twitter：@pwpw_cat
              </a>
            </li> */}
            {/* <li>
              <a
                href="https://www.instagram.com/20siesta/"
                target={"_blank"}
                rel="noopener"
              >
                Instagram：@20siesta
              </a>
            </li> */}
            <li>
              <a href="mailto:info@pwpw-cat.site">Mail：info@pwpw-cat.site</a>
            </li>
          </ContactList>
        </Section>
      </>
    </motion.div>
  );
}
