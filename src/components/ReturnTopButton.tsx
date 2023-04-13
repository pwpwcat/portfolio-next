import React, { FC, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ScrollToTop from "react-scroll-to-top";

const ToTop = styled.div`
  transition: .3s;
  button{
    border-radius: 100vmax;
    transition: .3s;
    right: 15px;
    bottom: 15px;
  }

  svg{
    position: relative;
    top: 2px;
  }
`;

const RetuenTopButton: FC = () =>{
  return (
    <ToTop>
      <ScrollToTop smooth color={'#fff'} width={'18'} style={{background:'#E298AA'}} top={400} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </ScrollToTop>
    </ToTop>
  );
}

export default RetuenTopButton;