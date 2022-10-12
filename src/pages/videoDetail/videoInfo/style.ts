import styled from "styled-components";

export const InfoWrapper = styled.div`
.m-video-info-new {
    margin-top: 1.86667vw;
    padding: 0 3.2vw;
    font-size: 0;
    text-decoration: none;
    /* .title { */
    .adm-list {
        --header-font-size: 0;
        --prefix-width: 'auto';
        --prefix-padding-right: 12px;
        --align-items: center;
        --active-background-color: transparent;
        --border-inner: 0;
        --border-top: 0;
        --border-bottom: 0;
        --padding-left: 0.5rem;
        --padding-right: 0.5rem;
        --font-size: 0;
        --extra-max-width: 70%;
        .adm-list-item{
            padding-left: 0;
            .adm-list-item-content-main {
                padding: 0;
            }
            .adm-list-item-content-arrow {
                color: #999;
            }
        }
    }
    .left {
        float: left;
        position: relative;
        .label {
            position: absolute;
            display: inline-block;
            font-size: 0;
            padding: 0 1.6vw;
            height: 5.33333vw;
            line-height: 5.33333vw;
            color: #fb7299;
            background: #f4f4f4;
            border-radius: 3.2vw;
            vertical-align: middle;
            margin-top: 0.53333vw;
            span {
                vertical-align: middle;
                position: relative;
                top: 1px;
                font-size: 3.2vw;
            }
        }
        h1 {
            font-size: 4.26667vw;
            font-weight: 400;
            display: inline-block;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            color: #212121;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 86.66667vw;
            height: 6.4vw;
            line-height: 6.4vw;
            &.has-activity {
                padding-left: 12.26667vw;
            }
        }
    }
    .fold-container{
        .up {
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            margin-top: 2.93333vw;
            .face {
                display: flex;
                .avatar {
                    position: relative;
                    vertical-align: middle;
                    margin-right: 2.66667vw;
                    .face {
                        width: 9.6vw;
                        height: 9.6vw;
                        border-radius: 50%;
                        border: .5px solid #999;
                    }
                }
                .info {
                    position: relative;
                    top: 0.53333vw;
                    .name {
                        font-size: 3.73333vw;
                        color: #212121;
                        display: block;
                        height: 4.53333vw;
                        line-height: 4.53333vw;
                    }
                    .fans {
                        margin-top: 1.33333vw;
                        font-size: 3.2vw;
                        height: 3.2vw;
                        line-height: 3.2vw;
                        color: #999;
                    }
                }
            }
            .follow {
                display: flex;
                align-items: center;
                .launch-app-btn {
                    display: inline-block;
                    position: relative;
                    .follow-btn {
                        font-size: 0;
                        display: inline-block;
                        text-align: center;
                        width: 17.6vw;
                        height: 6.4vw;
                        border: 1px solid #fb7299;
                        color: #fb7299;
                        border-radius: 1.06667vw;
                        line-height: 6.4vw;
                        font-size: 3.46667vw;
                        i {
                            font-size: 3.46667vw;
                        }
                        span {
                            vertical-align: top;
                            margin-right: 0.53333vw;
                        }
                    }
                }
            }
        }
        .data {
            font-size: 3.2vw;
            margin-top: 2.66667vw;
            color: #999;
            span {
                margin-right: 4.8vw;
            }
        }
        .copyright {
            font-size: 3.2vw;
            color: #999;
            line-height: 4.8vw;
            margin-top: 2.13333vw;
            i {
                font-size: 3.73333vw;
                color: #fb7299;
                vertical-align: middle;
                margin-right: 2vw;
            }
            span {
                vertical-align: middle;
            }
        }
        .desc {
            font-size: 3.2vw;
            line-height: 4.8vw;
            color: #999;
            padding-top: 1.33333vw;
            white-space: pre-wrap;
        }
    }
}
.m-video2-toolbar {
    padding: 2.93333vw 3.2vw;
    color: #999;
    font-size: 0;
    white-space: nowrap;
    .left {
        display: inline-block;
        /* display: ${(props: any) => props.display ? "inline-block" : "none"}; */
        .avatar {
            position: relative;
            vertical-align: middle;
            margin-right: 1.33333vw;
            display: inline-block;
            .face {
                width: 5.33333vw;
                height: 5.33333vw;
                border-radius: 50%;
                border: .5px solid #999;
            }
        }
        .name {
            display: inline-block;
            vertical-align: middle;
            font-size: 3.2vw;
            color: #212121;
            max-width: 26.66667vw;
            overflow: hidden;
            text-overflow: ellipsis;
            text-decoration: none;
        }
        .view-stat {
                line-height: 6.13333vw;
                font-size: 3.2vw;
                color: #999;
                vertical-align: middle;
                margin-left: 4rem;
                margin-right: 1rem;
            }
    }
    .right {
        display: inline-block;
        .launch-app-btn {
                display: inline-block;
                position: relative;
                .toolbar-item {
                    margin-right: 5.33333vw;
                    i {
                        margin-right: 1.33333vw;
                        font-size: 5.33333vw;
                        color: #757575;
                        vertical-align: middle;
                    }
                    span {
                        font-size: 2.66667vw;
                        vertical-align: middle;
                    }
                }
            }
    }
    .clear {
        clear: both;
    }
}
`
