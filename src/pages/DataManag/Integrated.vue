<template>

  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 " >        
        
          <div class="card-header" style="height:50px; background-color: #828282; ">
              <div class="row text-sm text-white" >
                <div class="col-lg-12 scrollable-div">

                 <div class="form-group">                  
                    <div class="row justify-content-start">
                      <div class="col-8">                        
                        <div class="input-group ">
                            <label class="" style="margin-top: 3px;">조회기간</label>&ensp;                                
                                <div class="row">                              
                                    <div class="col-4">    
                                            <input
                                                type="date"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" 
                                            />
                                        </div>~

                                    <div class="col-4"> 
                                        <input
                                            type="date"
                                            class="form-control form-control-sm datetimepicker-input"
                                            data-target="#reservationdate" 
                                        />&ensp;  
                                    </div>

                                     <div class="col-3">     
                                        <div class="button-group">
                                                <button class="btn btn-info btn-sm mx-1">                 
                                                월
                                                </button>
                                                <button class="btn btn-info btn-sm mx-1">                 
                                                주 
                                            </button>
                                            <button class="btn btn-info btn-sm mx-1">                 
                                                일
                                            </button>
                                        </div>                         
                                    </div>
                                    
                                        
                            </div>
                        </div>
                    </div>

                     
                 
                    <div class="col-4 ">                        
                        <div class="input-group ">
                            <label class="" style="margin-top: 3px;">검색어</label>&ensp;                                
                                
                                            <input
                                                type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" 
                                        />
                                   
                                         <button class="btn btn-info btn-sm mx-1">                 
                                            검색
                                        </button>
                                  
                        </div>
                    </div>
                  
                       
                </div>                
              </div>
            </div>
          </div>
        </div>

        <div class="card-body p-0 m-0 " >
          <div class="row" style="height:35px; background-color: #cccccc;">     
            <div class="col-lg-12 mt-1 ml-2">             
                                      
                <div class="button-group">
                    <router-link to="/Integrated"><button class="btn btn-secondary btn-sm mr-1 mb-2">
                    기사
                    </button></router-link>
                    <router-link to="/IntegratedVideo"><button class="btn btn-light btn-sm mr-1 mb-2">
                    영상
                    </button></router-link>                    
                     <router-link to="/IntegratedPerson"><button class="btn btn-light btn-sm mr-1 mb-2">               
                    인물
                    </button></router-link>
                </div>
            </div>
          </div>      

        
            <div class="row gx-1"  >
           
              <div class="col-lg-8 ">
                  <ag-grid-vue
                  
                      :columnDefs="columnDefs"
                      :modules="modules"
                      :rowData="rowData"
                      :groupHeaders="true"
                      :defaultColDef="defaultColDef"
                        @cellClicked="onCellClicked"
                      :headerHeight="28" :rowHeight="35"
                      class="ag-theme-alpine"
                      style="flex: 1 1 auto; height: 700px; "
                       @grid-ready="onGridReady" 
                      
                       
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
  
              <div class="col-lg-4  ml-n2 ">
                <div class="card " style="height:700px;">
                    <div class="row gx-1 mx-1 mt-2">             
                        <div class="col-lg-10">
                                                
                            <div class="ratio ratio-16x9">
                                <video controls>
                                    <source src="" type="video/mp4">                                   
                                </video>
                            </div>
                            
                        </div>
                        <div class="col-lg-2">
                                    
                            <button type="submit" class="btn btn-sm btn-secondary mb-2"><i class="far fa-save"></i> 편집</button>                                    
                            <button type="submit" class="btn btn-sm btn-secondary mb-2"><i class="far fa-save"></i> 저장</button>                           
                            <button type="submit" class="btn btn-sm btn-secondary mb-2"><i class="far fa-save"></i> 취소</button>
                        
                        </div>
                    </div>

                     <div class="row mt-2 text-sm">             
                        <div class="col-lg-12">
                            <div class="input-group ">
                                &ensp;&ensp;&ensp;&ensp;&ensp;제목&ensp; 
                                    <input
                                        type="text"
                                        class="form-control form-control-sm  datetimepicker-input "
                                        data-target="#reservationdate" 
                                    />
                            </div>
                        </div>

                        <div class="col-lg-6 mt-2">
                            <div class="input-group ">
                                &ensp;&ensp;&ensp;촬영일&ensp; 
                                    <input
                                        type="date"
                                        class="form-control form-control-sm  datetimepicker-input "
                                        data-target="#reservationdate" 
                                    />
                            </div>
                        </div>

                         <div class="col-lg-6 mt-2">
                            <div class="input-group ">
                                &ensp;&ensp;촬영자&ensp; 
                                    <input
                                        type="text"
                                        class="form-control form-control-sm  datetimepicker-input "
                                        data-target="#reservationdate" 
                                    />
                            </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                                &ensp;촬영장소&ensp; 
                                    <input
                                        type="text"
                                        class="form-control form-control-sm  datetimepicker-input "
                                        data-target="#reservationdate" 
                                    />
                            </div>
                        </div>

                         <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                                &ensp;&ensp;&ensp;&ensp;&ensp;내용&ensp; 
                                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                            </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                                &ensp;기사/원문/<br>
                                &ensp;해석&ensp; 
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
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




export default {
  components: {
    AgGridVue,



  },
  data() {
    return {
      columnDefs: [
       
        { field: "no", headerName: "순번",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
        { field: "sub", headerName: "제목",    editable: true, cellEditor: 'CellComponentEditor', minWidth: 520 , maxWidth: 600, cellStyle: {  fontWeight: 'bold'  }, },   
        { field: "sdate",  headerName: "촬영일",   editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxwidth:150 },    
        { field: "photo", headerName: "촬영자",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150  },
        { field: "vlocat", headerName: "영상위치",   editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "vtype", headerName: "비디오종류",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 150 },
       


        // ...
      ],
      rowData: [
        { no: "1", sub: "가는 말이 고와야", sdate: "24-06-20", photo: "정하윤", vlocat: "Disk", vtype: "편집완" },
        { no: "2", sub: "거리로 나선 이유", sdate: "24-06-23", photo: "정홍기", vlocat: "Disk", vtype: "편집완" },
        { no:"3", sub: "협조와 지도편달", sdate: "24-07-10", photo: "정호두", vlocat: "Disk", vtype:"편집완" },
        { no:"4", sub: "찜통 교실’을 찾아서", sdate: "24-07-20", photo: "정보리", vlocat: "Disk", vtype:"편집완" },
        { no:"5", sub: "가는 말이 고와야", sdate: "24-08-09", photo: "정안나", vlocat: "Disk", vtype:"편집완" },

   ]
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


</style>