import styled from 'styled-components';

export const VideoWrapper = styled.div`
    position: fixed;
    top: 11.73333vw;
    width: 100%;
    z-index: 1001;
    img{
        position: relative;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
`

export const AppBtnWrapper = styled.div`
    margin-top: 68vw;
    display: block;
    overflow: hidden;
    width: 100%;
    position: relative;
    .m-video2-awaken-btn {
        height: 9.6vw;
        width: 93.6vw;
        line-height: 9.6vw;
        background: #fb7299;
        border: none;
        border-radius: 4.8vw;
        color: #fff;
        font-size: 3.73333vw;
        text-align: center;
        margin: 2.66667vw auto 0;
        position: relative;
        transform-origin: bottom;
        .icon {
            position: absolute;
            width: 10.66667vw;
            height: 11.73333vw;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
            left: 8vw;
            bottom: 0;
            &.popup {
                background-image: url(//s1.hdslb.com/bfs/static/jinkela/mstation-video-h5/assets/wake-app-icon.svg);
                animation: icon-popup .3s;
            }
        }
        .container {
            height: 100%;
            overflow: hidden;
            .btn-text {
                width: 100%;
            }
        }
    }
`
