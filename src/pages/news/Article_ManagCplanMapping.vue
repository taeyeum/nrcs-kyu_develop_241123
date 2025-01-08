<template>
   
    <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
            
          <div class="modal-header">
                  <h6 class="modal-title" id="exampleModalLabel">취재계획 맵핑</h6>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

        
           
            <div class="modal-body"> 
               <div class="col-lg-12 scrollable-div"> 
                <div class="form-group">
                   <div class="row mx-1 justify-content-start">
                      <div class="col-2">                           
                            <div class="input-group">
                                
                                    <input type="date" class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2"
                                    > &ensp;                   
                                                 
                            </div>
                      </div>

                      <div class="col-1">                           
                            <div class="form-group">
                                    <button class="btn btn-info btn-sm mb-2">
                                        오늘
                                    </button>
                            </div>
                      </div>
                      
                       <div class="col-2">                           
                            <div class="select-group">
                                <select class="form-select form-select-sm" aria-label="Default select example" style="width:100px; height:30px;">
                                    <option selected>정치부</option>                                    
                                    </select>    
                            </div>       
                      </div>

                      <div class="col-5">
                            <div class="input-group ">
                            
                                 <select class="form-select form-select-sm" aria-label="Default select example" style="width:100px; height:30px;">
                                    <option selected>제목</option>                                    
                                    </select>    &ensp;
                                <input type="text" class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2"> &ensp;                   
                                                    
                                    <button class="btn btn-info btn-sm mb-2">
                                        조회
                                    </button>
                            </div>
                        </div>

                         <div class="col-2 " >
                            <div class="button-group ">
                             <button class="btn btn-info btn-sm ml-5  mb-2 ">
                                        맵핑
                                    </button>
                               
                            </div>
                        </div>
                  </div>
                </div>
             </div>
                 
            <div class="row mt-n3">
              <div class="col-lg-7">
                      <ag-grid-vue
                          :columnDefs="columnDefs"
                          :modules="modules"
                          :rowData="rowData"
                          :groupHeaders="true"
                          :defaultColDef="defaultColDef"
                            :headerHeight="28" :rowHeight="35"
                          class="ag-theme-alpine"
                          style="flex: 1 1 auto; height: 330px; "
                      >
                      </ag-grid-vue>
              </div>

                      
      
              <div class="col-lg-5">
                  <div class="card " style="height:330px;">   
                      <div class="row mx-1 text-sm">
                          <div class="col-lg-12">
                              <div class="button-group mt-2 ">
                                  <div class="col-lg-12 mb-2 mt-3">      

                                      <router-link to="/article_managementmodal4"><button type="submit" class="btn btn-sm btn-primary"><i class="fa-sharp-duotone fa-solid fa-file-lines"></i>&ensp;계획내용</button></router-link>
                                      <router-link to="/article_managementmodal4_2"><button type="submit" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-clipboard-question"></i>&ensp;배정</button></router-link>
                                      
                              
                                  </div>

                                <hr/>
                                    <div class="row text-sm mx-1">
                                    <div class="col-lg-12 ">
                                      <div class="input-group ">
                                        계획구분&ensp;
                                        <select class="form-select form-select-sm" aria-label="Default select example" style="width:140px;">
                                          <option selected>출연</option>
                                          
                                        </select>     
                                    </div>
                                  </div>
              
                                  <div class="col-lg-12 mt-2">
                                    <div class="input-group  ">
                                    &ensp;&ensp;신청자&ensp;
                                    <input type="text" class="form-control form-control-sm " placeholder="아무개"  aria-describedby="basic-addon2"
                                    style="">                               
                                      &ensp;
                                    <input type="text" class="form-control form-control-sm" placeholder="정치부"  aria-describedby="basic-addon2">                        
                                    </div>
                                  </div>
              
                                  <div class="col-lg-12">
                                    <div class="input-group mt-2">
                                      &ensp;&ensp;&ensp;&ensp;제목&ensp;
                                      <input type="text" class="form-control form-control-sm " placeholder="노숙인"  aria-describedby="basic-addon2"
                                    style="">                               
                                          
                                      
                                    </div>
                                  </div>
                                  <div class="col-lg-12">
                                    <div class="input-group mt-2 ">
                                      &ensp;&ensp;&ensp;&ensp;내용&ensp;
                                        <textarea id="compose-textarea" class="form-control" style="height: 100px">
                                      
                                        
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
    </div>


</template>

 
<script >

import {ref} from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';


export default {
  components: {
    AgGridVue,
  


  },
  data() {
    return {
      columnDefs: [
      
      {field: "app",  headerName: "승인",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
      {field: "sub", headerName: "제목",   editable: true, cellEditor: 'CellComponentEditor', minWidth: 400, maxWidth: 450, cellStyle: { fontWeight: 'bold' }, },     
      {field: "division",  headerName: "구분",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, minWidth: 90},    
      {field: "time",  headerName: "시간",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150},
      {field: "reporter", headerName: "기자",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "film", headerName: "촬영",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "relay", headerName: "중계차",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "Mfilm", headerName: "M(촬영)",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "Mrelay", headerName: "M(중계)",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "dispatch", headerName: "배차",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "content", headerName: "콘텐츠",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "article", headerName: "기사",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
     

        // ...
      ],
      rowData: [
         {app: "" , division:"출연", sub:"노숙인 축구 월드컵 연습", time:"10:00", reporter:"아무개", film:"김자영", relay:"", Mfilm:"임연지", Mrelay:"", dispatch:"3",  content: "V", article:"3"},
 
   ]
    }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
     
    },


  }
}




</script>

<style>


</style>