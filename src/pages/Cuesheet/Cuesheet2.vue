

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
                        <div class="input-group ">                   
                             <label >기간</label>&ensp;                      
                              <div class="row">         
                                <div class="col-3">                                      
                                        <input
                                          type="date"
                                            class="form-control form-control-sm datetimepicker-input"
                                            data-target="#reservationdate"
                                        />
                                </div>~
                                <div class="col-3">                                      
                                        <input
                                          type="date"
                                            class="form-control form-control-sm datetimepicker-input"
                                            data-target="#reservationdate"
                                        />
                                </div>                              
                           
                        
                                <div class="col-4">
                                  <div class="input-group">  
                                    <div class="row">
                                      <div class="col-6">
                                      <input
                                              type="text"
                                                class="form-control form-control-sm datetimepicker-input"
                                                data-target="#reservationdate"
                                            />
                                        </div>
                                        <div class="col-2">
                                                    <button class="btn btn-info btn-sm mr-2 mb-2">
                                                        검색
                                                    </button>
                                        </div>
                                      </div>
                                  </div>
                                </div>

                          </div>
                        </div>
                      </div>

                      <div class="col-3">
                        <div class="form-group">
                          <button type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              자막템플릿변환
                            </button><ModalComponent/>
                          
                          <button type="button" class="btn btn-info btn-sm mr-2 mb-2" >
                            운영참조등록
                          </button>
                          <button type="button" class="btn btn-info btn-sm mr-2 mb-2"  data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            락해제
                          </button><ModalComponent1/>
                          <button class="btn btn-info btn-sm mr-2 mb-2">
                            <i class="fas fa-copy"></i>
                            복사
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
              
          <div class="card-body p-0">
            <div class="row text-sm" style="height:48px; background-color: #cccccc;">     
               <div class="col-lg-12 scrollable-div">
                <div class="form-group"> 
                    <div class="row mx-4 mt-2 justify-content-start"> 

                          <div class="col-4">
                            <div class="input-group align-items-center">                        
                                  프로그램&ensp;
                                  <div class="col-8"> 
                                    <select class="form-select form-select-sm" aria-label="Default select example" >
                                        <option selected>MS24(경기, 인천, 주요, 기상)</option>
                                        
                                      </select>
                                  </div>
                              </div>                                  
                          </div>   
                        
                     
                          <div class="col-5 ">
                            <div class="input-group align-items-center">                                
                                방송시간&ensp;
                                <div class="col-3">                            
                                  <input
                                              type="time"
                                                class="form-control form-control-sm datetimepicker-input"
                                                data-target="#reservationdate"
                                              />        
                                </div>~
                                  <div class="col-3">
                                      <input
                                              type="time"
                                                class="form-control form-control-sm datetimepicker-input"
                                                data-target="#reservationdate"
                                            />  
                                  </div>
                              </div>                               
                          </div>
                     

                            
                          <div class="col-3">
                              <div class="button-group">
                                <button class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                    신규
                                  </button><ModalComponent2/>
                                <button class="btn btn-info btn-sm mr-2 mb-2"  data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                  불러오기
                                </button><ModalComponent3/>
                                <button class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                  맵핑
                                </button><ModalComponent4/>
                                <button class="btn btn-info btn-sm mr-2 mb-2">                          
                                  저장
                                </button>
                                <button class="btn btn-info btn-sm mr-2 mb-2">                         
                                  삭제
                                </button>
                                <button class="btn btn-info btn-sm mr-2 mb-2">                          
                                  조회
                                </button>
                              </div>
                          </div>

                    </div>
                  </div>
                </div>
              </div>
           
           
              <div class="row  gx-1">

                   <div class="col-lg-12 ">
                    <ag-grid-vue
                      :columnDefs="columnDefs"
                      :modules="modules"
                      :rowData="rowData"
                      :groupHeaders="true"
                      :defaultColDef="defaultColDef"
                       
                        :headerHeight="28" :rowHeight="35"
                      class="ag-theme-alpine"
                      style="flex: 1 1 auto; height: 400px"
                    >
                    </ag-grid-vue>

                    
                    
            
                  </div>
              </div>
            </div>
        
            <div class="card-body2" >
              <div class="row text-sm mt-1" style="height:65px; background-color: #cccccc;">   
                  <div class="col-lg-12 scrollable-div ">
                    <div class="form-group mt-1">
                        <div class="row justify-content-start mx-1">  

                            <div class="col-1">
                              <div class="input-group ">                        
                                  순번&ensp; 
                                <div class="row" >                                
                                  <div class="col-12">                            
                                    <input
                                                type="text"
                                                  class="form-control form-control-sm datetimepicker-input"
                                                  data-target="#reservationdate"
                                                />        
                                  </div>
                                </div>                                  
                              </div>
                            </div>

                            <div class="col-2">
                              <div class="select-group ">                        
                                  제목&ensp;
                                <div class="row" >                                        
                                  <div class="col-12">                                                               
                                    <select class="form-select form-select-sm" aria-label="Default select example" >
                                        <option selected>MS24(경기, 인천, 주요, 기상)</option>
                                        
                                      </select>
                                  </div>
                                </div>
                              </div>
                            </div>


                            <div class="col-1 mt-4 ml-n2">
                              <div class="button-group">
                                <button class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                                    글꼴설정
                                  </button><ModalComponent5/>
                              </div>                                  
                            </div>

                            <div class="col-2 ml-2">                                      
                              <div class="select-group">
                                소요시간&ensp;
                                <div class="row" >     
                                  <div class="col-12">    
                                    <input
                                            type="time"
                                              class="form-control form-control-sm datetimepicker-input"
                                              data-target="#reservationdate"
                                            />   
                                  </div>
                                </div>     
                              </div>                                  
                            </div>

                            <div class="col-1">                                      
                              <div class="select-group">
                                MC&ensp;
                                <div class="row" >     
                                  <div class="col-12">     
                                    <select class="form-select form-select-sm" aria-label="Default select example" >
                                    <option selected>여자</option>
                                    
                                  </select> 
                                  </div>
                                </div>
                              </div>                                  
                            </div>

                            <div class="col-3">                                      
                              <div class="select-group ">
                                그래픽&ensp;  
                                <div class="row" >
                                  <div class="col-6">  
                                    <select class="form-select form-select-sm" aria-label="Default select example" >
                                    <option selected>V/W</option>
                                    
                                  </select> 
                                  </div>

                                  <div class="col-6">  
                                  <select class="form-select form-select-sm" aria-label="Default select example" >
                                    <option selected>PDP</option>
                                    
                                  </select> 
                                  </div>
                                </div>
                              </div>                                  
                            </div>

                            <div class="col-2">                                      
                              <div class="select-group">
                                 광고&ensp;   
                                <div class="row" >
                                  <div class="col-12">  
                                  <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>CM10</option>
                                  
                                  </select> 
                                  </div>
                                </div>
                              </div>
                            </div>

                        </div>
                      </div>
                    </div>
                  </div>
                 
                  
                  <div class="row " >

                   <div class="col-lg-12 ">
                        <div class="input-group " >
                          <div class="col-lg-2">
                            <div class="card p-0" style="height:280px;  "></div>
                          </div>
                          <div class="col-lg-3">
                            <div class="card p-0" style="height:280px;  "></div>
                          </div>
                          <div class="col-lg-3">
                            <div class="card p-0" style="height:280px; "></div>
                          </div>
                       

                          <div class="col-lg-4">
                            <div class="card p-0" style="height:100%; ">
                              <div class="row">
                                <div class="col-lg-4">
                                  <button class="btn btn-info btn-sm ">                          
                                    영상/그래픽
                                  </button>
                                </div>
                              </div>  

                              <div class="row mx-1 d-flex  justify-content-center"  >           
                                <div class="col-lg-6 ">
                                  <div class="embed-responsive embed-responsive-16by9" style="height:155px;" >
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>

                                  
                                <div class="col-lg-6 ">                                    
                                    <table class="table  table-bordered text-center ">
                                      <thead>
                                        <tr>
                                            <th colspan="2">송출영상</th>
                                          </tr>
                                            
                                          <tr>
                                            <th scope="col-lg-4">1</th>
                                            <td class="col-lg-8">송출영상1 | 80%</td>
                                          </tr>
                                        </thead>  
                                                                

                                    
                                          <thead>
                                            <tr>
                                                <th colspan="2">보도자료</th>
                                              </tr>
                                                
                                              <tr>
                                                <th scope="col-lg-4">1</th>
                                                <td class="col-lg-8">보도자료1</td>
                                              </tr>
                                            </thead>
                                    
                                          <thead>
                                            <tr>
                                                <th colspan="2">송출그래픽</th>
                                              </tr>
                                                
                                                <tr>
                                                  <th scope="col-lg-4">1</th>
                                                  <td class="col-lg-8">그래픽1 | 완료</td>
                                                </tr>
                                          </thead>
                                      </table>
                                    
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
  </div>
      
  </template>
  

<script >

import {ref} from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';

import ModalComponent from "./CuesheetConversionsub.vue";
import ModalComponent1 from "./CuesheetUnlock.vue";
import ModalComponent2 from "./CuesheetAdd.vue";
import ModalComponent3 from "./CuesheetLoad.vue";
import ModalComponent4 from "./CuesheetMapping.vue";
import ModalComponent5 from "./CuesheetSet.vue";




export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent1,
    ModalComponent2,
    ModalComponent3,
    ModalComponent4,
    ModalComponent5,
 
 
  },
  data() {
    return {
    
      columnDefs: [
      {field: "no", headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 80},      
      {field: "mc", headerName: "MC", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150},
      { field: "graphics", headerName: "그래픽", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200},
     {field: "sub", headerName: "제목", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, minWidth: 700,  maxWidth: 800},
     {field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150},
     {field: "advert", headerName: "광고", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150},
     {field: "vf", headerName: "VF", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150},
     {field: "ddr", headerName: "DDR", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150},
     {field: "video", headerName: "영상", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150},
     
        // ...
      ],
      rowData: [
        { no: "a", mc:"남자",graphics:"PDP",sub:"운영참조1", time:"00:00", advert:"CM10", vf:"", ddr:"", video:""},
      
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

