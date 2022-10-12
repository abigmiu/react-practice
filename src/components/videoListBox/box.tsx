import { DotLoading } from 'antd-mobile'
import Card from '../card/card';
import { CardBox, VideoListWrapper } from './style';

interface IProps {
    enterLoading?: boolean;
    videos: any[]
}

function VideoListBox(props: IProps) {
    const Loading = () => {
        return (
            <div style={{
                'textAlign': 'center',
                'verticalAlign': 'middle'
            }}>
                <span>施法加载中(　o=^•ェ•)o　┏<DotLoading /></span>
            </div>
        )
    }


    return (
        <>
            {props.enterLoading && <Loading />}
            <VideoListWrapper>
                <CardBox className='card-box'>
                    {
                        props.videos.map(video => {
                            return <Card video={video} key={video.aid}></Card>
                        })
                    }
                </CardBox>
            </VideoListWrapper>
        </>

    )
}
export default VideoListBox;
