
<template>
  
   <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog text-black">
    <div class="modal-content">
      <div class="modal-header ">             
          <h6 class="modal-title" id="exampleModalLabel" >차량일정 등록</h6>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
            
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">                   

                   <div class="row mx-1">
                     <!-- /.card-header -->   

                      <div class="col-lg-12">
                          <div class="input-group mt-2">
                            &ensp;&ensp;&ensp;&ensp;제목&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="하늘에서 본 적조 피해"  aria-describedby="basic-addon2"
                          >                               
                                
                            
                        </div>
                      </div>

                      <div class="col-lg-6">
                          <div class="input-group  mt-1">
                            예정시간&ensp;
                            <input type="time" class="form-control form-control-sm " aria-describedby="basic-addon2" v-model="currentTime">                               
                    
                          </div>
                      </div>

                      <div class="col-lg-6">
                          <div class="input-group mt-1">
                            소요시간&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                          >&ensp;&ensp;시간                          
                    
                        </div>
                      </div>

                    
                      <div class="col-lg-12">
                              <div class="input-group mt-1">
                                귀사예정&ensp;
                                <input type="time" class="form-control form-control-sm "  aria-describedby="basic-addon2"
                              >                               
                        
                              </div>
                      </div>

                    
                      <div class="col-lg-6 mt-2 ">
                          <div class="input-group">
                          취재형식&ensp;
                          <select class="form-select form-select-sm" aria-label="Default select example"  >
                                <option selected>중계</option>
                                
                              </select>     
                          </div>
                      </div>

                        
                      <div class="col-lg-6 mt-1 ">
                          <div class="input-group">
                          신청자&ensp;
                          <select class="form-select form-select-sm" aria-label="Default select example" >
                                <option selected>아무개</option>
                                
                              </select>     &ensp;
                          <input type="text" class="form-control form-control-sm mr-2" placeholder="정치부"  aria-describedby="basic-addon2">                        
                          </div>
                        </div>
                              
                  
                      <div class="col-lg-12">
                          <div class="input-group mt-1   ">
                            취재장소&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="숭례문"  aria-describedby="basic-addon2"
                              style="">                               
                        
                          </div>
                      </div>

                      <div class="col-lg-12">
                          <div class="input-group mt-1   ">
                            취재내용&ensp;
                              <textarea id="compose-textarea" class="form-control" style="height: 50px">                         
                              
                              </textarea>
                          </div>
                      </div>
              
                      <div class="col-lg-12">
                          <div class="input-group mt-1   ">
                            &ensp;&ensp;&ensp;&ensp;비고&ensp;
                              <textarea id="compose-textarea" class="form-control" style="height: 50px">                          
                              
                              </textarea>
                          </div>
                      </div>
                  
                      <div class="col-lg-12">
                          <div class="input-group mt-1   ">
                            배정내용&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="OB VAN, 아무개 감독, 아무개1, 아무개2"  aria-describedby="basic-addon2"
                              style="">                               
                        
                          </div>
                      </div>
                     <slot />
                  </div>

                  <div class="row mx-1">
                      <div class="col-lg-12">
                      
                          배차내용&ensp;
                          <ag-grid-vue
                              :columnDefs="columnDefs"
                              :modules="modules"
                              :rowData="rowData"                              
                             :headerHeight="25" :rowHeight="20"
                              :defaultColDef="defaultColDef"
                              class="ag-theme-alpine"
                              style="flex: 1 1 auto; height: 150px; "
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


import { ModalsContainer, useModal } from 'vue-final-modal'

export default {
  components: {
    AgGridVue
  },
  data() {
    return {
    
      currentTime: '',
       
      columnDefs: [
        
       {field: "no",  headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 70},
      { field: "vehicleno", headerName: "차량번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100}, 
      { field: "cartype", headerName: "차종", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: {textAlign: 'center' }, maxWidth: 100},
      { field: "rtrip", headerName: "왕복여부", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      { field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth: 100},
      { field: "article", headerName: "기사", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth: 100},
      { field: "phoneno", headerName: "전화번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  maxWidth: 120},
    
],
      rowData: [
  { no: "촬영", vehicleno:"31러2133", cartype:"아반떼XD", rtrip:"왕복",  time:"1시간", article:"홍길동", phoneno:"010-0000-0000" },
 
   ]
   }
  },
  computed: {
    formattedTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  },

   watch: {
    formattedTime(newValue) {
      this.currentTime = newValue;
    }
  },
  mounted() {
    this.currentTime = this.formattedTime;
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