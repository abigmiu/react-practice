import styled from "styled-components";

export const HeaderMenu = styled.div`
height: 10.66667vw;
position: relative;
display: flex;
font-size: 3.73333vw;
.adm-tabs {
    --active-line-color:#FB7299;
    --active-line-height: 3px;
    --active-line-border-radius: 3px;

    .adm-tabs-tab-wrapper {
        padding: 0 4.26667vw;
        background: #fff;
    .adm-tabs-tab{
        padding: 0;
    a{
        list-style: none;
        text-align: left;
        display: inline-block;
        flex-direction: row;
        flex: 1;
        align-items: center;
        justify-content: space-around;
        height: 10.66667vw;
        line-height: 10.66667vw;
        text-decoration: none;
        color: #000;
        font-size: 3.73333vw;
    &.active{
                /* & 表示上级选择器 此处表示a .active */
                color: #FB7299;
            }
    .v-switcher__header__tabs__item i,
    .v-switcher__header__tabs__item span {
            vertical-align: middle;
    &::before{
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            transform: scaleY(.5);
            background-color: #e7e7e7;
            }
                }
            }
        }
    }
}

`

export const DropdownWrapper = styled.div`
    height: 10.66667vw;
    margin: 0 2.66667vw;
    .adm-dropdown {
        height: 10.66667vw;
        .adm-dropdown-item-title {
            padding: 0.4rem;
            .adm-dropdown-item-title-arrow {
                font-size: 0.8rem;
                color: #aaa;
            }
        }
    }

`

export const DrawerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    transform: translateY(0);
    pointer-events: auto;
    box-sizing: content-box;
    z-index: 1002;
    background-color: #fff;
    align-items: center;
div{
    position: relative;
    padding: 2.66667vw 5.33333vw 0 5.33333vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    height: 100%;
    font-size: 3.73333vw;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    a{
        margin: 2.13333vw;
        white-space: nowrap;
        text-decoration: none;
        color: #757575;
        &.active{
                /* & 表示上级选择器 此处表示a .active */
                color: #FB7299;
            }
    }
    i{
        color: #aaa;
    }
}
`
