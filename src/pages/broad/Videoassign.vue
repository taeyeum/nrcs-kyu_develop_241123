

<template>
   <!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">촬영기자 배정</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>


            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">
              
                    <div class="row mx-1 mt-2">
                
                       <div class="col-lg-6">
                            <div class="input-group  ">
                              촬영기자&ensp;
                              <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected></option>
                                  
                                </select>                  
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="input-group">
                                  <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                                  >                                                        
                              
                          </div>
                        </div>  
              
                  

                  
                      <div class="col-lg-12 mt-2 ">
                        <div class="button-group " style="float: right;">
                           <button type="button" class="btn btn-primary btn-sm">추가</button>&ensp;
                            <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                            >삭제</button>
                        </div>
                      </div>
                   
             
                   
                     
                      <div class="col-lg-12 mt-3">
                            <ag-grid-vue
                                :columnDefs="columnDefs"
                                :modules="modules"
                                :rowData="rowData"
                                :groupHeaders="true"
                                :defaultColDef="defaultColDef"
                                 :headerHeight="25" :rowHeight="20" 
                                class="ag-theme-alpine"
                                style="flex: 1 1 auto; height: 100px; "
                            >
                            </ag-grid-vue>
                      </div>
                   

                   
                      <div class="col-lg-12 mt-2">

                        <div class="modal-footer justify-content-right">
                            <button type="button" class="btn btn-primary btn-sm">확인</button>
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
  
        
       {field: "no",  headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 80},
       {field: "cman", headerName: "촬영기자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',cellStyle: { textAlign: 'center' }, maxWidth:180},
       {field: "depart", headerName: "부서", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',cellStyle: { textAlign: 'center' },  maxWidth:170},
   
],
      rowData: [
  { no: "1", cman:"정안나", depart:"영상취재부" },
  { no: "2", cman:"정호두", depart:"영상취재부" },
 
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