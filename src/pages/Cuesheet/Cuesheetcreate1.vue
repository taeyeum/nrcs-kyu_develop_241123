<template>
  <div class="card  mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 " >
        
        <div class="card-header" style="height:90px; background-color: #828282; ">
          <div class="row text-sm text-white" >
            <div class="col-lg-12 scrollable-div">
                 <div class="form-group">
                    <div class="row justify-content-start">
                      
                      <div class="col-5">                                                           
                            <div class="input-group">  
                              <input type="text" class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2"
                              > &ensp; 
                            </div>
                      </div>    

                      <div class="col-3">
                            <div class="input-group">  
                              <input type="text" class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2"
                              >               
                                                
                            </div>
                      </div>
                  
                      <div class="col-3">                              
                            <div class="input-group">  
                              총5건&ensp; 
                                           
                                <button class="btn btn-info btn-sm mr-2 mb-2">
                                    전체 메시지 확인
                              </button>                          
                            </div>
                      </div>

                      <div class="col-1" > 
                              미방송
                      </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row text-sm mt-n3" >
            <div class="col-lg-12 scrollable-div">
                <div class="form-group">
                  <div class="row justify-content-start">
                    <div class="col-2 ">                
                      <div classs="button-group">                      
                        <button class="btn btn-info btn-sm mr-2 mb-2">
                                    전체체크
                        </button>  
                        <button class="btn btn-info btn-sm mr-2 mb-2">
                                    방송완료
                        </button>    
                      </div>
                    </div>

                     <div class="col-2 ml-4">        
                      <div class="image-group">
                      <img src="../../components/image/001.png" class="img-thumbnail" alt="앵커없을때">
                      <img src="../../components/image/100.png" class="img-thumbnail" alt="남자앵커">
                      <img src="../../components/image/104.png" class="img-thumbnail" alt="여자앵커">
                      <img src="../../components/image/103.png" class="img-thumbnail" alt="남자여자앵커">
                      <img src="../../components/image/101.png" class="img-thumbnail" alt="남앵커우측">
                      <img src="../../components/image/105.png" class="img-thumbnail" alt="여앵커우측">
                      </div>
                    </div>

                    <div class="col-2  text-white "  >
                        <div class="input-group align-items-center">
                            PD&ensp;                          
                            <div class="col-5">
                            <select class="form-select form-select-sm" aria-label="Default select example" >
                                <option selected>김파웅</option>                                
                                </select>
                            </div>
                            
                             <div class="col-5">
                             <select class="form-select form-select-sm" aria-label="Default select example" >
                                <option selected>김파웅</option>                                
                                </select>      
                            </div> 
                         
                        </div>       
                    </div>

                     <div class="col-2 text-white "  >
                        <div class="input-group align-items-center">
                            ANC&ensp;                         
                            <div class="col-5">
                            <select class="form-select form-select-sm" aria-label="Default select example" >
                                <option selected>김파웅</option>                                
                                </select>
                            </div>
                            
                             <div class="col-5">
                             <select class="form-select form-select-sm" aria-label="Default select example" >
                                <option selected>김파웅</option>                                
                                </select>      
                            </div> 
                         
                        </div>   
                    </div>

                     <div class="col-2 text-white "  >
                        <div class="input-group align-items-center">                            
                           <div class="col-6">
                            <select class="form-select form-select-sm" aria-label="Default select example" >
                                <option selected>1스튜디오</option>                                
                                </select>
                            </div>
                            
                             <div class="col-6">
                             <select class="form-select form-select-sm" aria-label="Default select example" >
                                <option selected>1부조</option>                                
                                </select>      
                            </div> 
                         
                        </div>   
                    </div>

                    <div class="col-1">                           
                            <div class="button-group">
                                
                                <button type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                영상편집의뢰
                                </button><ModalComponent4/>                               
                            </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>                          
          </div>         

           <div class="row" style="height:40px; background-color: #cccccc;">     
            <div class="col-lg-12 scrollable-div">
                <div class="form-group"> 
                    <div class="row mx-4 justify-content-start">             
                        <div class="col-12">                           
                            <div class="button-group">
                                   <button class="btn btn-outline btn-sm mr-2 mb-2">
                                   
                                      <select class="form-select form-select-sm bg-info" aria-label="Default select example" >
                                      <option selected>신규</option>
                                      
                                      </select> 
                                    </button>
                                    <button class="btn btn-info btn-sm mr-2 mb-2">
                                    저장
                                    </button>
                                    <button class="btn btn-info btn-sm mr-2 mb-2">
                                    삭제
                                    </button>
                                    <button class="btn btn-info btn-sm mr-5 mb-2">               
                                    삭제취소
                                    </button>
                                     <input class="form-check-input align-items-center mt-2" type="checkbox" value="" id="flexCheckDefault" style="width:20px; height:20px; ">
                                      &ensp;
                                      <label class="form-check-label mr-5" for="flexCheckDefault"  >
                                        삭제데이터
                                      </label>

                                    <button class="btn btn-info btn-sm mr-2 mb-2">                
                                    방송이력
                                    </button>               
                                    <button class="btn btn-info btn-sm mr-3 mb-2">                
                                    기사이력
                                    </button>
                                     <button class="btn btn-info btn-sm mr-3 mb-2">                
                                    새로고침
                                    </button>                                  
                                     <button class="btn btn-info btn-sm mr-2 mb-2">                
                                    작성완료
                                    </button>  
                                    <button  class="btn btn-primary btn-sm mr-2 mb-2">
                                    방송중
                                    </button>
                                    <button class="btn btn-primary btn-sm mr-2 mb-2">
                                    방송완료
                                    </button>
                                    <button class="btn btn-info btn-sm mr-4 mb-2">
                                    오더락
                                    </button>
                       
                                    <router-link to="/Cuesheetcreate"><button  class="btn btn-info btn-sm mr-2 mb-2 " style="height:30px; padding:0; padding-top: 1px;">
                                        <img src="../../components/image/screen.png" >
                                    </button></router-link>
                                     <router-link to="/Cuesheetcreate"><button class="btn btn-info btn-sm mr-4 mb-2" style="height:30px; padding:0; padding-top: 1px;">
                                        <img src="../../components/image/screen2.png">
                                    </button></router-link>
                     
                                    <button  class="btn btn-outline btn-sm mr-2 mb-2">
                                    <select class="form-select form-select-sm bg-info" aria-label="Default select example" >
                                      <option selected>인쇄</option>
                                      
                                      </select> 
                                    </button>
                                    <button  type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                    의견교환
                                    </button><ModalComponent/>
                                    <button type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    자막템플릿적용
                                    </button><ModalComponent3/>
                            </div>
                        </div>

                    </div>
                </div>
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
                        style="flex: 1 1 auto; height: 660px; "
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

                  <div class="col-lg-4 ml-n2">
                    <div class="card " style="height:520px;">   
                        <div class="row mx-1 text-sm">
                            <div class="col-lg-12">
                                <div class="button-group mt-2 ">
                                    <div class="col-lg-12 mb-2 mt-3">      

    
                                        <router-link to="/Cuesheetcreate1"><button type="submit" class="btn btn-sm btn-primary "><i class="fa-sharp-duotone fa-solid fa-comment"></i>&ensp;SNS</button></router-link>
                                        <router-link to="/Cuesheetcreate2"><button type="submit" class="btn btn-sm btn-outline-secondary "><i class="fa-sharp-duotone fa-solid fa-file-lines"></i>&ensp;내용</button></router-link>
                                        <router-link to="/Cuesheetcreate3"><button type="submit" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-clipboard-question"></i>&ensp;의뢰상태</button></router-link>
                                        <router-link to="/Cuesheetcreate4"><button type="submit" class="btn btn-sm btn-outline-secondary"><i class="fa-sharp-duotone fa-solid fa-paperclip"></i>&ensp;첨부</button></router-link>

                                
                                    </div>

                                    <div class="card mt-n1" style="height:270px;">
                                      <div class="row">
                                          <div class="col-lg-12 mt-1">
                                              <input type="text" class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2" v-model="rinfos.sub" style="border:0;">                             
                          
                                              <ul class="float-right mt-4">
                                                  <li class="">작성:정안나  13-06-20 16:00:00</li>
                                                  <li class="">작성:정안나  13-06-20 16:00:00</li>
                                              </ul>
                                              
                                          </div>
                                      </div>

                                      <div class="row">
                                          <div class="col-lg-12">
                                              <div class="input-group     ">
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" >배곱</textarea>                           
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" >박근혜..</textarea>                             
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" style="width:300px;">(베이징=연합뉴스) 박근혜 기자 
  = 중국 국빈방문 이틀째를 맞은 박근혜 
  대통령은 28일 오전 수행 경제사절단과 
  조찬을 함께 하며 경제외교에 시동을 걸었다.
                                                  </textarea>
                                                                              
                                              </div>
                                          </div>
                                      </div>

                                      <div class="row gx-1 d-flex  justify-content-between"  >           
                                        <div class="col-lg-6 ">
                                           <div class="ratio ratio-16x9">
                                                <video controls>
                                                    <source src="" type="video/mp4">                                   
                                                </video>
                                            </div>
                                        </div>

                                          
                                        <div class="col-lg-6 align-items-center">                                    
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
 </div>
