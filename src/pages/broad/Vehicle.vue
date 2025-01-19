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
                      <div class="row">

                        <div class="col-4 mt-1">
                          <div class="form-check-inline ">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                              전체
                            </label>&ensp;&ensp;

                            <div class="form-check-inline">
                              <input class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2">
                              <label class="form-check-label" for="flexRadioDefault2">
                                요청
                              </label>&ensp;&ensp;

                              <div class="form-check-inline">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                  id="flexRadioDefault2" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                  배정완료
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-2 ">

                          <select class="form-select form-select-sm" aria-label="Default select example">
                            <option selected>전체</option>
                          </select>

                        </div>



                        <div class="col-5 ">
                          <div class="input-group">
                            <div class="row">
                              <div class="col-5">
                                <input type="date" class="form-control form-control-sm  datetimepicker-input "
                                  data-target="#reservationdate" />
                              </div>~

                              <div class="col-5">
                                <input type="date" class="form-control form-control-sm datetimepicker-input"
                                  data-target="#reservationdate" />&ensp;
                              </div>

                              <div class="col-1">
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


                  <div class="col-2">
                    <div class="button-group ">
                      <button type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        신규
                      </button>
                      <ModalComponent />
                      <button type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal2">
                        수정
                      </button>
                      <ModalComponent2 />
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        삭제</button>
                      <button class="btn btn-info btn-sm mr-2 mb-2">
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

            <div class="col-lg-8 ">
              <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData" :groupHeaders="true"
                :defaultColDef="defaultColDef" @cellClicked="onCellClicked" :headerHeight="28" :rowHeight="35"
                class="ag-theme-alpine" style="flex: 1 1 auto; height: 740px; ">
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
              <div class="card " style="height:740px;">
                <div class="row mx-1 text-sm">
                  <div class="col-lg-12 mt-3">
                    <div class="input-group">
                      &ensp; &ensp; 제목&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder="1"
                        aria-describedby="basic-addon2" v-model="rinfos.sub">
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="input-group mt-2">
                      예정시간&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" v-model="rinfos.rstime">


                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-group mt-2">
                      소요시간&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" v-model="rinfos.time">
                      시간

                    </div>
                  </div>


                  <div class="col-lg-12">
                    <div class="input-group  mt-2">
                      귀사예정&ensp;
                      <input type="time" class="form-control form-control-sm " aria-describedby="basic-addon2" style="">

                    </div>
                  </div>





                  <div class="col-lg-6 mt-2 ">
                    <div class="input-group">
                      취재형식&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected></option>

                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6 mt-2 ">
                    <div class="input-group ">
                      신청자&ensp;
                      <select class="form-select form-select-sm" placeholder="" aria-label="Default select example"
                        v-model="rinfos.requester">
                        <option selected>정하윤</option>
                        <option selected>정홍기</option>
                        <option selected>정호두</option>
                        <option selected>정보리</option>


                      </select> &ensp;
                      <input type="text" class="form-control form-control-sm" placeholder=""
                        aria-describedby="basic-addon2">

                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="input-group mt-2">
                      취재장소&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" style="">

                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="input-group mt-2 ">
                      취재내용&ensp;
                      <textarea id="compose-textarea" class="form-control" rows="2">


                          </textarea>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="input-group mt-2 ">
                      &ensp;&ensp;&ensp;&ensp;비고&ensp;
                      <textarea id="compose-textarea" class="form-control" rows="2">


                          </textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-group  mt-2">
                      배정내용&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" style="">
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="input-group  mt-2">
                      배차내용&ensp;
                      <ag-grid-vue :columnDefs="columnDefs01" :modules="modules" :rowData="rowData01"
                        :defaultColDef="defaultColDef" @cellClicked="onCellClicked" :headerHeight="25" :rowHeight="20"
                        class="ag-theme-alpine" style="flex: 1 1 auto; height: 200px; ">
                      </ag-grid-vue>
                    </div>
                  </div>

                  <div class="col-lg-12 ">
                    <div class="form-check mt-3 " style="text-align: right;">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                        배정/배차시 SMS 수신
                      </label>
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

import ModalComponent from "./VehicleAdd.vue";
import ModalComponent2 from "./VehicleCorrect.vue";


export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent2,


  },
  data() {
    return {
      rinfos: '',

      columnDefs: [

        { field: "no", headerName: "번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "rstime", headerName: "예정시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
        { field: "sub", headerName: "제목", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', minWidth: 560, maxWidth: 700, cellStyle: { fontWeight: 'bold' }, },
        { field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "rdepart", headerName: "요청부서", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "requester", headerName: "요청자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "locat", headerName: "장소", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "dispatch", headerName: "배차", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },

      ],

      rowData: [
        { no: "1", rstime: "24-08-02 11:00:00", sub: "하늘에서 본 적조 피해", time: "1", rdepart: "정치부", requester: "정하윤", locat: "", dispatch: "V" },
        { no: "2", rstime: "24-08-02 11:00:00", sub: "노숙인 축구 월드컵 연습", time: "1", rdepart: "정치부", requester: "정홍기", locat: "", dispatch: "V" },
        { no: "3", rstime: "24-08-02 11:00:00", sub: "정치적 개입 여부, sns여부 확인", time: "1", rdepart: "정치부", requester: "정호두", locat: "", dispatch: "V" },
        { no: "4", rstime: "24-08-02 11:00:00", sub: "화려한 대성이의 외출", time: "1", rdepart: "정치부", requester: "정보리", locat: "", dispatch: "V" },
        { no: "5", rstime: "24-08-02 11:00:00", sub: "아침날씨 중계", time: "1", rdepart: "정치부", requester: "정하윤", locat: "", dispatch: "V" },

      ],

      columnDefs01: [


        { field: "no", headerName: "순번", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 70 },
        { field: "vehicleno", headerName: "차량번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "cartype", headerName: "차종", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "rtrip", headerName: "왕복여부", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth: 100 },
        { field: "article", headerName: "기사", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth: 100 },
        { field: "phoneno", headerName: "전화번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', maxWidth: 150 },

      ],

      rowData01: [
        { no: "촬영", vehicleno: "31러2133", cartype: "아반떼XD", rtrip: "왕복", time: "1시간", article: "홍길동", phoneno: "010-0000-0000" },
        { no: "촬영", vehicleno: "31러2133", cartype: "아반떼XD", rtrip: "왕복", time: "1시간", article: "홍길동", phoneno: "010-0000-0000" },

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


    }
  },


}
</script>
