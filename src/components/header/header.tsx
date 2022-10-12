import { Link } from 'react-router-dom';
import { HeaderNavBar, HeaderWrapper } from './style'
import face from '@/assets/images/common/face.png'
import download from '@/assets/images/common/navOpenApp.png';
import ChannelBar from '../channelBar/channel';

function Header() {
    return (

        <HeaderWrapper>
            <HeaderNavBar className='m-navbar'>
                <Link to="/shouye" className="logo"><i className="iconfont Navbar_logo"></i></Link>
                <div className="right">
                    <Link to="/search" className="search">
                        <i className="iconfont ic_search_tab">
                        </i>
                    </Link>
                    <Link to="/space" className="face">
                        <img className="bfs-img" src={face} />
                    </Link>
                    <div className="launch-app-btn m-nav-openapp">
                        <img src={download} className="nav-open-app-img" />
                    </div>
                </div>
            </HeaderNavBar>
            <ChannelBar></ChannelBar>
        </HeaderWrapper>
    )
}
export default Header;
