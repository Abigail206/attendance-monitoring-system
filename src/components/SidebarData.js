// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa6";

import * as RiIcons from "react-icons/ri";
import * as mdicons from "react-icons/md";
import * as tbicons from "react-icons/tb";

import * as Gricons from "react-icons/gr";
import * as vscicons from "react-icons/vsc";
import * as tiicons from "react-icons/ti";


export const SidebarData = [
   
                    
    {
        title: "Dashboard",
        path: "/Dashboard",
        icon: <mdicons.MdOutlineDashboard />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

       
    },
    {
        title: "Master",
        // path: "/Master",
        icon: <Gricons. GrUserExpert />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Branch Master",
                path: "/master/BranchMaster",
                icon: <tiicons.TiArrowRight />,
                cName: "sub-nav",
            },
            {
                title: "Division Master",
                path: "/master/DivisionMaster",
                icon: <tiicons.TiArrowRight  />,
                cName: "sub-nav",
            },
            {
                title: "Department Master",
                path: "/master/DepartmentMaster",
                icon: <tiicons.TiArrowRight  />,
            },
        ],
    },
    {
        title: "User Register",
        // path: "/PageAccess",
        icon: <vscicons.VscGoToFile />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Page Access",
                path: "/pageaccess/Pageaccess",
                icon: <tiicons.TiArrowRight  />,
                cName: "sub-nav",
            },
            {
                title: "User Register",
                path: "/pageaccess/UserRegister",
                icon: <tiicons.TiArrowRight  />,
                cName: "sub-nav",
            },
            
        ],
    },
    {
        title: "Report",
        // path: "/Report",
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Log Report",
                path: "/report/LogReport",
                icon: <tiicons.TiArrowRight  />,
            },
            {
                title: "Attendance Report",
                path: "/report/AttendanceReport",
                icon: <tiicons.TiArrowRight  />,
            },
            {
                title: "Monthly Report",
                path: "/report/MonthlyReport",
                icon: <tiicons.TiArrowRight  />,
            },
        ],
    },
    {
        title: "Profile",
        path: "/Profile",
        icon: <FaIcons. FaClipboardUser />,
    },
    {
        title: "Change Password",
        path: "/ChangePassword",
        icon: <mdicons. MdPublishedWithChanges />,
    },
    // {
    //     title: "Logout",
    //     path: "#",
    //     icon: <tbicons.TbLogout2 />,
    // },
];
