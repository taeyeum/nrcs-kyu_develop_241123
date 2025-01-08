

<template>
     <!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog text-black">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">차량배차</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
  
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">                  
                 
                    <div class="input-group ">
                      차량&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example" >
                              <option selected>아무개</option>
                              
                            </select>&ensp;
                        <input type="text" class="form-control form-control-sm " placeholder="아반떼XD 1.5 GLS"  aria-describedby="basic-addon2"
                              >                                                        
                        
                    </div>
                  </div>

                  <div class="col-lg-6">                        
                      <div class="input-group  mt-2">
                        소요시간&ensp;
                        <input type="text" class="form-control form-control-sm " placeholder="1"  aria-describedby="basic-addon2"
                      style="">  &ensp;   시간                          
                      </div>
                  </div>

                  <div class="col-lg-6 mt-2 ">              
                      <div class="input-group ">
                      차량기사&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example" style="width:90px; height:30px;">
                              <option selected>홍길동</option>
                              
                            </select>
                    </div>
                   </div>

                  <div class="col-lg-12 mt-2">&ensp;&ensp;&ensp;&ensp;
                          <div class="form-check-inline mt-2  ">
                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                              <label class="form-check-label" for="flexRadioDefault1">
                                  왕복
                              </label>
                          </div>
                          <div class="form-check-inline mt-2">
                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                              <label class="form-check-label" for="flexRadioDefault2">
                                  편도
                              </label>
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
                                 :headerHeight="20" :rowHeight="20" 
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

</template>


<script setup lang="ts">

import { ref } from "vue";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from "@ag-grid-community/vue3";

const modules = ref([ClientSideRowModelModule]);

const defaultColDef = {
  flex: 1,
};
  
const columnDefs = ref([
  
        
       {field: "no",  headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' },},
       {field: "cman", headerName: "촬영기자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', },
       {field: "depart", headerName: "부서", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  },
    

]);

const rowData = ref([
  { no: "촬영", cman:"31러2133", depart:"아반떼XD" },
 
        
]);




</script>
<style>

</style>