<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md text-black">
      <div class="modal-content ">
        <div class="modal-header">
          <h6 class="modal-title" id="exampleModalLabel">그룹복사</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>


        <div class="modal-body">
          <div class="row">
            <div class="col-12 ">
              <div class="input-group align-items-center">
                사용자명&ensp;
                <div class="col-4">
                  <input type="text" class="form-control form-control-sm  datetimepicker-input "
                    data-target="#reservationdate" />
                </div>

                <div class="col-2">
                  <button class="btn btn-info btn-sm mx-1">
                    검색
                  </button>
                </div>

              </div>
            </div>

            <div class="col-lg-12 mt-2">
              <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData" :groupHeaders="true"
                :defaultColDef="defaultColDef" @cellClicked="onCellClicked" :headerHeight="25" :rowHeight="25"
                class="ag-theme-alpine" style="flex: 1 1 auto; height: 150px; " @grid-ready="onGridReady">

              </ag-grid-vue>

            </div>
            <div class="col-lg-12">
              <ag-grid-vue :columnDefs="columnDefs01" :modules="modules" :rowData="rowData01" :groupHeaders="true"
                :defaultColDef="defaultColDef" @cellClicked="onCellClicked" :headerHeight="25" :rowHeight="25"
                class="ag-theme-alpine" style="flex: 1 1 auto; height: 150px; " @grid-ready="onGridReady">

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
        { field: "chl", headerName: "채널", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "depart", headerName: "부서", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "id", headerName: "ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "usernm", headerName: "사용자명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },


        // ...
      ],
      rowData: [
        { no: "1", chl: "MS", depart: "정치부", id: "000001", usernm: "정하윤" },
        { no: "1", chl: "MS", depart: "정치부", id: "000002", usernm: "정홍기" },
        { no: "1", chl: "MS", depart: "정치부", id: "000003", usernm: "정보리" },
        { no: "1", chl: "MS", depart: "정치부", id: "000004", usernm: "정호두" },
        { no: "1", chl: "MS", depart: "정치부", id: "000005", usernm: "정안나" },

      ],
      columnDefs01: [

        { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "id", headerName: "ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "groupnm", headerName: "그룹명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, maxWidth: 120 },
        { field: "papproval", headerName: "가승인", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "approval", headerName: "승인", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 70 },
        { field: "mgroup", headerName: "주그룹", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },

        // ...
      ],
      rowData01: [
        { no: "1", id: "0001", groupnm: "편성운영부", papproval: "V", approval: "V", mgroup: "V", },
        { no: "2", id: "0002", groupnm: "뉴스팀", papproval: "", approval: "", mgroup: "", },
        { no: "3", id: "0003", groupnm: "편집1부", papproval: "V", approval: "V", mgroup: "V", },
        { no: "4", id: "0004", groupnm: "편집2부", papproval: "V", approval: "V", mgroup: "", },
        { no: "5", id: "0005", groupnm: "보두국게시", papproval: "V", approval: "", mgroup: "V", },
        { no: "6", id: "0006", groupnm: "당직인수인계", papproval: "V", approval: "V", mgroup: "", },
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