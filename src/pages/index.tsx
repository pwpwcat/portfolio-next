import styled from "styled-components";
import Image from 'next/image'
import Text from '@/components/Text'
import SecTitle from '@/components/SecTitle'
import WorkList from '@/components/WorkList'
import BlogList from '@/components/BlogList'
import More from '@/components/MoreButton'
import { client } from "@/libs/client";
import type { WorkType, Blog } from "@/types/blog";
import { pc, sp, tab } from '@/components/Media';
import MyHead from '@/components/include/MyHead';

const Section = styled.section`
  border-bottom: 3px dotted #e0e0e0;
  padding: 40px 0;

  ${sp`
      padding: 30px 0;
  `}
`;

const Mv = styled.div`
height: 250px;
width: 100%;
border-radius: 10px;
overflow: hidden;
${sp`
    height: 140px;
`}

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

const Detail = styled.ul`
padding-top: 40px;
li{
/* border-top: 1px solid #e0e0e0; */
padding-bottom: 40px;

${sp`
    padding-bottom:35px;
`}

&:last-child{
  padding-bottom: 0;
}
}

h3{
margin-bottom: 10px;
font-size: 15px;

span{
font-size: 12px;
margin-left: 10px;
font-weight: 500;
}

svg{
width: 18px;
position: relative;
top: 3px;
margin-right: 8px;
}
}

a{
display: inline-block;
line-height: 1.8;
margin-right: 10px;
}

.DetailText, a{
  font-size: 13px;
  line-height: 1.8;
}
`

const ContactList = styled.ul`
margin-top: 15px;
  li{
    line-height: 1.9;
    
    a{
      font-weight: 700;
    }
  }
`;

const WorkUl = styled.ul`
  padding-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${sp`
      display: block;
  `}
`;

const BlogUl = styled.ul`
  padding-top: 5px;
`;

export const getStaticProps = async () => {
  const work = await client.get({ 
    endpoint: "work",
    queries: { limit: 2 }
   });
   const blog = await client.get({ 
    endpoint: "blog",
    queries: { limit: 2 }
   });

  return {
    props: {
      works: work.contents,
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
<>
  <MyHead />
  <Mv>
    <img src="images/mv.svg" alt="メインビジュアル" />
  </Mv>
  <Section>
    <SecTitle>MIYA<span>Web Engineer / Designer</span></SecTitle>
    <Text>1996年3月8日生 茨城県出身</Text>
    <Text>MIYAという名前は旧姓と誕生日から取っています。</Text>
    <Text>WEB制作会社での経験を活かし、茨城を拠点としてWEBサイト制作を行っています。</Text>
    <Text>2016年からWEB制作会社でアルバイトを始め、その後2018年までWEBデザイナーとして活動していました。</Text>
    <Text>現在は茨城を拠点に、主にフロントエンドエンジニアとして活動しています。</Text>
    <Detail>
      <li>
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
          SKILL</h3>
        <p className='DetailText'>HTML / SCSS / WordPress / Javascript / jQuery / React / PhotoShop / Illustrator / CLIP studio paint</p>
      </li>
      <li>
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          Work</h3>
        <p className='DetailText'>Wordpressオリジナルテンプレート作成 / WebサイトやLPのデザイン・実装 / バナー制作 / キャラクターデザイン / イラスト制作 / DTPデザイン</p>
      </li>
      <li>
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          Like - Anime & Comic</h3>
        <p className='DetailText'>ゲッターロボシリーズ / マジンガーシリーズ / マクロス7 / トップをねらえ！シリーズ / マブラヴ オルタネイティヴ / TRIGGER作品 / Fateシリーズ 等</p>
      </li>
      <li>
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
          </svg>
          Like - Artist<span>敬称略</span></h3>
        <div>
          <a href="https://youtu.be/sOjvROaN6wI" target="_blank" rel="noopener">KEYTALK</a>
          <a href="https://youtu.be/09wA4qWXOdU" target="_blank" rel="noopener">BRADIO</a>
          <a href="https://youtu.be/hzWqb4mS0Mg" target="_blank" rel="noopener">JAM Project</a>
          <a href="https://youtu.be/X4QGvxLAw2Y" target="_blank" rel="noopener">福山芳樹</a>
          <a href="https://youtu.be/l6SeJDA0JA4" target="_blank" rel="noopener">Fire Bomber</a>
          <a href="https://www.youtube.com/watch?v=Pca7RONLQdE" target="_blank" rel="noopener">きくお</a>
          <a href="https://youtu.be/fjrvWaXJj_A" target="_blank" rel="noopener">ALI PROJECT</a>
          <a href="https://music.youtube.com/watch?v=SEb3uEQ4gok&amp;feature=share" target="_blank"
            rel="noopener">平沢進</a>
          <a href="https://music.youtube.com/watch?v=LRHVrMy2Vj4&amp;feature=share" target="_blank"
            rel="noopener">P-MODEL</a>
          <a href="https://music.youtube.com/watch?v=OJU6BImQ7sQ&amp;feature=share" target="_blank"
            rel="noopener">倉橋ヨエコ</a>
          <a href="https://youtu.be/XL5inQwnFSg" target="_blank" rel="noopener">女王蜂</a>
          <a href="https://youtu.be/Q6x1LFYZAVU" target="_blank" rel="noopener">amazarashi</a>
          <a href="https://youtu.be/JKhMgQAY26c" target="_blank" rel="noopener">神聖かまってちゃん</a>
          <a href="https://youtu.be/-4O6X3Z_QUA" target="_blank" rel="noopener">アーバンギャルド</a>
          <a href="https://youtu.be/c7VCxdEmHU0" target="_blank" rel="noopener">Kalafina</a>
          <a href="https://youtu.be/XVOdJFbQuts" target="_blank" rel="noopener">Sound Horizon</a>
          <a href="https://youtu.be/j6AB_tgZHGk" target="_blank" rel="noopener">キセル</a>
          <a href="https://www.nicovideo.jp/watch/sm7295500" target="_blank" rel="noopener">cosMo@暴走P</a>
          <a href="https://youtu.be/3DghhiR5oHk" target="_blank" rel="noopener">ATOLS</a>
        </div>
      </li>
    </Detail>
    {/* <More url={'./about'}/> */}
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
    <More url={'./work'}/>
  </Section>
  <Section>
    <SecTitle>Blog</SecTitle>
    <BlogUl>
      {blogs.map((blog) => (
        <BlogList
        isText={true}
        body={blog.body}
        key={blog.id}
        icon={blog.icon}
        id={blog.id}
        title={blog.title}
        date={blog.updatedAt}
        />
      ))}
    </BlogUl>
    <More url={'./blog'}/>
  </Section>
  <Section id="contact">
    <SecTitle>Contact</SecTitle>
    <Text>下記の各ソーシャルメディア、又はEメールにてご連絡ください。</Text>
    <ContactList>
      <li>
        <a href="https://twitter.com/pwpw_cat" target={'_blank'} rel="noopener">Twitter：@pwpw_cat</a>
      </li>
      <li>
        <a href="https://www.instagram.com/20siesta/" target={'_blank'} rel="noopener">Instagram：@20siesta</a>
      </li>
      <li>
        <a href="mailto:info@pwpw-cat.site">Mail：info@pwpw-cat.site</a>
      </li>
    </ContactList>
  </Section>
</>
)
}