<template>
  <div class="card  mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header aheader" style="height:90px; background-color: #828282; ">
          <div class="row text-sm">
            <div class="col-lg-7 scrollable-div">
              <div class="form-group">
                <div class="row justify-content-start">

                  <div class="col-2 text-white">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label" for="flexRadioDefault1">
                        전체
                      </label>&ensp;&ensp;

                      <div class="form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                        <label class="form-check-label" for="flexRadioDefault2">
                          일반
                        </label>&ensp;&ensp;

                        <div class="form-check-inline">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                            checked>
                          <label class="form-check-label" for="flexRadioDefault2">
                            이슈
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="col-6 ml-5 text-white">
                    <div class="input-group">
                      <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false"
                        style="height:30px; color:white; border:1px solid white;">
                        전체
                      </button>&ensp;
                      <div class="col-4">
                        <input type="date" class="form-control form-control-sm  datetimepicker-input "
                          data-target="#reservationdate" />
                      </div>~
                      <div class="col-4">
                        <input type="date" class="form-control form-control-sm datetimepicker-input"
                          data-target="#reservationdate" />&ensp;
                      </div>



                    </div>
                  </div>

                  <div class="col-3">
                    <div class="input-group">

                      <div class="row">
                        <div class="col-6">
                          <input type="text" class="form-control form-control-sm datetimepicker-input"
                            data-target="#reservationdate" />
                        </div>
                        <div class="col-2">
                          <button class="btn btn-info btn-sm mr-2 mb-2">
                            검색
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <div class="row mt-n4 text-sm">
            <div class="col-lg-7 scrollable-div mt-n1">
              <div class="form-group">
                <div class="row justify-content-start">

                  <div class="col-2 text-white ">
                    <div class="input-group align-items-center">
                      구분&ensp;
                      <div class="row">
                        <div class="col-12">
                          <select class="form-select form-select-sm" aria-label="Default select example">
                            <option selected>전체</option>

                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-2 text-white">
                    <div class="input-group align-items-center">
                      형식&ensp;
                      <div class="row">
                        <div class="col-12">
                          <select class="form-select form-select-sm" aria-label="Default select example">
                            <option selected>전체</option>

                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-2 text-white">
                    <div class="input-group align-items-center">
                      부서&ensp;
                      <div class="row">
                        <div class="col-12">
                          <select class="form-select  form-select-sm" aria-label="Default select example">
                            <option selected>정치부</option>

                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-2 text-white">
                    <div class="input-group align-items-center">
                      분야&ensp;
                      <div class="row">
                        <div class="col-12">
                          <select class="form-select  form-select-sm" aria-label="Default select example">
                            <option selected>정치</option>

                          </select>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div class="col-3 text-white">

                    <div class="input-group align-items-center">
                      SNS&ensp;
                      <div class="row">
                        <div class="col-12">
                          <select class="form-select  form-select-sm" aria-label="Default select example">
                            <option selected>전체</option>
                            <option>SNS게시</option>
                            <option>SNS미게시</option>

                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-1">
                    <div class="form-check form-check-inline text-white">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                      <label class="form-check-label" for="inlineCheckbox3">삭제데이터</label>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row aheader" style="height:65px; background-color: #cccccc;">
          <div class="col-lg-12 mt-1 scrollable-div">
            <div class="form-group">
              <div class="row mx-4 justify-content-start">
                <div class="col-12">
                  <div class="button-group">
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      기사작성
                    </button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      복사
                    </button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      수정</button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      삭제
                    </button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      삭제취소
                    </button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      가승인
                    </button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      가승인취소
                    </button>
                    <button class="btn btn-info btn-sm mr-5 mb-2">
                      인쇄
                    </button>


                    <button class="btn btn-primary btn-sm mr-2 mb-2">
                      부서게시판
                    </button>
                    <button class="btn btn-primary btn-sm mr-2 mb-2">
                      취재계획
                    </button>
                    <button class="btn btn-info btn-sm mr-4 mb-2" data-bs-toggle="modal"
                      data-bs-target="#exampleModal1">
                      취재계획 맵핑
                    </button>
                    <ModalComponent />

                    <router-link to="/Article_management"><button class="btn btn-info btn-sm mr-2 mb-2 "
                        style="height:30px; padding:0; padding-top: 1px;">
                        <img src="../../components/image/screen.png">
                      </button></router-link>
                    <router-link to="/Article_management1"><button class="btn btn-info btn-sm mr-4 mb-2"
                        style="height:30px; padding:0; padding-top: 1px;">
                        <img src="../../components/image/screen2.png">
                      </button></router-link>

                    <button class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal"
                      data-bs-target="#exampleModal2">
                      웹기사 정보
                    </button>
                    <ModalComponent2 />
                    <button class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal"
                      data-bs-target="#exampleModal3">
                      방송이력
                    </button>
                    <ModalComponent3 />
                    <button class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal"
                      data-bs-target="#exampleModal4">
                      기사이력
                    </button>
                    <ModalComponent4 />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div class="card-body p-0 mt-n4">
          <div class="row  gx-1">

            <div class="col-lg-12 ">
              <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData" :groupHeaders="true"
                :defaultColDef="defaultColDef" :headerHeight="28" :rowHeight="35" class="ag-theme-alpine"
                style="flex: 1 1 auto; height: 660px; ">
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

