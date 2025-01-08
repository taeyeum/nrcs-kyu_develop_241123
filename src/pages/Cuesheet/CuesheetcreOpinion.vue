
<template>
  
    <!-- Modal -->

<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md text-black">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">의견교환</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <div class="modal-body " style="height:100%; ">
        <div class="row ">
          <div class="col-lg-12 scrollable-div">

            <div class="form-group">                  
              <div class="row justify-content-start">
                <div class="col-12">
                   <div class="input-group">
                      <div class="col-5">           
                      정하윤,정상호&ensp; 
                      </div>              
                                
                      <div class="col-5">                            
                           
                        <input class="form-check-input align-items-center mt-2" type="checkbox" value="" id="flexCheckDefault" style="width:20px; height:20px; ">
                          &ensp;
                        <label class="form-check-label mr-5" for="flexCheckDefault"  >
                          항상 위
                        </label>
                      </div>
                      

                      <div class="col-2">
                     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        초대
                        </button>
                      </div>

                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-12 ">  

                  <textarea class="form-control form-control-sm " id="exampleFormControlTextarea1" rows="6">
                    정하윤 : 3번기사 건너뜁니다.
                    정상호 : 네.

                  </textarea>       

          </div>

          <div class="col-lg-10 mt-2 ">  
                  <textarea class="form-control  form-control-sm" id="exampleFormControlTextarea1" rows="2">
                    다음껀 어떻게…??

                  </textarea> 
          </div>

          <div class="col-lg-2 mt-2 ">  
                  <button class="btn btn-info btn-sm mr-5 mb-2">               
                    전송
                    </button> 
          </div>

        </div>
      </div>

    </div>
  </div>
</div>


      <!--  초대버튼 모달 -->
     
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg text-black">
        <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel2">의견교환 상대 초대</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

           
            <div class="modal-body" style="height:100%;  max-height: 80vh; /* 최대 높이 설정 */ overflow-y: auto; " >             
                <div class="row mx-1">
                  <div class="col-lg-3 mt-2">
                    <div class="input-group align-items-center">                        
                        부조&ensp;                    
                          <select class="form-select form-select-sm" aria-label="Default select example" >
                              <option selected>1부조</option>
                              
                          </select>                   
                      <slot />
                    </div>
                  </div>

                   <div class="col-lg-5 ">
                        <div class="input-group align-items-center">                                
                           사용자명&ensp;        
                            <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                          > &ensp;                   
                                            
                            <button class="btn btn-info btn-sm mr-2 mb-2 mt-2">
                                검색
                            </button>
                  
                              
                        </div>
                  </div>

                  <div class="col-lg-8 mt-3">
                    <ag-grid-vue
                        :columnDefs="columnDefs"
                        :modules="modules"
                        :rowData="rowData"
                        :groupHeaders="true"
                        :defaultColDef="defaultColDef"
                          :headerHeight="25" :rowHeight="20"
                        class="ag-theme-alpine"
                        style="flex: 1 1 auto; height: 210px; "
                    >
                    </ag-grid-vue>

                  </div>

                   <div class="col-lg-1 d-flex align-items-center my-btn2">

                     <button class="btn btn-info btn-sm ">
                      <i class="fa-solid fa-chevron-left"></i>
                      </button>&ensp; 

                        <button class="btn btn-info btn-sm ">
                            <i class="fa-solid fa-chevron-right"></i> 
                        </button>
                  </div>

                  <div class="col-lg-2 mt-n1 ml-2">
                      초대할 사용자
                    <ag-grid-vue
                        :columnDefs="columnDefs01"
                        :modules="modules"
                        :rowData="rowData01"                          
                        :defaultColDef="defaultColDef"
                        :headerHeight="25" :rowHeight="20"                         
                        class="ag-theme-alpine"
                        style="height: 210px; "
                    >
                    </ag-grid-vue>

                  </div>
                
                </div>
              </div>    
           
           
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary btn-sm">수정</button>
                 <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                >취소</button>
              </div>
           
                        
        </div> 
      </div>
    </div>                  
     
      <!--모달 초대버튼 모달내용-->

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
       {field: "no", headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
      { field: "id", headerName: "사용자ID", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150, },    
      { field: "usernm", headerName: "사용자명", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150},   
      {field: "groupnm",  headerName: "그룹명", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' },  maxWidth: 150 },   
    
        // ...
      ],
      rowData: [
        {no: "1", id: "kkk", usernm:"정안나", groupnm:"뉴스팀" }
 
      ],
      columnDefs01: [
        
        { field: "usernm", headerName: "사용자명", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 110 },        
        // ...
      ],
      rowData01: [
        {usernm:"정안나"}
 
      ],

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


@media (max-width: 768px) {
 

}
</style>