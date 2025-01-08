<template>

  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header " style="height:50px; background-color: #828282; ">
          <div class="row text-sm text-white">
            <div class="col-lg-12 scrollable-div">

              <div class="form-group">
                <div class="row justify-content-start">
                  <div class="col-8">
                    <div class="input-group">
                      <div class="col-3">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                          <label class="form-check-label" for="inlineCheckbox3">종영 프로그램</label>
                        </div>
                      </div>

                      <div class="col-3">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                          <label class="form-check-label" for="inlineCheckbox3">삭제 프로그램</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="button-group">
                      <button type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal1">
                        신규
                      </button>
                      <ModalComponent />
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        취소
                      </button>

                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        저장
                      </button>
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        삭제
                      </button>
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        삭제취소
                      </button>
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        <i class="fas fa-print"></i>
                        목록인쇄
                      </button>
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                        <i class="fas fa-print"></i>
                        상세내용인쇄
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
                <div class="row mx-1 text-sm">

                  <!-- /.card-header -->

                  <div class="col-lg-12 mt-2 ">
                    <div class="input-group ">
                      프로그램&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" v-model="rinfos.program">

                    </div>
                  </div>

                  <div class="col-lg-6   mt-2">
                    <div class="input-group ">
                      프로구분 &ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected>국제뉴스</option>

                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6  mt-2">
                    <div class="input-group ">
                      방송일자&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected>출연</option>

                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6  mt-2 ">
                    <div class="input-group  ">
                      장르구분&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected>기타</option>

                      </select>
                    </div>
                  </div>


                  <div class="col-lg-6  mt-2">
                    <div class="input-group">
                      &ensp;&ensp;&ensp;&ensp;채널&ensp;
                      <select class="form-select form-select-sm " aria-label="Default select example">
                        <option selected>YTN</option>

                      </select>
                    </div>
                  </div>


                  <div class="col-lg-6  mt-2">

                    <div class="input-group ">
                      제작구분&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected>녹화</option>

                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6   mt-2  d-flex justify-content-end">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                      <label class="form-check-label" for="inlineCheckbox1">큐시트 편집</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                      <label class="form-check-label" for="inlineCheckbox2">종영여부</label>
                    </div>
                  </div>

                  <div class="col-lg-6  mt-2">

                    <div class="input-group ">
                      제작부서&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example"
                        v-model="rinfos.pdepart">
                        <option selected>CQ그룹</option>

                      </select>
                    </div>
                  </div>



                  <div class="col-lg-6  mt-2">

                    <div class="input-group  ">
                      제작년도&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected>13</option>

                      </select>
                    </div>
                  </div>



                  <div class="col-lg-6 mt-2">

                    <div class="input-group  ">
                      스튜디오&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example"
                        v-model="rinfos.studio">
                        <option selected>1스튜디오</option>
                        <option selected>2스튜디오</option>
                        <option selected>3스튜디오</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6  mt-2 ">
                    <div class="input-group ml-4" style="float:right;">
                      &ensp;&ensp;&ensp;&ensp;PD1&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2" v-model="rinfos.PD">
                      &ensp;
                      <button class="btn btn-sm btn-outline-secondary dropdown-toggle " type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">

                      </button>

                    </div>
                  </div>

                  <div class="col-lg-6 mt-2">

                    <div class="input-group  ">
                      &ensp;&ensp;&ensp;&ensp;부조&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example"
                        v-model="rinfos.relief">
                        <option selected>1부조</option>
                        <option selected>2부조</option>
                        <option selected>3부조</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6  mt-2">
                    <div class="input-group  " style="float:right;">
                      &ensp;&ensp;&ensp;&ensp;PD2&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2"> &ensp;
                      <button class="btn btn-sm btn-outline-secondary dropdown-toggle " type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">

                      </button>

                    </div>
                  </div>


                  <div class="col-lg-6   mt-2">
                    <div class="input-group  ">
                      &ensp;CG 위치&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example"
                        v-model="rinfos.CG">
                        <option selected>CG2-1</option>

                      </select>
                    </div>
                  </div>


                  <div class="col-lg-6   mt-2 ">
                    <div class="input-group  ml-4" style="float:right;">
                      &ensp;&ensp;&ensp;Anc1&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2"> &ensp;
                      <button class="btn btn-sm btn-outline-secondary dropdown-toggle " type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">

                      </button>

                    </div>
                  </div>

                  <div class="col-lg-6   mt-2">
                    <div class="input-group  ">
                      &ensp;&ensp;&ensp;Anc2&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected>하</option>

                      </select>
                    </div>
                  </div>


                  <div class="col-lg-6   mt-2 ">
                    <div class="input-group  ml-4" style="float:right;">
                      &ensp;&ensp;&ensp;&ensp;&ensp;TD&ensp;
                      <input type="text" class="form-control form-control-sm " placeholder=""
                        aria-describedby="basic-addon2"> &ensp;
                      <button class="btn btn-sm btn-outline-secondary dropdown-toggle " type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">

                      </button>

                    </div>
                  </div>


                  <div class="col-lg-12   mt-2">
                    <div class="input-group ">
                      방송시간&ensp;
                      <input type="time" class="form-control form-control-sm " placeholder="13"
                        aria-describedby="basic-addon2"> &ensp;~&ensp;
                      <input type="time" class="form-control form-control-sm " placeholder="13"
                        aria-describedby="basic-addon2">&ensp;
                      <input type="time" class="form-control form-control-sm " placeholder="13"
                        aria-describedby="basic-addon2">
                    </div>
                  </div>

                  <div class="col-lg-12   mt-2">
                    <div class="input-group2 ">
                      중계요일&ensp;
                      <div class="form-check form-check-inline ">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">월</label>
                      </div>
                      <div class="form-check form-check-inline ">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">화</label>
                      </div>
                      <div class="form-check form-check-inline ">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                        <label class="form-check-label" for="inlineCheckbox3">수</label>
                      </div>
                      <div class="form-check form-check-inline ">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">목</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">금</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                        <label class="form-check-label" for="inlineCheckbox3">토</label>
                      </div>
                      <div class="form-check form-check-inline ">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                        <label class="form-check-label text-red" for="inlineCheckbox3">일</label>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
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

