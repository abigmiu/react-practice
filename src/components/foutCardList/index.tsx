import { Link } from "react-router-dom"
import Card from "../card/card"
import { CardBox, VideoListBar, VideoListWrapper } from "./style"

interface IProps {
    data: any[],
    type: any
}

function FourCardList(props: IProps) {
    const four = props.data.slice(0, 4)

    return (
        <>
            <VideoListWrapper>
                <VideoListBar>
                <span className="bt">{props.type.typename}</span>
                    <Link to={props.type.typepath} className="more">
                        &nbsp; 查看更多&nbsp; <i className="iconfont gengduo1"></i>
                    </Link>
                </VideoListBar>
                <CardBox>
                    {
                        four.map(video => {
                            return <Card video={video} key={video.aid}></Card>
                        })
                    }
                </CardBox>
            </VideoListWrapper>
        </>
    )

}

export default FourCardList
