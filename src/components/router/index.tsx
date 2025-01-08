import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { 
   
    Login, 
    Grid,
    Bbs,
    Cuesheet,
    Cuesheet2,
    Cuesheetcreate,
    Cuesheetcreate1,
    Cuesheetcreate2,
    Cuesheetcreate3,
    Cuesheetcreate4,
    
    News,
    PageNotFound,
    Issue,
    Content,
    InterView,
    InterView2,
    InterView3,
    InterView4,    
    Video,
    Vehicle,
    Relayvehicle,
    BroadCast,
    SubControl,    
    SubCon,
    General,

    ProgramNotice,
    Daily,
    Daily1,
    Daily2,
    BasicOrganization,
    BroadProgram,

    Request,
    Advertising,
    Advertisement,
    Advertisement2,
    Advertisement3,

    
    Article_Management,
    Article_Management1,
    Article_Management2,
    Article_Management3,
    Article_Management4,


    Article_Service,
    Article_Writing,
    Article_Writing2,
    Receive_Article,
    Reporter,
    
    Integrated,
    IntegratedVideo,
    IntegratedPerson,


    ArticlSearch,
    ArticlSearch1,
    VideoSearch,
    TapeSearch,
    
    CharacterData,
    Sgroup,
    Suser,
    Mprogram,
    Smanage,
    UserStat,
    UStat,
    Tmanage,
    Tsfmanage,
    PatchManage,
    CodeManage,
    AFmanage,
    SsnsSite,
    SSnstlog,
    SITmanage,
  SETmanage,
    
    


  } from "../../pages";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
 
  {
    path: "/grid",
    name: "Grid",
    component: Grid
  },
  {
    path: "/bbs",
    name: "Bbs",
    component: Bbs
  },
  {
    path: "/Cuesheet",
    name: "Cuesheet",
    component: Cuesheet
  },
  {
    path: "/Cuesheet2",
    name: "Cuesheet2",
    component: Cuesheet2
  },
  {
    path: "/Cuesheetcreate",
    name: "Cuesheetcreate",
    component: Cuesheetcreate,
    props: true
  },
   {
    path: "/Cuesheetcreate1",
    name: "Cuesheetcreate1",
    component: Cuesheetcreate1
  },
  {
    path: "/Cuesheetcreate2",
    name: "Cuesheetcreate2",
    component: Cuesheetcreate2
  },
  {
    path: "/Cuesheetcreate3",
    name: "Cuesheetcreate3",
    component: Cuesheetcreate3
  },
  {
    path: "/Cuesheetcreate4",
    name: "Cuesheetcreate4",
    component: Cuesheetcreate4
  },
  {
    path: "/news",
    name: "News",
    component: News
  },  
  {
    path: "/issue",
    name: "Issue",
    component: Issue
  }, 
  {
    path: "/Content",
    name: "Content",
    component: Content
  },   
  {
    path: "/InterView",
    name: "InterView",
    component: InterView
  },
  {
    path: "/InterView2",
    name: "InterView2",
    component: InterView2
  },
  {
    path: "/InterView3",
    name: "InterView3",
    component: InterView3
  },
  {
    path: "/InterView4",
    name: "InterView4",
    component: InterView4
  },
  {
    path: "/Video",
    name: "Video",
    component: Video
  },
  {
    path: "/Vehicle",
    name: "Vehicle",
    component: Vehicle
  },
  {
    path: "/Relayvehicle",
    name: "Relayvehicle",
    component: Relayvehicle
  },
  {
    path: "/BroadCast",
    name: "BroadCast",
    component: BroadCast
  },

  {
    path: "/SubControl",
    name: "SubControl",
    component: SubControl
  },
  {
    path: "/SubCon",
    name: "SubCon",
    component: SubCon
  },
  {
    path: "/General",
    name: " General",
    component: General,

  },
  
  {
    path: "/ProgramNotice",
    name: "ProgramNotice",
    component: ProgramNotice
  },
  {
    path: "/Daily",
    name: "Daily",
    component: Daily
  },
  {
    path: "/Daily1",
    name: "Daily1",
    component: Daily1
  },
  {
    path: "/Daily2",
    name: "Daily2",
    component: Daily2
  },
  {
    path: "/BasicOrganization",
    name: "BasicOrganization",
    component: BasicOrganization
  },
  {
    path: "/BroadProgram",
    name: "BroadProgram",
    component:BroadProgram  
  },
 
  {
    path: "/Advertising",
    name: "Advertising",
    component: Advertising
  },
  {
    path: "/Advertisement",
    name: "Advertisement",
    component: Advertisement
  },
{
    path: "/Advertisement2",
    name: "Advertisement2",
    component: Advertisement2
  },
{
    path: "/Advertisement3",
    name: "Advertisement3",
    component: Advertisement3
  },
  {
    path: "/Request",
    name: "Request",
    component: Request
  },
 
