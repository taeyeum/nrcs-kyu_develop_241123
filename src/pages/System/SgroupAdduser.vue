
<template>
    <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md text-black">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">사용자 추가</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            

            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">  
                    <!-- /.card-header -->   
                                    
                        <div class="row gx-1 mx-1 ">                              
                            <div class="col-lg-8">
                                <div class="input-group ">
                                    사용자명&ensp; 
                                        <input
                                            type="text"
                                            class="form-control form-control-sm  datetimepicker-input "
                                            data-target="#reservationdate" >&ensp;
                                          <button type="button" class="btn btn-info btn-sm mr-2 mb-2"  >
                                            검색
                                        </button>
                                </div>
                            </div>

                        <div class="col-12 ">
                              <div class="form-check form-check-inline ">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" >
                                    <label class="form-check-label" for="inlineCheckbox3">전체선택</label>
                              </div>     
                        </div>
                           
                        <div class="col-lg-12 ">                        
                            <ag-grid-vue
                            
                                :columnDefs="columnDefs"
                                :modules="modules"
                                :rowData="rowData"
                                :groupHeaders="true"
                                :defaultColDef="defaultColDef"
                                :rowSelection="rowSelection"
                                  @cellClicked="onCellClicked"
                                :headerHeight="28" :rowHeight="35"
                                class="ag-theme-alpine"
                                style="flex: 1 1 auto; height: 300px; "
                                @grid-ready="onGridReady" 
                                                                
                            >
                        
                            </ag-grid-vue>
                        </div>   

                      </div>          
                    </div>
                  </div>
                </div>


                <div class="modal-footer justify-content-between ">                
                  <button type="button" class="btn btn-sm btn-primary">확인</button>
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
         columnDefs: [

                { field: "no", headerName: "순번",     editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                {field: "select", headerName: "선택",     editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90, cellRenderer: params => {
                const eInput = document.createElement('input');
                eInput.type = 'checkbox';
                eInput.checked = params.data.isChecked;
                eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
                return eInput;      
                
            }
            }, 
                { field: "id", headerName: "ID",     editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
                { field: "usernm", headerName: "사용자명",     editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, minWidth:350, maxWidth: 450 },
                { field: "papproval", headerName: "가승인",     editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 110 },
                { field: "approval", headerName: "승인",     editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 110 },
                { field: "mgroup", headerName: "주그룹",     editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 110 },

                             // ...
            ],
            rowData: [
                { no: "1", select:"", id:"000001",  usernm: "정하윤", papproval: "V", approval: "V", mgroup: "V", },
                { no: "2", select:"", id:"000001",  usernm: "정호두", papproval: "", approval: "V", mgroup: "V", },
                { no: "3", select:"", id:"000001",  usernm: "정보리", papproval: "V", approval: "", mgroup: "V", },
                { no: "4", select:"", id:"000001",  usernm: "정홍기", papproval: "V", approval: "V", mgroup: "V", },
                { no: "5", select:"", id:"000001",  usernm: "정상호", papproval: "V", approval: "V", mgroup: "", },
                { no: "6", select:"", id:"000001",  usernm: "정안나", papproval: "V", approval: "", mgroup: "V", },
                { no: "7", select:"", id:"000001",  usernm: "정상호", papproval: "V", approval: "", mgroup: "V", },
                { no: "8", select:"", id:"000001",  usernm: "정하윤", papproval: "", approval: "V", mgroup: "V", },
             
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