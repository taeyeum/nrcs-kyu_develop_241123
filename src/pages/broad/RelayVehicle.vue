<template>

  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header " style="height:50px; background-color: #828282; ">
          <div class="row text-sm text-white">
            <div class="col-lg-12 scrollable-div">

              <div class="form-group">
                <div class="row g-3 justify-content-start">

                  <div class="col-10">
                    <div class="input-group ">
                      <label class="mt-1">구분</label>&ensp;
                      <div class="row">

                        <div class="col-3">
                          <select class="form-select form-select-sm" aria-label="Default select example ">
                            <option selected>전체</option>

                          </select>
                        </div>

                        <div class="col-9">
                          <div class="input-group ">
                            <label class="mt-1">중계예정일</label>&ensp;

                            <div class="col-4">
                              <input type="date" class="form-control form-control-sm  datetimepicker-input "
                                data-target="#reservationdate" />
                            </div>~

                            <div class="col-4">
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


                  <div class="col-2">
                    <div class="form-group ">
                      <button type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal1">
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
                  <div class="col-lg-5 mt-3">
                    <div class="input-group">
                      &ensp;&ensp;&ensp;&ensp;요청&ensp;
                      <select class="form-select form-control-sm " aria-label="Default select example">
                        <option selected></option>

                      </select>
                    </div>
                  </div>

                  <div class="col-lg-3 mt-3">
                    <div class="form-check ">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                        배차필요
                      </label>
                    </div>
                  </div>

                  <div class="col-lg-4 mt-3">
                    <div class="input-group">
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected></option>

                      </select>

                    </div>
                  </div>



                  <div class="col-lg-12 mt-2">
                    <div class="input-group ">
                      &ensp;&ensp;&ensp;&ensp;제목&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" v-model="rinfos.sub">


                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="input-group mt-2">
                      예정시간&ensp;
                      <input type="text" class="form-control form-control-sm " aria-describedby="basic-addon2"
                        v-model="rinfos.rstime">

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


                  <div class="col-lg-6">
                    <div class="input-group  mt-2">
                      귀사예정&ensp;
                      <input type="time" class="form-control form-control-sm " aria-describedby="basic-addon2" style="">

                    </div>
                  </div>


                  <div class="col-lg-12">
                    <div class="input-group   mt-2">
                      중계요일&ensp;
                      <div class="form-check form-check-inline ml-2">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">월</label>
                      </div>
                      <div class="form-check form-check-inline ml-2">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">화</label>
                      </div>
                      <div class="form-check form-check-inline ml-2">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                        <label class="form-check-label" for="inlineCheckbox3">수</label>
                      </div>
                      <div class="form-check form-check-inline ml-2">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">목</label>
                      </div>
                      <div class="form-check form-check-inline ml-2">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">금</label>
                      </div>
                      <div class="form-check form-check-inline ml-2">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                        <label class="form-check-label" for="inlineCheckbox3">토</label>
                      </div>
                      <div class="form-check form-check-inline ml-2">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                        <label class="form-check-label text-red" for="inlineCheckbox3">일</label>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="input-group mt-2  ">
                      중계장소&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" v-model="rinfos.rlocat">

                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="input-group mt-2  ">
                      중계내용&ensp;
                      <textarea id="compose-textarea" class="form-control" rows="2">


                              </textarea>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="input-group mt-2  ">
                      &ensp;&ensp;&ensp;&ensp;비고&ensp;
                      <textarea id="compose-textarea" class="form-control" rows="2">


                              </textarea>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="input-group   mt-2">
                      시작일자&ensp;
                      <input type="time" class="form-control form-control-sm " aria-describedby="basic-addon2" style="">
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="input-group   mt-2">
                      종료일자&ensp;
                      <input type="time" class="form-control form-control-sm " aria-describedby="basic-addon2" style="">
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="input-group   mt-2">
                      중계차량&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example"
                        v-model="rinfos.rvehicle">
                        <option selected>OB VAN</option>

                      </select>
                    </div>
                  </div>

                  <div class="col-lg-12 mt-2">
                    <div class="input-group  ">
                      중계감독&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" v-model="rinfos.bdirector">

                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-group   mt-2">
                      중계요원&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" style="">

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

import ModalComponent from "./RelayvehicleAdd.vue";
import ModalComponent2 from "./RelayvehicleCorrect.vue";


export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent2


  },
  data() {
    return {
      rinfos: '',

      columnDefs: [
        { field: "no", headerName: "번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "sub", headerName: "제목", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', minWidth: 500, maxWidth: 600, cellStyle: { fontWeight: 'bold' }, },
        { field: "rstime", headerName: "예정시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "division", headerName: "구분", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "time", headerName: "소요시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "rlocat", headerName: "중계장소", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "broadday", headerName: "중계요일", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "rvehicle", headerName: "중계차량", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "bdirector", headerName: "중계감독", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "dispatch", headerName: "배차", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 90 }

        // ...
      ],
      rowData: [
        { no: "1", sub: "아침날씨 중계", rstime: "07:00:00", division: "중계", time: "1", rlocat: "숭례문", broadday: "월,수,금", rvehicle: "OB VAN", bdirector: "김감독", dispatch: "V" },
        { no: "2", sub: "하늘에서 본 적조 피해", rstime: "07:30:00", division: "중계", time: "2", rlocat: "숭례문", broadday: "화,목", rvehicle: "VAN", bdirector: "조감독", dispatch: "V" },
        { no: "3", sub: "노숙인 축구 월드컵 연습", rstime: "07:10:00", division: "중계", time: "1", rlocat: "숭례문", broadday: "월,수,금", rvehicle: "OB VAN", bdirector: "정감독", dispatch: "V" },
        { no: "4", sub: "정치적 개입 여부, sns여부 확인", rstime: "08:00:00", division: "중계", time: "2", rlocat: "숭례문", broadday: "토,일", rvehicle: "VAN", bdirector: "장감독", dispatch: "V" },
        { no: "5", sub: "화려한 대성이의 외출", rstime: "08:10:00", division: "중계", time: "1", rlocat: "숭례문", broadday: "월,수,금", rvehicle: "OB VAN", bdirector: "조감독", dispatch: "V" },

      ],

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