{
    path: "/Article_Management",
    name: "Article_Management",
    component: Article_Management
  },
  {
    path: "/Article_Management1",
    name: "Article_Management1",
    component: Article_Management1
  },

{
    path: "/Article_Management2",
    name: "Article_Management2",
    component: Article_Management2
  },
  
{
    path: "/Article_Management3",
    name: "Article_Management3",
    component: Article_Management3
  },
  
{
    path: "/Article_Management4",
    name: "Article_Management4",
    component: Article_Management4
  }, 
  {
    path: "/Article_Service",
    name: "Article_Service",
    component: Article_Service
  },
  {
    path: "/Article_Writing",
    name: "Article_Writing",
    component: Article_Writing
  },
    {
    path: "/Article_Writing2",
    name: "Article_Writing2",
    component: Article_Writing2
  },
  {
    path: "/Receive_Article",
    name: "Receive_Article",
    component: Receive_Article
  },

  {
    path: "/Reporter",
    name: "Reporter",
    component: Reporter
  },
   {
    path: "/Integrated",
    name: "Integrated",
    component: Integrated
  },
   {
    path: "/IntegratedVideo",
    name: "IntegratedVideo",
    component: IntegratedVideo
  },
   {
    path: "/IntegratedPerson",
    name: "IntegratedPerson",
    component: IntegratedPerson
  },

  {
    path: "/ArticlSearch",
    name: "ArticlSearch",
    component: ArticlSearch
  },
  {
    path: "/ArticlSearch1",
    name: "ArticlSearch1",
    component: ArticlSearch1
  },
 {
    path: "/ArticlSearch1",
    name: "ArticlSearch1",
    component: ArticlSearch1
  },

  {
    path: "/VideoSearch",
    name: "VideoSearch",
    component: VideoSearch
  },
  {
    path: "/TapeSearch",
    name: "TapeSearch",
    component: TapeSearch
  },
  {
    path: "/CharacterData",
    name: "CharacterData",
    component: CharacterData
  },
 {
    path: "/Suser",
    name: "Suser",
    component: Suser
  },
   {
    path: "/Sgroup",
    name: "Sgroup",
    component: Sgroup
  },
  {
    path: "/Mprogram",
    name: "Mprogram",
    component: Mprogram
  },
  {
    path: "/Smanage",
    name: "Smanage",
    component: Smanage
  },
{
    path: "/UserStat",
    name: "UserStat",
    component: UserStat
  },
 {
    path: "/UStat",
    name: "UStat",
    component: UStat
  },
  {
    path: "/Tmanage",
    name: "Tmanage",
    component: Tmanage
  },
  {
    path: "/Tsfmanage",
    name: "Tsfmanage",
    component: Tsfmanage
  },
{
    path: "/PatchManage",
    name: "PatchManage",
    component: PatchManage
  },
{
    path: "/CodeManage",
    name: "CodeManage",
    component: CodeManage
  },
  {
    path: "/AFmanage",
    name: "AFmanage",
    component: AFmanage
  },
{
    path: "/SsnsSite",
    name: "SsnsSite",
    component: SsnsSite
  },
  {
    path: "/SSnstlog",
    name: "SSnstlog",
    component: SSnstlog
  },
  {
    path: "/SITmanage",
    name: "SITmanage",
    component: SITmanage
  },
    {
    path: "/SETmanage",
    name: "SETmanage",
    component: SETmanage
  },

  { path: "/:pathMatch(.*)*", component: PageNotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
