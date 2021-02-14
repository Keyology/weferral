import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import Analytics from './Dashboards/Analytics';
import ProjectsDashboard from './Dashboards/Projects';
import System from './Dashboards/System';
import Monitor from './Dashboards/Monitor'; 
import Financial from './Dashboards/Financial';
import Stock from './Dashboards/Stock';
import Reports from './Dashboards/Reports';
import Dashboard from './Dashboards/Dashboard';

import Widgets from './Widgets';

import Cards from './Cards/Cards';
import CardsHeaders from './Cards/CardsHeaders';

import NavbarOnly from './Layouts/NavbarOnly';
import SidebarDefault from './Layouts/SidebarDefault';
import SidebarA from './Layouts/SidebarA';
import DragAndDropLayout from './Layouts/DragAndDropLayout';
import SidebarWithNavbar from './Layouts/SidebarWithNavbar';
import ParticipantNavBar from './Layouts/ParticipantNavBar';

import Accordions from './Interface/Accordions';
import Alerts from './Interface/Alerts';
import Avatars from './Interface/Avatars';
import BadgesLabels from './Interface/BadgesLabels';
import Breadcrumbs from './Interface/Breadcrumbs';
import Buttons from './Interface/Buttons';
import Colors from './Interface/Colors';
import Dropdowns from './Interface/Dropdowns';
import Images from './Interface/Images';
import ListGroups from './Interface/ListGroups';
import MediaObjects from './Interface/MediaObjects';
import Modals from './Interface/Modals';
import Navbars from './Interface/Navbars';
import Paginations from './Interface/Paginations';
import ProgressBars from './Interface/ProgressBars';
import TabsPills from './Interface/TabsPills';
import TooltipPopovers from './Interface/TooltipsPopovers';
import Typography from './Interface/Typography';
import Notifications from './Interface/Notifications';
import CropImage from './Interface/CropImage';
import DragAndDropElements from './Interface/DragAndDropElements';
import Calendar from './Interface/Calendar';
import ReCharts from './Graphs/ReCharts';

import Forms from './Forms/Forms';
import FormsLayouts from './Forms/FormsLayouts';
import InputGroups from './Forms/InputGroups';
import Wizard from './Forms/Wizard';
import TextMask from './Forms/TextMask';
import Typeahead from './Forms/Typeahead';
import Toggles from './Forms/Toggles';
import Editor from './Forms/Editor';
import DatePicker from './Forms/DatePicker';
import Dropzone from './Forms/Dropzone';
import Sliders from './Forms/Sliders';
import CreateCampaign from './Forms/CreateCampaign';
import CampaignTable from './Pages/Campaign';
import CampaignPageEditor from './Forms/CampaignPageEditor';
import Email from './Pages/Email';
import NotificationTemplateForm from './Forms/EditEmailTemplate';
import CampaignSettings from './Forms/SystemOptions';
import EditParticipant from './Forms/EditParticipant';
import ManageParticipantList from './Pages/Participant';
import ParticipantDetails from './Pages/ParticipantDetails';
import ManageCustomerList from './Pages/Customer';
import Webhook from "./Pages/Webhook";
import Logout from "./Pages/Logout";
import ManageRewardList from "./Pages/Reward";
import ParticipantPayout from "./Pages/ParticipantPayout";
import ParticipantCommision from "./Pages/ParticipantCommision";
import ManageCommissionList from './Pages/Commission';
import File from "./Pages/Settings/Files";
import secretKey from "./Pages/Settings/SecretKey";
import ReferralLogin from "./Pages/ReferralLogin/ReferralLogin";
import ReferralNewPassword from "./Pages/ReferralNewPassword";

import Tables from './Tables/Tables';
import ExtendedTable from './Tables/ExtendedTable';
import AgGrid from './Tables/AgGrid';

import AccountEdit from './Apps/AccountEdit';
import BillingEdit from './Apps/BillingEdit';
import Chat from './Apps/Chat';
import Clients from './Apps/Clients';
import EmailDetails from './Apps/EmailDetails';
import Files from './Apps/Files';
import GalleryGrid from './Apps/GalleryGrid';
import GalleryTable from './Apps/GalleryTable';
import ImagesResults from './Apps/ImagesResults';
import Inbox from './Apps/Inbox';
import NewEmail from './Apps/NewEmail';
import ProfileDetails from './Apps/ProfileDetails';
import ProfileEdit from './Apps/ProfileEdit';
import Projects from './Apps/Projects';
import SearchResults from './Apps/SearchResults';
import SessionsEdit from './Apps/SessionsEdit';
import SettingsEdit from './Apps/SettingsEdit';
import Tasks from './Apps/Tasks';
import TasksDetails from './Apps/TasksDetails';
import TasksKanban from './Apps/TasksKanban';
import Users from './Apps/Users';
import UsersResults from './Apps/UsersResults';
import VideosResults from './Apps/VideosResults';

