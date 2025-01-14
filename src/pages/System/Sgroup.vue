<template>

  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header" style="height:50px; background-color: #828282; ">
          <div class="row text-sm text-white">
            <div class="col-lg-12 scrollable-div">

              <div class="form-group">
                <div class="row justify-content-start">

                  <div class="col-10">
                    <div class="input-group ">
                      <label class="mt-1">채널</label>&ensp;
                      <div class="row">

                        <div class="col-2">
                          <select class="form-select form-select-sm " aria-label="Default select example">
                            <option selected>MS</option>

                          </select>
                        </div>


                        <div class="col-8 ">
                          <div class="input-group align-items-center">
                            그룹명&ensp;
                            <div class="row">
                              <div class="col-5">
                                <input type="text" class="form-control form-control-sm  datetimepicker-input "
                                  data-target="#reservationdate" />
                              </div>

                              <div class="col-1">
                                <button class="btn btn-info btn-sm mx-1">
                                  검색
                                </button>
                              </div>
                            </div>

                          </div>
                        </div>


                        <div class="col-2 ml-n4">
                          <div class=" form-check form-check-inline text-white">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                            <label class="form-check-label" for="inlineCheckbox3">삭제데이터</label>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="col-2 ">
                    <div class="button-group ">
                      <button type="button" class="btn btn-info btn-sm mr-2 mb-2" @click="addRow">
                        신규
                      </button>
                      <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                        삭제
                      </button>
                      <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                        삭제취소
                      </button>
                      <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                        저장
                      </button>
                      <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                        인쇄
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="card-body p-0 m-0 text-sm">
          <div class="row gx-1">

            <div class="col-lg-7 ">
              <div class="card" style="height:720px;">
                그룹 목록
                <ag-grid-vue ref="grid1" :columnDefs="columnDefs" :modules="modules" :rowData="rowData"
                  :groupHeaders="true" :defaultColDef="defaultColDef" :rowSelection="rowSelection"
                  @cellClicked="onCellClicked" :headerHeight="28" :rowHeight="35" class="ag-theme-alpine"
                  style="flex: 1 1 auto; height: 720px; " @grid-ready="onGridReady1">

                </ag-grid-vue>
              </div>

              <div class="nav text-sm " style="display:flex; justify-content: center; ">
                <nav aria-label="Page navigation example">
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

            <div class="col-lg-5  ml-n2 text-sm">
              <div class="card " style="height:740px;">
                <div class="row gx-1">
                  <div class="col-lg-10">
                    그룹 별 사용자 목록
                    <ag-grid-vue ref="grid2" :columnDefs="columnDefs01" :modules="modules" :rowData="rowData01"
                      :groupHeaders="true" :defaultColDef="defaultColDef" @cellClicked="onCellClicked"
                      :headerHeight="28" :rowHeight="35" class="ag-theme-alpine" style="flex: 1 1 auto; height: 720px; "
                      @grid-ready="onGridReady2">
                    </ag-grid-vue>
                  </div>

                  <div class="col-lg-2 mt-4 ml-n3">
                    <button type="button" class="btn btn-info btn-sm mr-2 mb-2 float-right " data-bs-toggle="modal"
                      data-bs-target="#exampleModal1">
                      사용자추가
                    </button>
                    <ModalComponent />
                    <button type="button" class="btn btn-info btn-sm mr-2 mb-2 float-right" data-bs-toggle="modal"
                      data-bs-target="#exampleModal2">
                      사용자삭제
                    </button>
                    <ModalComponent2 />
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


<script>


import { ref } from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';


import ModalComponent from "./SgroupAdduser.vue";
import ModalComponent2 from "./SgroupDeluser.vue";

export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent2
  },



  data() {
    return {
      gridApi1: null,
      gridApi2: null,



      columnDefs: [

        { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "id", headerName: "ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "groupnm", headerName: "그룹명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 300, maxWidth: 400 },
        { field: "field", headerName: "분야", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "order", headerName: "순서", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "farticle", headerName: "기사용", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "fposting", headerName: "게시용", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },

        // ...
      ],
      rowData: [
        { no: "1", id: "0201", groupnm: "편성운영부", field: "기타", order: "100", farticle: "Y", fposting: "Y" },
        { no: "2", id: "0202", groupnm: "심의실", field: "기타", order: "", farticle: "", fposting: "Y" },
        { no: "3", id: "0203", groupnm: "홍보팀", field: "", order: "", farticle: "", fposting: "Y" },
        { no: "4", id: "0204", groupnm: "편성관리", field: "", order: "", farticle: "Y", fposting: "Y" },
        { no: "5", id: "0205", groupnm: "보도국", field: "", order: "000", farticle: "Y", fposting: "Y" },


      ],


      columnDefs01: [

        { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "id", headerName: "ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        {
          field: "select", headerName: "선택", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90, cellRenderer: params => {
            const eInput = document.createElement('input');
            eInput.type = 'checkbox';
            eInput.checked = params.data.isChecked;
            eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
            return eInput;

          }
        },
        { field: "usernm", headerName: "사용자명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, maxWidth: 120, },
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
          field: "approval", headerName: "승인", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 80, cellRenderer: params => {
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
      rowData01: [
        { no: "1", select: "", id: "0201", usernm: "정하윤", papproval: "", approval: "", mgroup: "", },
        { no: "2", select: "", id: "0202", usernm: "정호두", papproval: "", approval: "", mgroup: "", },
        { no: "3", select: "", id: "0203", usernm: "정보리", papproval: "", approval: "", mgroup: "", },
        { no: "4", select: "", id: "0204", usernm: "정상호", papproval: "", approval: "", mgroup: "", },
        { no: "5", select: "", id: "0505", usernm: "정태음", papproval: "", approval: "", mgroup: "", },
        { no: "6", select: "", id: "0506", usernm: "정하윤", papproval: "", approval: "", mgroup: "", },
        { no: "7", select: "", id: "0507", usernm: "정안나", papproval: "", approval: "", mgroup: "", },
        { no: "8", select: "", id: "0608", usernm: "정호두", papproval: "", approval: "", mgroup: "", },
        { no: "9", select: "", id: "0609", usernm: "정홍기", papproval: "", approval: "", mgroup: "", },
        { no: "10", select: "", id: "0701", usernm: "정상호", papproval: "", approval: "", mgroup: "", },
      ],

    }
  },



  methods: {
    onGridReady1(params) {
      this.gridApi1 = params.api;
      this.gridColumnApi = params.columnApi;

    },
    onGridReady2(params) {
      this.gridApi2 = params.api;
      this.gridColumnApi = params.columnApi;

    },

    addRow() {
      const newRowData = {


      };
      this.gridApi1.applyTransaction({ add: [newRowData] });
    }
  }
}




</script>



<style></style>