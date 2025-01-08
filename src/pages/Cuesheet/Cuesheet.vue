<template>
  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header " style="height:50px; background-color: #828282; ">
          <div class="row text-sm text-white">
            <div class="col-lg-12 scrollable-div">

              <div class="form-group">
                <div class="row justify-content-start">
                  <div class="col-9">
                    <div class="input-group ">
                      <label class="d-flex align-items-center">기간</label>&ensp;
                      <div class="row">
                        <div class="col-5">
                          <input type="date" class="form-control form-control-sm datetimepicker-input"
                            data-target="#reservationdate" />
                        </div>~
                        <div class="col-5">
                          <input type="date" class="form-control form-control-sm datetimepicker-input"
                            data-target="#reservationdate" />
                        </div>
                      </div>


                      <div class="col-4">
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

                  <div class="col-3">
                    <div class="button-group">
                      <button type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        자막템플릿변환
                      </button>
                      <ModalComponent />

                      <router-link to="/Cuesheet2"><button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                          운영참조등록
                        </button></router-link>
                      <button type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal1">
                        락해제
                      </button>
                      <ModalComponent1 />
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        <i class="fas fa-copy"></i>
                        복사
                      </button>
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

        <div class="card-body p-0 m-0 ">
          <div class="row gx-1">
            <div class="col-lg-12">
              <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData" :groupHeaders="true"
                :defaultColDef="defaultColDef" @cellClicked="onCellClicked" :headerHeight="28" :rowHeight="35"
                class="ag-theme-alpine" style="flex: 1 1 auto; height: 800px">
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

            <div class="modal fade" variant="outline-secondary" data-bs-toggle="modal6" data-bs-target="#exampleModal6"
              @click="showModal = true">

            </div>
            <ModalComponent6 @childEvent="cuesheetCreate" v-if="showModal" :infos="infos" />



          </div>
        </div>

      </div>
      <!-- /.col -->
    </div>

  </div>
</template>



<script>

import { ref } from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';

import ModalComponent from "./CuesheetConversionsub.vue";
import ModalComponent1 from "./CuesheetUnlock.vue";
import ModalComponent6 from "./CuesheetSelect.vue";


export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent1,
    ModalComponent6,




  },
  data() {
    return {
      showModal: false,
      rowData: null,
      infos: null,
      rinfos: '',


      columnDefs: [
        { field: "no", headerName: "", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "edit", headerName: "편집", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth: 120, cellStyle: { fontWeight: 'bold' }, },
        { field: "program", headerName: "프로그램", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, minWidth: 800, maxWidth: 900 },
        { field: "date", headerName: "방송일자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
        { field: "stime", headerName: "시작", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "etime", headerName: "종료", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "studio", headerName: "스튜디오", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "relief", headerName: "부조", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "article", headerName: "기사", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "broadcast", headerName: "방송", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },

        // ...
      ],
      rowData: [
        { no: "1", edit: "편집", program: "MS24 (경기, 인천, 주요, 기상)", date: "24-04-20", stime: "17:00:00", etime: "17:20:00", studio: "1 스튜디오", relief: "2부조", article: "0", broadcast: "방송완료", },
        { no: "2", edit: "편집", program: "아침날씨 중계", date: "24-06-22", stime: "16:00:00", etime: "16:11:00", studio: "2 스튜디오", relief: "2부조", article: "0", broadcast: "방송완료", },
        { no: "3", edit: "편집", program: "하늘에서 본 적조 피해", date: "24-07-12", stime: "11:00:00", etime: "11:13:00", studio: "3 스튜디오", relief: "2부조", article: "0", broadcast: "방송완료", },
        { no: "4", edit: "편집", program: "정치적 개입 여부, sns여부 확인", date: "24-07-20", stime: "16:00:00", etime: "16:17:00", studio: "4 스튜디오", relief: "2부조", article: "0", broadcast: "방송완료", },
        { no: "5", edit: "편집", program: "화려한 대성이의 외출", date: "24-08-02", stime: "18:00:00", etime: "18:30:00", studio: "5 스튜디오", relief: "2부조", article: "0", broadcast: "방송완료", },

      ],

    }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;

    },

    onCellClicked(params) {
      this.infos = params.data;
      console.log('data : ' + JSON.stringify(this.infos));
      this.showModal = true;

      const myModal = new bootstrap.Modal(document.getElementById('exampleModal6'));
      myModal.show();
    },
    cuesheetCreate(rinfos) {
      console.log('cuesheet create ==============================: ' + rinfos);
      const invalue = JSON.stringify(rinfos);
      console.log('cuesheet create invalue==============================: ' + invalue);

      this.$router.push({
        name: "Cuesheetcreate",
        params: { infos: this.userInfo },

      });
    },



  },


}




</script>