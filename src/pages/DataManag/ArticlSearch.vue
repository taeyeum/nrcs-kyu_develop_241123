<template>

  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header" style="height:90px; background-color: #828282; ">
          <div class="row text-sm text-white">
            <div class="col-lg-8 scrollable-div">

              <div class="form-group">
                <div class="row justify-content-start">


                  <div class="col-2">
                    <div class="form-check ">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                      <label class="form-check-label" for="inlineCheckbox3">검색기간</label>
                    </div>
                  </div>

                  <div class="col-5 ">
                    <div class="input-group">
                      <div class="col-5">
                        <input type="date" class="form-control form-control-sm  datetimepicker-input "
                          data-target="#reservationdate" />
                      </div>~
                      <div class="col-5">
                        <input type="date" class="form-control form-control-sm datetimepicker-input"
                          data-target="#reservationdate" />&ensp;
                      </div>




                    </div>
                  </div>

                  <div class="col-3">
                    <div class="button-group">
                      <button class="btn btn-info btn-sm mx-1">
                        월
                      </button>
                      <button class="btn btn-info btn-sm mx-1">
                        주
                      </button>
                      <button class="btn btn-info btn-sm mx-1">
                        일
                      </button>
                    </div>
                  </div>


                  <div class="col-1">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                      <label class="form-check-label" for="inlineCheckbox3">OR</label>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <div class="row mt-n4 text-sm mt-n2 text-white">
            <div class="col-lg-12 scrollable-div">
              <div class="form-group">
                <div class="row justify-content-start">

                  <div class="col-9 ">
                    <div class="input-group ">
                      <label class="mt-1">구분</label>&ensp;
                      <div class="row">
                        <div class="col-2">
                          <select class="form-select  form-select-sm" aria-label="Default select example">
                            <option selected>전체</option>

                          </select>
                        </div>


                        <div class="col-3 ">
                          <div class="input-group align-items-center">
                            분야&ensp;
                            <div class="row">
                              <div class="col-12">
                                <select class="form-select form-select-sm" aria-label="Default select example">
                                  <option selected>전체</option>

                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-5">
                          <div class="input-group">

                            <div class="row">
                              <div class="col-10">
                                <input type="text" class="form-control form-control-sm datetimepicker-input"
                                  data-target="#reservationdate" />
                              </div>
                              <div class="col-2">
                                <button class="btn btn-info btn-sm mr-2 mb-2">
                                  검색
                                </button>
                                <button class="btn btn-info btn-sm mr-2 mb-2">
                                  상세검색
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="col-3">
                    <div class="button-group">
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        방송이력
                      </button>
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        기사이력
                      </button>
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        목록인쇄
                      </button>
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        상세인쇄
                      </button>

                      <router-link to="/ArticlSearch"><button class="btn btn-info btn-sm mr-2 mb-2 "
                          style="height:30px; padding:0; padding-top: 1px;">
                          <img src="../../components/image/screen.png">
                        </button></router-link>
                      <router-link to="/ArticlSearch1"><button class="btn btn-info btn-sm mr-4 mb-2"
                          style="height:30px; padding:0; padding-top: 1px;">
                          <img src="../../components/image/screen2.png">
                        </button></router-link>


                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>


        <div class="card-body p-0 m-0 ">
          <div class="row gx-1">

            <div class="col-lg-12 ">
              <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData" :groupHeaders="true"
                :defaultColDef="defaultColDef" @cellClicked="onCellClicked" :headerHeight="28" :rowHeight="35"
                class="ag-theme-alpine" style="flex: 1 1 auto; height: 700px; " @grid-ready="onGridReady">

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




export default {
  components: {
    AgGridVue,



  },
  data() {
    return {
      columnDefs: [

        { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "sub", headerName: "제목", editable: true, cellEditor: 'CellComponentEditor', minWidth: 530, maxWidth: 650, cellStyle: { fontWeight: 'bold' }, },
        { field: "etc", headerName: "", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "division", headerName: "구분", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "issue", headerName: "이슈", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "depart", headerName: "부서", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "form", headerName: "형식", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "reporter", headerName: "기자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "video", headerName: "영상", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "graphics", headerName: "그래픽", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "vrequest", headerName: "영상편집의뢰", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "grequest", headerName: "그래픽의뢰", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "date", headerName: "작성일시", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "Author", headerName: "작성자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "lmodifi", headerName: "최종수정", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "modifier", headerName: "수정자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },



        // ...
      ],
      rowData: [
        {
          no: "1", sub: "암사동 개발건 입니다.", etc: "", division: "", issue: "암사동", depart: "정치부", form: "자료", reporter: "정하윤", video: "", graphics: "1/1", vrequest: "",
          grequest: "1/1", date: "24-06-20 12:23:30", Author: "정홍기", lmodifi: "24-06-20", modifier: "정홍기"
        },
        {
          no: "2", sub: "국무부 '중국과 한반도'", etc: "", division: "", issue: "한반도", depart: "정치부", form: "자료", reporter: "정호두", video: "", graphics: "1/1", vrequest: "",
          grequest: "1/1", date: "24-06-20 12:23:30", Author: "정보리", lmodifi: "24-06-20", modifier: "정보리"
        },
        {
          no: "3", sub: "판교 정보사 예하부대 노출에 당혹", etc: "", division: "", issue: "예하부대", depart: "정치부", form: "자료", reporter: "정상호", video: "", graphics: "1/1", vrequest: "",
          grequest: "1/1", date: "24-06-20 12:23:30", Author: "정안나", lmodifi: "24-06-20", modifier: "정안나"
        },
        {
          no: "4", sub: " 탄핵안 내려다 보류 급선회", etc: "", division: "", issue: "탄핵안", depart: "정치부", form: "자료", reporter: "정하윤", video: "", graphics: "1/1", vrequest: "",
          grequest: "1/1", date: "24-06-20 12:23:30", Author: "정상호", lmodifi: "24-06-20", modifier: "정상호"
        },
        {
          no: "5", sub: "또 다른 탄핵이라니 시대유감", etc: "", division: "", issue: "탄핵", depart: "정치부", form: "자료", reporter: "정보리", video: "", graphics: "1/1", vrequest: "",
          grequest: "1/1", date: "24-06-20 12:23:30", Author: "정태음", lmodifi: "24-06-20", modifier: "정태음"
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