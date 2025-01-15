<template>
  <div class="card  mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header aheader" style="height:120px; background-color: #828282; ">
          <div class="row text-sm">
            <div class="col-lg-8 scrollable-div">
              <div class="form-group">
                <div class="row g-3 justify-content-start">
                  <div class="col-2 text-white">
                    <div class="input-group align-items-center">
                      제목&ensp;
                      <input type="text" class="form-control form-control-sm" placeholder=""
                        aria-describedby="basic-addon2">
                    </div>
                  </div>


                  <div class="col-2 text-white">
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

                  <div class="col-2">
                    <input type="date" class="form-control form-control-sm datetimepicker-input"
                      data-target="#reservationdate" />
                  </div>

                  <div class="col-2 text-white ">
                    <div class="input-group align-items-center">
                      형식&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected>자료</option>

                      </select>
                    </div>
                  </div>

                  <div class="col-2 text-white ">
                    <div class="input-group align-items-center">
                      기자&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected>정기자</option>

                      </select>
                    </div>
                  </div>


                  <div class="col-1">
                    <div class="form-check " style="color:white; margin-top: 3px;">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label " for="flexCheckDefault">
                        SNS
                      </label>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <div class="row mt-n2 text-sm">
            <div class="col-lg-7 scrollable-div">
              <div class="form-group">
                <div class="row justify-content-start">


                  <div class="col-2 text-white ">
                    <div class="input-group align-items-center">
                      부서&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected>정치부</option>

                      </select>
                    </div>
                  </div>

                  <div class="col-2 text-white">
                    <div class="input-group align-items-center">
                      분야&ensp;
                      <input type="text" class="form-control form-control-sm" placeholder="청와대"
                        aria-describedby="basic-addon2">
                    </div>
                  </div>


                  <div class="col-3 ml-3 text-white">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                      <label class="form-check-label" for="inlineCheckbox1">긴급</label>&ensp;

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">엠바고</label>&ensp;

                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                          <label class="form-check-label" for="inlineCheckbox3">에고</label>
                        </div>
                      </div>
                    </div>

                  </div>


                  <div class="col-2 text-white ">
                    <div class="input-group align-items-center">
                      이슈&ensp;
                      <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected>청와대</option>

                      </select>
                    </div>
                  </div>
                </div>

                <div class="row mt-2">

                  <div class="col-2 text-white">
                    <div class="input-group align-items-center">
                      작성&ensp;&ensp;&ensp;
                      홍길동
                    </div>
                  </div>


                  <div class="col-6 text-white">
                    <div class="form-check form-check-inline ">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                      <label class="form-check-label " for="inlineCheckbox1">클립번호 재사용</label>&ensp;&ensp;&ensp;

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">자막템플릿 미리보기</label>&ensp;&ensp;&ensp;


                      </div>
                    </div>
                  </div>



                  <div class="col-3  text-white">
                    <div class="input-group " style="position: relative; left:100px; top:-33px;">
                      상세설명&ensp;
                      <textarea class="form-control form-control-sm mt-n2 " placeholder="Leave a comment here"
                        id="floatingTextarea" rows="2"></textarea>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <slot />
          </div>
        </div>

        <div class="row" style="height:40px; background-color: #cccccc;">
          <div class="col-lg-12 mt-1 scrollable-div">
            <div class="form-group">
              <div class="row mx-4 justify-content-start">
                <div class="col-12 ">
                  <div class="button-group">
                    <button class="btn btn-danger btn-sm mr-2 mb-2">
                      긴급
                    </button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      기사작성
                    </button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      파일관리
                    </button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      저장</button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      가승인
                    </button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      승인
                    </button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      복구
                    </button>
                    <button class="btn btn-info btn-sm mr-4 mb-2">
                      인쇄
                    </button>


                    <button class="btn btn-primary btn-sm mr-2 mb-2 " data-bs-toggle="tooltip" data-bs-placement="top"
                      title="F1">
                      수퍼
                    </button>

                    <button class="btn btn-danger btn-sm mr-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="F2">
                      앵커
                    </button>

                    <button class="btn btn-danger btn-sm mr-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="F3">
                      리포트
                    </button>

                    <button class="btn btn-success btn-sm mr-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="F4">
                      StandUp
                    </button>

                    <button class="btn btn-success btn-sm mr-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="F5">
                      전화
                    </button>

                    <button class="btn btn-success btn-sm mr-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="F6">
                      자막CG
                    </button>

                    <button class="btn btn-success btn-sm mr-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="F7">
                      인터뷰
                    </button>

                    <button class="btn btn-success btn-sm mr-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="F8">
                      이펙트
                    </button>

                    <button class="btn btn-success btn-sm mr-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="F9">
                      싱크
                    </button>

                    <button class="btn btn-primary btn-sm mr-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="F10">
                      CG
                    </button>

                    <button class="btn btn-success btn-sm mr-4 mb-2" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="F11">
                      RG
                    </button>

                    <router-link to="/Article_Writing"><button class="btn btn-info btn-sm mr-2 mb-2 "
                        style="height:30px; padding:0; padding-top: 1px;">
                        <img src="../../components/image/screen2.png">
                      </button></router-link>
                    <router-link to="/Article_Writing2"><button class="btn btn-info btn-sm mr-2 mb-2"
                        style="height:30px; padding:0; padding-top: 1px;">
                        <img src="../../components/image/screen3.png">
                      </button></router-link>


                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div class="card-body p-0 ">
          <div class="row  gx-1">
            <div class="col-lg-8 ">

              <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData" :groupHeaders="true"
                :defaultColDef="defaultColDef" @cellClicked="onCellClicked" :headerHeight="28" :rowHeight="35"
                class="ag-theme-alpine" style="flex: 1 1 auto; height: 610px; " @grid-ready="onGridReady">

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


            <div class="col-lg-4  ml-n2 mt-2">
              <div class="input-group ">
                <textarea class="form-control form-control-sm mt-n2 " placeholder="{앵커:  겨울철 생선인 대구의 계절이 돌아왔지만, 올해는 어획량이 급감했습니다.}
{리포트}
{수퍼:  거제 대구 어획량 급감/오늘(5)경남 거제 앞바다}" id="floatingTextarea" rows="29"></textarea>

              </div>

            </div>
          </div>
        </div>

        <div class="mx-3">
          <span class="badge badge-secondary mr-3">F1:수퍼</span>
          <span class="badge badge-secondary mr-3">F2:앵커</span>
          <span class="badge badge-secondary mr-3"> F3:리포트</span>
          <span class="badge badge-secondary mr-3">F4:StandUp</span>
          <span class="badge badge-secondary mr-3">F5:전화</span>
          <span class="badge badge-secondary mr-3">F6:자막CG</span>
          <span class="badge badge-secondary mr-3">F7:인터뷰</span>
          <span class="badge badge-secondary mr-3">F8:이펙트</span>
          <span class="badge badge-secondary mr-3">F9:싱크</span>
          <span class="badge badge-secondary mr-3">F10:CG</span>
          <span class="badge badge-secondary mr-3"> F11:RG</span>
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
        { field: "date", headerName: "등록일", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 350, maxWidth: 450, },
        { field: "sub", headerName: "제목", hide: false, cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', minWidth: 500, maxWidth: 650, cellStyle: { fontWeight: 'bold' }, },
        { field: "time", headerName: "시간", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "situation", headerName: "상태", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
        { field: "medium", headerName: "매체", cellRenderer: 'CellComponentRenderer', editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },

        // ...
      ],
      rowData: [
        { date: "2025-01-02 12:02:26", sub: "제목을 입력하시오", time: "00:00", situation: "저장", medium: "방송 + 인터넷" },
        { date: "2025-02-06 12:02:00", sub: "이번달 겨울철새 모레 절정, 방역 강화", time: "00:26", situation: "저장", medium: "방송 + 인터넷" },
        { date: "2025-03-08 12:02:20", sub: "제목을 입력하시오", time: "00:00", situation: "저장", medium: "방송 + 인터넷" },
        { date: "2025-04-11 12:02:16", sub: "===8일+9일 아이엠 === 9시 현재", time: "02:00", situation: "저장", medium: "방송 + 인터넷" },
        { date: "2025-05-28 12:02:23", sub: "공항 주변 새 유인 탐지시설 수두룩", time: "00:10", situation: "저장", medium: "방송 + 인터넷" },

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
