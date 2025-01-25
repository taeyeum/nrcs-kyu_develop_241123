<template>

  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header" style="height:50px; background-color: #828282; ">
          <div class="row text-sm text-white">
            <div class="col-lg-12 scrollable-div">

              <div class="form-group">
                <div class="row justify-content-start">
                  <div class="col-8">
                    <div class="input-group">
                      <div class="row">
                        <div class="col-1">

                          <button class="btn btn-info btn-sm ">
                            <i class="fa-solid fa-chevron-left"></i>
                          </button>
                        </div>
                      </div>&ensp;
                      <label style=" margin-top: 3px; ">방송일자</label>&ensp;
                      <div class="row">
                        <div class="col-5">

                          <input type="date" class="form-control form-control-sm datetimepicker-input"
                            data-target="#reservationdate" />
                        </div>
                        <div class="col-2 ml-n2">
                          <button class="btn btn-info btn-sm ">
                            <i class="fa-solid fa-greater-than"></i>
                          </button>
                        </div>


                        <div class="col-3 mt-1">
                          <div class="form-check form-check-inline text-white ">
                            <input class="form-check-input " type="checkbox" id="inlineCheckbox3" value="option3">
                            <label class="form-check-label " for="inlineCheckbox3">삭제데이터</label>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>


                  <div class="col-4 ">

                    <div class="button-group" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-info btn-sm mb-2 mx-1 ">

                        신규
                      </button>
                      <button type="button" class="btn btn-info btn-sm mb-2 mx-1" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">

                        복사
                      </button>
                      <ModalComponent />

                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1">

                        새로고침
                      </button>
                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1">

                        저장
                      </button>
                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1">

                        완료
                      </button>
                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1">

                        완료취소
                      </button>
                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1">

                        삭제
                      </button>
                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1">

                        삭제취소
                      </button>
                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1">

                        인쇄
                      </button>


                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-body p-0">

        <div class="row gx-1">

          <div class="col-lg-12 ">
            <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData" :groupHeaders="true"
              :defaultColDef="defaultColDef" :headerHeight="28" :rowHeight="35" class="ag-theme-alpine"
              style="flex: 1 1 auto; height: 760px; ">

            </ag-grid-vue>
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

import ModalComponent from './IssueCopy.vue'




export default {
  components: {
    AgGridVue,
    ModalComponent,





  },
  data() {
    return {
      columnDefs: [
        {
          field: "select", headerName: "선택", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100, cellRenderer: params => {
            const eInput = document.createElement('input');
            eInput.type = 'checkbox';
            eInput.checked = params.data.isChecked;
            eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
            return eInput;

          }
        },
        { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "issue", headerName: "이슈내용", editable: true, cellEditor: 'CellComponentEditor', minWidth: 900, maxWidth: 1000, cellStyle: { fontWeight: 'bold' }, },
        { field: "Keyword", headerName: "핵심어", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 400, maxwidth: 500 },
        { field: "sdate", headerName: "작성일시", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 400 },
        { field: "Author", headerName: "작성자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 300 },



        // ...
      ],
      rowData: [
        { select: "", no: "1", issue: "정치적 개입 여부, sns여부 확인", Keyword: "국정원", sdate: " 24-06-12 10:21:00", Author: "정하윤" },
        { select: "", no: "2", issue: "노숙인 축구 월드컵 연습", Keyword: "노숙인", sdate: " 24-06-20 13:11:00", Author: "정보리" },
        { select: "", no: "3", issue: "화려한 대성이의 외출", Keyword: "외출", sdate: " 24-07-11 13:22:00", Author: "정호두" },
        { select: "", no: "4", issue: "아침날씨 중계", Keyword: "아침날씨", sdate: " 24-07-20 15:11:00", Author: "정안나" },
        { select: "", no: "5", issue: "하늘에서 본 적조 피해", Keyword: "적조", sdate: " 24-07-23 13:09:00", Author: "정홍기" },
      ]
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
.ag-header-cell-label {
  justify-content: center;
}

@media (max-width: 768px) {
  .card {
    margin-top: 60px;
  }

  .form-group {
    overflow-x: scroll;
    -ms-overflow-style: none;
    white-space: nowrap;
    width: 800px;

  }


  .navbar-collapse {
    position: fixed;
    top: 60px;
    left: -300px;
    /* 메뉴가 닫힌 상태에서 왼쪽으로 300px 이동 */
    width: 200px;
    height: 100vh;
    background-color: #444242;

  }

  .navbar-brand {
    position: relative;
    right: 100%;
  }


  .dropdown {
    justify-content: center;
    padding-left: 10%;
  }

  .navbar-collapse.show {
    left: 0;
    /* 메뉴가 열린 상태에서 왼쪽으로 0px 이동 */
  }

}
</style>