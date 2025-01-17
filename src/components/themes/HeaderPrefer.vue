<template>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal10" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md text-black">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="exampleModalLabel">개인정보 변경</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>


        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <p class="text-blue ">사용자 정보 변경</p>
              <hr class="border-start border-1 border-dark mt-n3">
            </div>

            <div class="col-lg-12">
              <div class="input-group mt-2 align-items-center">
                &ensp;&ensp;이메일 주소&ensp;
                <input type="text" class="form-control form-control-sm" placeholder="Username" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
            </div>

            <div class="col-lg-12">
              <div class="input-group mt-2 align-items-center">
                휴대 전화번호&ensp;
                <input type="text" class="form-control form-control-sm" placeholder="Username" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
            </div>

            <div class="col-lg-12">
              <div class="input-group mt-2 align-items-center">
                내선 전화번호&ensp;
                <input type="text" class="form-control form-control-sm" placeholder="Username" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
            </div>

            <div class="col-lg-12 mt-4">
              <p class="text-blue ">비밀번호 정보 변경</p>
              <hr class="border-start border-1 border-dark mt-n3">
            </div>


            <div class="col-lg-12">
              <div class="input-group mt-2 align-items-center">
                &ensp;&ensp;&ensp;사용자 ID&ensp;
                <input type="text" class="form-control form-control-sm" placeholder="Username" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
            </div>

            <div class="col-lg-12">
              <div class="input-group mt-2 align-items-center">
                &ensp;&ensp;&ensp;사용자 명&ensp;
                <input type="text" class="form-control form-control-sm" placeholder="Username" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
            </div>

            <div class="col-lg-12 mt-4">
              <span>* 비밀번호는 영문, 숫자 혼합하여 6자 이상 입력하세요.</span>
              <span>예) a2b4dda1</span>
            </div>

            <div class="col-lg-12">
              <div class="input-group mt-2 align-items-center">
                기존 비밀번호&ensp;
                <input type="text" class="form-control form-control-sm" placeholder="Username" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
            </div>

            <div class="col-lg-12">
              <div class="input-group mt-2 align-items-center">
                &ensp;&ensp;새 비밀번호&ensp;
                <input type="text" class="form-control form-control-sm" placeholder="Username" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
            </div>

            <div class="col-lg-12">
              <div class="input-group mt-2 align-items-center">
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