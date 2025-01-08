
<template>
 
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl text-black">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">취재/제작계획일정 등록</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div class="modal-body ">
              <div class="row ">
                <div class="col-lg-6 ">          
                         
                        <div class="row mx-1">
                            <div class="col-lg-6">
                                <div class="input-group mt-2">
                                  계획<br>
                                  일자&ensp;
                                    <input
                                                type="date"
                                                class="form-control form-control-sm datetimepicker-input mt-2"
                                                data-target="#reservationdate" style=" height:30px; font-size:14px;"
                                            />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="btn-group mt-2">
                                    취재<br>
                                    기자&ensp;     
                                    <select class="form-select fomt-select-sm mt-2" aria-label="Default select example" style="width:100px; height:30px; font-size:13px;">
                                  <option selected>취재기자</option>
                                  
                                </select>  
                                    &ensp;      
                                
                                    <select class="form-select fomt-select-sm mt-2" aria-label="Default select example" style="width:100px; height:30px; font-size:13px;" >
                                  <option selected>정치부</option>
                                  
                                </select>     
                                </div>
                            </div>
                        
                     
                            <div class="col-lg-6 mt-3 ">
                                <div class="input-group ">
                                    계획<br>
                                    구분&ensp;     
                                    <select class="form-select fomt-select-sm mt-2 text-sm" aria-label="Default select example" >
                                  <option selected>출연</option>
                                  
                                </select>     
                              
                                </div>
                            </div>

                            <div class="col-lg-6 ">
                                <div class="input-group mt-3 ">
                                    예정<br>
                                    시간&ensp;
                                    <input
                                                    type="time"
                                                    class="form-control form-control-sm datetimepicker-input mt-2"
                                                    data-target="#reservationdate"  v-model="currentTime"
                                                />  
                                </div>
                            </div>
                       
                            <div class="col-lg-12 mt-3">
                                <div class="input-group">                   
                                    제목&ensp;
                                    <input class="form-control form-control-sm btn-outline-secondary textreas-toggle" type="text" data-bs-toggle="textreas" aria-expanded="false"
                                    style="height:30px; font-size: 12px;">
                                
                                </div>       
                            </div>
                       
                             <div class="col-lg-12">
                                  <div class="input-group mt-2">
                                      상세설명
                                      <textarea class="form-control form-control-sm" placeholder="Leave a comment here" id="floatingTextarea"  rows="10">

                                      </textarea>
                                
                                  </div>
                             </div>
                             <slot />
                        
                           <div class="col-lg-12 mt-3">
                              <div class="modal-footer justify-content-between">
                                <button type="button" class="btn btn-sm btn-primary">저장</button>
                               <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                                style="background-color: gray;">취소</button>
                              </div>
                           </div>
                        </div>
                    </div>
                
                   <div class="vertical-line"></div>
   

     

                    <div class="col-lg-6 ">                        
                            <div class="modal-body">   
                                <div class="row mx-1">
                                    <div class="col-lg-12 mt-n2">
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
                               
                                    <div class="col-lg-5 mt-2">
                                      <div class="input-group">
                                        취재예정&ensp;     
                                        <select class="form-select form-control-sm " aria-label="Default select example" style=" height:25px; font-size:13px;" >
                                            <option selected>촬영</option>
                                            
                                          </select>                         
                                      </div>
                                    </div>

                                    <div class="col-lg-4 mt-2">
                                      <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" >
                                        <label class="form-check-label" for="flexCheckDefault">
                                          배차필요
                                        </label>
                                      </div>
                                    </div>

                                      <div class="col-lg-3 mt-2">
                                        <div class="input-group">
                                          <select class="form-select" aria-label="Default select example" style="width:50px; height:25px;">
                                                <option selected>1</option>
                                                
                                              </select>     
                                              &ensp;대
                                        </div>
                                      </div>
                               
                                    <div class="col-lg-12 mt-1">
                                        <div class="input-group ">                                    
                                            &ensp;&ensp;&ensp;&ensp;제목&ensp;  
                                            <input class="form-control form-control-sm btn-outline-secondary textreas-toggle" type="text" data-bs-toggle="textreas" aria-expanded="false"
                                            >                              
                                        </div>
                                    </div>
                               
                                    <div class="col-lg-6 mt-1">

                                      <div class="input-group">
                                        취재예정&ensp;     
                                          <input class="form-control form-control-sm btn-outline-secondary textreas-toggle" type="time" data-bs-toggle="textreas" aria-expanded="false"
                                         >                                                    
                                      </div>
                                    </div>

                                    <div class="col-lg-6 mt-1 ">

                                      <div class="input-group">                                    
                                              소요시간&ensp;     
                                          <input class="form-control form-control-sm btn-outline-secondary textreas-toggle" type="text" data-bs-toggle="textreas" aria-expanded="false"
                                        > &ensp;   시간                                                 
                                      </div>
                                    </div>
                                
                                    <div class="col-lg-6 mt-1">

                                        <div class="input-group ">                                    
                                                귀사예정&ensp;     
                                            <input class="form-control form-control-sm btn-outline-secondary textreas-toggle" type="time" data-bs-toggle="textreas" aria-expanded="false"
                                            >
                                          
                                          
                                        </div>
                                    </div>
                               
                                    <div class="col-lg-6 mt-1">

                                      <div class="input-group ">  
                                        취재형식&ensp;   
                                        <select class="form-select form-select-sm" aria-label="Default select example" >
                                              <option selected>녹취</option>
                                              
                                            </select>    
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-1">
                                            <div class="input-group ">
                                              &ensp;&ensp;신청자&ensp;  
                                              <select class="form-select form-select-sm" aria-label="Default select example " style="width: 85px;height:30px; font-size: 13px;">
                                              <option selected>아무개</option>
                                              
                                            </select>&ensp;  
                                            
                                            <select class="form-select form-select-sm" aria-label="Default select example" style="width: 85px;height:30px; font-size: 13px;">
                                              <option selected>정치부</option>
                                              
                                            </select>    
                                            </div>
                                    </div>
                                
                                    <div class="col-lg-12 mt-1">

                                        <div class="input-group ">                                    
                                                취재장소&ensp;     
                                            <input class="form-control form-control-sm btn-outline-secondary textreas-toggle" type="text" data-bs-toggle="textreas" aria-expanded="false"
                                            >
                                          
                                          
                                        </div>
                                    </div>
                              
                                    <div class="col-lg-12 mt-1">

                                      <div class="input-group ">                                    
                                              취재내용&ensp;     
                                          <input class="form-control form-control-sm btn-outline-secondary textreas-toggle" type="textreas" data-bs-toggle="textreas" aria-expanded="false"
                                         >
                                        
                                        
                                      </div>
                                    </div>
                                
                                    <div class="col-lg-12 mt-1">

                                      <div class="input-group ">
                                        &ensp;&ensp;&ensp;비 고&ensp;
                                          <input class="form-control form-control-sm btn-outline-secondary textreas-toggle " type="text" data-bs-toggle="textreas" aria-expanded="false"
                                          >
                                        
                                        
                                      </div>
                                  </div>
                              
                                  <div class="col-lg-12 mt-1">

                                      <div class="input-group ">                                    
                                              배정내용&ensp;     
                                          <input class="form-control form-control-sm btn-outline-secondary textreas-toggle" type="text" data-bs-toggle="textreas" aria-expanded="false"
                                         >
                                        
                                        
                                      </div>
                                  </div>
                              
                                  <div class="col-lg-12">
                                      배차내용&ensp;
                                      <ag-grid-vue
                                          :columnDefs="columnDefs01"
                                          :modules="modules"
                                          :rowData="rowData01"
                                          :groupHeaders="true"
                                          :defaultColDef="defaultColDef"
                                          class="ag-theme-alpine"
                                            :headerHeight="25" :rowHeight="20" 
                                          style="flex: 1 1 auto; height: 80px; "
                                      >
                                      </ag-grid-vue>
                                  </div>
                             
                                </div>
                              </div>

                              <div class="modal-footer  justify-content-right">
                                  
                                  
                                      <div class="form-check ">
                                          <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"
                                          style="width:20px;height:20px; "> &ensp;   
                                          <label class="form-check-label mt-1" for="flexCheckDefault">
                                              배정/배차시SMS수신 &ensp;                                   
                                          </label>
                                    

                          
                                      <div class="btn-group ">                            
                                            <button class="btn btn-sm btn-primary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false"
                                            style="font-size:10px;">
                                            요청  
                                            </button>  &ensp;      
                                    
                                    
                                      <div class="btn-group">    
                                        <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                                          style="font-size:10px;">취소</button>
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


