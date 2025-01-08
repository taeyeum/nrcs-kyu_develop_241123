<template>
   
    <!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl text-black ">
    <div class="modal-content">
            
          <div class="modal-header">
                  <h6 class="modal-title" id="exampleModalLabel">기사맵핑</h6>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

        
           
            <div class="modal-body " style="height:460px;"> 
               <div class="col-lg-12 scrollable-div"> 
                <div class="form-group">
                   <div class="row mx-1 justify-content-start">
                      <div class="col-4">                           
                            <div class="input-group align-items-center">
                                작성일&ensp;
                                    <input type="date" class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2"
                                    >~
                                     <input type="date" class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2"
                                    >              
                                                 
                            </div>
                      </div>

                     
                      <div class="col-5 ml-5">                           
                            <div class="input-group">
                              <div class="col-4">
                                <select class="form-select form-select-sm" aria-label="Default select example" >
                                    <option selected>전체</option>                                    
                                </select>    
                              </div> 

                              <div class="col-5">
                                <input type="text" class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2">               
                              </div>
                              
                              <div class="col-1">
                                    <button class="btn btn-info btn-sm mb-2">
                                        검색
                                    </button>
                              </div>
                            </div>
                      </div>

                     

                         <div class="col-2 " >
                            <div class="button-group float-right">
                             <button class="btn btn-info btn-sm  mb-2 ">
                                        연계
                                    </button>
                               
                            </div>
                        </div>
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
                            @cellClicked="onCellClicked"
                            :headerHeight="28" :rowHeight="35"
                          class="ag-theme-alpine"
                          style="flex: 1 1 auto; height: 390px; "
                      >
                      </ag-grid-vue>
              </div>

                      
      
              <div class="col-lg-5">
                  <div class="card " style="height:390px;">   
                      <div class="row mx-1 text-sm">
                          <div class="col-lg-12">
                              <div class="button-group mt-2 ">
                                  <div class="col-lg-12 mb-2 ">      

                                      <router-link to="/CharacterAlinksns"><button type="submit" class="btn btn-sm btn-primary"><i class="fa-sharp-duotone fa-solid fa-file-lines"></i>&ensp;내용</button></router-link>
                                      <router-link to="/CharacterAlinksns"><button type="submit" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-clipboard-question"></i>&ensp;SNS</button></router-link>
                                      <router-link to="/CharacterAlinkreq"><button type="submit" class="btn btn-sm btn-outline-secondary"><i class="fa-sharp-duotone fa-solid fa-file-lines"></i>&ensp;의뢰상태</button></router-link>
                                      <router-link to="/CharacterAlinkatt"><button type="submit" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-clipboard-question"></i>&ensp;첨부</button></router-link>
                             
                                  </div>

                                 <div class="card mt-n1 " style="height:250px;"   >
                                <div class="row">
                                    <div class="col-lg-12 ">
                                      <input type="text" class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.sub" style="border:0;"> 

                                        <ul class="float-right ">
                                            <li class="">작성:정치수  13-06-20 16:00:00</li>
                                            <li class="">작성:정치수  13-06-20 16:00:00</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="input-group">
                                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" >배곱</textarea>                           
                                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" >박근혜..</textarea>                             
                                              <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="5" style="width:200px;">(베이징=연합뉴스) 박근혜 기자 
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
        {
          field: "select", headerName: "선택",       editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60, cellRenderer: params => {
            const eInput = document.createElement('input');
            eInput.type = 'checkbox';
            eInput.checked = params.data.isChecked;
            eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
            return eInput;

          }
        },
        { field: "no", headerName: "번호",  editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
       {field: "sub",  headerName: "제목",  editable: true, cellEditor: 'CellComponentEditor',  minWidth: 300, maxWidth: 350, cellStyle: { fontWeight: 'bold' },},     
      {field: "issue", headerName: "이슈",  editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },     
      {field: "depart",  headerName: "부서", editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, minWidth: 100},    
      {field: "form", headerName: "형식", editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "reporter", headerName: "기자", editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "video", headerName: "영상", editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      {field: "date", headerName: "작성일시", editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
     
        // ...
      ],
      rowData: [
        { select: "", no: "1", sub: "암사동 개발건 입니다.", issue: "암사동", depart: "정치부", form: "자료", reporter: "정하윤", video: "234", date: "24-06-20 22:23:00" },
        { select: "", no: "2", sub: "거리로 나선 이유", issue: "거리로", depart: "정치부", form: "자료", reporter: "정호두", video: "235", date: "24-06-29 22:23:00" },
          { select: "", no: "3", sub: "협조와 지도편달", issue: "협조와", depart: "정치부", form: "자료", reporter: "정홍기", video: "236", date: "24-08-01 22:23:00" },
           { select: "", no: "4", sub: "찜통 교실’을 찾아서", issue: "찜통 교실", depart: "정치부", form: "자료", reporter: "정보리", video: "237", date: "24-08-11 22:23:00" },
            { select: "", no: "5", sub: "암사동 개발건 입니다.", issue: "암사동", depart: "정치부", form: "자료", reporter: "정상호", video: "238", date: "24-09-16 22:23:00" },          
         
 
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