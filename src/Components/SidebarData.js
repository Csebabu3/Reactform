import React from "react";
import { AiOutlineHome,AiOutlineMail,AiFillDashboard,AiFillFileImage,AiFillShopping,AiOutlineWhatsApp} from "react-icons/ai";
import { BiAnalyse } from "react-icons/bi";
import { Link } from "react-router-dom";


export const SidebarData = [
    {
        title:"Home",
        icon:<AiOutlineHome/>,
        Link:"/Home"
    },
    {
        title:"Faculty",
        icon:<AiOutlineMail/>,
        Link:"/Faculty"
    },
    
    {
        title:"Student",
        icon:<BiAnalyse/>,
        Link:"/Student"
    },
   
   
    
    {
        title:"Contact",
        icon:<AiOutlineWhatsApp/>,
        Link:"/Contact"
    }
]
    

