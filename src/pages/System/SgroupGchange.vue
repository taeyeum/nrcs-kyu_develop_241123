<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg text-black">
      <div class="modal-content ">
        <div class="modal-header">
          <h6 class="modal-title" id="exampleModalLabel">그룹변경</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>


        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData" :groupHeaders="true"
                :defaultColDef="defaultColDef" @cellClicked="onCellClicked" :headerHeight="25" :rowHeight="25"
                class="ag-theme-alpine" style="flex: 1 1 auto; height: 300px; " @grid-ready="onGridReady">

              </ag-grid-vue>

            </div>
          </div>
        </div>

        <div class="modal-footer justify-content-end ">
          <button type="button" class="btn btn-sm btn-primary">저장</button>
          <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">취소</button>
        </div>

      </div>
    </div>
  </div>
</template>


<script>

import { ref } from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';



export default {
  components: {
    AgGridVue,


  },
  data() {
    return {
      columnDefs: [

        { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        {
          field: "select", headerName: "선택", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90, cellRenderer: params => {
            const eInput = document.createElement('input');
            eInput.type = 'checkbox';
            eInput.checked = params.data.isChecked;
            eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
            return eInput;

          }
        }, { field: "id", headerName: "ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "groupnm", headerName: "그룹명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, maxWidth: 170, },
        {
          field: "papproval", headerName: "가승인", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100, cellRenderer: params => {
            const eInput = document.createElement('input');
            eInput.type = 'checkbox';
            eInput.checked = params.data.isChecked;
            eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
            return eInput;

          }
        },

        {
          field: "approval", headerName: "승인", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100, cellRenderer: params => {
            const eInput = document.createElement('input');
            eInput.type = 'checkbox';
            eInput.checked = params.data.isChecked;
            eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
            return eInput;

          }
        },

        {
          field: "mgroup", headerName: "주그룹", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100, cellRenderer: params => {
            const eInput = document.createElement('input');
            eInput.type = 'radio';
            eInput.checked = params.data.isChecked;
            eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
            return eInput;

          }
        },

        // ...
      ],
      rowData: [
        { no: "1", select: "", id: "0201", groupnm: "편성운영부", papproval: "", approval: "", mgroup: "", },
        { no: "2", select: "", id: "0202", groupnm: "심의실", papproval: "", approval: "", mgroup: "", },
        { no: "3", select: "", id: "0203", groupnm: "홍보팀", papproval: "", approval: "", mgroup: "", },
        { no: "4", select: "", id: "0204", groupnm: "편성관리", papproval: "", approval: "", mgroup: "", },
        { no: "5", select: "", id: "0505", groupnm: "보도국", papproval: "", approval: "", mgroup: "", },
        { no: "6", select: "", id: "0506", groupnm: "CQ그룹", papproval: "", approval: "", mgroup: "", },
        { no: "7", select: "", id: "0507", groupnm: "해설위원", papproval: "", approval: "", mgroup: "", },
        { no: "8", select: "", id: "0608", groupnm: "보두국게시", papproval: "", approval: "", mgroup: "", },
        { no: "9", select: "", id: "0609", groupnm: "당직인수인계", papproval: "", approval: "", mgroup: "", },
        { no: "10", select: "", id: "0701", groupnm: "영상아카이브", papproval: "", approval: "", mgroup: "", },
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

<style></style>