import { ModalsContainer, useModal } from 'vue-final-modal'

export default {
  components: {
    AgGridVue
  },
  data() {
    return {
      currentTime: '',
       
      columnDefs: [
        { field: "division", headerName: "구분", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 70 },
        { field: "date", headerName: "일시", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "sub", headerName: "제목", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { fontWeight: 'bold' }, minwidth: 300, maxWidth: 400 },
        { field: "assign", headerName: "배정", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 70 },
        { field: "dispatch", headerName: "배차", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth: 70 },
  // ...
      ],
      rowData: [
          { division: "촬영", date: "24-08-02 10:00", sub: "노숙인 축구 연습", assign: "완료", dispatch: "완료" },
      ],

       columnDefs01: [
          
       {field: "no",  headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 70},
      { field: "vehicleno", headerName: "차량번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' },  maxWidth: 120},
      { field: "cartype", headerName: "차종", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: {fontWeight: 'bold' },  maxWidth: 120 },
      { field: "rsdate", headerName: "출발예정일시", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150},
      { field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth: 100 },
      { field: "article", headerName: "기사", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  maxWidth: 100},
      { field: "phoneno", headerName: "전화번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  maxWidth: 150 },
    
      ],
      rowData01: [
     { no: "촬영", vehicleno:"31러2133", cartype:"아반떼XD", rsdate:"24-06-20 20:00:00",  time:"1시간", article:"홍길동", phoneno:"010-0000-0000" },
   ]
 }
  },

  computed: {
    formattedTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  },

   watch: {
    formattedTime(newValue) {
      this.currentTime = newValue;
    }
  },
  mounted() {
    this.currentTime = this.formattedTime;
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
.vertical-line {
  position: absolute;
  top: 0;
  bottom: 50px;
  left: 50%;
  width: 1px;
  background-color: #ccc;
 
}

@media (max-width: 768px) {

  .vertical-line{
    display:none;
  }
}

</style>