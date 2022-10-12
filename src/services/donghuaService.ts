import { getFourCardListRequest } from "@/api/request";
import store from "@/store";
import { setDonghuaData, setDonghuaLoading, setDonghuaType, setDonghuaTypeName } from "@/store/modules/donghua";

const donghuaService = {
    getData: () => {
        getFourCardListRequest().then((res: any) => {
            store.dispatch(setDonghuaTypeName(res.data.data[0].typename))
            store.dispatch(setDonghuaType(res.data.data[0]))
            store.dispatch(setDonghuaLoading(false))
            store.dispatch(setDonghuaData(res.data))
        })
    }
}

export default donghuaService;
