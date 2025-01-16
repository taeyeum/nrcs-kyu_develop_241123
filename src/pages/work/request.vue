<template>

  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header " style="height:50px; background-color: #828282; ">
          <div class="row text-sm text-white">
            <div class="col-lg-12 scrollable-div">

              <div class="form-group">
                <div class="row justify-content-start">

                  <div class="col-11">
                    <div class="input-group ">
                      <div class="row">
                        <div class="col-3">
                          <input type="date" class="form-control form-control-sm  datetimepicker-input "
                            data-target="#reservationdate" />
                        </div>~
                        <div class="col-3">
                          <input type="date" class="form-control form-control-sm datetimepicker-input"
                            data-target="#reservationdate" />&ensp;
                        </div>


                        <div class="col-4 text-white">
                          <div class="input-group align-items-center">
                            상태&ensp;
                            <div class="row">
                              <div class="col-12">
                                <select class="form-select  form-select-sm" aria-label="Default select example">
                                  <option selected>전체</option>

                                </select>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div class="col-1">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                            <label class="form-check-label" for="inlineCheckbox3">내의뢰</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div class="col-1">
                    <div class="button-group float-right">
                      <button class="btn btn-info btn-sm mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                        영상편집의뢰
                      </button>
                      <ModalComponent4 />
                      <button class="btn btn-info btn-sm mx-1">
                        수정
                      </button>
                      <button class="btn btn-info btn-sm mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        취소
                      </button>
                      <ModalComponent />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-body p-0 m-0 ">

          <div class="row gx-1">

            <div class="col-lg-8 ">
              <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData" :groupHeaders="true"
                :defaultColDef="defaultColDef" @cellClicked="onCellClicked" :headerHeight="28" :rowHeight="35"
                class="ag-theme-alpine" style="flex: 1 1 auto; height: 740px; " @grid-ready="onGridReady">
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

            <div class="col-lg-4  ml-n2">
              <div class="card " style="height:740px; z-index: 000;">
                <div class="row gx-1 mx-1 text-sm">

                  <div class="col-lg-6 mt-3">
                    <div class="input-group ">
                      &ensp;&ensp;&ensp;&ensp;작업부서&ensp;
                      <input type="text" class="form-control form-control-sm  datetimepicker-input "
                        data-target="#reservationdate" v-model="rinfos.depart">

                    </div>
                  </div>

                  <div class="col-lg-12 mt-2">
                    <div class="input-group ">
                      작업의뢰내역&ensp;
                      <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="2"
                        v-model="rinfos.wdetail">
                                  </textarea>
                    </div>
                  </div>

                  <div class="col-lg-12 mt-2">
                    <div class="input-group ">
                      &ensp;&ensp;&ensp;&ensp;첨부파일&ensp;
                      <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1"
                        rows="2"></textarea>
                    </div>
                  </div>

                  <div class="col-lg-12 mt-2">
                    <ag-grid-vue :columnDefs="columnDefs01" :modules="modules" :rowData="rowData01" :groupHeaders="true"
                      :defaultColDef="defaultColDef" :headerHeight="25" :rowHeight="20" class="ag-theme-alpine"
                      style="flex: 1 1 auto; height: 100px; " @grid-ready="onGridReady">

                    </ag-grid-vue>
                  </div>

                  <div class="col-12 mt-3 float-left">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                      <label class="form-check-label" for="inlineCheckbox3">작업 완료시 SMS 수신</label>
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

<script>

import { ref } from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';

import ModalComponent4 from "../Cuesheet/CuesheetcreVideoedit.vue";
import ModalComponent from "./requestDel.vue";

export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent4

  },
  data() {
    return {
      rinfos: '',


      columnDefs: [
        { field: "no", headerName: "번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "date", headerName: "작업의뢰일", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "depart", headerName: "작업부서", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, maxWidth: 150 },
        { field: "worker", headerName: "작업자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "wstatus", headerName: "작업상태", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "wdetail", headerName: "작업의뢰 내용", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, minWidth: 450, maxWidth: 550 },
        { field: "wcomment", headerName: "작업자 코멘트", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, maxWidth: 200 },
        // ...
      ],
      rowData: [
        { no: "1", date: "24-07-11", depart: "영상편집팀", worker: "정하윤", wstatus: "작업대기", wdetail: "오디오를 첨부한 음성으로 변경…", wcomment: "접수했습니다", },
        { no: "2", date: "24-07-12", depart: "그래픽팀", worker: "정홍기", wstatus: "작업중", wdetail: "기존 그래픽에서 년도만 바꿔줘요.", wcomment: "네", },
        { no: "3", date: "24-07-13", depart: "영상편집팀", worker: "정호두", wstatus: "작업완료", wdetail: "모래까지 부탁드립니다.", wcomment: "내일까지 완료하겠습니다", },
        { no: "4", date: "24-07-14", depart: "그래픽팀", worker: "정보리", wstatus: "작업대기", wdetail: "오디오를 첨부한 음성으로 변경…", wcomment: "접수했습니다", },
        { no: "5", date: "24-07-15", depart: "영상편집팀", worker: "정안나", wstatus: "작업대기", wdetail: "기존 그래픽에서 년도만 바꿔줘요.", wcomment: "접수했습니다", },


      ],

      columnDefs01: [
        { field: "no", headerName: "번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "title", headerName: "타이틀", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
        { field: "in", headerName: "IN", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
        { field: "out", headerName: "OUT", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
        // ...
      ],
      rowData01: [
        { no: "1", title: "6.25 전쟁", in: "00:03:23", out: "00:10:12", },
        { no: "2", title: "전쟁의 역사", in: "00:07:23", out: "00:19:12", },
        { no: "3", title: "전쟁의 역사", in: "00:10:00", out: "00:18:08", },

      ]
    }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;

    },

    onCellClicked(params) {
      console.log('params : ' + JSON.stringify(params.data));
      // 다른 input에 값 할당
      this.rinfos = params.data;
    },


  },


}




</script>



<style>
.dropdown-menu {
  z-index: 1000 !important;

}
</style>