</template>




<script >

import {ref} from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';

import ModalComponent from "./CuesheetcreOpinion.vue";
import ModalComponent3 from "./CuesheetcreApplysub.vue";
import ModalComponent4 from "./CuesheetcreVideoedit.vue";


export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent3,
    ModalComponent4
 

  },
  data() {
    return {
      rinfos: '',
         
      columnDefs: [
       {field: "no", headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
      { field: "division", headerName: "구분", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60, },    
      { field: "broad", headerName: "방송", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60},   
      {field: "mc",  headerName: "MC", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' },  maxWidth: 60 },   
      {field: "sub", headerName: "제목", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { fontWeight: 'bold' }, minWidth:350, maxWidth: 450},
      {field: "form", headerName: "형식", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth:100},
      { field: "reporter", headerName: "기자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 120},
      { field: "graphics", headerName: "그래픽", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      { field: "video", headerName: "영상", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
      { field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
     { field: "cliptime", headerName: "클립시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
     { field: "broadno", headerName: "방송횟수", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
     
        // ...
      ],
      rowData: [
        { no: "1", division: "", broad: "", mc: "", sub: "테스트 기사1", form: "자료", reporter: "", graphics: "1/1", video: "1/1", time: "00:56", cliptime: "00:30", broadno: "0" },
        { no: "2", division: "", broad: "", mc: "", sub: "테스트 기사2", form: "자료", reporter: "", graphics: "1/1", video: "1/1", time: "00:46", cliptime: "00:30", broadno: "0" },
        { no: "3", division: "", broad: "", mc: "", sub: "테스트 기사3", form: "자료", reporter: "", graphics: "1/1", video: "1/1", time: "00:33", cliptime: "00:30", broadno: "0" },
        { no: "4", division: "", broad: "", mc: "", sub: "테스트 기사4", form: "자료", reporter: "", graphics: "1/1", video: "1/1", time: "00:46", cliptime: "00:30", broadno: "0" },
        { no: "5", division: "", broad: "", mc: "", sub: "테스트 기사5", form: "자료", reporter: "", graphics: "1/1", video: "1/1", time: "00:50", cliptime: "00:30", broadno: "0" }

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

  },


}




</script>
  

<style>
.img-thumbnail{
   width: 30px;
}
</style>
    