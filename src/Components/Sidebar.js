// import React from 'react'
// import "../App.css";
// import { SidebarData } from './SidebarData';
// import { Outlet ,useNavigate} from 'react-router-dom';
// function Sidebar() {
//   const navigate=useNavigate();
//   return (
//     <div className='sidebar vh-100'>
//       <ul className='sidebarList'>
//         {SidebarData.map((val, key) => {
//           return <li key={key}
//             className='row'
//             onClick={() => {
//               // window.location.pathname = val.Link
//               navigate(val.Link)
//             }}>

//             <div id='icon'>{val.icon}</div>
//             <div id='title'>{val.title}</div>
//           </li>
//         })}
//       </ul>
//       <section>
//         <Outlet />
//       </section>
//     </div>
//   )
// }
// export default Sidebar;
