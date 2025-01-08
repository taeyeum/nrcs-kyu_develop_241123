
<template>
  
    <!-- Modal -->

<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm text-black">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">선택</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <div class="modal-body " style="height:100%;">
        <div class="row ">
          <div class="col-lg-12 ">
                          
                  <span>1 긴급 테스트기사</span>              
            
               <slot />
                
                </div>
              </div>
            </div>

            <div class="modal-footer justify-content-right">
                <button type="button" class="btn btn-primary btn-sm">수정</button>
                 <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                >취소</button>
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
       {field: "no", headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
      { field: "division", headerName: "구분", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60, },    
      { field: "broad", headerName: "방송", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60},   
      {field: "mc",  headerName: "MC", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' },  maxWidth: 60 },   
      {field: "sub", headerName: "제목", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { fontWeight: 'bold' }, minWidth:850, maxWidth: 1000},
      {field: "form", headerName: "형식", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth:120},
      { field: "reporter", headerName: "기자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 120},
      { field: "graphics", headerName: "그래픽", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 120},
      { field: "video", headerName: "영상", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 120},
      { field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 120},
     { field: "cliptime", headerName: "클립시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 120},
     { field: "broadno", headerName: "방송횟수", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 120},
     
        // ...
      ],
      rowData: [
        {no: "1", division: "", broad:"", mc:"", sub: "테스트 기사1", form:"자료", reporter:"", graphics: "1/1", video: "1/1", time: "00:56", cliptime:"00:30", broadno:"0" }
 
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
  
