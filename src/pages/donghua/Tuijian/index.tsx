import donghuaService from "@/services/donghuaService"
import { useAppSelector } from "@/store"
import { DotLoading } from "antd-mobile"
import { useEffect } from "react"

function DondhuaTuijian() {
    const {enterLoading, data, type } = useAppSelector(state => state.donghua)

    useEffect(() => {
        donghuaService.getData()
    }, [])

    const Loading = () => {
        return (
            <div style={{ 'textAlign': 'center', 'verticalAlign': 'middle' }}>
                <span>施法加载中(　o=^•ェ•)o　┏<DotLoading /></span>
            </div>
        )
    }

    return (
        <>
            {enterLoading && <Loading></Loading>}
        </>
    )
 }

export default DondhuaTuijian
