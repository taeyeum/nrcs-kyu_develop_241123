
<template>
    <!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg text-black">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">인제스트 의뢰 등록</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            

            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">               
                  
                    <div class="row mx-1">
                
                    <!-- /.card-header -->   
              
                          <div class="col-lg-6">
                            <div class="input-group   mt-2">
                              &ensp;&ensp;&ensp;&ensp;작업부서&ensp;
                              <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>아카이브팀</option>
                                  
                                </select>                  
                          </div>
                        </div>
                      
                        <div class="col-lg-12 mt-2">
                          <div class="input-group">
                            작업의뢰내용&ensp;
                           <textarea id="compose-textarea" class="form-control"  rows="2">
                            20일까지는 인제스트 되어야 합니다.                          
                          </textarea>
                            
                          </div>
                        </div>

                    
                      <div class="col-lg-6 mt-2">
                        <label class="mt-2">테이프 영상 검색</label>&ensp;
                      </div>

                       <div class="col-lg-6 mt-4 ">
                            <div class="input-group">                             
                              <div class="col-lg-8 ">                             
                                                                                                 
                                <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2">                                
                              </div>
                          
                    

                               <div class="col-lg-4 ">
                                  <div class="btn-group float-right">          
                                      <button class="btn btn-sm btn-secondary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false"
                                      >
                                      검색  
                                      </button>&ensp;                        
                                  
                                      <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                                      >추가</button>                       
                                  </div>
                              </div>
                          </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                          <ag-grid-vue
                              :columnDefs="columnDefs"
                              :modules="modules"
                              :rowData="rowData"
                              :groupHeaders="true"
                              :defaultColDef="defaultColDef"
                              class="ag-theme-alpine"
                             
                                :headerHeight="25" :rowHeight="20" 
                              style="flex: 1 1 auto; height: 100px; "
                          >
                          </ag-grid-vue>
                        
                      </div>
                  
                      <div class="col-lg-12 mt-3">
                            <label class="mt-2">인제스트 의뢰 테이프 영상</label>&ensp;
                             <button class="btn btn-sm btn-secondary text-toggle float-right" type="button" data-bs-toggle="text" aria-expanded="false"
                                >
                                삭제  
                                </button>
                          <ag-grid-vue
                              :columnDefs="columnDefs"
                              :modules="modules"
                              :rowData="rowData"
                              :groupHeaders="true"
                              :defaultColDef="defaultColDef"
                              class="ag-theme-alpine "
                             
                                :headerHeight="25" :rowHeight="20" 
                              style="flex: 1 1 auto; height: 100px; "
                          >
                          </ag-grid-vue>
                     </div>
                  
                   
                      <div class="col-lg-12">
                        <div class="modal-footer  justify-content-right">
                      
                      
                          <div class="form-check ">
                              <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"
                              style="width:20px;height:20px; "> &ensp;   
                              <label class="form-check-label mt-1" for="flexCheckDefault">
                                  작업 완료 시 SMS 수신 &ensp;                                   
                              </label>
                        
                          </div>
              
                          <div class="btn-group ">                            
                                <button class="btn btn-sm btn-primary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false"
                                >
                                등록  
                                </button>  &ensp;      
                        
                          </div>
                          <div class="btn-group">    
                            <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                              >취소</button>
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
        
       {field: "no",  headerName: "순번",       editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth:70},
      { field: "vehicleno", headerName: "차량번호",       editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth:100},
      { field: "cartype", headerName: "차종",       editable: true, cellEditor: 'CellComponentEditor',  cellStyle: {ftextAlign: 'center' }, maxWidth:100},
      { field: "rtrip", headerName: "왕복여부",       editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth:100},
      { field: "time", headerName: "소요시간",       editable: true, cellEditor: 'CellComponentEditor', maxWidth:100 },
      { field: "article", headerName: "기사",       editable: true, cellEditor: 'CellComponentEditor', maxWidth:100},
      { field: "phoneno", headerName: "전화번호",       editable: true, cellEditor: 'CellComponentEditor',  maxWidth:150},
    
],
      rowData: [
  { no: "촬영", vehicleno:"31러2133", cartype:"아반떼XD", rtrip:"왕복",  time:"1시간", article:"홍길동", phoneno:"010-0000-0000" },
 
   ]
   }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
     
    },


  },


}
</script>
  
<style>

</style>