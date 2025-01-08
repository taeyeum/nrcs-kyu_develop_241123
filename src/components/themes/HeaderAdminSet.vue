<template>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal11" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md text-black">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="exampleModalLabel">관리자 설정</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>


        <div class="modal-body">
          <div class="row ">
            <div class="col-lg-12">
              <p class="text-blue ">비밀번호 변경 정책</p>
              <hr class="border-start border-1 border-dark mt-n3">
            </div>

            <div class="col-lg-6">
              <div class="input-group mt-2">
                채널&ensp;
                <select class="form-select form-select-sm " aria-label="Default select example">
                  <option selected>MS</option>

                </select>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="input-group mt-2">
                비밀번호 변경주기&ensp;
                <select class="form-select form-select-sm" aria-label="Default select example">
                  <option selected>3개월</option>

                </select>&ensp;
                <button class="btn btn-info btn-sm mr-2 mb-2">
                  전체사용자즉시적용
                </button>
              </div>
            </div>



            <div class="col-lg-12 mt-4">
              <p class="text-blue ">SNS 인증 정책</p>
              <hr class="border-start border-1 border-dark mt-n3">
            </div>



            <div class="col-lg-6">
              <div class="input-group mt-2">
                채널&ensp;
                <select class="form-select form-select-sm " aria-label="Default select example">
                  <option selected>MS</option>

                </select>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="input-group mt-2">
                SNS 인증주기&ensp;
                <select class="form-select form-select-sm" aria-label="Default select example">
                  <option selected>3개월</option>

                </select>&ensp;
                <button class="btn btn-info btn-sm mr-2 mb-2">
                  전체사용자즉시적용
                </button>
              </div>
            </div>

            <div class="col-lg-12 mt-4">
              <p class="text-blue ">비밀번호 변경</p>
              <hr class="border-start border-1 border-dark mt-n3">
            </div>

            <div class="col-lg-12 mt-2">
              <span>* 비밀번호는 영문, 숫자 혼합하여 6자 이상 입력하세요.</span>
              <span>예) a2b4dda1</span>
            </div>

            <div class="col-lg-12">
              <div class="input-group mt-2">
                기존 비밀번호&ensp;
                <input type="text" class="form-control form-control-sm" placeholder="Username" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
            </div>

            <div class="col-lg-12">
              <div class="input-group mt-2">
                &ensp;&ensp;새 비밀번호&ensp;
                <input type="text" class="form-control form-control-sm" placeholder="Username" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
            </div>

            <div class="col-lg-12">
              <div class="input-group mt-2">
                비밀번호 확인&ensp;
                <input type="text" class="form-control form-control-sm" placeholder="Username" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
            </div>



          </div>
        </div>

        <div class="modal-footer justify-content-right">
          <button type="button" class="btn btn-primary btn-sm">확인</button>
          <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal">취소</button>
        </div>

      </div>
    </div>
  </div>
</template>

<style></style>