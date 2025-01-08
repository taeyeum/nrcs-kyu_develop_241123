<template>
  
    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow:hidden;">
      <div class="row">
        <div class="col-lg-12 " >
          
          <div class="card-header "  style="height:50px; background-color: #828282; ">
              <div class="row text-sm text-white">
                <div class="col-lg-12 scrollable-div">

                  <div class="form-group">                  
                    <div class="row justify-content-start">                  
                        <div class="col-9 ">
                        <div class="input-group align-items-center">
                          작성일 &ensp;
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

                              </div>&ensp;

                              <div class="col-3">    
                                <div class="input-group">
                                                        
                                      <select class="form-select form-select-sm" aria-label="Default select example" >
                                                  <option selected>정치부</option>                                        
                                                </select>     
                                  </div>
                              </div>
                                                            
                              <div class="col-2">
                                   <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" >
                                    <label class="form-check-label" for="inlineCheckbox3">삭제데이터</label>
                                   </div>        
                              </div>
                            </div>
                        </div>
                    </div>
                    

                      <div class="col-3 ">
                          <div class="button-group" role="group" aria-label="Basic example">  
                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2"  data-bs-toggle="modal" data-bs-target="#exampleModal1"> 
                                신규
                            </button><ModalComponent/>
                            <button type="button"  class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal2"> 
                                수정
                            </button><ModalComponent2/>

                            <button class="btn btn-info btn-sm mr-2 mb-2">
                              삭제
                            </button>
                            <button class="btn btn-info btn-sm mr-2 mb-2">              
                                삭제취소
                            </button>
                            <button class="btn btn-info btn-sm mr-2 mb-2">
                              게시
                            </button>
                            <button class="btn btn-info btn-sm mr-2 mb-2">              
                              게시취소
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

          <div class="card-body p-0 m-0" >
            <div class="row"  >
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
                          <div class="row text-sm mx-1">
                        
                            <!-- /.card-header -->   
                      
                                <div class="col-lg-12  mt-3">
                                  <div class="input-group">
                                    &ensp;&ensp;&ensp;제목&ensp;
                                    <input type="text" class="form-control form-control-sm " placeholder="국정원 국정조사 계획서 본회의 통과"  aria-describedby="basic-addon2"
                                  v-model="rinfos.sub">                   
                                        
                                    
                                  </div>
                                </div>
                            
                                <div class="col-lg-12 mt-2">
                                  <div class="input-group ">
                                    &ensp;&ensp;&ensp;작성&ensp;
                                    <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.Author"
                                  >  &ensp;                             
                                  <input type="time" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.cdate"
                                  >     
                                  </div>
                              </div>
                           
                              <div class="col-lg-12 mt-2">
                                  <div class="input-group  ">
                                    &ensp;&ensp;&ensp;수정&ensp;
                                    <input type="text" class="form-control form-control-sm " placeholder="윤순섭"  aria-describedby="basic-addon2"
                                  >  &ensp;                                 
                                  <input type="time" class="form-control form-control-sm " placeholder="윤순섭"  aria-describedby="basic-addon2"
                                  >
                                  </div>
                              </div>

                
                              <div class="col-lg-12 mt-2">
                                  <div class="input-group">
                                    &ensp;&ensp;&ensp;내용&ensp;
                                      <textarea id="compose-textarea" class="form-control" rows="10" v-model="rinfos.sub">
                                                                                                
                                      </textarea>
                                  </div>
                              </div>
                   
                              <div class="col-lg-12 mt-2">
                                  <div class="input-group ml-n1 ">
                                    첨부파일&ensp;
                                      <textarea id="compose-textarea" class="form-control" >                                                          
                                      </textarea>                                                       
                                  <button type="button" class="btn btn-sm btn-secondary ml-2" rows="2" >다운로드</button>
                                  </div>
                              </div>
              
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
   
          <!-- /.col -->
       
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

import ModalComponent from "./ProgramNoticeAdd.vue";
import ModalComponent2 from "./ProgramNoticeCorrect.vue";

export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent2
  },  
  
  data() {
    return {
     
      rinfos:'',
       
      columnDefs: [
   
      {field: "no", headerName: "순번",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
      {field: "sub", headerName: "제목",   editable: true, cellEditor: 'CellComponentEditor', minWidth: 800 , maxWidth: 900, cellStyle: {  fontWeight: 'bold'  }, },    
      {field: "clip", headerName: "",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 40},
      {field: "Post", headerName: "게시여부",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90},
      {field: "Author", headerName: "작성자",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 90},
      {field: "cdate", headerName: "작성일시",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 200},
      ],
      rowData: [
        { no: "1", sub: "노숙인 축구연습", clip: " ", Post: "V", Author:"정치부", cdate: "24-08-02 10:00:00" },
        { no: "2", sub: "노숙인 축구연습", clip: " ", Post: "V", Author:"정치부", cdate: "24-08-12 10:30:00" },
        { no: "3", sub: "노숙인 축구연습", clip: " ", Post: "V", Author:"뉴스부", cdate: "24-09-02 10:30:00"},
        { no: "4", sub: "노숙인 축구연습", clip: " ", Post: "V", Author:"정치부", cdate: "24-09-12 10:00:00"},
        { no: "5", sub: "노숙인 축구연습", clip: " ", Post: "V", Author:"뉴스부", cdate: "24-10-03 10:33:00"},
      
 ],

     
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



<style>
    
.scrollable-div::-webkit-scrollbar {
 -ms-overflow-style: none;
  scrollbar-width: none;
}
  ::-webkit-scrollbar {
    display: none;
  }


@media (max-width: 768px) {
 .scrollable-div {
    width: 100%; /* 중간 화면 이상에서는 100% 너비 */
    
  }
}
</style>
