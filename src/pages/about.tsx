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
      </>
    </motion.div>
  );
}
