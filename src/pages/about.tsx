import styled from "styled-components";
import MyHead from "@/components/include/MyHead";
import { pc, sp, tab } from "@/components/Media";
import SecTitle from "@/components/SecTitle";
import Text from "@/components/Text";
import { motion } from "framer-motion";

const Section = styled.section`
  margin-top: 60px;
  margin-bottom: 40px;
  ${sp`
      margin-top: 40px;
  `}
`;

const CareerUl = styled.div`
  margin-bottom: 20px;
  li {
    display: flex;
    justify-content: space-between;
    padding: 25px 0;
    border-bottom: 1px solid #e0e0e0;

    &:first-child {
      ${sp`
        padding-top: 0;
      `}
    }
  }

  .year {
    width: 30%;
    font-weight: 700;
    ${sp`
      width: 40%;
      position: relative;
      top: 2px;
    `}
    span {
      display: block;
      margin-top: 3px;
      font-size: 11px;
      font-weight: 500;
    }
  }

  .comment {
    width: 100%;

    h3 {
      margin-bottom: 7px;
      line-height: 1.6;
    }

    .work {
      margin-top: 15px;
      padding-left: 12px;
      position: relative;

      &::after {
        content: "";
        width: 2px;
        height: 100%;
        display: block;
        background-color: #f1d6d6;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
`;

export const LikeDetail = styled.ul`
  padding-top: 25px;
  padding-bottom: 40px;
  li {
    /* border-top: 1px solid #e0e0e0; */
    padding-bottom: 40px;

    ${sp`
    padding-bottom:35px;
`}

    &:last-child {
      padding-bottom: 0;
    }
  }

  h3 {
    margin-bottom: 10px;
    font-size: 15px;

    span {
      font-size: 12px;
      margin-left: 10px;
      font-weight: 500;
    }

    svg {
      width: 18px;
      position: relative;
      top: 3px;
      margin-right: 8px;
    }
  }

  a {
    display: inline-block;
    line-height: 1.8;
    margin-right: 10px;
  }

  .DetailText,
  a {
    font-size: 13px;
    line-height: 1.8;
  }
`;

