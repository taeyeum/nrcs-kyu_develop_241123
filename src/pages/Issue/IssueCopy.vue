<template>

    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm text-black">
    <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">이슈 복사</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

           
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="input-group mt-2">
                    <span class="input-group-date" id="basic-addon1">일자</span>&ensp;
                    <input type="date" class="form-control form-control-sm" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                  </div>   
                  <slot />
                
                </div>
              </div>
            </div>

            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-primary btn-sm">확인</button>
                 <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                >취소</button>
            </div>
           
        </div>
     </div>
  </div>
</template>

<style>

.modal{
  font-size:14px;
}
</style>