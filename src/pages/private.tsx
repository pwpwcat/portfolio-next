import styled from "styled-components";
import MyHead from "@/components/include/MyHead";
import { pc, sp, tab } from "@/components/Media";
import SecTitle from "@/components/SecTitle";
import Text from "@/components/Text";
import { motion } from "framer-motion";
import { client } from "@/libs/client";
import type { PrivateType } from "@/types/blog";

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
  const workPrivate = await client.get({
    endpoint: "work-private",
    queries: {
      limit: 3000,
      // orders: 'publishedAt' 並び替え
    },
  });
  return {
    props: {
      privateItem: workPrivate.contents,
    },
  };
};

type Props = {
  privateItem: Array<PrivateType>;
};

const Section = styled.section`
  margin-top: 60px;
  margin-bottom: 40px;
  ${sp`
      margin-top: 40px;
  `}
`;

export default function Private({ privateItem }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <></>
    </motion.div>
  );
}
