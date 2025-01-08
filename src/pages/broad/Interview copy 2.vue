<template>

    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
      <div class="row">
        <div class="col-lg-12 " >
          
          <div class="card-header "  style="height:50px; background-color: #828282; ">
              <div class="row text-sm ">
                <div class="col-lg-12 scrollable-div">

                  <div class="form-group">                  
                    <div class="row justify-content-start">                  
                     <div class="col-4">
                       <div class="input-group ">
                          <label style="color:white;">작성일</label> &ensp;
                              <div class="col-6">                
                                <input
                                  type="date"
                                  class="form-control form-control-sm datetimepicker-input"
                                  data-target="#reservationdate" 
                                />
                              </div>
                              <div class="col-2">  
                        
                                <button class="btn btn-info btn-sm mx-1">                 
                                오늘 
                                </button>
                                <button class="btn btn-info btn-sm mx-1">         
                                <i class="fa-solid fa-greater-than"></i>
                                </button>
                              </div>
                      </div>
                    </div>
                  
  
                    <div class="col-4">
                      <div class="input-group">
                        <div class="col-6">                                           
                            <select class="form-select form-select-sm" aria-label="Default select example" >
                                        <option selected>정치부</option>                                        
                                      </select>     
                        </div>
               
                            <div class="button-group">
                                <button class="btn btn-info btn-sm mx-1">                 
                                  월
                                </button>
                                <button class="btn btn-info btn-sm mx-1">                 
                                주 
                              </button>
                              <button class="btn btn-info btn-sm mx-1">                 
                                일
                              </button>
                            </div>
                      </div>
                    </div> 

              
            
                    <div class="col-4">
                      <div class="button-group">
                        <button type="button" @click="() => openModal1()"  class="btn btn-info btn-sm mx-1 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal1" >
                          신규
                        </button><ModalsContainer/>
                        <button class="btn btn-info btn-sm mx-1 mb-2">
                          수정
                        </button>
                        <button class="btn btn-info btn-sm mx-1 mb-2">
                          삭제</button>
                        <button class="btn btn-info btn-sm mx-1 mb-2">               
                          승인
                        </button>
                        <button class="btn btn-info btn-sm mx-1 mb-2">                
                          승인취소
                        </button>
                        <button  type="button" @click="() => openModal2()"  class="btn btn-info btn-sm mx-1 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal2" >
                            콘텐츠계획화
                        </button><ModalsContainer/>
                        <button class="btn btn-info btn-sm mx-1 mb-2">                
                          기사작성
                        </button>
                        <button type="button" @click="() => openModal3()"  class="btn btn-info btn-sm mx-1 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal3" >                
                          기사맵핑
                        </button><ModalsContainer/>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-body p-0 m-0 " >
            <div class="row gx-1"  >
           
              <div class="col-lg-8 ">
                  <ag-grid-vue
                  
                      :columnDefs="columnDefs"
                      :modules="modules"
                      :rowData="rowData"
                      :groupHeaders="true"
                      :defaultColDef="defaultColDef"
                        :headerHeight="28" :rowHeight="35"
                      class="ag-theme-alpine"
                      style="flex: 1 1 auto; height: 740px; "
                  >
                  </ag-grid-vue>
                  <div class="nav text-sm " style="display:flex; justify-content: center; " >
                      <nav aria-label="Page navigation example" >
                            <ul class="pagination">
                              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                              <li class="page-item"><a class="page-link" href="#">1</a></li>
                              <li class="page-item"><a class="page-link" href="#">2</a></li>
                              <li class="page-item"><a class="page-link" href="#">3</a></li>
                              <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul> 
                        </nav>                 
                  </div>
              </div>
  
              <div class="col-lg-4  ml-n2">
                <div class="card " style="height:280px;">
                  <div class="card-header">
                    <h3 class="card-title text-md">근무자 현황 및 제작계획</h3>
                  </div>
                  <!-- /.card-header -->   
                  <div class="card-body col-lg-12">            
                    <div class="input-group">
                        <textarea id="compose-textarea" class="form-control" style="height: 170px">
                         
                        </textarea>
                    </div>
                    <div class="float-right mt-2">                  
                      <button type="submit" class="btn btn-sm btn-primary "><i class="far fa-save"></i> 저장</button>
                    </div>
                  </div>
                </div>   
                <div class="border border-top border-dark"></div>     
                         
                <div class="col-lg-12 mb-2 mt-3">      
                  <router-link to="/interview"><button type="submit" class="btn btn-sm btn-primary "><i class="fa-sharp-duotone fa-solid fa-list"></i>&ensp;계획내용</button></router-link>
                  <router-link to="/interview2"><button type="submit" class="btn btn-sm btn-outline-secondary"><i class="fa-sharp-duotone fa-solid fa-clipboard-list"></i>&ensp;배정</button></router-link>
                  <router-link to="/interview3"><button type="submit" class="btn btn-sm btn-outline-secondary"><i class="fa-sharp-duotone fa-solid fa-rectangle-list"></i>&ensp;계획이력</button></router-link>
                  <router-link to="/interview4"><button type="submit" class="btn btn-sm btn-outline-secondary"><i class="fa-sharp-duotone fa-solid fa-file-pen"></i>&ensp;기사화</button></router-link>

           
                </div>

                <div class="tab-content " id="pills-tabContent">
                  <div class="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">       
                    <div class="card " style="height:300px;">
                          <div class="row text-sm mx-1">
                            <div class="col-lg-12 ">
                              <div class="input-group mt-2 ">
                                계획구분&ensp;
                                <div class="col-lg-6">
                                <select class="form-select form-select-sm"  aria-label="Default select example" >
                                  <option selected>출연</option>
                                  
                                </select>  
                                </div>   
                            </div>
                          </div>
      
                          <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                            &ensp;&ensp;&ensp;신청자&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="아무개"  aria-describedby="basic-addon2"
                            style="">                               
                              &ensp;
                            <input type="text" class="form-control form-control-sm" placeholder="정치부"  aria-describedby="basic-addon2">                        
                            </div>
                          </div>
      
                          <div class="col-lg-12">
                            <div class="input-group mt-2">
                              &ensp;&ensp;&ensp;&ensp;&ensp;제목&ensp;
                              <input type="text" class="form-control form-control-sm " placeholder="노숙인"  aria-describedby="basic-addon2"
                            style="">                               
                                  
                              
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="input-group mt-2 ">
                              &ensp;&ensp;&ensp;&ensp;&ensp;내용&ensp;
                                <textarea id="compose-textarea" class="form-control" rows="5">
                              
                                
                                </textarea>
                            </div>
                          </div>
                        </div>
                     </div>
                    </div>  
                  </div>
              
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">

