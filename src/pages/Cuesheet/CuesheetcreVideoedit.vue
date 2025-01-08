
<template>
  
    <!-- Modal -->

<div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg text-black">
    <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">영상편집의뢰 등록</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>


          <div class="modal-body " style="height:100%; ">
                <div class="row ">
                  <div class="col-lg-6">          
                      <div class="input-group">
                          <div class="row ">
                            <div class="col-lg-6">                                
                                    작업부서
                                      <input
                                                  type="text"
                                                class="form-control form-control-sm datetimepicker-input "
                                                data-target="#reservationdate" placeholder="영상편집팀"
                                            />
                               
                            </div>                                                         

                            <div class="col-lg-12">
                                    작업의뢰내용
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>                                  
                            </div>                    
                            <div class="col-lg-9">
                                    첨부파일
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                             <div class="col-lg-1 mt-4 ">
                                     <button class="btn btn-info btn-sm mr-2 mb-2 d-flex flex-column align-items-center">
                                    파일추가
                                  </button>                             
                                  <button class="btn btn-info btn-sm mr-2 ">
                                    파일삭제
                                  </button>                                      
                            </div>                    

                            <div class="col-lg-12 justify-content-between mt-2">                                                       
                                  EDL 정보                               
                                  <button class="btn btn-info btn-sm mr-2 mb-2 float-right">
                                    삭제
                                  </button>
                            </div>  

                            <div class="col-lg-12">
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
                          
                        </div>                          
                      </div>
                  </div>

                <div class="col-lg-6">        
                    <div class="input-group">
                          <div class="row ">
                            <div class="col-lg-12 justify-content-between">                                                       
                                  전쟁의 역사                               
                                     <button type="button" class="btn btn-info btn-sm mr-2 mb-2 float-right" data-bs-toggle="modal" data-bs-target="#exampleModal01">
                                    영상검색
                                  </button>
                            </div>

                            <div class="col-lg-12">
                                <div class="ratio ratio-16x9">
                                    <video controls>
                                        <source src="" type="video/mp4">                                   
                                    </video>
                                </div>                                   
                            </div>

                            <div class="col-lg-12 mt-2 d-flex justify-content-between ">                             
                                  <button class="btn btn-info btn-sm mr-2 mb-2 ">
                                      Make In
                                  </button>
                                
                                  <input type="time" class="form-control form-control-sm " value="10:05 AM" />~
                                  <input type="time" class="form-control form-control-sm" value="10:05 AM" />
                            </div>

                            <div class="col-lg-12 d-flex justify-content-end ">      
                                  <button class="btn btn-info btn-sm mr-2 mb-2 ">
                                      Make Out
                                  </button>
                               
                                  <button class="btn btn-info btn-sm mr-2 mb-2 ">
                                      EDL 추가
                                  </button>
                                

                                               
                          </div>
                        </div>
                      </div>  
                    </div>



                </div>
            </div>


            
            <div class="modal-footer  justify-content-right">
          
          
              <div class="form-check ">
                  <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"
                  style="width:20px;height:20px; "> &ensp;   
                  <label class="form-check-label mt-1" for="flexCheckDefault">
                      작업 완료 시 SMS 수신 &ensp;                                   
                  </label>
            

  
              <div class="btn-group ">                            
                    <button class="btn btn-sm btn-primary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false"
                    style="font-size:10px;">
                    등록  
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


  <!--  영상검색 모달 -->
     
     <div class="modal fade" id="exampleModal01" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-md text-black">
        <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel2">영상검색</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

           
            <div class="modal-body" style="height:100%;  max-height: 80vh; /* 최대 높이 설정 */ overflow-y: auto; " >             
                <div class="row mx-1">
                   <div class="col-lg-12">          
                      <div class="input-group">
                        제목&ensp;                                                                                                       
                          <div class="row">
                            <div class="col-lg-10">
                              
                              <input
                                  type="text"
                                class="form-control form-control-sm datetimepicker-input "
                                data-target="#reservationdate" placeholder="전쟁의 역사"
                              />                                            
                            </div>

                             <div class="col-lg-2 mt-n2">                
                              <button class="btn btn-info btn-sm mr-2 mb-2 mt-2">
                                  검색
                              </button>
                                        
                            </div>

                      </div>
                    </div>
                  </div>

                  

                  <div class="col-lg-12 mt-3 d-flex justify-content-center">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card" style="height: 12rem;">
                            <div class="ratio ratio-16x9">
                                <video controls>
                                    <source src="" type="video/mp4">                                   
                                </video>
                            </div>     
                          <div class="card-body">
                            <h5 class="card-title">전쟁의 역사</h5>
                          </div>
                        </div>
                      </div>

                   <div class="col-lg-6">
                        <div class="card" style="height: 12rem;">
                            <div class="ratio ratio-16x9">
                                <video controls>
                                    <source src="" type="video/mp4">                                   
                                </video>
                            </div>    
                          <div class="card-body">
                            <h5 class="card-title">전쟁과 평화</h5>
                          </div>
                        </div>
                      </div>

                   <div class="col-lg-6">
                        <div class="card" style="height: 12rem;">
                            <div class="ratio ratio-16x9">
                                <video controls>
                                    <source src="" type="video/mp4">                                   
                                </video>
                            </div>    
                          <div class="card-body">
                            <h5 class="card-title">전쟁과 사랑</h5>
                          </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="card" style="height: 12rem;">
                            <div class="ratio ratio-16x9">
                                <video controls>
                                    <source src="" type="video/mp4">                                   
                                </video>
                            </div>   
                          <div class="card-body">
                            <h5 class="card-title">전쟁의 흑역사</h5>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  
                   <div class="col-lg-12 mt-3 d-flex justify-content-center">
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
              </div>
            </div>

          
            <div class="modal-footer justify-content-center">
              <button type="button" class="btn btn-primary btn-sm">선택</button>
                <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
              >취소</button>
            </div>
           
                        
        </div> 
      </div>
    </div>                  
     
      <!--영상검색 모달내용-->
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
       {field: "no", headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
      { field: "title", headerName: "타이틀", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120, },    
      { field: "in", headerName: "IN", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100},   
      {field: "out",  headerName: "OUT", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' },  maxWidth: 100 },   
     
        // ...
      ],
      rowData: [
        {no: "1", title: "", in:"", out:"" }
 
      ]
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
  
