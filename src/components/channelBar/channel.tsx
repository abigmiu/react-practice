import { channelData } from "@/config/channel";
import { isCannelBarExisted } from "@/helpers/util";
import { Dropdown, Tabs } from "antd-mobile";
import { DownOutline } from "antd-mobile-icons";
import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ChildChannel from "./childChannel";
import { DrawerWrapper, DropdownWrapper, HeaderMenu } from "./style";

function ChannelBar() {
    const { pathname } = useLocation()
    const ref = useRef(null)
    const [items, setItems] = useState<any[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const currentChannel = channelData.find(item => item.channelName === pathname)
        if (!currentChannel) return;

        let fenqu = pathname.match(/^\/[^\/]*/)

        if (currentChannel.children) {
            navigate(`${fenqu}/1`)
        }

        const channelItems = () => {
            if (!fenqu) return [];
            return (
                <Tabs activeKey={fenqu[0]}>
                    {
                        channelData.map(
                            (item) => {
                                return (
                                    <Tabs.Tab
                                        title={
                                            <NavLink
                                                to={item.channelName}
                                                className={`${pathname === item.channelName && 'active'}`}
                                            >
                                                <span>{item.ctitle}</span>
                                            </NavLink>
                                        }
                                        key={item.channelName}
                                    >

                                    </Tabs.Tab>
                                )
                            }
                        )
                    }
                </Tabs>
            )
        }

        // @ts-ignore
        setItems(channelItems)
    }, [pathname])

    if (isCannelBarExisted(pathname)) return null;

    return (
        <HeaderMenu>
            {items}
            <DropdownWrapper>
                <Dropdown  arrow={<DownOutline />} ref={ref}>
                    <Dropdown.Item key="sorter" title=''>
                        <DrawerWrapper>
                            <div>{
                                channelData.map(
                                    item => {
                                        return (
                                            <NavLink
                                                key={item.channelName}
                                                to={item.channelName}
                                                className={`${pathname === item.channelName && 'active'}`}
                                                onClick={
                                                    () => {
                                                        // @ts-ignore
                                                        ref.current?.close()
                                                    }
                                                }
                                            >
                                                <span>{item.ctitle}</span>
                                            </NavLink>
                                        )
                                    }
                                )
                            }</div>
                            <i className="iconfont general_pullup_s" onClick={() => {
                                    // @ts-ignore
                                    ref.current?.close()
                                }}></i>
                        </DrawerWrapper>
                    </Dropdown.Item>
                </Dropdown>
            </DropdownWrapper>
            {/* <ChildChannel></ChildChannel> */}
        </HeaderMenu>
    )
}

export default ChannelBar;