import {ref} from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {AgGridVue} from "@ag-grid-community/vue3";
import InterviewPlan1 from "./InterviewAdd.vue";
import InterviewPlan2 from "./InterviewConplan.vue";
import InterviewPlan3 from "./InterviewAmapping.vue";

 
import { ModalsContainer, useModal } from 'vue-final-modal'


  const { open: openModal1} = useModal({
  component: InterviewPlan1,

  attrs: {
    title: '취재/제작계획일정 등록', 
  },
  slots: {
    default: '<p>The content of the modal</p>',
  },
  
  });

  const { open: openModal2} = useModal({
  component: InterviewPlan2,

  attrs: {
    title: '콘텐츠계획화', 
  },
  slots: {
    default: '<p>The content of the modal</p>',
  },
  
  });

  const { open: openModal3} = useModal({
  component: InterviewPlan3,

  attrs: {
    title: '기사맵핑', 
  },
  slots: {
    default: '<p>The content of the modal</p>',
  },
  
  });

const modules = ref([ClientSideRowModelModule]);

const defaultColDef = {
  flex: 1
}


const columnDefs = ref([
  
      
      {field: "app", headerName: "승인", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
      {field: "division",  headerName: "구분", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
      {field: "sub", headerName: "제목", cellRenderer: 'myCellRenderer', editable: true, cellEditor: 'CellComponentEditor', minWidth: 400 , maxWidth: 500, cellStyle: {  fontWeight: 'bold'  }, },    
      {field: "time", headerName: "시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90},
      {field: "reporter", headerName: "기자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90},
      {field: "film", headerName: "촬영", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90},
      {field: "relay", headerName: "중계차", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90},
      {field: "Mfilm", headerName: "M(촬영)", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90},
      {field: "Mrelay", headerName: "M(중계)", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 50},
      {field: "dispatch", headerName: "배차", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, minWidth: 90 },
      {field: "content", headerName: "콘텐츠", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' },  maxWidth: 90},
  { field: "article", headerName: "기사", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
      
   function myCellRenderer(params) {
     if (params.column.colId === 'sub') { // 특정 컬럼인 경우
      
        return params.value;
    } else {
        return ''; // 빈 문자열을 반환하여 셀을 숨김
    }
}

]);

const rowData = ref([
  { app: "1", division: "출연", time: "10:00", sub: "노숙인 축구 월드컵 연습", reporter: "아무개", film:"김자영", relay: "", Mfilm: "임연지", Mrelay: "", dispatch: "3", content: "V", article: "3" }
      

        
]);


</script>



<style>
    .card {
  width: 100%;
}


@media (min-width: 768px) {
 .col-lg-8, .col-lg-4 {
    flex: 1;
}
.ag-cell{
  
}

}
</style>


