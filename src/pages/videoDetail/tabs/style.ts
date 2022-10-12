import styled from 'styled-components'

export const TabsWrapper = styled.div`
    height: 100%;
    overflow: hidden;
    position: relative;
    color:#505050;
    .adm-tabs{
        --title-font-size:3.73333vw;
        --active-title-color:#fb7299;
        --active-line-color:#fb7299;
        --active-line-height:0.1rem;
        --content-padding:0;
        .adm-tabs-header{
            padding: 0 2rem;
            border-top: solid 1px var(--adm-color-border);
            border-bottom: 0;
        }
    }

`
