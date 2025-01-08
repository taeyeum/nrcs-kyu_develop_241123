<template>

  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header " style="height:50px; background-color: #828282; ">
          <div class="row text-sm text-white">
            <div class="col-lg-12 scrollable-div">

              <div class="form-group">
                <div class="row justify-content-start">
                  <div class="col-4 ">
                    <div class="input-group ">
                      <div class="row">
                        <div class="col-1">

                          <button class="btn btn-info btn-sm ">
                            <i class="fa-solid fa-chevron-left"></i>
                          </button>
                        </div>
                      </div>&ensp;
                      <label style=" margin-top: 3px; ">작성일</label>&ensp;
                      <div class="row">
                        <div class="col-8">

                          <input type="date" class="form-control form-control-sm datetimepicker-input"
                            data-target="#reservationdate" />
                        </div>
                        <div class="col-2 ml-n2">
                          <button class="btn btn-info btn-sm ">
                            <i class="fa-solid fa-greater-than"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="col-4">
                    <div class="input-group">
                      <div class="col-6">
                        <select class="form-select form-select-sm" aria-label="Default select example">
                          <option selected>정치부</option>
                        </select>
                      </div>

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
                  </div>



                  <div class="col-4">
                    <div class="button-group">
                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1" data-bs-toggle="modal"
                        data-bs-target="#exampleModal"> 신규
                      </button>
                      <ModalComponent />
                      <button type="button" class="btn btn-info btn-sm mx-1 mb-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal2">
                        수정
                      </button>
                      <ModalComponent2 />
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        삭제</button>
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        승인
                      </button>
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        승인취소
                      </button>
                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1" data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"> 콘텐츠계획화
                      </button>
                      <ModalComponent3 />
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        기사작성
                      </button>
                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1" data-bs-toggle="modal"
                        data-bs-target="#exampleModal4"> 기사맵핑
                      </button>
                      <ModalComponent4 />
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
              <div class="card " style="height:280px;">
                <div class="card-header">
                  <h3 class="card-title text-md">근무자 현황 및 제작계획</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body col-lg-12">
                  <div class="input-group">
                    <textarea id="compose-textarea" class="form-control" style="height: 170px">

                        </textarea>
                  </div>
                  <div class="float-right mt-2">
                    <button type="submit" class="btn btn-sm btn-primary "><i class="far fa-save"></i> 저장</button>
                  </div>
                </div>
              </div>
              <div class="border border-top border-dark"></div>

              <div class="col-lg-12 mb-2 mt-3">
                <router-link to="/interview"><button type="submit" class="btn btn-sm btn-primary "><i
                      class="fa-sharp-duotone fa-solid fa-list"></i>&ensp;계획내용</button></router-link>
                <router-link to="/interview2"><button type="submit" class="btn btn-sm btn-outline-secondary"><i
                      class="fa-sharp-duotone fa-solid fa-clipboard-list"></i>&ensp;배정</button></router-link>
                <router-link to="/interview3"><button type="submit" class="btn btn-sm btn-outline-secondary"><i
                      class="fa-sharp-duotone fa-solid fa-rectangle-list"></i>&ensp;계획이력</button></router-link>
                <router-link to="/interview4"><button type="submit" class="btn btn-sm btn-outline-secondary"><i
                      class="fa-sharp-duotone fa-solid fa-file-pen"></i>&ensp;기사화</button></router-link>


              </div>

              <div class="tab-content " id="pills-tabContent">
                <div class="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                  tabindex="0">
                  <div class="card " style="height:300px;">
                    <div class="row text-sm mx-1">
                      <div class="col-lg-12 ">
                        <div class="input-group mt-2 ">
                          계획구분&ensp;
                          <div class="col-lg-6">
                            <select class="form-select form-select-sm" aria-label="Default select example"
                              v-model="rinfos.division">

                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-12 mt-2">
                        <div class="input-group ">
                          &ensp;&ensp;&ensp;신청자&ensp;
                          <input type="text" class="form-control form-control-sm " placeholder=""
                            aria-describedby="basic-addon2" v-model="rinfos.reporter">
                          &ensp;
                          <input type="text" class="form-control form-control-sm" placeholder=""
                            aria-describedby="basic-addon2">
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="input-group mt-2">
                          &ensp;&ensp;&ensp;&ensp;&ensp;제목&ensp;
                          <input type="text" class="form-control form-control-sm " placeholder=""
                            aria-describedby="basic-addon2" v-model="rinfos.sub">

                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="input-group mt-2 ">
                          &ensp;&ensp;&ensp;&ensp;&ensp;내용&ensp;
                          <textarea id="compose-textarea" class="form-control" rows="5">


                                </textarea>
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
    </div>
  </div>
</template>

<script>

import { ref } from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';

import ModalComponent from "./InterviewAdd.vue";
import ModalComponent2 from "./InterviewCorrect.vue";
import ModalComponent3 from "./InterviewConplan.vue";
import ModalComponent4 from "./InterviewAmapping.vue";


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
      rinfos: '',

      columnDefs: [
        { field: "app", headerName: "승인", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
        { field: "division", headerName: "구분", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 80 },
        { field: "sub", headerName: "제목", hide: false, cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', minWidth: 350, maxWidth: 450, cellStyle: { fontWeight: 'bold' }, },
        { field: "time", headerName: "시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "reporter", headerName: "기자", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "film", headerName: "촬영", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "relay", headerName: "중계차", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "Mfilm", headerName: "M(촬영)", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "Mrelay", headerName: "M(중계)", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },
        { field: "dispatch", headerName: "배차", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 70 },
        { field: "content", headerName: "콘텐츠", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 80 },
        { field: "article", headerName: "기사", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 90 },

        // ...
      ],
      rowData: [
        { app: "1", division: "출연", time: "10:00", sub: "노숙인 축구 월드컵 연습", reporter: "정안나", film: "김자영", relay: "", Mfilm: "임연지", Mrelay: "", dispatch: "3", content: "V", article: "3" },
        { app: "2", division: "출연", time: "10:00", sub: "정치적 개입 여부, sns여부 확인", reporter: "정상호", film: "김자영", relay: "", Mfilm: "임연지", Mrelay: "", dispatch: "3", content: "V", article: "3" },
        { app: "3", division: "전화", time: "10:00", sub: "화려한 대성이의 외출", reporter: "정보리", film: "김자영", relay: "", Mfilm: "임연지", Mrelay: "", dispatch: "3", content: "V", article: "3" },
        { app: "4", division: "전화", time: "10:00", sub: "아침날씨 중계", reporter: "정호두", film: "김자영", relay: "", Mfilm: "임연지", Mrelay: "", dispatch: "3", content: "V", article: "3" },
        { app: "5", division: "출연", time: "10:00", sub: "하늘에서 본 적조 피해", reporter: "정하윤", film: "김자영", relay: "", Mfilm: "임연지", Mrelay: "", dispatch: "3", content: "V", article: "3" }

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



<style></style>
