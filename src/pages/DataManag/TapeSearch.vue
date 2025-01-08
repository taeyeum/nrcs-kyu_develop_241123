<template>

  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 " >        
        
        <div class="card-header" style="height:50px; background-color: #828282; ">
            <div class="row text-sm text-white" >
                <div class="col-lg-12 scrollable-div">

                    <div class="form-group">                  
                        <div class="row justify-content-start">                  
                    

                            <div class="col-1">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width:20px; height:20px;">
                                &ensp;
                                <label class="form-check-label align-items-center" for="flexCheckDefault" style="color:white; margin-top: 3px;">
                                    조회기간
                                </label>
                                </div>             
                            </div>

                            <div class="col-5 ml-4" >
                                <div class="input-group">
                                    <div class="row">                            
                                        <div class="col-5">
                                            <input
                                                type="date"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" 
                                            />
                                        </div>~
                                        <div class="col-5">
                                            <input
                                                type="date"
                                                class="form-control form-control-sm datetimepicker-input"
                                                data-target="#reservationdate" 
                                            />&ensp;  
                                        </div>
                                      

                                        <div class="col-1">     
                                            <div class="button-group">
                                                <button class="btn btn-info btn-sm mx-1">                 
                                                연
                                                </button>
                                                <button class="btn btn-info btn-sm mx-1">                 
                                                월 
                                                </button>
                                                <button class="btn btn-info btn-sm mx-1 ">                 
                                                주
                                                </button>
                                            </div>                         
                                        </div>
                                    </div>
                                </div>
                            </div> &ensp;&ensp;&ensp;&ensp;&ensp;

                            <div class="col-2 ml-5">
                                <div class="input-group">                       
                                
                                    <div class="row">
                                        <div class="col-10">
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
              
                  
                  
                            <div class="col-2">                           
                                <div class="button-group">
                                        <button class="btn btn-info btn-sm mr-2 mb-2">
                                        영상편집 의뢰
                                        </button>
                                        <button class="btn btn-info btn-sm mr-2 mb-2">
                                        인제스트 의뢰
                                        </button>
                            
                                        
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>     
        </div>
         
        <div class="row" style="height:35px; background-color: #cccccc;">     
            <div class="col-lg-12 mt-1 ml-2">             
                                      
                <div class="button-group">
                    <router-link to="/VideoSearch"><button class="btn btn-light btn-sm mr-1 mb-2">
                    영상
                    </button></router-link>
                    <router-link to="/TapeSearch"><button class="btn btn-secondary btn-sm mr-1 mb-2">
                    테이프
                    </button></router-link>                    
                    
                </div>
            </div>
        </div>



        <div class="card-body p-0 m-0 " >
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
  
              <div class="col-lg-4  ml-n2 mt-2">
                <div class="card " style="height:690px;">
                    <div class="row gx-1 mx-1">             
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
                                        data-target="#reservationdate" v-model="rinfos.sub">
                                    
                            </div>
                        </div>

                        <div class="col-lg-6 mt-2">
                            <div class="input-group ">
                                &ensp;&ensp;&ensp;촬영일&ensp; 
                                    <input
                                        type="date"
                                        class="form-control form-control-sm  datetimepicker-input "
                                        data-target="#reservationdate" v-model="rinfos.date">
                                  
                            </div>
                        </div>

                         <div class="col-lg-6 mt-2">
                            <div class="input-group ">
                                &ensp;&ensp;촬영자&ensp; 
                                    <select class="form-select form-select-sm" aria-label="Default select example" >         
                                        <option selected>정안나</option>
                                       

                                      </select> 
                                 
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
          rinfos: '',

      columnDefs: [
        {field: "select", headerName: "선택",     editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60, cellRenderer: params => {
      const eInput = document.createElement('input');
      eInput.type = 'checkbox';
      eInput.checked = params.data.isChecked;
      eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
      return eInput;      
     
  }
  },
        { field: "no", headerName: "순번",     editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
        { field: "sub", headerName: "제목",      editable: true, cellEditor: 'CellComponentEditor', minWidth: 700 , maxWidth: 800, cellStyle: {  fontWeight: 'bold'  }, },   
        { field: "tcord", headerName: "테이프코드",     editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },    
        { field: "date", headerName: "촬영일",     editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "locat", headerName: "위치",     editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100  },       
        { field: "digital", headerName: "디지털화",     editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
       
        // ...
      ],
      rowData: [
          { select: "", no: "1", sub: "테스트 테이프1", tcord: "C001", date: "2024-06-20", locat: "Disk", digital: "예" },
          { select: "", no: "2", sub: "테스트 테이프2", tcord: "C002", date: "2024-06-26", locat: "Disk", digital: "예" },
          { select: "", no: "3", sub: "테스트 테이프3", tcord: "C003", date: "2024-07-02", locat: "Disk", digital: "예" },
          { select: "", no: "4", sub: "테스트 테이프4", tcord: "C004", date: "2024-07-12", locat: "Disk", digital: "예" },
          { select: "", no: "5", sub: "테스트 테이프5", tcord: "C005", date: "2024-08-05", locat: "Disk", digital: "예" },
              
        
         
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

  }
}




</script>



<style>


</style>