import { getMMDListRequest, getHotwordsRequest } from "@/api/request";
import VideoListBox from "@/components/videoListBox/box";
import { useEffect, useState } from "react";

function MMD() {
    const [hot, setHot] = useState([])
    useEffect(() => {
        getHotwordsRequest().then((res: any) => {
            setHot(res.data)
        })
    })

    const [mmd, setMMD] = useState([])
    useEffect(() => {
        getMMDListRequest().then((res: any) => {
            setMMD(res)
        })
    })

    return (
        <VideoListBox videos={mmd}></VideoListBox>
    )
}

export default MMD;
