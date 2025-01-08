
<template>
    <!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md text-black">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">삭제요청</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            

            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">              
                                     

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
                  
                    
                <div class="col-lg-12">
                  <div class="modal-footer  justify-content-right">
                    <div class="btn-group ">                            
                          <button class="btn btn-sm btn-primary text-toggle" type="button" data-bs-toggle="modal" aria-expanded="false"  data-bs-target="#exampleModal4" >                          
                         삭제요청 
                          </button>&ensp;<ModalComponent4/>      
                  
                  
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

  <!--삭제모달-->
  <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm text-black">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">삭제 확인</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        기사와 매핑되어 있는 인물이 존재합니다.<br>
        정말 삭제하시겠습니까?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
        <button type="button" class="btn btn-danger" id="deleteButton">삭제</button>
      </div>
    </div>
  </div>
</div>
<!--삭제모달 끝-->

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
       
        { field: "no", headerName: "순번",            editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
        { field: "nm",  headerName: "이름",            editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxwidth:150 },    
        { field: "amapping", headerName: "기사맵핑여부",            editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150  },
       
        // ...
      ],
      rowData: [
        { no: "1", nm: "정하윤", amapping: "Y", },
        { no: "2", nm: "정홍기", amapping: "N", },
        { no: "3", nm: "정호두", amapping: "N", },
        { no: "4", nm: "정보리", amapping: "Y", },
        { no: "5", nm: "정안나", amapping: "Y", },

        
   ]
   }
  },
  methods: {
   


  },


}
</script>
  
<style>

</style>