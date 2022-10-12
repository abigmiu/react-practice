import { Collapse, Divider } from "antd-mobile";
import { useState } from "react";
import { InfoWrapper } from "./style";

function VideoInfo() {
    const [display, setDisplay] = useState(true)
    const change = () => {
        setDisplay(!display);
    }

    let show = display ? { "display": "" } : { "display": "none" }

    return (
        <InfoWrapper>
            <div className="m-video-info-new">
                <Collapse>
                    <Collapse.Panel key="1" onClick={change}
                        title={
                            <div className="left">
                                <span className="label">
                                    <span>活动</span>
                                </span>
                                <h1 className="has-activity">安倍看板库贝萨看房</h1>
                            </div>

                        }
                    >
                        <div className="fold-container">
                            <div className="up">
                                <div className="face">
                                    <a href="/space" className="avatar">
                                        <img src="//i1.hdslb.com/bfs/face/c51b9046c461967fbf9cfff36d399996dd6f5df0.jpg@160w_160h_1c.png" className="bfs-img face" data-v-be935d08="" />
                                    </a>
                                    <div className="info">
                                        <a href="/space" className="name">坑赛季</a>
                                        <p className="fanc">666粉丝</p>
                                    </div>
                                </div>
                                <div className="follow">
                                    <div className="launch-app-btn">
                                        <div className="follow-btn">
                                            <i className="iconfont ic_add1"></i>
                                            <span>关注</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Collapse.Panel>
                </Collapse>
            </div>
            <div className="m-video2-toolbar">
                <div className="left" style={show}>
                    <a className="avatar" href='/space'>
                        <img src="//i1.hdslb.com/bfs/face/c51b9046c461967fbf9cfff36d399996dd6f5df0.jpg@80w_80h_1c.png" className="bfs-img face" data-v-be935d08="" />
                    </a>
                    <a className="name" href='/space'>CAVAN咔叽</a>
                    <span className="view-stat">4万观看</span>
                </div>
                <div className="right">
                    <div className="launch-app-btn">
                        <span className="toolbar-item">
                            <i className="iconfont dianzan"></i>
                            <span>3616</span>
                        </span>
                    </div>
                    <div className="launch-app-btn">
                        <span className="toolbar-item">
                            <i className="iconfont icon_fav"></i>
                            <span>541</span>
                        </span>
                    </div>
                    <div className="launch-app-btn">
                        <span className="toolbar-item">
                            <i className="iconfont huancun"></i>
                            <span>缓存</span>
                        </span>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </InfoWrapper>
    )

}
