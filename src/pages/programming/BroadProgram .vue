<template>
     <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
      <div class="row">
        <div class="col-lg-12 " >
          
          <div class="card-header "  style="height:50px; background-color: #828282; ">
              <div class="row text-sm text-white">
                <div class="col-lg-12 scrollable-div">

                  <div class="form-group">                  
                    <div class="row justify-content-start">                
                      <div class="col-9">
                        <div class="input-group">
                          <div class="col-3">
                                   <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" >
                                    <label class="form-check-label" for="inlineCheckbox3">종영 프로그램</label>
                            </div>    
                          </div>
                  
                          <div class="col-3">
                                    <div class="form-check form-check-inline">
                                      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" >
                                      <label class="form-check-label" for="inlineCheckbox3">삭제 프로그램</label>
                              </div>   
                          </div>
                        </div>
                      </div>
                    
                      <div class="col-3">
                        <div class="button-group">  
                       <button type="button" class="btn btn-info btn-sm mr-2 mb-2"  data-bs-toggle="modal" data-bs-target="#exampleModal1"> 
                                신규
                            </button><ModalComponent/>
                        <button  class="btn btn-info btn-sm mr-2 mb-2" >
                            취소
                        </button>

                        <button class="btn btn-info btn-sm mr-2 mb-2">
                          저장
                        </button>
                        <button class="btn btn-info btn-sm mr-2 mb-2">              
                            삭제
                        </button>
                        <button class="btn btn-info btn-sm mr-2 mb-2">
                          삭제취소
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

           <div class="card-body p-0 m-0 " >
            <div class="row gx-1"  >
              <div class="col-lg-8">
                <ag-grid-vue
                    :columnDefs="columnDefs"
                    :modules="modules"
                    :rowData="rowData"
                    :groupHeaders="true"
                    :defaultColDef="defaultColDef"
                      @cellClicked="onCellClicked"
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
       
           
               <div class="col-lg-4  ml-n2">
                  <div class="card " style="height:740px;">
                    <div class="row mx-1 text-sm">
                  
                    <!-- /.card-header -->   
              
                        <div class="col-lg-12 mt-4">
                          <div class="input-group ">
                            프로그램명&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.program">                               
                                
                            
                          </div>
                        </div>
                 
                        <div class="col-lg-6 mt-2">
                          <div class="input-group ">
                           &ensp;&ensp;프로구분&ensp;
                           <select class="form-select form-control-sm" aria-label="Default select example" v-model="rinfos.pcategory">      
                                   <option selected>생방송</option>
                                  
                                </select>    
                           </div>
                        </div>

                        <div class="col-lg-6 mt-2"> 
                          <div class="input-group ">
                           &ensp;&ensp;시작일자&ensp;                          
                          <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.sdate">        
                          </div>
                      </div>
                  
                      <div class="col-lg-6 mt-2">
                          <div class="input-group  ">
                           &ensp;&ensp;장르구분&ensp;
                           <select class="form-select form-control-sm " aria-label="Default select example" v-model="rinfos.gcategory">    
                                 <option selected>종합뉴스</option>
                                </select>   
                          </div>
                      </div>

                      <div class="col-lg-6 mt-2"> 
                          <div class="input-group ">
                            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;채널&ensp;                          
                            <select class="form-select form-control-sm " aria-label="Default select example" v-model="rinfos.cha">   
                                  <option selected>MS</option>
                                  
                                </select>   
                          </div>
                      </div>
                 
                      <div class="col-lg-6 mt-2">
                          <div class="input-group  ">
                           &ensp;&ensp;제작구분&ensp;
                           <select class="form-select form-control-sm " aria-label="Default select example" v-model="rinfos.pcategory">   
                                  <option selected>생방송</option>
                                  
                                </select>   
                          </div>
                      </div>

                      <div class="col-lg-6 mt-2"> 
                          <div class="input-group ">
                           &ensp;&ensp;제작부서&ensp;                          
                          <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.pdepart">       
                          </div>
                      </div>
                 
                </div>
              </div>
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

import ModalComponent from "./BroadProgramAdd.vue";




export default {
  components: {
    AgGridVue,
    ModalComponent,



  },
  data() {
    return {
      rinfos: '',
       
      columnDefs: [
   
      {field: "no", headerName: "순번",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
      {field: "program", headerName: "프로그램명",   editable: true, cellEditor: 'CellComponentEditor', minWidth: 600 , maxWidth: 700, cellStyle: {  fontWeight: 'bold'  }, },    
      {field: "sdate", headerName: "시작일자",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "pcategory", headerName: "프로구분",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      { field: "gcategory", headerName: "장르구분",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "cha", headerName: "채널",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "pcategory", headerName: "제작구분",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "pdepart", headerName: "제작부서",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
       ],
      rowData: [
        { no: "1", program: "MS24(주요,기상)", sdate: "24-08-02", pcategory: "정시뉴스", gcategory: "종합뉴스", cha: "MS", pcategory: "생방송", pdepart: "뉴스팀" },
        { no: "2", program: "MS24(주요,기상)", sdate: "24-08-13", pcategory: "정시뉴스", gcategory: "종합뉴스", cha: "MS", pcategory: "생방송", pdepart: "뉴스팀" },
        { no: "3", program: "MS24(주요,기상)", sdate: "24-09-06", pcategory: "정시뉴스", gcategory: "종합뉴스", cha: "MS", pcategory: "생방송", pdepart: "뉴스팀" },
        { no: "4", program: "MS24(주요,기상)", sdate: "24-09-22", pcategory: "정시뉴스", gcategory: "종합뉴스", cha: "MS", pcategory: "생방송", pdepart: "뉴스팀" },
        { no: "5", program: "MS24(주요,기상)", sdate: "24-10-02", pcategory: "정시뉴스", gcategory: "종합뉴스", cha: "MS", pcategory: "생방송", pdepart: "뉴스팀" },
              
      
 ],

    
   }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
     
    },

    onCellClicked(params) {
          

      console.log('params : ' + JSON.stringify(params.data));
        // 다른 input에 값 할당
      this.rinfos = params.data;

     
    }
  },


}




</script>