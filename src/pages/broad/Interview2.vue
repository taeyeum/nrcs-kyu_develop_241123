<template>

  <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header " style="height:50px; background-color: #828282; ">
          <div class="row text-sm ">
            <div class="col-lg-12 scrollable-div">

              <div class="form-group">
                <div class="row justify-content-start">
                  <div class="col-5">
                    <div class="input-group ">
                      <label style="color:white;">작성일</label> &ensp;
                      <div class="col-5">
                        <input type="date" class="form-control form-control-sm datetimepicker-input"
                          data-target="#reservationdate" />
                      </div>

                      <button class="btn btn-info btn-sm mx-1">
                        오늘
                      </button>
                      <button class="btn btn-info btn-sm mx-1">
                        <i class="fa-solid fa-greater-than"></i>
                      </button>
                    </div>
                  </div>


                  <div class="col-1">
                    <div class="input-group">
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected>정치부</option>
                      </select>

                    </div>
                  </div>
                  <div class="col-2">
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



                  <div class="col-4">
                    <div class="button-group">
                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1" data-bs-toggle="modal"
                        data-bs-target="#exampleModal"> 신규
                      </button>
                      <ModalComponent />
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        수정
                      </button>
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        삭제</button>
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        승인
                      </button>
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        승인취소
                      </button>
                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1" data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"> 콘텐츠계획화
                      </button>
                      <ModalComponent2 />
                      <button class="btn btn-info btn-sm mx-1 mb-2">
                        기사작성
                      </button>
                      <button type="button" class="btn btn-info btn-sm  mb-2 mx-1" data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"> 기사맵핑
                      </button>
                      <ModalComponent3 />
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
                :defaultColDef="defaultColDef" :headerHeight="28" :rowHeight="35" class="ag-theme-alpine"
                style="flex: 1 1 auto; height: 740px; ">
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
                    <button type="submit" class="btn btn-sm btn-primary"><i class="far fa-save"></i> 저장</button>
                  </div>
                </div>
              </div>
              <div class="border border-top border-dark"></div>

              <div class="col-lg-12 mb-2 mt-3">
                <router-link to="/interview"><button type="submit" class="btn btn-sm btn-outline-secondary"><i
                      class="far fa-save"></i>계획내용</button></router-link>
                <router-link to="/interview2"><button type="submit" class="btn btn-sm btn-primary"><i
                      class="far fa-save"></i> 배정</button></router-link>
                <router-link to="/interview3"><button type="submit" class="btn btn-sm btn-outline-secondary"><i
                      class="far fa-save"></i>계획이력</button></router-link>
                <router-link to="/interview4"><button type="submit" class="btn btn-sm btn-outline-secondary"><i
                      class="far fa-save"></i> 기사화</button></router-link>


              </div>

              <div class="tab-content " id="pills-tabContent">
                <div class="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                  tabindex="0">
                  <div class="card " style="height:300px;">
                    <div class="row text-sm mx-1">
                      <div class="col-lg-12 ">
                        <ag-grid-vue :columnDefs="columnDefs01" :modules="modules" :rowData="rowData01"
                          :groupHeaders="true" :defaultColDef="defaultColDef" :headerHeight="25" :rowHeight="20"
                          class="ag-theme-alpine" style="flex: 1 1 auto; height: 200px; ">
                        </ag-grid-vue>
                      </div>




                      <div class="col-lg-12">
                        <div class="input-group mt-2 ">
                          배정<br>
                          내용&ensp;

                          <textarea id="compose-textarea" class="form-control form-control-sm" rows="2">
                              아무개1
                              아무개2
                                
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
import ModalComponent2 from "./InterviewConplan.vue";
import ModalComponent3 from "./InterviewAmapping.vue";


export default {
  components: {
    AgGridVue,
    ModalComponent,
    ModalComponent2,
    ModalComponent3

  },
  data() {
    return {
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

      ],
      rowData: [
        { app: "1", division: "출연", time: "10:00", sub: "노숙인 축구 월드컵 연습", reporter: "정안나", film: "김자영", relay: "", Mfilm: "임연지", Mrelay: "", dispatch: "3", content: "V", article: "3" },
        { app: "2", division: "출연", time: "10:00", sub: "정치적 개입 여부, sns여부 확인", reporter: "정상호", film: "김자영", relay: "", Mfilm: "임연지", Mrelay: "", dispatch: "3", content: "V", article: "3" },
        { app: "3", division: "전화", time: "10:00", sub: "화려한 대성이의 외출", reporter: "정보리", film: "김자영", relay: "", Mfilm: "임연지", Mrelay: "", dispatch: "3", content: "V", article: "3" },
        { app: "4", division: "전화", time: "10:00", sub: "아침날씨 중계", reporter: "정호두", film: "김자영", relay: "", Mfilm: "임연지", Mrelay: "", dispatch: "3", content: "V", article: "3" },
        { app: "5", division: "출연", time: "10:00", sub: "하늘에서 본 적조 피해", reporter: "정하윤", film: "김자영", relay: "", Mfilm: "임연지", Mrelay: "", dispatch: "3", content: "V", article: "3" }

      ],
      columnDefs01: [
        { field: "division", headerName: "구분", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 70 },
        { field: "date", headerName: "일시", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
        { field: "sub", headerName: "제목", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { fontWeight: 'bold' }, minWidth: 300, maxWidth: 400 },
        { field: "assign", headerName: "배정", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 70 },
        { field: "dispatch", headerName: "배차", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 70 },
        // ...
      ],
      rowData01: [
        { division: "촬영", date: "24-08-02 10:00", sub: "노숙인 축구 연습", assign: "완료", dispatch: "완료" },
      ],
    }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;

    },


  },


}


</script>



<style></style>
