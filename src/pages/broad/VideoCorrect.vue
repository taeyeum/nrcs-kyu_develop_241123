
<template>
    <!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">영상취재일정 수정</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            

            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">               
                  
                    <div class="row mx-1">
                
                    <!-- /.card-header -->   
              
                          <div class="col-lg-6">
                            <div class="input-group   mt-2">
                              배정요청&ensp;
                              <select class="form-select form-select-sm" aria-label="Default select example" style="width:120px;">
                                  <option selected>촬영</option>
                                  
                                </select>                  
                          </div>
                        </div>

                        <div class="col-lg-3">
                          <div class="form-check   mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                              배차필요
                            </label>
                          </div>
                        </div>

                        <div class="col-lg-3">
                          <div class="input-group mt-2">
                            <select class="form-select form-select-sm" aria-label="Default select example" style="width:50px;">
                                  <option selected>1</option>
                                  
                                </select>     
                                대
                          </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                          <div class="input-group  ">
                            &ensp;&ensp;&ensp; 제목&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="노숙인"  aria-describedby="basic-addon2"
                          style="">                               
                                
                            
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="input-group mt-2">
                            취재예정&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="아무개,아무개2"  aria-describedby="basic-addon2"
                          style="">                               
                    
                          </div>
                      </div>
                      <div class="col-lg-12">
                          <div class="input-group mt-2">
                            귀사예정&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="아무개,아무개2"  aria-describedby="basic-addon2"
                          style="">                               
                    
                       </div>
                    </div>

                    <div class="col-lg-12">
                            <div class="input-group mt-2">
                            취재형식&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="아무개,아무개2"  aria-describedby="basic-addon2"
                          style="">                               
                    
                         </div>
                  </div>

                  <div class="col-lg-12">
                          <div class="input-group mt-2">
                            취재장소&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="아무개,아무개2"  aria-describedby="basic-addon2"
                          style="">                               
                    
                         </div>
                  </div>

                  <div class="col-lg-12">
                      <div class="input-group mt-2">
                        취재내용&ensp;
                          <textarea id="compose-textarea" class="form-control" rows="2" >
                        
                          
                          </textarea>
                      </div>
                  </div>
            
                  <div class="col-lg-12">
                      <div class="input-group mt-2  ">
                        &ensp;&ensp;&ensp;&ensp;비고&ensp;
                          <textarea id="compose-textarea" class="form-control"  rows="2">
                        
                          
                          </textarea>
                      </div>
                  </div>
                  <div class="col-lg-12">
                      <div class="input-group   mt-2">
                        배정내용&ensp;
                        <input type="text" class="form-control form-control-sm " placeholder="아무개,아무개2"  aria-describedby="basic-addon2"
                      style="">                               
                      </div>
                   </div>
                  </div>

                  <div class="row mx-1">
                    
                      <div class="col-lg-12">
                            배차내용&ensp;
                          <ag-grid-vue
                              :columnDefs="columnDefs"
                              :modules="modules"
                              :rowData="rowData"
                              :groupHeaders="true"
                              :defaultColDef="defaultColDef"
                              class="ag-theme-alpine"
                             
                                :headerHeight="20" :rowHeight="20" 
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
                                  배정/배차시SMS수신 &ensp;                                   
                              </label>
                        

              
                          <div class="btn-group ">                            
                                <button class="btn btn-sm btn-primary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false"
                                style="font-size:10px;">
                                요청  
                                </button>  &ensp;      
                        
                        
                          <div class="btn-group">    
                            <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                              style="font-size:10px;">취소</button>
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
        
        {field: "no",  headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth:70},
      { field: "vehicleno", headerName: "차량번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth:100},
      { field: "cartype", headerName: "차종", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: {ftextAlign: 'center' }, maxWidth:100},
      { field: "rtrip", headerName: "왕복여부", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth:100},
      { field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth:100 },
      { field: "article", headerName: "기사", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth:100},
      { field: "phoneno", headerName: "전화번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  maxWidth:150},
    
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