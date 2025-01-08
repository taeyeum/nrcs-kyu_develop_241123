<template>
<div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
  <div class="row">
    <div class="col-lg-12 " >
      
      <div class="card-header "  style="height:50px; background-color: #828282; ">
        <div class="row text-sm text-white">
          <div class="col-lg-12 scrollable-div">      


            <div class="form-group">                  
              <div class="row justify-content-start">                  
                <div class="col-3">                      
                  <div class="form-check-inline align-middle">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label" for="flexRadioDefault1">
                          전체
                      </label>&ensp;&ensp;
                    
                      <div class="form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                      <label class="form-check-label" for="flexRadioDefault2">
                          일반
                      </label>&ensp;&ensp;
                    
                      <div class="form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                      <label class="form-check-label" for="flexRadioDefault2">
                          이슈
                      </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-2"> 
                  <div class="input-group align-items-center">                  
                   구분&ensp;
                      <div class="col-8">
                          <select class="form-select form-select-sm" aria-label="Default select example" >
                                    <option selected>전체</option>
                                    
                          </select>  
                      </div>
                   
                  </div>                  
                </div>
  
                <div class="col-4">
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
              
  
                <div class="col-2 ml-4">
                  <div class="button-group ">
                    <button class="btn btn-info btn-sm  mb-2">
                      불러오기
                    </button>
                    <button type="button"  class="btn btn-info btn-sm ml-1 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                      신규
                    </button><ModalComponent/>
                    <button type="button"  class="btn btn-info btn-sm ml-1 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                      수정
                    </button><ModalComponent2/>
                    <button class="btn btn-info btn-sm ml-1 mb-2">
                      삭제</button>    
                    <button type="button" class="btn btn-info btn-sm ml-1 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                      배정
                    </button><ModalComponent3/>   
                    <button class="btn btn-info btn-sm ml-1 mb-2">
                      배정취소</button>                
                    <button class="btn btn-info btn-sm ml-1 mb-2">                
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
                          <div class="col-lg-4" >
                            <div class="input-group  ">
                              &ensp;&ensp;&ensp;&ensp;요청&ensp;
                              <select class="form-select form-select-sm" aria-label="Default select example" >
                                <option selected></option>
                                  
                                </select>                      
                            </div>
                          </div>&ensp;&ensp;&ensp;&ensp;
  
                          <div class="col-lg-4">
                            <div class="form-check  ">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                              <label class="form-check-label" for="flexCheckDefault">
                                배차필요
                              </label>
                            </div>
                          </div>
  
                          <div class="col-lg-3">
                            <div class="dropdown ">
                              <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>1</option>
                                  
                                </select>&ensp;대&ensp;
                                <ul class="dropdown-menu">
                                  <li><a class="dropdown-item" href="#">Action</a></li>
                                  <li><a class="dropdown-item" href="#">Another action</a></li>
                                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                          </div>
  
                          <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                             &ensp;&ensp;&ensp;&ensp;제목&ensp;
                              <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.sub">   
                          
                              
                            </div>
                          </div>
  
                          <div class="col-lg-6">
                            <div class="input-group  mt-2">
                              중계예정&ensp;
                              <input type="text" class="form-control form-control-sm " placeholder="" aria-describedby="basic-addon2" v-model="rinfos.stime">   
                                                
                      
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="input-group mt-2 ">
                              소요시간&ensp;
                              <input type="text" class="form-control form-control-sm " placeholder="1"  aria-describedby="basic-addon2"
                            style="">&ensp;시간                          
                      
                         </div>
                      </div>
  
                    
                    <div class="col-lg-6">
                            <div class="input-group  mt-2">
                              귀사예정&ensp;
                              <input type="time" class="form-control form-control-sm "  aria-describedby="basic-addon2"
                            style="">                               
                      
                           </div>
                    </div>
  
                  </div>
                  <div class="row mx-1 text-sm">
                        <div class="col-lg-6 mt-2 ">

                          <div class="input-group ">  
                            취재형식&ensp;   
                            <select class="form-select form-select-sm" aria-label="Default select example"  >
                                  <option selected></option>
                                  
                                </select>     
                            </div>
                        </div>

                       
                        <div class="col-lg-6 mt-2 ">
                            <div class="input-group ">
                            &ensp;&ensp;신청자&ensp;
                            <select class="form-select form-select-sm" aria-label="Default select example" v-model="rinfos.reporter">  
                                  <option selected>정하윤</option>
                                  <option selected>정홍기</option>
                                  <option selected>정호두</option>
                                  <option selected>정보리</option>

                                  
                                </select>&ensp;
                            <input type="text" class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2" >                       
                            </div>
                        </div>
                              
                  
                        <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                              중계장소&ensp;
                              <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.rlocat">  
                            </div>
                        </div>
  
                        <div class="col-lg-12 mt-2">
                            <div class="input-group">
                              중계내용&ensp;
                                <textarea id="compose-textarea" class="form-control" rows="2">
                              
                                
                                </textarea>
                            </div>
                        </div>
              
                        <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                              &ensp;&ensp;&ensp;&ensp;비고&ensp;
                                <textarea id="compose-textarea" class="form-control" rows="2">
                              
                                
                                </textarea>
                            </div>
                        </div>
                 
                        <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                              배정내용&ensp;
                              <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                                style="">                               
                          
                            </div>
                        </div>
      
                 
                        <div class="col-lg-12 mt-2">
                                        
                            배차내용
                        
                            <ag-grid-vue
                                :columnDefs="columnDefs01"
                                :modules="modules"
                                :rowData="rowData01"                              
                                :defaultColDef="defaultColDef"
                                :headerHeight="25" :rowHeight="20"
                                class="ag-theme-alpine"
                                style="flex: 1 1 auto; height: 100px; "
                            >
                            </ag-grid-vue>            
                          </div>
                 
                          <div class="col-lg-12 mt-3" >
                                  <div class="form-check " style="text-align: right;" >
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                      배정/배차시 SMS 수신
                                    </label>
                                  </div>
                                
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

