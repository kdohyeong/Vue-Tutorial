import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Project from "./views/Project";
import SymbolsList from "./views/SymbolsList";
import PageGroup from "./views/PageGroup";
import ScriptVariable from "./views/ScriptVariable";
import UnitGroup from "./views/UnitGroup";
import UnitAdd from "./views/UnitAdd";
import UnitDetail from "./views/UnitDetail";
import PointAttribute from "./views/PointAttribute";
import VirtualTag from "./views/VirtualTag";
import Alarm from "./views/Alarm";
import AlarmDetail from "./views/AlarmDetail";
import Sms from "./views/Sms";
import SmsReceiver from "./views/SmsReceiver";
import TrendPage from "./views/TrendPage";
import TrendTag from "./views/TrendTag";
import reportTag from "./views/reportTag";
import reportGroup from "./views/reportGroup";
import UserList from "./views/UserList";
import PrivilegeList from "./views/PrivilegeList";
import Profile from "./views/Profile";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/", 
            component: Project
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/project",
            component: Home
        },
        {
            path: "/SymbolsList",
            component: SymbolsList
        },
        {
            path: "/PageGroup",
            component: PageGroup
        },
        {
            path: "/ScriptVariable",
            component: ScriptVariable
        },
        {
            path: "/UnitGroup",
            component: UnitGroup
        },
        {
            path: "/UnitAdd",
            component: UnitAdd
        },
        {
            path: "/UnitDetail",
            component: UnitDetail
        },
        {
            path: "/PointAttribute",
            component: PointAttribute
        },
        {
            path: "/VirtualTag",
            component: VirtualTag
        },
        {
            path: "/Alarm",
            component: Alarm
        },
        {
            path: "/AlarmDetail",
            component: AlarmDetail
        },
        {
            path: "/Sms",
            component: Sms
        },
        {
            path: "/SmsReceiver",
            component: SmsReceiver
        },
        {
            path: "/TrendPage",
            component: TrendPage
        },
        {
            path: "/TrendTag",
            component: TrendTag
        },
        {
            path: "/reportTag",
            component: reportTag
        },
        {
            path: "/reportGroup",
            component: reportGroup
        },
        {
            path: "/UserList",
            component: UserList
        },
        {
            path: "/PrivilegeList",
            component: PrivilegeList
        },
        {
            path: "/Profile",
            component: Profile
        },
    ]
});

export default router; 

