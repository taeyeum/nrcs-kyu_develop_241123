
<template>
    <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg text-black">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">그룹관리 등록</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            

            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">               
                  
                    <div class="row mx-1 ">
                
                    <!-- /.card-header -->   
                                    
                        <div class="row gx-1 mx-1 mt-3">  
                            <div class="col-lg-6">
                                <div class="input-group ">
                                    사용자ID&ensp; 
                                    <select class="form-select form-select-sm " aria-label="Default select example" >
                                    <option selected>000001</option>
                                    <option selected>000002</option>
                                    <option selected>000003</option>
                                    <option selected>000004</option>
                                    <option selected>000005</option>
                                   
                                    </select>  
                                </div>
                            </div>

                            <div class="col-lg-6 mt-2">
                                <div class="input-group ">
                                    사용자명&ensp; 
                                        <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" >
                                        
                                </div>
                            </div>

                            <div class="col-lg-6 mt-2">
                                <div class="input-group ">
                                    비밀번호&ensp; 
                                        <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" 
                                        />&ensp;
                                         <button type="button" class="btn btn-info btn-sm mr-2 mb-2"  >
                                            초기화
                                        </button>
                                </div>
                            </div>

                            <div class="col-lg-6 mt-2">
                                <div class="input-group ">
                                    내선번호&ensp; 
                                        <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" 
                                        />
                                </div>
                            </div>

                            <div class="col-lg-6 mt-2">
                                <div class="input-group ">
                                    휴대전화&ensp; 

                                    <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" 
                                        />
                                      
                                </div>
                            </div>

                             <div class="col-lg-12 mt-2">
                                <div class="input-group ">
                                    &ensp;&ensp;이메일&ensp; 

                                    <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" 
                                        />
                                      
                                </div>
                            </div>

                             <div class="col-lg-12 mt-2">
                                <div class="input-group ">
                                    &ensp;&ensp;&ensp;&ensp;비고&ensp; 

                                   <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" 
                                        />    
                                </div>
                            </div>

                             <div class="col-lg-4 ml-5">
                                <div class="form-check form-check-inline ">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" >
                                        <label class="form-check-label" for="inlineCheckbox3">C/S 사용</label>
                                        
                                </div>     
                            </div>

                             <div class="col-lg-4">
                                <div class="form-check form-check-inline">
                                      
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" >
                                        <label class="form-check-label" for="inlineCheckbox3">WEB 사용</label>
                                      
                                    
                                </div>     
                            </div>

                             <div class="col-lg-3">
                                <div class="form-check form-check-inline">
                                      
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" >
                                        <label class="form-check-label" for="inlineCheckbox3">Mobile 사용</label>
                                      
                                    
                                </div>     
                            </div>

                            <div class="col-lg-6 ml-5">
                                <div class="form-check form-check-inline">
                                      
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" >
                                        <label class="form-check-label" for="inlineCheckbox3">다음 로그인시 비밀번호 변경</label>
                                      
                                    
                                </div>     
                            </div>

                             <div class="col-lg-6 ml-5">
                                <div class="form-check form-check-inline">
                                      
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" >
                                        <label class="form-check-label" for="inlineCheckbox3">다음 로그인시 SMS 인증</label>
                                      
                                    
                                </div>     
                            </div>

                           

                        </div>        
                      </div>          
                    </div>
                  </div>
                </div>

                <div class="modal-footer justify-content-between ">                
                  <button type="button" class="btn btn-sm btn-primary">저장</button>
                  <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal"
                >취소</button>
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
         columnDefs01: [

                { field: "no", headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "groupnm", headerName: "그룹명", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, minWidth:350, maxWidth: 450 },
                { field: "papproval", headerName: "가승인", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 110 },
                { field: "approval", headerName: "승인", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 110 },
                 { field: "mgroup", headerName: "주그룹", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 110 },
             
                // ...
            ],
            rowData01: [
                { no: "1", groupnm: "편성운영부", papproval: "V", approval: "V", mgroup: "V", },
                { no: "2", groupnm: "뉴스팀", papproval: "", approval: "", mgroup: "", },
                { no: "3", groupnm: "편집1부", papproval: "V", approval: "V", mgroup: "V", },
                { no: "4", groupnm: "편집2부", papproval: "V", approval: "V", mgroup: "", },
                { no: "5", groupnm: "보두국게시", papproval: "V", approval: "", mgroup: "V", },      
                { no: "6", groupnm: "당직인수인계", papproval: "V", approval: "V",  mgroup: "",},
            ],
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
  
<style>

</style>