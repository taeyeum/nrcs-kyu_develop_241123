
<template>
   
    <!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
            
          <div class="modal-header">
                  <h6 class="modal-title" id="exampleModalLabel">방송 이력</h6>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

        
          
           <div class="modal-body"> 
              <div class="col-lg-12 scrollable-div"> 
                <div class="form-group">
                   <div class="row mx-1 justify-content-start">
                      <div class="col-12">                     
                  
                        <h6>(대)[예고:11]미국 대북인권 특사, 오늘 외교장관 등 면담</h6>    
                    </div>

                   </div>
                </div>
              </div>
        
                 
            <div class="row">
                <div class="col-lg-12 mt-2 ">
                      <ag-grid-vue
                          :columnDefs="columnDefs"
                          :modules="modules"
                          :rowData="rowData"
                          :groupHeaders="true"
                          :defaultColDef="defaultColDef"
                            :headerHeight="28" :rowHeight="35"
                          class="ag-theme-alpine"
                          style="flex: 1 1 auto; height: 200px; "
                      >
                      </ag-grid-vue>
                </div>
            </div>
         
            

            <div class="modal-footer justify-content-right">
              
                <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal"
              >닫기</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


import { ref } from "vue";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from "@ag-grid-community/vue3";



const modules = ref([ClientSideRowModelModule]);

const defaultColDef = {
  flex: 1,
};

  
const columnDefs = ref([
  
      
      {field: "no", headerName: "순번",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 60},
       { field: "date", headerName: "방송일시",   editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, minWidth: 150 , maxWidth: 200},
     { field: "sub", headerName: "제목",    editable: true, cellEditor: 'CellComponentEditor', minWidth: 400 , maxWidth: 450, cellStyle: {  fontWeight: 'bold'  }, },     
      {field: "program", headerName: "프로그램명",    editable: true, cellEditor: 'CellComponentEditor',  cellStyle: { textAlign: 'center' }, maxWidth: 100},
     

]);

const rowData = ref([
  {no: "1" , date:"24-07-22 (22:00~22:30)", sub: "미국 대북인권 특사, 오늘밤 방한", program: "MS24(주요, 기상)"},
 
        
]);


defineExpose({


});

defineProps<{
  title?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()


</script>

<style>


</style>