import ModalComponent from "./BasicOrganizationAdd.vue";




export default {
  components: {
    AgGridVue,
    ModalComponent,



  },
  data() {
    return {
      rinfos: '',

      columnDefs: [

        { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "program", headerName: "프로그램명", editable: true, cellEditor: 'CellComponentEditor', minWidth: 300, maxWidth: 400, cellStyle: { fontWeight: 'bold' }, },
        { field: "stime", headerName: "시작", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "etime", headerName: "종료", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "studio", headerName: "스튜디오", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "relief", headerName: "부조", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "VF", headerName: "VF", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "CG", headerName: "CG", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "PD", headerName: "PD", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "anchor", headerName: "앵커", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
        { field: "pdepart", headerName: "제작부서", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },

      ],
      rowData: [
        { no: "1", program: "MS24(주요,기상)", stime: "00:00:00", etime: "00:16:00", studio: "2스튜디오", relief: "2부조", VF: "VF1", CG: "CG2-1", PD: "정하윤", anchor: "", pdepart: "CQ그룹" },
        { no: "2", program: "아침날씨 중계", stime: "00:10:00", etime: "00:26:00", studio: "1스튜디오", relief: "1부조", VF: "VF1", CG: "CG2-1", PD: "정홍기", anchor: "", pdepart: "CQ그룹" },
        { no: "3", program: "하늘에서 본 적조 피해", stime: "00:20:00", etime: "00:46:00", studio: "3스튜디오", relief: "2부조", VF: "VF1", CG: "CG2-1", PD: "정호두", anchor: "", pdepart: "CQ그룹" },
        { no: "4", program: "정치적 개입 여부, sns여부 확인", stime: "00:30:00", etime: "00:40:00", studio: "2스튜디오", relief: "3부조", VF: "VF1", CG: "CG2-1", PD: "정보리", anchor: "", pdepart: "CQ그룹" },
        { no: "5", program: "화려한 대성이의 외출", stime: "00:40:00", etime: "00:50:00", studio: "1스튜디오", relief: "1부조", VF: "VF1", CG: "CG2-1", PD: "정상호", anchor: "", pdepart: "CQ그룹" },

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

<style>
@media (max-width: 768px) {
  .input-group2 {
    width: 115%;
    letter-spacing: -1px;
  }
}
</style>