import { channelData } from "@/config/channel";
import { isPathPartlyExisted } from "@/helpers/util";
import { Tabs } from "antd-mobile";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HeaderMenu } from "./style";

function ChildChannel() {
    const { pathname } = useLocation()
    const [items, setItems] = useState([])

    useEffect(() => {
        const channelItems = () => {
            const res = channelData.filter(item => item.children && Array.isArray(item.children) && item.children.length > 0)
            const items = res.filter(item => pathname.includes(item.channelName))

            return (
                items.map((i) => {
                    return(
                        (i.children as Array<any>).map((t: any) => {
                            return (
                                <Tabs.Tab
                                    title={
                                        <NavLink
                                            to={t.channelName}
                                            className={`${(pathname === t.channelName || pathname.includes(t.channelName)) && 'active'}`}
                                        >

                                            <span>{t.ctitle}</span>
                                        </NavLink>
                                    }
                                    key={t.channelName}
                                ></Tabs.Tab>
                            )
                        })
                    )
                })
            )
        }

        // @ts-ignore
        setItems(channelItems)
    }, [])

    if (isPathPartlyExisted(pathname)) return null;

    return (
        <HeaderMenu>
            <Tabs activeKey={pathname}>{ items}</Tabs>
        </HeaderMenu>
    )
}

export default ChildChannel;