import ComingSoon from './Pages/ComingSoon';
import Confirmation from './Pages/Confirmation';
import Danger from './Pages/Danger';
import Error404 from './Pages/Error404';
import ForgotPassword from './Pages/ForgotPassword';
import LockScreen from './Pages/LockScreen';
import Login from './Pages/Login/Login';
import Register from './Pages/Register';
import setupAdmin from './Pages/Setup';
import referralSignup from './Pages/ReferralSignup';
import ReferralReset from './Pages/ReferralReset';
import Success from './Pages/Success';
import Timeline from './Pages/Timeline';

import Icons from './Icons';

// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

import { SidebarANavbar } from './../layout/components/SidebarANavbar';
import { SidebarASidebar } from './../layout/components/SidebarASidebar';
import { store } from "../store";
import { Provider } from 'react-redux';
import Cookies from 'js-cookie';
import port from '../port';
import Fetcher from '../utilities/fetcher';

let initializedState = async function(dispatch){
    let initialState = {
        allForms : {},
        options: {},
        notifications: [],
        system_notifications: [],
        uid : Cookies.get("uid")
    };
    initialState.options = await Fetcher(`${port}/api/v1/system-options/public`);
    try {
        if (Cookies.get("uid")) { // if user is logged in
            initialState.user = (await Fetcher(`${port}/api/v1/users/own`))[0];
            initialState.notifications = await Fetcher(`${port}/api/v1/notifications/own`);
        }
    }
    catch(err){

    }
    return dispatch(initializeState(initialState));
};

store.dispatch(initializedState);

