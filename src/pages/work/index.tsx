import WorkList from "@/components/WorkList";
import styled from "styled-components";
import Link from "next/link";
import type { InferGetStaticPropsType, NextPage } from "next";
import { client } from "@/libs/client";
import type { WorkType } from "@/types/blog";
import SecTitle from "@/components/SecTitle";
import MyHead from "@/components/include/MyHead";
import { pc, sp, tab } from "@/components/Media";
import { motion } from "framer-motion";
import Text from "@/components/Text";

const Ul = styled.ul`
  padding-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Section = styled.section`
  margin-top: 60px;
  ${sp`
      margin-top: 40px;
  `}
  li {
    margin-bottom: 40px;
  }
`;

const Comment = styled.div`
  margin-bottom: 15px;
  li {
    margin-bottom: 40px;
  }
`;

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
  const work = await client.get({
    endpoint: "work",
    queries: {
      limit: 3000,
      // orders: 'publishedAt' 並び替え
    },
  });
  return {
    props: {
      works: work.contents,
    },
  };
};

type Props = {
  works: Array<WorkType>;
};

export default function Work({ works }: Props) {
  // console.log('結果'+works[2])
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }} // アンマウント時
    >
      <>
        <MyHead title={"Work | pwpw-cat portfolio site"} />
        <Section>
          <SecTitle>Work</SecTitle>
          <Comment>
            <Text>
              直近でもいくつかございますが、こちらでは公開できる制作物のみ掲載しております。
            </Text>
          </Comment>
          <Ul>
            {works.map((work) => (
              <WorkList
                key={work.id}
                id={work.id}
                src={work.thumb.url}
                title={work.title}
                date={work.date}
              />
            ))}
          </Ul>
        </Section>
      </>
    </motion.div>
  );
}
