import { Tabs } from "antd-mobile"
import { Swiper } from "antd-mobile/es/components/swiper/swiper"
import { useRef, useState } from "react"
import { TabsWrapper } from "./style"

const tabItems = [
    { key: 'recommendPart', title: '相关推荐' },
    { key: 'commentsPart', title: '评论 145' },
]


function TabPart() {
    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <TabsWrapper>
            <div className="v-switcher__header">
                <Tabs
                    activeKey={tabItems[activeIndex].key}
                    onChange={
                        key => {
                            const index = tabItems.findIndex(item => item.key === key)
                            setActiveIndex(index)
                            // @ts-ignore
                            swiperRef.current?.swipeTo(index)
                        }
                    }
                >
                    {tabItems.map(item => (
                        <Tabs.Tab title={item.title} key={item.key} />
                    ))}
                </Tabs>
                <Swiper direction='horizontal'
                    loop
                    indicator={() => null}
                    ref={swiperRef}
                    defaultIndex={activeIndex}
                    onIndexChange={index => {
                        setActiveIndex(index)
                    }}></Swiper>
            </div>
        </TabsWrapper>
    )
}
export default TabPart
