<template>

  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 " >        
        
          <div class="card-header" style="height:50px; background-color: #828282; ">
              <div class="row text-sm text-white" >
                <div class="col-lg-12 scrollable-div">

                 <div class="form-group">                  
                    <div class="row justify-content-start">
                 
                        <div class="col-5 ">                        
                            <div class="input-group align-items-center">
                                검색어&ensp;
                                <div class="row">
                                    <div class="col-10">
                                       <input
                                        type="text"
                                        class="form-control form-control-sm  datetimepicker-input "
                                        data-target="#reservationdate" 
                                        />
                                    </div>

                                    <div class="col-1">
                                        <button class="btn btn-info btn-sm mx-1">                 
                                            검색
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    
                        <div class="col-5 ">                        
                            <div class="input-group align-items-center">
                                인물전체&ensp;  
                                <div class="row">
                                    <div class="col-12">    
                                        <select class="form-select form-select-sm " aria-label="Default select example"  >
                                        <option selected>정치</option>
                                        <option >법조</option>
                                        <option >거시경제</option>
                                        <option >생활경제</option>
                                        <option >건설/교통</option>
                                        <option >농림/해양</option>
                                        <option >문화</option>
                                        <option >보건/복지</option>
                                          
                                         </select>               
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-2">
                            <div class="button-group  float-right">
                                 <button type="button" class="btn btn-info btn-sm mr-2 mb-2"  data-bs-toggle="modal" data-bs-target="#exampleModal1" >
                                신규
                              </button><ModalComponent1/>
                              <button  type="button" class="btn btn-info btn-sm mr-2 mb-2"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                기사연계
                              </button><ModalComponent2/>
                              <button type="button" class="btn btn-info btn-sm mr-2 mb-2"  data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                삭제요청
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
                      style="flex: 1 1 auto; height: 740px; "
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
  
                <div class="col-lg-4  ml-n2">
                    <div class="card " style="height:730px;">
                        <div class="row gx-1 mx-1 mt-2">             
                            <div class="col-lg-5">
                                <img src="../../components/image/picture.png" alt="큰사진" style="width:250px;" >
                            </div>

                             <div class="col-lg-5">
                                <img src="../../components/image/picture1.png" alt="작은사진" style="width:120px;">
                                <img src="../../components/image/picture2.png" alt="작은사진" style="width:120px;">
                                <img src="../../components/image/picture3.png" alt="작은사진" style="width:120px;">
                                <img src="../../components/image/picture4.png" alt="작은사진" style="width:120px;">
                               
                                
                            </div>
                            <div class="col-lg-2" >
                                        
                                <button type="submit" class="btn btn-sm btn-secondary mb-2" style="width:100%">이미지등록</button>                                    
                                <button type="submit" class="btn btn-sm btn-secondary mb-2" style="width:100%">다운로드</button>                           
                                <button type="submit" class="btn btn-sm btn-secondary mb-2" style="width:100%">편집</button>
                                 <button type="submit" class="btn btn-sm btn-secondary mb-2" style="width:100%">저장</button>    
                                  <button type="submit" class="btn btn-sm btn-secondary mb-2" style="width:100%">취소</button>
                            
                            </div>
                        </div>

                        <div class="row mt-2 text-sm mx-1">             
                            <div class="col-lg-6 ">

                                <div class="button-group">
                                    <button type="submit" class="btn btn-sm btn-secondary mb-2 mr-1" >기본정보</button>    
                                    <button type="submit" class="btn btn-sm btn-outline-secondary mb-2 mr-1" >부가정보</button>  
                                    <button type="submit" class="btn btn-sm btn-outline-secondary mb-2" >관련기사</button>      
                                </div>
                            </div>

                                <hr class="mt-n2" style="border:1px solid; padding: 0;">

                            <div class="col-lg-6">
                                <div class="input-group ">
                                    &ensp;&ensp;&ensp;&ensp;&ensp;이름&ensp; 
                                        <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" 
                                        />
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="input-group ">
                                    방송출연여부&ensp; 
                                    <select class="form-select form-select-sm " aria-label="Default select example"  >
                                    <option selected>선택</option>
                                   
                                    </select>  
                                </div>
                            </div>

                            <div class="col-lg-6 mt-2">
                                <div class="input-group ">
                                    &ensp;인물분류&ensp; 
                                        <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" 
                                        />
                                </div>
                            </div>

                            <div class="col-lg-6 mt-2">
                                <div class="input-group ">
                                    &ensp;이메일 주소&ensp; 
                                        <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" 
                                        />
                                </div>
                            </div>

                            <div class="col-lg-6 mt-2">
                                <div class="input-group ">
                                    휴대폰No&ensp; 
                                        <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" 
                                        />
                                </div>
                            </div>

                            <div class="col-lg-6 mt-2">
                                <div class="input-group ">
                                    직장전화번호&ensp; 

                                    <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" 
                                        />
                                      
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="input-group mt-2 ">
                                생년월일&ensp;&ensp;
                                    <div class="form-check-inline">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" >
                                        <label class="form-check-label" for="flexRadioDefault1" >
                                            음력
                                        </label>&ensp;
                                    </div>
                                    <div class="form-check-inline">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                        <label class="form-check-label" for="flexRadioDefault2" >
                                            양력
                                        </label>
                                    </div>&ensp;
                                        <input type="date" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" >                                
                                    
                                </div>
                          </div>


                             <div class="col-lg-12 mt-2">
                                <div class="input-group ">
                                    직장주소&ensp; 

                                    <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" 
                                        />
                                      
                                </div>
                            </div>

                             <div class="col-lg-12 mt-2">
                                <div class="input-group ">
                                    경력사항&ensp; 

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



import ModalComponent1 from "./Characteradd.vue";
import ModalComponent2 from "./CharacterAlink.vue";
import ModalComponent3 from "./CharacterDel.vue";



export default {
  components: {
    AgGridVue,
    ModalComponent1,
    ModalComponent2,
    ModalComponent3


    },

   
        
    data() {
        return {
         
              
            columnDefs: [

                { field: "no", headerName: "순번",           editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
                { field: "nm", headerName: "이름",           editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "gender", headerName: "성별",           editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "edu", headerName: "학력",           editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "dinfor", headerName: "직접정보",           editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 300, maxWidth: 400 },
                { field: "class", headerName: "분류",           editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },



                // ...
            ],
            rowData: [
                { no: "1", nm: "정하윤", gender: "여", edu: "고려대 졸업", dinfor: "청와대 치안비서관 ", class: "청와대" },
                { no: "2", nm: "정홍기", gender: "남", edu: "서울대 졸업", dinfor: "한나라당 의원 ", class: "국회" },
                { no: "3", nm: "정호두", gender: "남", edu: "연세대 졸업", dinfor: "청와대 치안비서관 ", class: "정당" },
                { no: "4", nm: "정하윤", gender: "여", edu: "한양대 졸업", dinfor: "민주노동당 서울시 ", class: "청와대" },
                { no: "5", nm: "정상호", gender: "남", edu: "고려대 졸업", dinfor: "청와대 치안비서관 ", class: "청와대" },


            ],
            treeData : {
                name: "My Tree",
                children: [
                    { name: "hello" },
                    { name: "wat" },
                    {
                        name: "child folder",
                        children: [
                            {
                                name: "child folder",
                                children: [{ name: "hello" }, { name: "wat" }]
                            },
                            { name: "hello" },
                            { name: "wat" },
                            {
                                name: "child folder",
                                children: [{ name: "hello" }, { name: "wat" }]
                            }
                        ]
                    }
                ]

            }
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