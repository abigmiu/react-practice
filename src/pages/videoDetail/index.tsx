import VideoFace from '@/assets/images/common/videoStand.jpg'
import { AppBtnWrapper, VideoWrapper } from './style'

function VideoDetail() {
    return (
        <div style={{
            "position": "relative",
            "overflow": "hidden"
        }}>
            <VideoWrapper>
                <img src={VideoFace} alt="" />
            </VideoWrapper>
            <AppBtnWrapper>
                <div className="m-video2-awaken-btn">
                    <div className="icon popup"></div>
                    <div className="container"></div>
                </div>
            </AppBtnWrapper>
        </div>
    )
}
