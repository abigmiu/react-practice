import { getMADListRequest } from "@/api/request";
import VideoListBox from "@/components/videoListBox/box";
import { useState } from "react";

function MAD() {
    const [videos, setVideos] = useState([])

    const fetchData = async () => {
        const res = await getMADListRequest();
        setVideos(res.data);
    }

    return (
        <VideoListBox videos={videos}></VideoListBox>
    )
}

export default MAD;
