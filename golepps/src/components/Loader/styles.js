import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  
  .lds-eclipse {
    width: 80px !important;
    height: 80px !important;
    position: relative;
    margin: 0 auto;
    -webkit-transform: translate(-100px, -100px) scale(1)
      translate(100px, 100px);
    transform: translate(-100px, -100px) scale(1) translate(100px, 100px);

    .spinner {
      position: absolute;
      animation: lds-eclipse 1s linear infinite;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-shadow: 0 4px 0 0 #dd504c;
    }

    img {
      height: 40px;
      position: absolute;
      top: 20px;
      left: 25px;
    }
`;

export const Container = styled.div`
  position: fixed;
  background: ${({ white }) => (white ? "#fff" : "rgba(0, 0, 0, 0.3)")};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  transition: all 0.3s;
  visibility: visible;
  opacity: 1;
  /* pointer-events: none; */

  .lds-eclipse {
    width: 80px !important;
    height: 80px !important;
    position: relative;
    margin: 0 auto;
    -webkit-transform: translate(-100px, -100px) scale(1)
      translate(100px, 100px);
    transform: translate(-100px, -100px) scale(1) translate(100px, 100px);

    .spinner {
      position: absolute;
      animation: lds-eclipse 1s linear infinite;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-shadow: 0 4px 0 0 #dd504c;
    }

    img {
      height: 40px;
      position: absolute;
      top: 20px;
      left: 25px;
    }
  }

  @keyframes lds-eclipse {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes lds-eclipse {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
