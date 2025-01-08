
<template>
   
    <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog text-black">
    <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">취재/제작계획일정 등록</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

                       
            <div class="modal-body">
                                  
                    <div class="row mx-1">
                
                    <!-- /.card-header -->   
              
                          <div class="col-lg-6">
                            <div class="input-group   mt-2">
                              &ensp;&ensp;&ensp;&ensp;요청&ensp;
                             <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected></option>
                                  
                                </select>                   
                          </div>
                             
                        </div>

                        <div class="col-lg-3">
                          <div class="form-check   mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                              배차필요
                            </label>
                          </div>
                        </div>

                        <div class="col-lg-3">
                          <div class="input-group   mt-2">
                            <select class="form-select form-select-sm" aria-label="Default select example " >
                                  <option selected></option>
                                 
                                </select>&ensp;      
                             대
                          </div>
                        </div>

                        <div class="col-lg-12 mt-1">
                          <div class="input-group  ">
                           &ensp;&ensp;&ensp;&ensp;제목&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="하늘에서 본 적조 피해"  aria-describedby="basic-addon2"
                          style="">                               
                                
                            
                          </div>
                        </div>

                        <div class="col-lg-6 mt-1">
                            <div class="input-group  ">
                              중계예정&ensp;
                              <input type="time" class="form-control form-control-sm " aria-describedby="basic-addon2" v-model="currentTime">
                           
                            </div>
                        </div>
                        <div class="col-lg-6  mt-1">
                            <div class="input-group">
                              소요시간&ensp;
                              <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                            style="">&ensp;&ensp;시간                          
                      
                         </div>
                      </div>
  
                    
                    <div class="col-lg-6 mt-1">
                            <div class="input-group  ">
                              귀사예정&ensp;
                              <input type="time" class="form-control form-control-sm "  aria-describedby="basic-addon2"
                            style="">                               
                      
                           </div>
                    </div>
                  
                        <div class="col-lg-6 mt-1">

                          <div class="btn-group ">
                            취재형식&ensp;   
                            <select class="form-select form-select-sm" aria-label="Default select example">
                                  <option selected>녹취</option>
                                 
                                </select>    
                            </div>
                        </div>

                       
                        <div class="col-lg-6 mt-1">
                            <div class="input-group ">
                            &ensp;&ensp;신청자&ensp;
                            <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>아무개</option>
                                 
                                </select>&ensp;
                            <input type="text" class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2">                        
                            </div>
                        </div>
                              
                  
                    <div class="col-lg-12 mt-1  ">
                        <div class="input-group ">
                          중계장소&ensp;
                          <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                            style="">                               
                      
                        </div>
                    </div>
  
                    <div class="col-lg-12 mt-1  ">
                        <div class="input-group ">
                          중계내용&ensp;
                            <textarea id="compose-textarea" class="form-control" >
                          
                            
                            </textarea>
                        </div>
                    </div>
              
                    <div class="col-lg-12  mt-1  ">
                        <div class="input-group">
                         &ensp;&ensp;&ensp;&ensp;비고&ensp;
                            <textarea id="compose-textarea" class="form-control">
                          
                            
                            </textarea>
                        </div>
                    </div>
                 
                    <div class="col-lg-12">
                        <div class="input-group mt-1  ">
                          배정내용&ensp;
                          <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                            style="">                               
                      
                        </div>
                    </div>
  
                    <div class="col-lg-12">
                      
                        배차내용
                        <ag-grid-vue
                            :columnDefs="columnDefs"
                            :modules="modules"
                            :rowData="rowData"
                            :headerHeight="25" :rowHeight="20"
                            :defaultColDef="defaultColDef"
                            class="ag-theme-alpine"
                            
                            style="flex: 1 1 auto; height: 120px; "
                        >
                        </ag-grid-vue>            
                      
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-12 mt-2">
                        <div class="modal-footer  justify-content-right">
                          <div class="form-check ">
                              <input class="form-check-input mt-0" type="checkbox" value="" id="flexCheckDefault"
                              style="width:20px;height:20px; "> &ensp;   
                              <label class="form-check-label" for="flexCheckDefault">
                                  배정/배차시SMS수신 &ensp;                                   
                              </label>
                          </div>

                    
                           <div class="btn-group ">                            
                             <button class="btn btn-sm btn-primary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false"
                             style="font-size:10px;">
                             요청  
                             </button>  
                          </div>
                        
                          <div class="btn-group">    
                            <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                              style="font-size:10px;">취소</button>
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
     
      currentTime: '',
       
      columnDefs: [
         
       {field: "no",  headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth:60},
      { field: "vehicleno", headerName: "차량번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth:120},
      { field: "cartype", headerName: "차종", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: {textAlign: 'center' }, maxWidth:120},
      { field: "rtrip", headerName: "왕복여부", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' },maxWidth:90},
      { field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' },maxWidth:90},
      { field: "article", headerName: "기사", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' },maxWidth:90},
      { field: "phoneno", headerName: "전화번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' },maxWidth:90},
    
        // ...
      ],
      rowData: [
        { no: "1", vehicleno: "31러2133", cartype: "아반떼XD", rtrip: "왕복", time: "1시간", article: "홍길동", phoneno: "010-0000-0000" },
        { no: "2", vehicleno:"31러2133", cartype:"아반떼XD", rtrip:"왕복",  time:"1시간", article:"홍길동", phoneno:"010-0000-0000" },
 
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


  },


}




</script>
  
   
<style>
::-webkit-scrollbar {
  width: 10px;
}
</style>