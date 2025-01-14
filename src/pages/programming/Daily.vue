<template>

  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header " style="height:50px; background-color: #828282; ">
          <div class="row text-sm text-white">
            <div class="col-lg-12 scrollable-div">

              <div class="form-group">
                <div class="row justify-content-start">
                  <div class="col-10">
                    <div class="input-group ">
                      <label class="mt-1">방송일</label>&ensp;
                      <div class="row">

                        <div class="col-3">
                          <input type="date" class="form-control form-control-sm datetimepicker-input"
                            data-target="#reservationdate" />
                        </div>



                        <div class="col-4 ">
                          <div class="form-check-inline align-middle">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                              전체
                            </label>&ensp;&ensp;

                            <div class="form-check-inline">
                              <input class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2" checked>
                              <label class="form-check-label" for="flexRadioDefault2">
                                편성
                              </label>&ensp;&ensp;

                              <div class="form-check-inline">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                  id="flexRadioDefault2" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                  미편성
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div class="col-3">
                          <div class="input-group">
                            <input type="text" class="form-control form-control-sm " placeholder=""
                              aria-describedby="basic-addon2">

                          </div>
                        </div>

                        <div class="col-1">
                          <div class="button-group">
                            <button class="btn btn-info btn-sm mr-2 mb-2">
                              검색
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>


                  <div class="col-2 ">
                    <div class="button-group">
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        <i class="fas fa-print"></i>
                        인쇄
                      </button>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-body p-0 m-0">
          <div class="row gx-1">
            <div class="col-lg-12">

              <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData" :groupHeaders="true"
                :defaultColDef="defaultColDef" class="ag-theme-alpine" @cellClicked="onCellClicked" :headerHeight="28"
                :rowHeight="35" style="flex: 1 1 auto; height: 800px; ">
              </ag-grid-vue>
            </div>
          </div>



          <!-- /.col -->
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

        { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "explan", headerName: "설명", editable: true, cellEditor: 'CellComponentEditor', minWidth: 1050, maxWidth: 1200, cellStyle: { fontWeight: 'bold' }, },
        { field: "bdate", headerName: "방송일자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 300, maxWidth: 400 },
        { field: "Pstatus", headerName: "편성여부", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
        { field: "cdate", headerName: "작성일시", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 300, maxWidth: 400 },
      ],
      rowData: [
        { no: "1", explan: "0445 SO보상", bdate: "13-06-20 수", Pstatus: "미편성", cdate: "24-08-02 10:00:00" },
        { no: "2", explan: "노숙인 축구연습", bdate: "13-06-20 수", Pstatus: "미편성", cdate: "24-08-02 10:00:00" },
        { no: "3", explan: "아침날씨 중계", bdate: "13-06-20 수", Pstatus: "미편성", cdate: "24-08-02 10:00:00" },
        { no: "4", explan: "하늘에서 본 적조 피해", bdate: "13-06-20 수", Pstatus: "미편성", cdate: "24-08-02 10:00:00" },
        { no: "5", explan: "정치적 개입 여부, sns여부 확인", bdate: "13-06-20 수", Pstatus: "미편성", cdate: "24-08-02 10:00:00" }

      ],


    }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;

    },
    onCellClicked(params) {
      // 클릭된 셀의 데이터를 이용하여 이동할 페이지나 컴포넌트의 경로를 결정
      const selectedRowData = this.rowData[params.rowIndex];
      const detailPageUrl = `/Daily2/`; // 예시: 상세 페이지 URL 생성

      // 이동하는 방법 (예: router-link, window.location.href 등)
      this.$router.push(detailPageUrl); // Vue Router 사용 시
      // window.location.href = detailPageUrl; // 일반적인 페이지 이동
    }

  },


}




</script>
