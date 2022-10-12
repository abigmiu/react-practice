import { Link } from "react-router-dom";
import { CardWrapper } from "./style";
import { NumberFormat } from "@/helpers/util";

interface IProps {
    video: any;
}

function Card(props: IProps) {
    const { bvid, pic, title, play, video_review } = props.video

    return (

        <CardWrapper>
            <Link
                to={`/video/${bvid}`}
                className='v-card'
            >
                <div className="card">

                        <img src={pic} className={`m-bfs-pic pic ${pic ? '' : 'notfond'}`} />



                    <div className="count">
                        <span>
                            <i className="iconfont icon_shipin_bofangshu">
                                {NumberFormat(play)}
                            </i>
                        </span>
                        <span>
                            <i className="iconfont icon_shipin_danmushu">
                                {NumberFormat(video_review)}
                            </i>
                        </span>
                    </div>
                </div>
                <p className="title">{title}</p>
            </Link>
        </CardWrapper>

    )
}

export default Card;
