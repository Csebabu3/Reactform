import React from 'react'
import { Outlet, Link,useNavigate } from 'react-router-dom';
import TopNew from './TopNew'
import { SidebarData } from './SidebarData';
import '../App.css';
import Create from './Contact';


const Layout = () => {
    const navigate=useNavigate();

    return (
        <div>
            <div className='row'>
                <TopNew />
                <Create />

                <div className='col-3'>
                    <div className='sidebar'>
                        <ul className='sidebarList'>
                            {/* {SidebarData.map(li => (
                                <Link className='row' to={li.Link}>{li.title}</Link>
                            ))} */}
                            {SidebarData.map((val, key) => {
          return <li key={key}
            className='row'
            onClick={() => {
              // window.location.pathname = val.Link
              navigate(val.Link)
            }}>    

            <div id='icon'>{val.icon}</div>
            <div id='title'>{val.title}</div>
          </li>
        })}
                        </ul>
                    </div>
                    <div className='col-9'>
                        <Outlet />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Layout
