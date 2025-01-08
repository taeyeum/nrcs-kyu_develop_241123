interface Children {
  icon?: string;
  path?: string;
  title: string;
  type?: string;
  blank?: string;
  children?: Array<Children>;
}
export interface Menu {
  path?: string;
  icon?: string;
  title?: string;
  type?: string;
  exact?: any;
  navheader?: boolean;
  children?: Array<Children>;
  
}
const menu: Array<Menu> = [

   
  {
    path: "#",
    icon: "nav-icon fas fa-check",
    title: "이슈",
        children: [
          {
            path: "/issue",
            title: "이슈관리"
          },
          {
            path: "/Content",
            title: "콘텐츠관리"
          }
        ]
  },
  {
    path: "#",
    icon: "nav-icon fas fa-calendar",
    title: "방송계획",
        children: [
          {
            path: "/broad",
            icon: "nav-icon fas fa-file",
            title: "방송계획관리",
            children:[
              {
                path:'/interview',
                title:"취재/제작계획일정"
              },
             
              {
                path:'/video',
                title:"영상취재일정"
              },
              
              {
                path:'/vehicle',
                title:"차량일정"
              },
              {
                path:'/relayvehicle',
              title:"중계차 기본일정"
            },
              {
                path:'/broadcast',
              title:"중계차일정"
            },
          
            {
              path:'/subcontrol',
            title:"부조정실기본일정"
            },
            {
              path:'/Subcon',
            title:"부조정실 일정"
            },

            {
              path:'/general',
              title:"종편실일정"
            }
            ]
          },     
      {
        path: "/programming",
        icon: "nav-icon fas fa-file",
        title: "편성관리",
            children:[
              {
                path:'/ProgramNotice',
                title:"편성공지관리"
              },
             
              {
                path:'/daily',
                title:"일일편성표"
              },
              {
                path:'/basicOrganization',
                title:"기본편성관리"
              },
              {
                path:'/Broadprogram',
                title:"방송프로그램관리"
              },
            
            ]
              
          },
      {
        path: "/advertising",
        icon: "nav-icon fas fa-file",
        title: "광고관리",
            children:[
              {
                path:'/advertising',
                title:"광고관리"
              },
            
            ]
          }
    ]
  },
  {
    path: "#",
    icon: "nav-icon fas fa-newspaper",
    title: "기사",
   
        children: [
          {
            path: "/Article_writing",
            title: "기사작성"
          },
          {
            path: "/Article_management",
            title: "기사관리"
          },
        
          {
            path: "/Article_service",
            title: "기사서비스"
          },
          {
            path: "/Receive_article",
            title: "기사수신"
          },
          {
            path: "/Reporter",
            title: "제보"
          }
        ]
      },
  {
    path: "#",
    icon: "nav-icon fas fa-outdent",
    title: "큐시트",
        children: [
          {
            path: "/rundown",
            title: "큐시트"
          }
        ]
      },
      {
        path: "#",
        icon: "nav-icon fas fa-outdent",
        title: "업무의뢰",
        children: [
          {
            path: "/request",
            title: "의뢰신청"
          }
        ]
      },
  {
    path: "/about",
    icon: "nav-icon fas fa-user",
    title: "회원정보"
  },
  {
    path: "/about",
    icon: "nav-icon fas fa-info",
    title: "개발가이드"
  },
  {
    path: "#",
    icon: "nav-icon fas fa-database",
    title: "메뉴1",
        children: [
          {
            path: "/grid",
            title: "AG그리드"
          },
          {
            path: "/bbs",
            title: "게시판"
          }
        ]
      },
  {
    path: "#",
    icon: "nav-icon fas fa-database",
    title: "다단계 메뉴",
        children: [
          {
            path: "#",
            title: "Level 1"
          },
          {
            path: "#",
            title: "Level 2",
            icon: "nav-icon fas far fa-circle nav-icon",
            children: [
              {
                path: "#",
                title: "Sub Level 2"
              },
              {
                path: "#",
                title: "Sub Level 3"
              },
              {
                path: "#",
                title: "Sub Level 4"
              }
            ]
          },
          {
            path: "#",
            title: "Level 3"
          }
        ]
  }
];

export default menu;

