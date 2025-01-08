<template>
  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header " style="height:50px; background-color: #828282; ">
          <div class="row text-sm text-white">
            <div class="col-lg-12 scrollable-div">

              <div class="form-group">
                <div class="row justify-content-start">
                  <div class="col-3">

                    <div class="form-check-inline align-middle">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label" for="flexRadioDefault1">
                        전체
                      </label>&ensp;&ensp;

                      <div class="form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                          checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                          요청
                        </label>&ensp;&ensp;

                        <div class="form-check-inline">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                            checked>
                          <label class="form-check-label" for="flexRadioDefault2">
                            배정완료
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div class="col-6">
                    <div class="input-group">
                      <div class="row">

                        <div class="col-4">

                          <input type="date" class="form-control form-control-sm datetimepicker-input"
                            data-target="#reservationdate" />
                        </div>~
                        <div class="col-4">

                          <input type="date" class="form-control form-control-sm datetimepicker-input"
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


                  <div class="col-2 ml-4">
                    <div class="button-group">
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
                      <button type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal3">
                        배정
                      </button>
                      <ModalComponent3 />
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        배정취소
                      </button>
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
            <div class="col-lg-8">
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
                <div class="row mx-1 text-sm mt-3">
                  <div class="col-lg-12">
                    <div class="input-group">
                      &ensp;&ensp;종편실&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example"
                        v-model="rinfos.relief">
                        <option selected>1부조정실</option>
                        <option selected>2부조정실</option>
                        <option selected>3부조정실</option>

                      </select>
                    </div>
                  </div>

                  <div class="col-lg-12 mt-2">
                    <div class="input-group  ">
                      &ensp;&ensp;&ensp;&ensp;제목&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" v-model="rinfos.sub">
                    </div>

                  </div>

                  <div class="col-lg-6  mt-2">
                    <div class="input-group ">
                      예정시간&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" v-model="rinfos.stime">

                    </div>
                  </div>

                  <div class="col-lg-6  mt-2">
                    <div class="input-group">
                      소요시간&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" v-model="rinfos.time">
                      &ensp;시간

                    </div>
                  </div>


                  <div class="col-lg-8 mt-2 ">

                    <div class="input-group ">
                      &ensp;&ensp;신청자&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example"
                        v-model="rinfos.requester">
                        <option selected>정하윤</option>
                        <option selected>정홍기</option>
                        <option selected>정상호</option>
                        <option selected>정호두</option>
                        <option selected>정보리</option>
                      </select>
                      &ensp;
                      <input type="text" class="form-control form-control-sm" placeholder=""
                        aria-describedby="basic-addon2">
                    </div>
                  </div>

                  <div class="col-lg-12  mt-2">
                    <div class="input-group ">
                      방송내용&ensp;
                      <textarea class="form-control w-50" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </div>

                  <div class="col-lg-12  mt-2">
                    <div class="input-group ">
                      &ensp;&ensp;&ensp;&ensp;비고&ensp;
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </div>

                  <div class="col-lg-12  mt-2">
                    <div class="input-group ">
                      배정내용&ensp;
                      <textarea class="form-control w-50" id="exampleFormControlTextarea1" rows="1"></textarea>
                    </div>
                  </div>


                  <!-- /.card-body -->
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

import ModalComponent from "./GeneralAdd.vue";
import ModalComponent2 from "./GeneralCorrect.vue";
import ModalComponent3 from "./GeneralAssign.vue";


export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent2,
    ModalComponent3



  },
  data() {
    return {
      rinfos: '',

      columnDefs: [
        { field: "no", headerName: "번호", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "sub", headerName: "제목", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', minWidth: 450, maxWidth: 550, cellStyle: { fontWeight: 'bold' }, },
        { field: "stime", headerName: "방송예정시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 250 },
        { field: "relief", headerName: "부조", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "requester", headerName: "요청자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "rdepart", headerName: "요청부서", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "assdetail", headerName: "배정내용", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "assign", headerName: "배정", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },

        // ...
      ],
      rowData: [
        { no: "1", sub: "아침날씨 중계", stime: "24-08-02 07:10:00", relief: "1부조정실", requester: "정하윤", rdepart: "정치부", assdetail: "", assign: "V" },
        { no: "2", sub: "하늘에서 본 적조 피해", stime: "24-08-12 07:20:00", relief: "2부조정실", requester: "정홍기", rdepart: "정치부", assdetail: "", assign: "V" },
        { no: "3", sub: "노숙인 축구 월드컵 연습", stime: "24-09-08 07:30:00", relief: "3부조정실", requester: "정상호", rdepart: "정치부", assdetail: "", assign: "V" },
        { no: "4", sub: "정치적 개입 여부, sns여부 확인", stime: "24-10-10 07:40:00", relief: "1부조정실", requester: "정호두", rdepart: "정치부", assdetail: "", assign: "V" },
        { no: "5", sub: "화려한 대성이의 외출", stime: "24-10-22 08:00:00", relief: "2부조정실", requester: "정보리", rdepart: "정치부", assdetail: "", assign: "V" },



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
