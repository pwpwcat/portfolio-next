import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "@/styles/reset.css";
import "@/styles/style.css";
import Leyout from "@/components/Leyout";
import { googleTagManagerId } from "@/libs/gtm";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "@/components/GoogleTagManager";
import Loading from "@/components/Loading";

// オープニングアニメーション（ローディング）
function OpeningAnimation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <>
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Loading />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <OpeningAnimation />
      <div className="l-wrap">
        <div className="l-container">
          <div className="l-inner">
            {/* フワッと遷移の制御 */}
            <AnimatePresence
              mode="wait"
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Leyout>
                <Component key={router.asPath} {...pageProps} />
              </Leyout>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
