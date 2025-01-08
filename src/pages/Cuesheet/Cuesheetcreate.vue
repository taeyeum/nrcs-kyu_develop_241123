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
                             <input type="text"  class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2" v-model="program" /> 
                            
                            </div>
                           

                      </div>                       

                      <div class="col-3">
                            <div class="input-group">  
                              <input type="text" class="form-control form-control-sm" placeholder=""  aria-describedby="basic-addon2"
                              >               
                                                
                            </div>
                      </div>
                  
                      <div class="col-3 ">                              
                            <div class="input-group ">  
                              <label class="d-flex align-items-center">총5건</label>&ensp;        
                                           
                                <button class="btn btn-info btn-sm mr-2 mb-2">
                                    전체 메시지 확인
                              </button>                          
                            </div>
                      </div>

                      <div class="col-1" > 
                              <label class="align-items-center">미방송</label>&ensp;        
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
                                      <label class="form-check-label mr-5" for="flexCheckDefault">
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
                                    오더락 v
                                  
                                    </button>
                       
                                    <router-link to="/Cuesheetcreate"><button  class="btn btn-info btn-sm mr-2 mb-2 " style="height:30px; padding:0; padding-top: 1px;">
                                        <img src="../../components/image/screen.png" >
                                    </button></router-link>
                                     <router-link to="/Cuesheetcreate1"><button class="btn btn-info btn-sm mr-4 mb-2" style="height:30px; padding:0; padding-top: 1px;">
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
       
          <div class="card-body p-0 ">
               <div class="row  gx-1">

                   <div class="col-lg-12 ">
                    <ag-grid-vue
                        :columnDefs="columnDefs"
                        :modules="modules"
                        :rowData="rowData"
                        :groupHeaders="true"
                        :defaultColDef="defaultColDef"
                          :headerHeight="28" :rowHeight="35"
                        class="ag-theme-alpine"                        
                        style="flex: 1 1 auto; height: 680px; "
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

import { useRoute } from 'vue-router'


export default {

  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent3,
    ModalComponent4


  } ,
    props: {
    infos:''
  },

  data() {
    return {
   
      rowData: null,
      receivedData: {},
      
      columnDefs: [
        { field: "no", headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "division", headerName: "구분", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60, },
        { field: "broad", headerName: "방송", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "mc", headerName: "MC", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "sub", headerName: "제목", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { fontWeight: 'bold' }, minWidth: 850, maxWidth: 1000 },
        { field: "form", headerName: "형식", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "reporter", headerName: "기자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "graphics", headerName: "그래픽", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "video", headerName: "영상", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "cliptime", headerName: "클립시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "broadno", headerName: "방송횟수", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },

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



  },mounted() {
 console.log('rinfos====================: ' + this.rinfos)

  //console.log('===============================' + JSON.stringify(this.rowData));

  }, created() {
 
  

   
   
    //this.program = this.rinfos.program;
    //const param = JSON.parse(route.params.qinfos)
     
     const route = useRoute()
    console.log('qinfos last====================: ' + route.params.qinfos);    
    this.rinfos = route.params.qinfos;
  }
  

}


</script>
  

<style>
.img-thumbnail{
   width: 30px;
}




</style>
    