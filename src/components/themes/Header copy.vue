<template>
   
 <nav class="navbar navbar-expand-lg fixed-top " style="background-color: #464646;   height:60px;  z-index: 1000; ">
  <div class="container-fluid ">   
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
      >
      <span style="color:white; align-items: center; "><i class="fa-solid fa-bars" style="font-size:25px; "></i></span>
    </button>
   
     <router-link to="/"><a class="navbar-brand " href="#" ><img  src="../image/noticelogo01.png"  ></a></router-link>
    <div class="collapse navbar-collapse " id="navbarSupportedContent" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
         <li class="nav-item dropdown" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          &ensp;이슈
        </a>
             <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" >
                <li><router-link to="/issue"><a class="dropdown-item " href="#" >이슈관리</a></router-link></li>
                <li><router-link to="/content"><a class="dropdown-item" href="#">콘텐츠관리</a></router-link></li>
            </ul>   
        </li>
        <li class="nav-item dropdown" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           &ensp;방송계획
          </a>
             <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">방송계획관리</a>
                  <ul>
                    <li><router-link to="/interview"><a class="dropdown-item" href="#">취재/제작계획일정</a></router-link></li>
                    <li><router-link to="/video"><a class="dropdown-item" href="#">영상취재일정</a></router-link></li>
                    <li><router-link to="/vehicle"><a class="dropdown-item" href="#">차량일정</a></router-link></li>      
                    <li><router-link to="/relayvehicle"><a class="dropdown-item" href="#">중계차 기본일정</a></router-link></li>
                    <li><router-link to="/broadcast"><a class="dropdown-item" href="#">중계차일정</a></router-link></li>
                    <li><router-link to="/subcontrol"><a class="dropdown-item" href="#">부조정실기본일정</a></router-link></li>
                    <li><router-link to="/Subcon"><a class="dropdown-item" href="#">부조정실 일정</a></router-link></li>                  
                    <li><router-link to="/general"><a class="dropdown-item" href="#">종편실일정</a></router-link></li> 
                  </ul>
              </li>
            
              <li><a class="dropdown-item" href="#">편성관리</a>
                 <ul>
                  <li><router-link to="/ProgramNotice"><a class="dropdown-item" href="#">편성공지관리</a></router-link></li>               
                   <li><router-link to="/daily"><a class="dropdown-item" href="#">일일편성표</a></router-link></li>     
                    <li><router-link to="/basicOrganization"><a class="dropdown-item" href="#">기본편성관리</a></router-link></li>
                   <li><router-link to="/Broadprogram"><a class="dropdown-item" href="#">방송프로그램관리</a></router-link></li>       
                  </ul>
              </li>

              <li><a class="dropdown-item" href="#">광고관리</a>
               <ul>
                  <li><router-link to="/advertising"><a class="dropdown-item" href="#">광고큐시트</a></router-link></li>
                   <li><router-link to="/Advertisement"><a class="dropdown-item" href="#">광고제공자막</a></router-link></li>
                </ul>
              </li>
             
             </ul> 

          </li>

             <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              &ensp;기사
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">                
                  <li><router-link to="/Article_management"><a class="dropdown-item" href="#">기사관리</a></router-link></li>
                  <li><router-link to="/Article_writing"><a class="dropdown-item" href="#">기사작성</a></router-link></li>
                  <li><router-link to="/Article_service"><a class="dropdown-item" href="#">기사서비스</a></router-link></li>
                  <li><router-link to="/Receive_article"><a class="dropdown-item" href="#">기사수신</a></router-link></li>
                  <li><router-link to="/Reporter"><a class="dropdown-item" href="#">제보</a></router-link></li>          
              </ul>
          </li>

            <li class="nav-item dropdown" >
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         &ensp;큐시트
              </a>  
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><router-link to="/rundown"><a class="dropdown-item" href="#">큐시트</a></router-link></li>
              </ul>
          </li>           

           <li class="nav-item dropdown" >
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         &ensp;자료관리
             </a>  
           <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><router-link to="/about"><a class="dropdown-item" href="#">통합검색</a></router-link></li>
                <li><router-link to="/about"><a class="dropdown-item" href="#">보도자료</a></router-link></li>
            </ul>
          </li>

          <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         &ensp;업무의뢰
            </a>  
           <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
             <li><router-link to="/request"><a class="dropdown-item" href="#">의뢰신청</a></router-link></li>
            </ul>
          </li>

          <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         &ensp;시스템관리
            </a>
           <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><router-link to="/about"><a class="dropdown-item" href="#">개인환경설정</a></router-link></li>
                <li><router-link to="/about"><a class="dropdown-item" href="#">시스템모니터링</a></router-link></li>
                 <li><router-link to="/about"><a class="dropdown-item" href="#">템플릿관리</a></router-link></li>
            </ul>
          </li> 

           <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           &ensp;방송로그관리
            </a> 
           <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
             <li><router-link to="/about"><a class="dropdown-item" href="#">AG그리드</a></router-link></li>
              <li><router-link to="/about"><a class="dropdown-item" href="#">게시판</a></router-link></li>
           </ul> 
          </li>

           <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           &ensp;쪽지
            </a>          
          </li>
        
           <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          &ensp;메인
            </a>          
          </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>

</template>

<script lang="ts">
import { useTheme } from "../../stores";

export default {
  setup() {
    const themeStore = useTheme();

    const toggleMenu = () => {
      const currentTheme = themeStore.getTheme();
      themeStore.setTheme({
        ...currentTheme,
        menuNavbarCollapsed: !currentTheme.menuNavbarCollapsed
      });
    };
    return {
      toggleMenu
    };
  }
};
</script>


<style>


.navbar-nav {
  display:flex;
  flex-direction: column;
  align-items: flex-start; /* 또는 align-items-center */
 
}

.dropdown{
  display:flex;
  justify-content: center;
  
}
.dropdown-menu{
  background-color: #444242;
 
}
.dropdown-item{
 color:white;
 font-size: small;
  background-color: #444242;

}
.navbar-collapse{
  
}

@media (max-width: 768px) {
 
.navbar-collapse {
  position: fixed;
  top: 60px;  
  left: -300px; /* 메뉴가 닫힌 상태에서 왼쪽으로 300px 이동 */
  width: 200px;
  height: 100vh;
  background-color: #444242;
  
}
.navbar-brand{
  position: fixed;
  left:80px;
  top:7px;
  
  
}


.dropdown {
    justify-content: flex-start;
    padding-left: 10%; 
}
.dropdown-menu{

}

.navbar-collapse.show {
  left: 0; /* 메뉴가 열린 상태에서 왼쪽으로 0px 이동 */
}
}
</style>