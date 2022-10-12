// 配置请求对象
import axios from 'axios'
// 本地调试 dev 开发阶段
// 切换 baseUrl 到 produce 上线阶段 api
export const baseUrl = 'https://www.fastmock.site/mock/c4ece9fff3bb5ad98093439f16f136be/bLike'
// export const baseUrl = 'http://localhost:3000'

// axios.creat 直接给出的 配置请求对象 返回单例
// 单例模式 返回一个唯一的 axios 实例
// 好修改 api 接口,便于 工程化管理
const axiosInstance = axios.create({
    baseURL: baseUrl
})

// 拦截器 interceptors
axiosInstance.interceptors.response.use(
    // axios 给数据外层包了 一层 data 属性
    // 此处 res请求成功 给出 解开 data 数据
    res => res.data,
    err => {
        // 可配置 错误时 返回的信息
        console.log(err, '网络错误')
    }
)

export { axiosInstance }
