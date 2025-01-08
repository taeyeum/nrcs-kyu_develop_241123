<template>
 
    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
      <div class="row">
        <div class="col-lg-12 " >
          
          <div class="card-header "  style="height:50px; background-color: #828282; ">
              <div class="row text-sm text-white ">
                <div class="col-lg-12 scrollable-div">

                  <div class="form-group">                  
                    <div class="row justify-content-start">                 
                   
                     <div class="col-3 ">
                        <div class="input-group align-items-center">
                             방송일&ensp;                      
                          <div class="row">         
                            <div class="col-10">
                                  
                                    <input
                                      type="date"
                                        class="form-control form-control-sm datetimepicker-input"
                                        data-target="#reservationdate"
                                    />
                            </div>
                            
                          </div>
                        </div>
                      </div>
             
                
                      <div class="col-3">
                        <div class="input-group align-items-center">                                   
                            광고초수&ensp;
                          <div class="row"> 
                            <div class="col-10">                    
                                      <input type="time" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                                      > 
                            </div>
                          </div>
                        </div>
                      </div>


                     <div class="col-3">
                        <div class="input-group align-items-center">                                   
                            등록&ensp;
                          <div class="row"> 
                            <div class="col-10">                    
                                      <input type="time" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                                      > 
                            </div>
                          </div>
                        </div>
                      </div>
                   
    
                      <div class="col-2">
                        <div class="form-group just">
                          <button class="btn btn-info btn-sm mr-2 mb-2">
                            불러오기
                          </button>
                           <button class="btn btn-info btn-sm mr-2 mb-2" > 
                                신규
                            </button><ModalComponent/>
                          <button  class="btn btn-info btn-sm mr-2 mb-2">
                            복사
                          </button>
                          <button class="btn btn-info btn-sm mr-2 mb-2">
                            저장</button>                    
                          <button class="btn btn-info btn-sm mr-2 mb-2">
                            삭제</button>      
                          <button class="btn btn-info btn-sm mr-2 mb-2">
                            전체삭제</button>                
                          <button class="btn btn-info btn-sm mr-2 mb-2">                
                            인쇄
                          </button>
                        </div>
                      </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-body p-0 m-0 " >
            <div class="row gx-1"  >
           
                      <div class="col-lg-12">
                          <ag-grid-vue
                              :columnDefs="columnDefs"
                              :modules="modules"
                              :rowData="rowData"
                              :groupHeaders="true"
                              :defaultColDef="defaultColDef"
                               :headerHeight="28" :rowHeight="35"
                              class="ag-theme-alpine"
                              style="flex: 1 1 auto; height: 740px; "
                          >
                         </ag-grid-vue>
                  <div class="nav text-sm " style="display:flex; justify-content: center; " >
                      <nav aria-label="Page navigation example" >
                            <ul class="pagination">
                              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                              <li class="page-item"><a class="page-link" href="#">1</a></li>
                              <li class="page-item"><a class="page-link" href="#">2</a></li>
                              <li class="page-item"><a class="page-link" href="#">3</a></li>
                              <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul> 
                        </nav>                 
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
        { field: "no", headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "ptime", headerName: "편성시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth:200 },
        { field: "program", headerName: "프로그램", hide: false, cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', minWidth: 600, maxWidth: 700, cellStyle: { fontWeight: 'bold' }, },
        { field: "division", headerName: "구분", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "advertiser", headerName: "광고주", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
        { field: "Material", headerName: "소재명", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
        { field: "mcode", headerName: "소재코드", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
        { field: "secno", headerName: "초수", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "padvert", headerName: "부분광고량", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
       
        // ...
      ],
      rowData: [
        { no: "1", ptime: "00:00", program: "스포츠뉴스(1)", division: "10", advertiser: "우리투자증권", Material: "우리투자증권 최조", mcode: "CMA20302", secno: "15", padvert: "15", },
        { no: "2", ptime: "00:00", program: "스포츠뉴스(2)", division: "5", advertiser: "우리투자증권", Material: "우리투자증권 최조", mcode: "CMA20302", secno: "15", padvert: "15", },
        { no: "3", ptime: "00:00", program: "스포츠뉴스(3)", division: "6", advertiser: "우리투자증권", Material: "우리투자증권 최조", mcode: "CMA20302", secno: "15", padvert: "15", },
        { no: "4", ptime: "00:00", program: "스포츠뉴스(4)", division: "7", advertiser: "우리투자증권", Material: "우리투자증권 최조", mcode: "CMA20302", secno: "15", padvert: "15", },
        { no: "5", ptime: "00:00", program: "스포츠뉴스(5)", division: "10", advertiser: "우리투자증권", Material: "우리투자증권 최조", mcode: "CMA20302", secno: "15", padvert: "15", },
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


