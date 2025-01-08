<template>
   
    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
      <div class="row">
        <div class="col-lg-12 " >
          
          <div class="card-header "  style="height:50px; background-color: #828282; ">
              <div class="row text-sm text-white ">
                <div class="col-lg-12 scrollable-div">

                  <div class="form-group">                  
                    <div class="row justify-content-start">                 
                   
                     <div class="col-9 ">
                        <div class="input-group ">
                           <div class="row">         
                            <div class="col-1">
                                  
                          <button class="btn btn-info btn-sm ">
                            <i class="fa-solid fa-chevron-left"></i>
                            </button>
                           </div>
                          </div>&ensp;     
                             <label style=" margin-top: 3px; ">방송일</label>&ensp;                      
                          <div class="row">         
                            <div class="col-8">
                                  
                                    <input
                                      type="date"
                                        class="form-control form-control-sm datetimepicker-input"
                                        data-target="#reservationdate"
                                    />
                            </div>
                            <div class="col-2 ml-n2">
                                <button class="btn btn-info btn-sm ">
                                    <i class="fa-solid fa-greater-than"></i> 
                                </button>
                            </div>
                          </div>

                        </div>
                      </div>
             
         
            
          
                      <div class="col-3">
                        <div class="form-group just">
                          <button class="btn btn-info btn-sm mr-2 mb-2">
                            불러오기
                          </button>
                          <button  class="btn btn-info btn-sm mr-2 mb-2">
                            신규
                          </button>
                          <button  class="btn btn-info btn-sm mr-2 mb-2">
                            저장
                          </button>
                                      
                          <button class="btn btn-info btn-sm mr-2 mb-2">
                            삭제</button>      
                          <button class="btn btn-info btn-sm mr-2 mb-2">
                            전체삭제</button>                
                          <button class="btn btn-info btn-sm mr-2 mb-2">                
                            인쇄
                          </button>
                          <router-link to="/Advertisement"><button  class="btn btn-info btn-sm mr-2 mb-2 " style="height:30px; padding:0; padding-top: 1px;">
                                                <img src="../../components/image/screen.png" >
                                            </button></router-link>
                          <router-link to="/Advertisement2"><button class="btn btn-info btn-sm mr-4 mb-2" style="height:30px; padding:0; padding-top: 1px;">
                                                <img src="../../components/image/screen2.png">
                                            </button></router-link>
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
                               :headerHeight="28" :rowHeight="35"
                                @cellDoubleClicked="onCellDoubleClicked"
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
                          <div class="card " style="height:280px;">
                             <div class="row">
                                  <div class="col-lg-12 mt-2">
                                      <span>&ensp;0000 스포츠뉴스(2)</span>
                                        <span style="float:right;">&ensp;일자 : 13-06-19 시간 : 05:30</span>
                                  </div>
                              </div>
                               <div class="row">
                                  <div class="col-lg-12 mt-5">
                                      <span>&ensp;분야: 광고 > 광고1</span>                                        
                                      <ul class="float-right ">
                                          <li class="">작성:정치수  13-06-20 16:00:00</li>
                                          <li class="">작성:정치수  13-06-20 16:00:00</li>
                                      </ul>                                     
                                  </div>
                              </div>

                               <div class="row">
                                  <div class="col-lg-12">
                                      <div class="input-group     ">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="24" style="width:5px;" >광고5









                                              

                                                                                                                      광고4</textarea>  

                                            <textarea class="form-control" id="exampleFormControlTextarea1" style="width:100px;">청호나이스
                                                                                                                      에르고다음다이렉트
                                                                                                                      GS칼텍스
                                                                                                                      아우디
                                                                                                                    
                                                                                                                    
                                                                                                                    
                                                                                                                    
                                                                                                                    현대자동차그룹
                                                                                                                    일동제약</textarea>                             
                                            <textarea class="form-control" id="exampleFormControlTextarea1"  style="width:200px;">(베이징=연합뉴스) 신지홍 박성민 기자 
                                              = 중국 국빈방문 이틀째를 맞은 박근혜 
                                              대통령은 28일 오전 수행 경제사절단과 
                                              조찬을 함께 하며 경제외교에 시동을 걸었다.
                                          </textarea>
                                                                      
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
        { field: "no", headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "ptime", headerName: "편성시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth:200 },
        { field: "program", headerName: "프로그램", hide: false, cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', minWidth: 850, maxWidth: 900, cellStyle: { fontWeight: 'bold' }, },
        { field: "cdate", headerName: "작성일시", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 300, maxWidth: 400,  },
        { field: "lmodified", headerName: "최종수정", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 300, maxWidth: 400, },
        { field: "Author", headerName: "작성자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
        
        // ...
      ],
      rowData: [
         { no: "1", ptime: "00:00", program: "0000 스포츠뉴스(2)", cdate: "13-06-19 18:00:00", lmodified: "24-06-19 18:00:00", Author: "홍길동"}
        ]
    }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
     
    },
    onCellDoubleClicked(params) {
          // 클릭된 셀의 데이터를 이용하여 이동할 페이지나 컴포넌트의 경로를 결정
          const selectedRowData = this.rowData[params.rowIndex];
          const detailPageUrl = `/Advertisement3/`; // 예시: 상세 페이지 URL 생성

          // 이동하는 방법 (예: router-link, window.location.href 등)
          this.$router.push(detailPageUrl); // Vue Router 사용 시
          // window.location.href = detailPageUrl; // 일반적인 페이지 이동
        }

  },


}




</script>



<style>

</style>


