import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;
export const VideoListWrapper = styled.div`
  padding: 0 1.33333vw;
  margin-bottom: 2.66666vw;
  margin-top: 2.66666vw;
`;
export const VideoListBar = styled.div`
  padding: 1.33333vw 2.66666vw;
  font-size: 3.73333vw;
  display: flex;
  justify-content: space-between;
  -webkit-box-pack: justify;
  a {
    text-decoration: none;
  }
  .bt {
    font-size: 4vw;
  }
  .rank-more {
    color: #ffa726;
  }
  .more {
    color: #999;
  }
  .iconfont {
    font-family: iconfont !important;
    font-size: 4.26667vw;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
