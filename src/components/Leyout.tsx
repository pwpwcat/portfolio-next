import React, { FC, useRef, useState, useEffect } from "react";
import Header from '@/components/include/Header';
import Footer from '@/components/include/Footer';
import ReturnTopButton from '@/components/ReturnTopButton';

type Props = {
    children?: React.ReactNode
}

const Leyout: FC<Props> = ({children}) =>{
    return(
        <>  
            <Header />
            <main>
                {children}
            </main>
            <ReturnTopButton />
            <Footer />
        </>
    )
}

export default Leyout;