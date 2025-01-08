
<template>

     <!-- Modal -->
<div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl text-black">
    <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">기사맵핑</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>           
            </div>         
                       

          <div class="modal-body">
              <div class="row">
                <div class="col-lg-12 scrollable-div">
                  <div class="form-group">
                      <div class="row justify-content-start">                    
                          <div class="col-6">
                            <div class="input-group ">
                                작성일&ensp;
                                <div class="col-5">
                                <input
                                            type="date"
                                            class="form-control form-control-sm datetimepicker-input"
                                            data-target="#reservationdate"
                                        />
                                </div>~
                                <div class="col-5">
                                <input
                                    type="date"
                                    class="form-control form-control-sm datetimepicker-input"
                                    data-target="#reservationdate"
                                />
                                </div>
                            </div>
                          </div>

                          <div class="col-5">
                            <div class="input-group ">
                               <div class="col-3">
                              <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>전체</option>
                                  
                                </select>
                                </div>    
                                &ensp;      
                                <div class="col-5">
                                <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>전체</option>
                                  
                                </select>
                                </div>  &ensp;         
                                <button class="btn btn-sm btn-secondary " type="button" data-bs-toggle="" aria-expanded="false"
                                >
                                검색
                                </button>
                            </div>
                          </div>

                          <div class="col-1">
                                <div class="input-group ">
                                <button class="btn btn-sm btn-secondary " type="button" data-bs-toggle="" aria-expanded="false"
                                 >
                                    맵핑
                                </button>
                                </div>
                          </div>
                        </div>
                      </div>
                    </div>

                     <div class="row">
                        <div class="col-lg-12 mt-3">
                            <ag-grid-vue
                                :columnDefs="columnDefs"
                                :modules="modules"
                                :rowData="rowData"
                                @rowDoubleClicked="onRowDoubleClicked"
                                :groupHeaders="true"
                                :defaultColDef="defaultColDef"
                                class="ag-theme-alpine"
                                :headerHeight="20" :rowHeight="20" 
                                style="flex: 1 1 auto; height: 270px; "
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
           
                        <!--<div class="col-lg-6 mt-3 ">                            
                                <div class="but-group">
                                    <button class="btn btn-sm btn-outline-secondary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false">
                                      SNS
                                    </button>     
                                    <button class="btn btn-sm btn-primary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false">
                            
                                        내용
                                    </button>    
                                    <button class="btn btn-sm btn-outline-secondary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false">
                                        의뢰상태
                                    </button>    
                                    <button class="btn btn-sm btn-outline-secondary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false">
                                        첨부
                                    </button>    
                                </div>
                             

                                <div class="card" style="height:270px;"   >
                                    <div class="row">
                                        <div class="col-lg-12 mt-2">
                                            <span>&ensp;여야 대립 심화..."장외투쟁" vs. "정치적 노림수"</span>
                                            <ul class="">
                                                <li class="">작성:정치수  13-06-20 16:00:00</li>
                                                <li class="">작성:정치수  13-06-20 16:00:00</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="input-group     ">
                                                <input type="text" class="form-control form-control-sm " placeholder="배곱"  aria-describedby="basic-addon2"
                                                style="height:193px; width:20px;">                               
                                                <input type="text" class="form-control form-control-sm " placeholder="신지홍"  aria-describedby="basic-addon2"
                                                style="height:193px; width:20px;">                               
                                                <input type="text" class="form-control form-control-sm " placeholder="(베이징=연합뉴스) 신지홍 박성민 기자 
                                                    = 중국 국빈방문 이틀째를 맞은 박근혜 
                                                    대통령은 28일 오전 수행 경제사절단과 
                                                    조찬을 함께 하며 경제외교에 시동을 걸었다."  aria-describedby="basic-addon2"
                                                    style="height:193px; width:100px;" >                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>-->
                           
                       
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
      columnDefs: [
        { field: "division", headerName: "구분", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "date", headerName: "일시", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 250 },
        { field: "sub", headerName: "제목", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { fontWeight: 'bold' }, minWidth: 460, maxWidth: 600 },
        { field: "assign", headerName: "배정", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "dispatch", headerName: "배차", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',cellStyle: { textAlign: 'center' }, maxWidth: 150 },
  // ...
      ],
      rowData: [
          { division: "촬영", date: "24-08-02 10:00", sub: "노숙인 축구 연습", assign: "완료", dispatch: "완료" },
      ],

 }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;

    },


  }
}

  
    
</script>
<style>
  
   .scrollable-div {
  overflow-x: auto;
  white-space: nowrap; /* 줄 바꿈 방지 */
}

@media (max-width: 768px) {
 .scrollable-div {
    width: 100%; /* 중간 화면 이상에서는 100% 너비 */
  }
}

</style>