import VideoListBox from "@/components/videoListBox/box";
import homeService from "@/services/homeService";
import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";
import { HomeWrapper } from "./style";

function Home() {
    const { enterLoading, data } = useAppSelector(state => state.home)

    useEffect(() => {
        homeService.getData();
    }, [])

    return (<HomeWrapper>
        <VideoListBox
            enterLoading={enterLoading}
            videos={data}
        ></VideoListBox>
    </HomeWrapper>)
}

export default Home;
