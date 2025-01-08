

<template>
  
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg text-black">
    <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">자막템플릿변환</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

                       
            <div class="modal-body " style="height:100%; ">
              <div class="row ">
                <div class="col-lg-6 ">          
                         
                        <div class="row ">
                          <div class="col-lg-12">                                
                                  프로그램
                                    <input
                                                type="text"
                                                class="form-control form-control-sm datetimepicker-input "
                                                data-target="#reservationdate" 
                                            />
                               
                          </div>                           
                            
                        </div>

                      <div class="card mt-2 " style="height:380px;">
                            <div class="row">
                              <div class="col-lg-6 mt-2">
                                  <div class="select-group">
                                    대상 템플릿&ensp;                                    
                                    <select class="form-select form-select-sm" aria-label="Default select example" >
                                        <option selected>배꼽</option>
                                        
                                      </select>                    
                                  </div>                                   
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-lg-6 mt-2" >
                                <table class="table  table-bordered text-center ">
                                    <thead>
                                      <tr>
                                        <th scope="col">라인수</th>
                                        <td class="col">01</td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="col">글자수</th>
                                        <td class="col">46</td>
                                      </tr>
                                    </tbody>                       
                                  <thead>
                                      <tr>
                                        <th scope="col">Take Count</th>
                                        <td class="col">01</td>
                                      </tr>
                                    </thead>
                                  <thead>
                                      <tr>
                                        <th scope="col">셀</th>
                                        <td class="col"></td>
                                      </tr>
                                    </thead>
                                  
                                  </table>
                              </div>
                               <div class="col-lg-6 mt-2">
                                            
                                  <div class="embed-responsive embed-responsive-16by9" >
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen
                                    ></iframe>
                                  </div>
                                    
                                </div>
                            </div>

                             <div class="row">
                              <div class="col-lg-6">
                                  <div class="select-group  mt-2">
                                  변환 템플릿&ensp;
                                    <select class="form-select form-select-sm" aria-label="Default select example" >
                                        <option selected>배꼽2</option>
                                        
                                      </select>                             
                                                              
                                  </div>
                              </div>
                            </div>
                          
                             <div class="row">
                              <div class="col-lg-6 mt-2">
                                  <table class="table  table-bordered text-center ">
                                    <thead>
                                      <tr >
                                        <th scope="col">라인수</th>
                                        <td class="col">01</td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="col">글자수</th>
                                        <td class="col">46</td>
                                      </tr>
                                    </tbody>                       
                                  <thead>
                                      <tr>
                                        <th scope="col">Take Count</th>
                                        <td class="col">01</td>
                                      </tr>
                                    </thead>
                                  <thead>
                                      <tr>
                                        <th scope="col">셀</th>
                                        <td class="col"></td>
                                      </tr>
                                    </thead>
                                  
                                  </table>
                              </div>
                              <div class="col-lg-6 mt-2">
                                            
                                   <div class="ratio ratio-16x9">
                                        <video controls>
                                            <source src="" type="video/mp4">                                   
                                        </video>
                                    </div>
                                    
                              </div>
                            </div>                          

                        </div>
                      </div>                      
                    
                      <div class="col-lg-1 d-flex align-items-center justify-content-center my-btn">      
                          <button class="btn btn-info btn-sm mb-1" >
                              추가
                          </button>
                      </div>

                      <div class="col-lg-5 ">                        
                         <div class="row ">
                          <div class="col-lg-12">                                
                              자막템플릿 변환 목록                               
                                  
                                    <button class="btn btn-info btn-sm float-right mb-1" >
                                        삭제
                                    </button>
                              
                               
                          </div>
                          <div class="col-lg-12 gx-1">
                                        <ag-grid-vue
                                            :columnDefs="columnDefs"
                                            :modules="modules"
                                            :rowData="rowData"
                                            :groupHeaders="true"
                                            :defaultColDef="defaultColDef"
                                            class="ag-theme-alpine"
                                              :headerHeight="25" :rowHeight="20" 
                                            style="flex: 1 1 auto; height: 350px; "
                                        >
                                        </ag-grid-vue>
                            </div>

                              <div class="col-lg-12">
                                 <div class="modal-footer  justify-content-right">                          
                                      <div class="btn-group ">                            
                                            <button class="btn btn-sm my-small-button btn-primary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false"
                                            >
                                            확인  
                                            </button>  &ensp;      
                                    
                                    
                                      <div class="btn-group">    
                                        <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                                          >취소</button>
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
        {field: "select", headerName: "선택", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60, cellRenderer: params => {
      const eInput = document.createElement('input');
      eInput.type = 'checkbox';
      eInput.checked = params.data.isChecked;
      eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
      return eInput;      
     
  }
  },      
      {field: "no", headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
      {field: "ttemplate", headerName: "대상 템플릿", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 140},
      {field: "ctemplate", headerName: "변환 템플릿", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 140},
    
        // ...
      ],
      rowData: [
        {select: "" , no: "1", ttemplate:"배꼽", ctemplate:"배꼽2"},
        {select: "" , no: "2", ttemplate:"헤드", ctemplate:"I헤드"},
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
  
    
  
<style>
.table{
  line-height: 0px;
}


 .ag-grid-cell-checkboxSelection{
  display: flex;
  justify-content: center;
  align-items: center;
}


@media (max-width: 768px) {
  .my-btn{
    margin-top: 110%;
    
  }


}

</style>