export const LikeBtn = styled.a`
  border: 1px solid #e298aa;
  background: #e298aa;
  border-radius: 100vmax;
  color: #fff;
  font-weight: 600;
  display: inline-block;
  padding: 6px 14px 9px;
  margin-top: 20px;

  svg {
    width: 18px;
    position: relative;
    top: 4px;
    margin-right: 8px;
  }

  &:hover {
    background: unset;
    color: #e298aa;
  }
`;

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <>
        <MyHead
          title={"About | pwpw-cat portfolio site"}
          description={"MIYAについて"}
        />
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
            2016年からWEB制作会社でアルバイトを始め、その後2019年までWEBデザイナーとして活動していました。
          </Text>
          <Text>
            現在は茨城を拠点に、主にフロントエンドエンジニアとして活動しています。
          </Text>
          <LikeBtn href="#like">
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            好きなもの
          </LikeBtn>
        </Section>
        <Section>
          <SecTitle>Career</SecTitle>
          <CareerUl>
            <li>
              <div className="year">
                2014年<span>3月</span>
              </div>
              <div className="comment">
                <h3>八洲学園大学国際高等学校を卒業</h3>
                {/* <Text>
                2012年に地元の女子高から通信制の八洲学園大学高等学校へ編入しました。当時は小学生の頃からとにかく好きだったチャットをしたりデジタルイラストを描いたりしていて、家が山奥にあるという事もありほとんど家に引きこもっていました。
              </Text>
              <Text>
                この頃に好きなイラストレーターさんの素敵なWEBサイトを見て、こういうサイトを自分で作ってみたいと思い、色々調べていたところWEBデザイナーという職業がある事を知り、WEB業界で働きたいと思い始めていました。
              </Text> */}
              </div>
            </li>
            <li>
              <div className="year">
                2017年<span>2月〜8月</span>
              </div>
              <div className="comment">
                <h3>
                  WEB制作会社へ入社<br className="sp-display"></br>
                  （秋葉原｜短期アルバイト）
                </h3>
                {/* <Text>
                雑貨屋のアルバイトをしながら独学で勉強を重ね、その後WEB制作会社へアルバイトとして入社しました。
              </Text> */}
                {/* <Text>
                社内開発のCMSを使用して大学のホームページを制作している会社でした。
              </Text> */}
                <div className="work">
                  <Text>Photoshopでの画像編集 / 簡単なHTML修正</Text>
                </div>
              </div>
            </li>
            <li>
              <div className="year">
                2017年
                <span>
                  9月〜<br className="sp-display"></br>翌年1月
                </span>
              </div>
              <div className="comment">
                <h3>
                  採用コンサル会社へ入社<br className="sp-display"></br>
                  （代々木｜アルバイト）
                </h3>
                {/* <Text>
                WEBデザイナーとして入社しました。LP制作や採用サイト制作、バナー制作など、幅広く携わらせていただき良い経験を積むことができました。
              </Text>
              <Text>
                しかし正社員の話が上がった時に、「女性だから営業もやってもらうね」と社長から直々に言われてしまい、契約更新を機に退職しました...
              </Text> */}

                <div className="work">
                  <Text>Photoshopでのバナー制作、WEBデザイン、LPデザイン</Text>
                </div>
              </div>
            </li>
            <li>
              <div className="year">
                2018年
                <span>
                  2月〜<br className="sp-display"></br>翌年8月
                </span>
              </div>
              <div className="comment">
                <h3>
                  WEB制作会社へ入社<br className="sp-display"></br>
                  （飯田橋｜アルバイト→契約社員）
                </h3>
                {/* <Text>
                WEBデザイナー/コーダーとして入社しました。ここではコーディングスキルがぐんと身についたように感じました。社内開発のCMSの設定や、コーポレートサイトのコーディング、更新作業など経験させていただきました。
              </Text>
              <Text>
                2019年8月頃に体調を崩してしまい、退職して地元茨城に戻りました。
              </Text> */}

                <div className="work">
                  <Text>
                    Photoshop、Illustratorでのバナー制作、WEBデザイン、実装、更新作業｜PHP、HTML/CSS(sass)、Javascript
                  </Text>
                </div>
              </div>
            </li>
            <li>
              <div className="year">
                2019年
                <span>
                  12月〜<br className="sp-display"></br>2021年5月
                </span>
              </div>
              <div className="comment">
                <h3>
                  WEB/アプリ制作会社へ入社<br className="sp-display"></br>
                  （渋谷｜正社員）
                </h3>
                {/* <Text>
                茨城から完全在宅で、フロントエンドエンジニアとして入社しましたが、UIデザインやWEBデザインなども担当させていただいていました。
              </Text>
              <Text>
                クライアント先への打ち合わせの訪問にも参加していました。
              </Text> */}

                <div className="work">
                  <Text>
                    AdobeXDでのアプリUIデザイン、採用サイトデザイン・実装｜PHP、HTML/CSS(sass)、Javascript、Wordpress
                  </Text>
                </div>
              </div>
            </li>
            <li>
              <div className="year">
                2021年
                <span>6月〜在職</span>
              </div>
              <div className="comment">
                <h3>
                  美容整形外科事務所へ入社<br className="sp-display"></br>
                  （秋葉原｜アルバイト→正社員）
                </h3>
                <Text>
                  広報部WEB担当 フロントエンドエンジニアとして入社しました。
                </Text>
                <Text>フルリモートワークです。</Text>
                <div className="work">
                  <Text>
                    WordPressでのテーマ制作、コーディング、更新作業｜Git（Bitbucket→Github）、PHP、HTML/CSS(sass)、Javascript、Wordpress
                  </Text>
                </div>
              </div>
            </li>
          </CareerUl>
          <Text>
            他、個人でWEBサイト制作の案件をお受けしたり、チームでReact（Next.js）でアプリを制作したりしています。
          </Text>
          <Text>
            このポートフォリオサイトはNext.js+TypeScript+microCMSで制作しています。
          </Text>
        </Section>
        <Section>
          <SecTitle>Like*</SecTitle>
          <LikeDetail id="like">
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                Like - Anime & Comic
              </h3>
              <p className="DetailText">
                ダイナミックプロ（特にゲッター）/ マクロス7 /
                トップをねらえ！シリーズ / マブラヴ オルタネイティヴ /
                TRIGGER作品 / Fateシリーズ 等
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
                    d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                  />
                </svg>
                Like - Artist<span>敬称略</span>
              </h3>
              <div>
                <a
                  href="https://youtu.be/sOjvROaN6wI"
                  target="_blank"
                  rel="noopener"
                >
                  KEYTALK
                </a>
                <a
                  href="https://youtu.be/09wA4qWXOdU"
                  target="_blank"
                  rel="noopener"
                >
                  BRADIO
                </a>
                <a
                  href="https://youtu.be/hzWqb4mS0Mg"
                  target="_blank"
                  rel="noopener"
                >
                  JAM Project
                </a>
                <a
                  href="https://youtu.be/X4QGvxLAw2Y"
                  target="_blank"
                  rel="noopener"
                >
                  福山芳樹
                </a>
                <a
                  href="https://youtu.be/l6SeJDA0JA4"
                  target="_blank"
                  rel="noopener"
                >
                  Fire Bomber
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Pca7RONLQdE"
                  target="_blank"
                  rel="noopener"
                >
                  きくお
                </a>
                <a
                  href="https://youtu.be/fjrvWaXJj_A"
                  target="_blank"
                  rel="noopener"
                >
                  ALI PROJECT
                </a>
                <a
                  href="https://music.youtube.com/watch?v=SEb3uEQ4gok&amp;feature=share"
                  target="_blank"
                  rel="noopener"
                >
                  平沢進
                </a>
                <a
                  href="https://music.youtube.com/watch?v=LRHVrMy2Vj4&amp;feature=share"
                  target="_blank"
                  rel="noopener"
                >
                  P-MODEL
                </a>
                <a
                  href="https://music.youtube.com/watch?v=OJU6BImQ7sQ&amp;feature=share"
                  target="_blank"
                  rel="noopener"
                >
                  倉橋ヨエコ
                </a>
                <a
                  href="https://youtu.be/XL5inQwnFSg"
                  target="_blank"
                  rel="noopener"
                >
                  女王蜂
                </a>
                <a
                  href="https://youtu.be/Q6x1LFYZAVU"
                  target="_blank"
                  rel="noopener"
                >
                  amazarashi
                </a>
                <a
                  href="https://youtu.be/JKhMgQAY26c"
                  target="_blank"
                  rel="noopener"
                >
                  神聖かまってちゃん
                </a>
                <a
                  href="https://youtu.be/-4O6X3Z_QUA"
                  target="_blank"
                  rel="noopener"
                >
                  アーバンギャルド
                </a>
                <a
                  href="https://youtu.be/c7VCxdEmHU0"
                  target="_blank"
                  rel="noopener"
                >
                  Kalafina
                </a>
                <a
                  href="https://youtu.be/XVOdJFbQuts"
                  target="_blank"
                  rel="noopener"
                >
                  Sound Horizon
                </a>
                <a
                  href="https://youtu.be/j6AB_tgZHGk"
                  target="_blank"
                  rel="noopener"
                >
                  キセル
                </a>
                <a
                  href="https://www.nicovideo.jp/watch/sm7295500"
                  target="_blank"
                  rel="noopener"
                >
                  cosMo@暴走P
                </a>
                <a
                  href="https://youtu.be/3DghhiR5oHk"
                  target="_blank"
                  rel="noopener"
                >
                  ATOLS
                </a>
              </div>
            </li>
          </LikeDetail>
        </Section>
      </>
    </motion.div>
  );
}
