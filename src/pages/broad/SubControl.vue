<template>
<div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
  <div class="row">
    <div class="col-lg-12 " >
      
      <div class="card-header "  style="height:50px; background-color: #828282; ">
        <div class="row text-sm text-white">
          <div class="col-lg-12 scrollable-div">      
   
            <div class="form-group">                  
              <div class="row justify-content-start">                  
                <div class="col-10">                                    
                  <div class="input-group"> 
                    <div class="row">                  
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


                      <div class="col-1">
                            <button class="btn btn-info btn-sm mr-2 mb-2">
                                검색
                            </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-2">
                    <div class="button-group">
                      <button   class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                          신규
                      </button><ModalComponent/>
                      <button  class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                          수정
                      </button><ModalComponent2/>
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                          삭제</button> 
                                
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
                      <div class="row mx-1 text-sm mt-3">
                        <div class="col-lg-5" >
                          <div class="input-group ">
                            부조정실&ensp;
                            <select class="form-select form-select-sm" aria-label="Default select example"  v-model="rinfos.relief">   
                                  <option selected>1부조정실</option>
                                  <option selected>2부조정실</option>
                                  <option selected>3부조정실</option>
                                </select>                 
                            </div>
                        </div>
    
                        <div class="col-lg-12 mt-2">
                            <div class="input-group  ">
                            &ensp;&ensp;&ensp;&ensp;제목&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.sub">   
                           </div>
                           
                        </div>
    
                        <div class="col-lg-6 mt-2">
                            <div class="input-group">
                            예정시간&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.stime">   
                                                        
                            </div>
                        </div>

                        <div class="col-lg-6 mt-2">
                            <div class="input-group">
                            소요시간&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.time">   
                            &ensp;시간                          
                                                        
                            </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                          <div class="input-group">
                          방송요일&ensp;
                            <div class="form-check form-check-inline ml-2">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                <label class="form-check-label" for="inlineCheckbox1">월</label>
                              </div>
                              <div class="form-check form-check-inline ml-2">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                <label class="form-check-label" for="inlineCheckbox2">화</label>
                              </div>
                              <div class="form-check form-check-inline ml-2">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                                <label class="form-check-label" for="inlineCheckbox3">수</label>
                              </div>
                              <div class="form-check form-check-inline ml-2">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                <label class="form-check-label" for="inlineCheckbox1">목</label>
                              </div>
                              <div class="form-check form-check-inline ml-2">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                <label class="form-check-label" for="inlineCheckbox2">금</label>
                              </div>
                              <div class="form-check form-check-inline ml-2">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                                <label class="form-check-label" for="inlineCheckbox3">토</label>
                              </div>   
                              <div class="form-check form-check-inline ml-2">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                                <label class="form-check-label text-red" for="inlineCheckbox3">일</label>
                              </div>   
                            </div>                  
                        </div>                 


                        <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                            방송내용&ensp;
                                <textarea id="compose-textarea" class="form-control" rows="3">
                            
                                
                                </textarea>
                            </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                                &ensp;&ensp;&ensp;&ensp;비고&ensp;
                                <textarea id="compose-textarea" class="form-control" rows="3">
                            
                                
                                </textarea>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-2">
                            <div class="input-group ">
                            시작일자&ensp;
                            <input type="date" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                            style="">
                            </div>
                        </div>

                        <div class="col-lg-6 mt-2">
                            <div class="input-group ">
                            종료일자&ensp;
                            <input type="date" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                            style="">
                          
                             </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                            <div class="input-group">
                            부조감독&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.adirector">                          adirector
                           </div>
                           
                        </div>
                    </div>
                    <!-- /.card-body -->   
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

import ModalComponent from "./SubControlAdd.vue";
import ModalComponent2 from "./SubControlCorrect.vue";



export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent2,
 

  },
  data() {
    return {
      rinfos: '',
       
      columnDefs: [
      {field: "no", headerName: "번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
      { field: "sub", headerName: "제목", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', minWidth: 600, maxWidth: 700, cellStyle: { fontWeight: 'bold' }, },    
      {field: "stime", headerName: "예정시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150},   
      {field: "relief",  headerName: "부조", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },   
      {field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "bday", headerName: "방송요일", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      { field: "adirector", headerName: "부조감독", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
     
        // ...
      ],
      rowData: [
        { no: "1", sub: "아침날씨 중계", stime: "07:30:00", relief: "1부조정실", time: "1", bday: "월,수,금", adirector: "김감독" },
        { no: "2", sub: "아침날씨 중계", stime: "07:20:00", relief: "2부조정실", time: "2", bday: "화,목", adirector: "조감독" },
        { no: "3", sub: "아침날씨 중계", stime: "08:00:00", relief: "3부조정실", time: "1", bday: "월,수,금", adirector: "정감독" },
        { no: "4", sub: "아침날씨 중계", stime: "08:10:00", relief: "1부조정실", time: "2", bday: "화,목", adirector: "박감독" },
        {no: "5", sub: "아침날씨 중계", stime: "07:30:00", relief: "2부조정실", time: "1", bday: "월,수,금", adirector: "이감독"},
      ]
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
  
    