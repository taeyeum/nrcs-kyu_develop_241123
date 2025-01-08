

<template>
   
    <!-- Modal -->
<div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
            
          <div class="modal-header">
                  <h6 class="modal-title" id="exampleModalLabel">기사이력</h6>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>


            <div class="modal-body">   
                <div class="row mx-1">
                    <div class="col-lg-3">                           
                        <div class="form-group">
                                <button  class="btn btn-info btn-sm mr-2 mb-2">
                                새로고침
                                </button>
                        </div>
                    </div>
                </div>

                <div class="row mx-1">
                    <div class="col-lg-6">                           
                        <div class="form-group">
                                <router-link to="/Article_management"><button type="submit" class="btn btn-sm btn-primary ">대체기사</button></router-link>
                                <router-link to="/Article_management"><button type="submit" class="btn btn-sm btn-outline-secondary">관련기사</button></router-link>
                                
                        </div>
                    </div>
                </div>
             
                
                <div class="row mt-n3">
                    <div class="col-lg-7">
                            <ag-grid-vue
                                :columnDefs="columnDefs"
                                :modules="modules"
                                :rowData="rowData"
                                :groupHeaders="true"
                                :defaultColDef="defaultColDef"
                                  :headerHeight="28" :rowHeight="35"
                                class="ag-theme-alpine"
                                style="flex: 1 1 auto; height: 450px; "
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

                      
              
                      <div class="col-lg-5">
                          <div class="card " style="height:496px;">   
                              <div class="row mx-1 text-sm">
                                  <div class="col-lg-12">
                                      <div class="button-group mt-2 ">
                                          <div class="col-lg-12 mb-2 mt-3">      

         
                                              <router-link to="/Article_ManagementModal4_02"><button type="submit" class="btn btn-sm btn-primary"><i class="fa-solid fa-clipboard-question"></i>&ensp;의뢰상태</button></router-link>
                                           
                                      
                                          </div>

                                         <div class="card mt-n1" style="height:270px;"   >
                                    <div class="row">
                                        <div class="col-lg-12 mt-2">
                                            <span>&ensp;여야 대립 심화..."장외투쟁" vs. "정치적 노림수"</span>
                                            <ul class="float-right">
                                                <li class="">작성:정치수  13-06-20 16:00:00</li>
                                                <li class="">작성:정치수  13-06-20 16:00:00</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="input-group     ">
                                                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" >배곱</textarea>                           
                                                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" >신지홍..</textarea>                             
                                                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" style="width:200px;">(베이징=연합뉴스) 신지홍 박성민 기자 
                                                    = 중국 국빈방문 이틀째를 맞은 박근혜 
                                                    대통령은 28일 오전 수행 경제사절단과 
                                                    조찬을 함께 하며 경제외교에 시동을 걸었다.
                                                </textarea>
                                                                            
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6">
                                            
                                             <div class="ratio ratio-16x9">
                                                <video controls>
                                                    <source src="" type="video/mp4">                                   
                                                </video>
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
  
      
      { field: "no", headerName: "순번",   editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
      { field: "sub", headerName: "제목", headerClass: 'my-custom-class',   editable: true, cellEditor: 'CellComponentEditor', minWidth: 400 , maxWidth: 450, cellStyle: {  fontWeight: 'bold'  }, },          
      {field: "menu", headerName: "메뉴",    editable: true, cellEditor: 'CellComponentEditor', maxWidth: 30 },
      {field: "division",  headerName: "구분",   editable: true, cellEditor: 'CellComponentEditor', maxWidth: 30 },     
      {field: "issue", headerName: "이슈",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "depart", headerName: "부서",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "form", headerName: "형식",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "reporter", headerName: "기자",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "video", headerName: "영상",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 80},
      {field: "graphics", headerName: "그래픽",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 80},
      {field: "sdate", headerName: "작성일시",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, minWidth: 150 , maxWidth: 200},
      {field: "Author", headerName: "작성자",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, minWidth: 100 },
    ],
      rowData: [
    {
        no: "2", menu: "", division: "", sub: "여야 대립 심화…”장외투", issue: "여야대립", depart: "정치부", form: "자료", reporter: "정치수", video: "", graphics: "1/1",
        sdate: "24-06-19 12:00:00",  Author: "홍길동",  },
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