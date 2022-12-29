import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;    
  margin: 0 auto 0;
`
export const Loading = styled.div`
@keyframes Loading {
  0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.5,1.5);
  } 100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1,1);
  }
}
& div > div {
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #353535;
  animation: ldio-ij1swm1j23 1s linear infinite;
}& div:nth-child(1) > div {
  left: 148px;
  top: 88px;
  animation-delay: -0.875s;
}
& > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 160px 100px;
}& div:nth-child(2) > div {
  left: 130px;
  top: 130px;
  animation-delay: -0.75s;
}
& > div:nth-child(2) {
  transform: rotate(45deg);
  transform-origin: 142px 142px;
}& div:nth-child(3) > div {
  left: 88px;
  top: 148px;
  animation-delay: -0.625s;
}
& > div:nth-child(3) {
  transform: rotate(90deg);
  transform-origin: 100px 160px;
}& div:nth-child(4) > div {
  left: 46px;
  top: 130px;
  animation-delay: -0.5s;
}
& > div:nth-child(4) {
  transform: rotate(135deg);
  transform-origin: 58px 142px;
}& div:nth-child(5) > div {
  left: 28px;
  top: 88px;
  animation-delay: -0.375s;
}
& > div:nth-child(5) {
  transform: rotate(180deg);
  transform-origin: 40px 100px;
}& div:nth-child(6) > div {
  left: 46px;
  top: 46px;
  animation-delay: -0.25s;
}
& > div:nth-child(6) {
  transform: rotate(225deg);
  transform-origin: 58px 58px;
}& div:nth-child(7) > div {
  left: 88px;
  top: 28px;
  animation-delay: -0.125s;
}
& > div:nth-child(7) {
  transform: rotate(270deg);
  transform-origin: 100px 40px;
}& div:nth-child(8) > div {
  left: 130px;
  top: 46px;
  animation-delay: 0s;
}
& > div:nth-child(8) {
  transform: rotate(315deg);
  transform-origin: 142px 58px;
}
& {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; 
}
& div { box-sizing: content-box; }

`