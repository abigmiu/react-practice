import { getRecommendListRequest } from '@/api/request'
import store from '@/store'
import { setData, setLoading } from '@/store/modules/home'

const homeService = {
    getData: () => {
        getRecommendListRequest().then((res: any) => {
            store.dispatch(setData(res.data))
            store.dispatch(setLoading(false))
        })
    }
}

export default homeService
