<template>

  <div class="card  mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header" style="height:50px; background-color: #828282; ">
          <div class="row text-sm text-white">
            <div class="col-lg-12 scrollable-div">

              <div class="form-group">
                <div class="row justify-content-start">

                  <div class="col-9">
                    <div class="input-group ">
                      <div class="row">

                        <div class="col-5 mt-1">
                          <div class="form-check-inline ">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                              전체
                            </label>&ensp;&ensp;

                            <div class="form-check-inline">
                              <input class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2">
                              <label class="form-check-label" for="flexRadioDefault2">
                                일반
                              </label>&ensp;&ensp;

                              <div class="form-check-inline">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                  id="flexRadioDefault2" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                  이슈
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-3 ">

                          <select class="form-select form-select-sm" aria-label="Default select example">
                            <option selected>전체</option>
                          </select>

                        </div>



                        <div class="col-4 ">
                          <div class="input-group align-items-center">
                            일자&ensp;
                            <input type="date" class="form-control form-control-sm datetimepicker-input"
                              data-target="#reservationdate" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="col-2">

                    <div class="button-group" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-info btn-sm mx-1 mb-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        신규
                      </button>
                      <ModalComponent />
                      <button type="button" class="btn btn-info btn-sm mx-1 mb-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal2">
                        수정
                      </button>
                      <ModalComponent2 />
                      <button type="button" class="btn btn-info btn-sm mx-1 mb-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal3">
                        복사
                      </button>
                      <ModalComponent3 />
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        새로고침
                      </button>
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        삭제
                      </button>
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        기사화
                      </button>
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        인쇄
                      </button>

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
  </div>
</template>


<script>

import { ref } from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';

import ModalComponent from './ContentAdd.vue'
import ModalComponent2 from './ContentCorrect.vue'
import ModalComponent3 from './ContentCopy.vue'


export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent2,
    ModalComponent3,





  },
  data() {
    return {
      columnDefs: [
        {
          field: "select", headerName: "선택", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60, cellRenderer: params => {
            const eInput = document.createElement('input');
            eInput.type = 'checkbox';
            eInput.checked = params.data.isChecked;
            eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
            return eInput;

          }
        },
        { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "sub", headerName: "제목", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { fontWeight: 'bold', }, minWidth: 740, maxWidth: 800 },
        { field: "issue", headerName: "이슈", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "form", headerName: "형식", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "broad", headerName: "방송", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "depart", headerName: "부서", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "reporter", headerName: "기자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "explan", headerName: "상세설명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 300 },
        { field: "date", headerName: "작성일시", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 300 },
        { field: "Author", headerName: "작성자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
      ],
      rowData: [
        { select: "", no: "1", sub: "화려한 대성이의 외출", issue: "", form: "자료", broad: "00시", depart: "정치부", reporter: "홍길동", explan: "대성이의 외출", date: " 24-05-20 13:21:00", Author: "정상호" },
        { select: "", no: "2", sub: "정치적 개입 여부, sns여부 확인", issue: "", form: "자료", broad: "00시", depart: "정치부", reporter: "정하윤", explan: "정치적 개입 여부", date: " 24-06-22 13:21:00", Author: "정태음" },
        { select: "", no: "3", sub: "노숙인 축구 월드컵 연습", issue: "", form: "자료", broad: "00시", depart: "정치부", reporter: "정안나", explan: "노숙인 축구", date: " 24-06-28 13:08:00", Author: "정하윤" },
        { select: "", no: "4", sub: "화려한 대성이의 외출", issue: "", form: "자료", broad: "00시", depart: "정치부", reporter: "정홍기", explan: "대성이의 외출", date: " 24-07-12 13:12:00", Author: "정홍기" },
        { select: "", no: "5", sub: "아침날씨 중계", issue: "", form: "자료", broad: "00시", depart: "정치부", reporter: "정호두", explan: "아침날씨", date: " 24-08-11 13:29:00", Author: "홍길동" },
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


<style></style>
