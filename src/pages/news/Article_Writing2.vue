<template>
  <div class="card  mt-5" style="background-color: #828282; border-radius: 0%;  height:858px; overflow: hidden;">
    <div class="row">
      <div class="col-lg-12 ">

        <div class="card-header" style="height:120px;">
          <div class="row text-sm">
            <div class="col-lg-12 scrollable-div">
              <div class="form-group">
                <div class="row g-3 justify-content-start">
                  <div class="col-2 text-white">
                    <div class="input-group align-items-center">
                      제목&ensp;
                      <input type="text" class="form-control form-control-sm" placeholder=""
                        aria-describedby="basic-addon2">
                    </div>
                  </div>


                  <div class="col-1 text-white">
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


                  <div class="col-2 ml-3 text-white">
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

                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                          <label class="form-check-label" for="inlineCheckbox3">실시간 맞춤법 검사</label>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div class="col-3  text-white">
                    <div class="input-group " style="position: relative; left:50px; top:-33px;">
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

        <div class="row" style="height:65px; background-color: #cccccc;">
          <div class="col-lg-12 mt-1 scrollable-div">
            <div class="form-group">
              <div class="row mx-4 justify-content-start">
                <div class="col-12 ">
                  <div class="button-group">
                    <button class="btn btn-danger btn-sm mr-2 mb-2">
                      기사작성
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


                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      Anc
                    </button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                      Rep
                    </button>

                    <button class="btn btn-info btn-sm mr-4 mb-2">
                      리포트
                    </button>



                    <router-link to="/Article_management"><button class="btn btn-info btn-sm mr-2 mb-2 "
                        style="height:30px; padding:0; padding-top: 1px;">
                        <img src="../../components/image/screen4.png">
                      </button></router-link>
                    <router-link to="/Article_management1"><button class="btn btn-info btn-sm mr-2 mb-2"
                        style="height:30px; padding:0; padding-top: 1px;">
                        <img src="../../components/image/screen2.png">
                      </button></router-link>


                  </div>
                </div>

              </div>
            </div>
          </div>



          <div class="card mt-n3">
            <div class="row ">
              <div class="col-lg-7 ">
                <div class="row ml-1">
                  <div class="input-group     ">
                    <input type="text" class="form-control form-control-sm " placeholder="배곱"
                      aria-describedby="basic-addon2" style="height:750px; width:20px;">
                    <input type="text" class="form-control form-control-sm " placeholder="신지홍"
                      aria-describedby="basic-addon2" style="height:750px; width:20px;">
                    <input type="text" class="form-control form-control-sm " placeholder="(베이징=연합뉴스) 신지홍 박성민 기자 
                            = 중국 국빈방문 이틀째를 맞은 박근혜 
                            대통령은 28일 오전 수행 경제사절단과 
                            조찬을 함께 하며 경제외교에 시동을 걸었다." aria-describedby="basic-addon2"
                      style="height:750px; width:110px;">

                  </div>
                </div>
              </div>

              <div class="col-lg-5 ml-n1">
                <div class="card " style="height:750px;">
                  <div class="row text-sm mx-1">

                    <!-- /.card-header -->

                    <div class="col-lg-12">
                      <div class="form-group mt-2 ">
                        <div class="col-lg-12 mb-2 mt-3">
                          <router-link to="/Article_management1"><button type="submit"
                              class="btn btn-sm btn-primary "><i
                                class="fa-sharp-duotone fa-solid fa-comment"></i>&ensp;SNS</button></router-link>
                          <router-link to="/Article_management2"><button type="submit"
                              class="btn btn-sm btn-outline-secondary"><i
                                class="fa-solid fa-file-video"></i>&ensp;영상그래픽</button></router-link>
                          <router-link to="/Article_management3"><button type="submit"
                              class="btn btn-sm btn-outline-secondary"><i
                                class="fa-solid fa-clipboard-question"></i>&ensp;의뢰상태</button></router-link>
                          <router-link to="/Article_management4"><button type="submit"
                              class="btn btn-sm btn-outline-secondary"><i
                                class="fa-sharp-duotone fa-solid fa-paperclip"></i>&ensp;첨부</button></router-link>


                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row d-flex justify-content-center">
                    <div class="col-lg-6 mt-n2">

                      <div class="ratio ratio-16x9">
                        <video controls>
                          <source src="" type="video/mp4">
                        </video>
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

<script setup lang="ts">


import { ref } from "vue";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";

import { AgGridVue } from "@ag-grid-community/vue3";


</script>

<style>
.input-floating {
  position: relative;
  top: -40px;
  left: 200px;


}
</style>