import ModalComponent from './Article_ManagCplanMapping.vue'
import ModalComponent2 from './Article_ManagWarticleInfo.vue'
import ModalComponent3 from './Article_ManagBhistory.vue'
import ModalComponent4 from './Article_ManagAhistory.vue'

export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent2,
    ModalComponent3,
    ModalComponent4


  },
  data() {
    return {
      columnDefs: [
        { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60, },
        { field: "menu", headerName: "", editable: true, cellEditor: 'CellComponentEditor', maxWidth: 30, },
        { field: "sub", headerName: "제목", editable: true, cellEditor: 'CellComponentEditor', minWidth: 430, maxWidth: 500, cellStyle: { fontWeight: 'bold' }, },
        { field: "division", headerName: "구분", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "app", headerName: "승인", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "issue", headerName: "이슈", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "depart", headerName: "부서", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "form", headerName: "형식", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "reporter", headerName: "기자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "video", headerName: "영상", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 80 },
        { field: "graphics", headerName: "그래픽", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 80 },
        { field: "sdate", headerName: "작성일시", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "Author", headerName: "작성자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 80 },
        { field: "edate", headerName: "최종수정일시", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "modifier", headerName: "수정자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 80 },
        { field: "broad", headerName: "방송", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 80 },
        { field: "sns", headerName: "SNS", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 80 },



        // ...
      ],
      rowData: [
        {
          no: 1, menu: "", sub: "'동병상련' 바이든-시 고별회담…트럼프에 하고픈 말 쏟아냈다", app: "", division: "리포트", issue: "정치부", depart: "정하윤", form: "리포트", reporter: "정안나", video: "", graphics: "", sdate: "12-06-19 12:00:00",
          Author: "정안나", edate: "23-06-10 13:30:00", modifier: "정안나", broad: "0", sns: "N"
        },
        {
          no: 2, menu: "", sub: "정치적 개입 여부, sns여부 확인", app: "", division: "리포트", issue: "정치부", depart: "정홍기", form: "리포트", reporter: "정보리", video: "", graphics: "", sdate: "12-06-19 12:00:00",
          Author: "정홍기", edate: "23-06-10 13:30:00", modifier: "정홍기", broad: "0", sns: "N"
        },
        {
          no: 3, menu: "", sub: "'동병상련' 바이든-시 고별회담…트럼프에 하고픈 말 쏟아냈다", app: "", division: "리포트", issue: "정치부", depart: "정상호", form: "리포트", reporter: "정호두", video: "", graphics: "", sdate: "12-06-19 12:00:00",
          Author: "정상호", edate: "23-06-10 13:30:00", modifier: "정상호", broad: "0", sns: "N"
        },

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