import ModalComponent from "./BroadCastAdd.vue";
import ModalComponent2 from "./BroadCastcorrect.vue";
import ModalComponent3 from "./BroadCastassign.vue";

export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent2,
    ModalComponent3,
 

  },
  data() {
    return {
      
      rinfos: '',
        
      columnDefs: [
       {field: "no", headerName: "번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
      { field: "sub", headerName: "제목", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', minWidth:350, maxWidth: 450, cellStyle: { fontWeight: 'bold' }, },    
      {field: "stime", headerName: "중계예정시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150},   
      {field: "division",  headerName: "구분", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },   
      {field: "plane", headerName: "계획", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90},
      {field: "rgroup", headerName: "취재그룹", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90},
      { field: "reporter", headerName: "취재기자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90},
      {field: "adetails", headerName: "배정내용", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90},
      {field: "rlocat", headerName: "중계장소", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90},
      {field: "assign", headerName: "배정", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90 },     
      { field: "dispatch", headerName: "배차", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
     
        // ...
      ],
      rowData: [
        {no: "1", sub: "하늘에서 본 적조 피해", stime: "24-08-02 11:00:00", division: "중계", plane: "V", rgroup: "정치부", reporter: "정하윤", adetails: "OB VAN", rlocat: "",
          assign: "V", dispatch: "V"
        },
      {no: "1", sub: "하늘에서 본 적조 피해", stime: "24-08-02 12:00:00", division: "중계", plane: "V", rgroup: "정치부", reporter: "정홍기", adetails: "VAN", rlocat: "",
          assign: "V", dispatch: "V"
        },
      {no: "1", sub: "하늘에서 본 적조 피해", stime: "24-08-02 10:30:00", division: "중계", plane: "V", rgroup: "정치부", reporter: "정호두", adetails: "OB VAN", rlocat: "",
          assign: "V", dispatch: "V"
        },
      {no: "1", sub: "하늘에서 본 적조 피해", stime: "24-08-02 10:10:00", division: "중계", plane: "V", rgroup: "정치부", reporter: "정보리", adetails: "VAN", rlocat: "",
          assign: "V", dispatch: "V"
        },
      {no: "1", sub: "하늘에서 본 적조 피해", stime: "24-08-02 11:50:00", division: "중계", plane: "V", rgroup: "정치부", reporter: "정상호", adetails: "OB VAN", rlocat: "",
    assign: "V", dispatch:"V"},
 
      ],
        columnDefs01: [


        { field: "no", headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 80},
        { field: "vehicleno", headerName: "차량번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120},
        { field: "cartype", headerName: "차종", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: {textAlign: 'center' }, maxWidth: 100},
        { field: "rtrip", headerName: "왕복여부", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100},
        { field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth: 120},
        { field: "article", headerName: "기사", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth: 100},
        { field: "phoneno", headerName: "전화번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth: 150},

      ],

      rowData01: [
        { no: "촬영", vehicleno: "31러2133", cartype: "아반떼XD", rtrip: "왕복", time: "1시간", article: "홍길동", phoneno: "010-0000-0000" },
        { no: "촬영", vehicleno: "31러2133", cartype: "아반떼XD", rtrip: "왕복", time: "1시간", article: "홍길동", phoneno: "010-0000-0000" },
       
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
  
    


