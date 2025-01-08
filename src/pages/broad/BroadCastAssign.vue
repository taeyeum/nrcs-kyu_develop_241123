
<template>
   
    <!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog text-black">
    <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">중계차 배정</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

                       
            <div class="modal-body">
                                  
                    <div class="row mx-1">
                
                    <!-- /.card-header -->   
              
                          
                        <div class="col-lg-6 ">
                            <div class="input-group  ">
                              &ensp;&ensp;중계차&ensp;
                              <input type="time" class="form-control form-control-sm " aria-describedby="basic-addon2"
                            style="">                               
                      
                            </div>
                        </div>
                        <div class="col-lg-12  mt-2">
                            <div class="input-group">
                              중계감독&ensp;
                              <select class="form-select form-select-sm" aria-label="Default select example">
                                  <option selected></option>
                                </select>&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                            style="">                            
                      
                         </div>
                      </div>
  
                    
                    <div class="col-lg-9 mt-2">
                            <div class="input-group  ">
                              중계요원&ensp;
                              <select class="form-select form-select-sm" aria-label="Default select example">
                                  <option selected></option>
                                </select>&ensp;
                                 
                              <input type="text" class="form-control form-control-sm "  aria-describedby="basic-addon2"
                            style="">                               
                      
                           </div>                           
                    </div>          

                    <div class="col-lg-3 mt-2">
                        <div class="button-group  ">
                            <button class="btn btn-info btn-sm ml-1 mb-2">
                              추가
                            </button>                
                            <button class="btn btn-info btn-sm ml-1 mb-2">                
                              삭제
                            </button>
                        </div>                           
                    </div>               
  
                    <div class="col-lg-12">
                      
                        배차내용
                        <ag-grid-vue
                            :columnDefs="columnDefs"
                            :modules="modules"
                            :rowData="rowData"
                            :headerHeight="25" :rowHeight="20"
                            :defaultColDef="defaultColDef"
                            class="ag-theme-alpine"
                            style="flex: 1 1 auto; height: 120px; "
                        >
                        </ag-grid-vue>            
                      
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-12 mt-2">
                        <div class="modal-footer  justify-content-right">
                          <div class="form-check ">
                              <input class="form-check-input mt-0" type="checkbox" value="" id="flexCheckDefault"
                              style="width:20px;height:20px; "> &ensp;   
                              <label class="form-check-label" for="flexCheckDefault">
                                  배정/배차시SMS수신 &ensp;                                   
                              </label>
                          </div>

                    
                           <div class="btn-group ">                            
                             <button class="btn btn-sm btn-primary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false"
                             >
                             확인  
                             </button>  
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
         
       {field: "no",  headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth:60},
      { field: "ragent", headerName: "중계요원", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth:200},
      { field: "department", headerName: "부서", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth:200 },
      
        // ...
      ],
      rowData: [
        { no: "1", ragent:"정하윤", department:"중계부" },
       { no: "2", ragent:"정상호", department:"중계부" },
 
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
  
   