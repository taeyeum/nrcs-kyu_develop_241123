<template>
   
    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
      <div class="row">
        <div class="col-lg-12 " >
          <div class="card-header "  style="height:50px; background-color: #828282; ">
              <div class="row text-sm text-white">
                <div class="col-lg-12 scrollable-div">

                  <div class="form-group">                  
                    <div class="row justify-content-start">      

                      <div class="col-8">
                        <div class="input-group">
                        <label>방송일자</label>
                      
                          <div class="col-3">
                                  
                                    <input
                                      type="date"
                                        class="form-control form-control-sm datetimepicker-input"
                                        data-target="#reservationdate"
                                    />
                              </div>
                            <div class="col-1">
                                <button class="btn btn-info btn-sm ">
                                    <i class="fa-solid fa-greater-than"></i> 
                                </button>
                            </div>

                          </div>
                      </div>
             


                      <div class="col-3">
                        <div class="input-group">
                        <label>광고초수 총계</label>    
                            <div class="col-5">
                              <div class="input-group">                           
                                    <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                                    >                
                                                                
                              </div>
                            </div>

                        </div>
                      </div>

                      <div class="col-1">
                        <div class="form-group">  
                            <button class="btn btn-info btn-sm mr-2 mb-2">                           
                            목록
                            </button>        
                            <button class="btn btn-info btn-sm mr-2 mb-2">
                                <i class="fas fa-print"></i>
                                인쇄
                            </button>
                  
                        </div>
                      </div>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-body p-0 m-0" >
            <div class="row gx-1"  >
                <div class="col-lg-12">
                
                <ag-grid-vue
                    :columnDefs="columnDefs"
                    :modules="modules"
                    :rowData="rowData"
                    :groupHeaders="true"
                    :defaultColDef="defaultColDef"
                    class="ag-theme-alpine"
                   
                      :onCellClicked="onCellClicked"
                    :headerHeight="28" :rowHeight="35"
                    style="flex: 1 1 auto; height: 800px; "
                >
                </ag-grid-vue>
                </div>
            </div>
     
        
     
            <!-- /.col -->
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

import ModalComponent from "./ProgramNoticeAdd.vue";

export default {
  components: {
    AgGridVue,
    ModalComponent,
 

  },
   

  data() {
    return {
      columnDefs: [
   
      {field: "no", headerName: "순번", cellRenderer: 'myCellRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 120},
      {field: "stime", headerName: "시작시간",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 200},
      {field: "etime", headerName: "종료시간",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 200},
      {field: "btime", headerName: "방송시간",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 200},
      { field: "IDno", headerName: "ID No",   editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
      {field: "isource", headerName: "Input Source",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 200},
      { field: "program", headerName: "프로그램명",   editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'left' }, minWidth: 300, maxWidth: 400},
      {field: "bcategory", headerName: "방송구분",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 200},
      {field: "advert", headerName: "광고량",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 200},
      {field: "note", headerName: "비고",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 80},
    
      ],
      rowData: [
      { no: { value1: '+', value2: '1' }, stime: "00:00:00", etime: "38'00”", IDno: "", isource: "ST11", program:"스포츠 뉴스(2)", bcategory:"본방", advert:"1’45”", note:""},
      {  no:"2", stime: "00:40:00", etime: "12'00”", IDno: "", isource: "ST11", program:"SO ********************", bcategory:"본방", advert:"1’30”", note:""},
      {  no:"3", stime: "00:53:00", etime: "02'00”", IDno: "", isource: "ST11", program:"타이틀+前CM************", bcategory:"본방", advert:"1’30”", note:""},
      {  no:"4", stime: "00:57:00", etime: "03'00”", IDno: "", isource: "ST11", program:"MS23(주요, 기상)", bcategory:"본방", advert:"2’30”", note:""},
      {  no:"5", stime: "01:30:00", etime: "30'00”'", IDno: "", isource: "ST11", program:"MS24(주요, 기상, 취업)", bcategory:"본방", advert:"1’30”", note:""},
      {  no:"6", stime: "01:56:00", etime: "25'00”", IDno: "", isource: "ST11", program:"SO ********************", bcategory:"본방", advert:"1’45”", note:""}
  
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
.custom-cell {
  display: flex;
  justify-content: space-between;
}
</style>