store.subscribe(()=>{
    // console.log("store changed", store.getState());
});

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Provider store={store}>
            <Switch>
                <Redirect from="/" to="/dashboards/projects" exact />

                <Route path="/dashboards/analytics" exact component={Analytics} />
                <Route path="/dashboards/projects" exact component={ProjectsDashboard} />
                <Route path="/dashboards/system" exact component={System} />
                <Route path="/dashboards/monitor" exact component={Monitor} />
                <Route path="/dashboards/financial" exact component={Financial} />
                <Route path="/dashboards/stock" exact component={Stock} />
                <Route path="/dashboards/reports" exact component={Reports} />
                <Route path="/dashboard" exact component={Dashboard} />

                <Route path='/widgets' exact component={Widgets} />

                { /*    Cards Routes     */}
                <Route path='/cards/cards' exact component={Cards} />
                <Route path='/cards/cardsheaders' exact component={CardsHeaders} />

                { /*    Layouts     */}
                <Route path='/layouts/navbar' component={NavbarOnly} />
                <Route path='/layouts/sidebar' component={SidebarDefault} />
                <Route path='/layouts/sidebar-a' component={SidebarA} />
                <Route path="/layouts/sidebar-with-navbar" component={SidebarWithNavbar} />
                <Route path='/layouts/dnd-layout' component={DragAndDropLayout} />

                { /*    Interface Routes   */}
                <Route component={Accordions} path="/interface/accordions" />
                <Route component={Alerts} path="/interface/alerts" />
                <Route component={Avatars} path="/interface/avatars" />
                <Route component={BadgesLabels} path="/interface/badges-and-labels" />
                <Route component={Breadcrumbs} path="/interface/breadcrumbs" />
                <Route component={Buttons} path="/interface/buttons" />
                <Route component={Colors} path="/interface/colors" />
                <Route component={Dropdowns} path="/interface/dropdowns" />
                <Route component={Images} path="/interface/images" />
                <Route component={ListGroups} path="/interface/list-groups" />
                <Route component={MediaObjects} path="/interface/media-objects" />
                <Route component={Modals} path="/interface/modals" />
                <Route component={Navbars} path="/interface/navbars" />
                <Route component={Paginations} path="/interface/paginations" />
                <Route component={ProgressBars} path="/interface/progress-bars" />
                <Route component={TabsPills} path="/interface/tabs-pills" />
                <Route component={TooltipPopovers} path="/interface/tooltips-and-popovers" />
                <Route component={Typography} path="/interface/typography" />
                <Route component={Notifications} path="/interface/notifications" />
                <Route component={CropImage} path="/interface/crop-image" />
                <Route component={DragAndDropElements} path="/interface/drag-and-drop-elements" />
                <Route component={Calendar} path="/interface/calendar" />

                { /*    Forms Routes    */}
                <Route component={Forms} path="/forms/forms" />
                <Route component={FormsLayouts} path="/forms/forms-layouts" />
                <Route component={InputGroups} path="/forms/input-groups" />
                <Route component={Wizard} path="/forms/wizard" />
                <Route component={TextMask} path="/forms/text-mask" />
                <Route component={Typeahead} path="/forms/typeahead" />
                <Route component={Toggles} path="/forms/toggles" />
                <Route component={Editor} path="/forms/editor" />
                <Route component={DatePicker} path="/forms/date-picker" />
                <Route component={Dropzone} path="/forms/dropzone" />
                <Route component={Sliders} path="/forms/sliders" />
                <Route component={CreateCampaign} path="/create-campaign" />
                <Route component={CampaignPageEditor} path="/edit-campaign-page" />
                <Route component={Email} path="/notifications-templates" />
                <Route component={CampaignTable} path="/campaign" />
                <Route component={NotificationTemplateForm} path="/edit-template/:id" />
                <Route component={CampaignSettings} path="/campaign-settings/:id" />
                <Route component={ManageParticipantList} path="/participants" />
                <Route component={ManageCustomerList} path="/customers" />
                <Route component={ParticipantDetails} path="/my-dashboard" />
                <Route component={EditParticipant} path="/edit-participant/:id" />
                <Route component={Webhook} path="/webhook" />
                <Route component={Logout} path="/logout" />
                <Route component={ManageRewardList} path="/payouts" />
                <Route component={ParticipantPayout} path="/profile/payouts" />
                <Route component={ParticipantCommision} path="/profile/commissions" />
                <Route component={ManageCommissionList} path="/commissions" />
                <Route component={File} path="/files" />
                <Route component={secretKey} path="/secret-key" />



                { /*    Graphs Routes   */}
                <Route component={ReCharts} path="/graphs/re-charts" />

                { /*    Tables Routes   */}
                <Route component={Tables} path="/tables/tables" />
                <Route component={ExtendedTable} path="/tables/extended-table" />
                <Route component={AgGrid} path="/tables/ag-grid" />

                { /*    Apps Routes     */}
                <Route component={AccountEdit} path="/apps/account-edit" />
                <Route component={BillingEdit} path="/apps/billing-edit" />
                <Route component={Chat} path="/apps/chat" />
                <Route component={Clients} path="/apps/clients" />
                <Route component={EmailDetails} path="/apps/email-details" />
                <Route component={Files} path="/apps/files/:type" />
                <Route component={GalleryGrid} path="/apps/gallery-grid" />
                <Route component={GalleryTable} path="/apps/gallery-table" />
                <Route component={ImagesResults} path="/apps/images-results" />
                <Route component={Inbox} path="/apps/inbox" />
                <Route component={NewEmail} path="/apps/new-email" />
                <Route component={ProfileDetails} path="/apps/profile-details" />
                <Route component={ProfileEdit} path="/apps/profile-edit" />
                <Route component={Projects} path="/apps/projects/:type" />
                <Route component={SearchResults} path="/apps/search-results" />
                <Route component={SessionsEdit} path="/apps/sessions-edit" />
                <Route component={SettingsEdit} path="/apps/settings-edit" />
                <Route component={Tasks} path="/apps/tasks/:type" />
                <Route component={TasksDetails} path="/apps/task-details" />
                <Route component={TasksKanban} path="/apps/tasks-kanban" />
                <Route component={Users} path="/apps/users/:type" />
                <Route component={UsersResults} path="/apps/users-results" />
                <Route component={VideosResults} path="/apps/videos-results" />

                { /*    Pages Routes    */}
                <Route component={ComingSoon} path="/pages/coming-soon" />
                <Route component={Confirmation} path="/pages/confirmation" />
                <Route component={Danger} path="/pages/danger" />
                <Route component={Error404} path="/pages/error-404" />
                <Route component={ForgotPassword} path="/pages/forgot-password" />
                <Route component={LockScreen} path="/pages/lock-screen" />
                <Route component={Login} path="/login" />
                <Route component={ReferralLogin} path="/:campaignName/login" />
                <Route component={Register} path="/pages/register" />
                <Route component={setupAdmin} path="/pages/setup" />
                <Route component={referralSignup} path="/:campaignName/signup" />
                <Route name="Finish Your Registration" path="/:campaignName/invitation/:token" component={referralSignup}/>
                <Route component={ReferralReset} path="/:campaignName/forgot-password" />
                <Route component={ReferralNewPassword} path="reset-password/:pid/:token" />
                <Route component={Success} path="/pages/success" />
                <Route component={Timeline} path="/pages/timeline" />

                <Route path='/icons' exact component={Icons} />

                { /*    404    */}
                <Redirect to="/pages/error-404" />
            </Switch>
        </Provider>
        
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars  = () => (
    <Switch>
        { /* Other Navbars: */}
        <Route
            component={ SidebarANavbar }
            path="/layouts/sidebar-a"
        />
        <Route
            component={ NavbarOnly.Navbar }
            path="/layouts/navbar"
        />
        <Route
            component={ SidebarWithNavbar.Navbar }
            path="/layouts/sidebar-with-navbar"
        />
        { /* Default Navbar: */}
        <Route
            component={ DefaultNavbar }
        />
    </Switch>  
);

export const RoutedSidebars = () => (
    <Switch>
        { /* Other Sidebars: */}
        <Route
            component={ SidebarASidebar }
            path="/layouts/sidebar-a"
        />
        <Route
            component={ SidebarWithNavbar.Sidebar }
            path="/layouts/sidebar-with-navbar"
        />
        { /* Default Sidebar: */}
        <Route
            component={ DefaultSidebar }
        />
    </Switch>
);
