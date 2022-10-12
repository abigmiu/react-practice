import axios from 'axios'
import { axiosInstance } from "./config";

export const getRecommendListRequest =
    (): any => axiosInstance.get(`/videolist`)
// () => axiosInstance.get(`/x/web-interface/ranking/region?rid=168&day=7&context=`)

export const getTest =
    (): any => axios.get(`https://api.bilibili.com/x/web-interface/dynamic/region?rid=24&pn=2`)
// 待解决 跨域请求问题

export const getFourCardListRequest =
    (): any => axiosInstance.get('/fourcardlirst')

export const getArchiveListRequest =
    (): any => axiosInstance.get('/archivelist')

export const getRecommendedRequest =
    (): any => axiosInstance.get('/recommended')

export const getCommentsListRequest =
    (): any => axiosInstance.get('/commentslist')

export const getMADListRequest =
    (): any => axiosInstance.get('/madlist')

export const getMMDListRequest =
    (): any => axiosInstance.get('/mmdlist')

export const getSuggestListRequest =
    (query: string): any => axios.get(`http://localhost:3300/search/suggest?keyword=${query}`)

export const getHotwordsRequest =
    (): any => axios('http://localhost:3300/search/hotword')
