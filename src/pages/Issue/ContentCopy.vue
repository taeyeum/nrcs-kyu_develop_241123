<template>

    <!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm text-black">
    <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">콘텐츠 복사</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

           
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12 mt-2">
                  <div class="input-group ">
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;일자&ensp;
                    <input type="date" class="form-control form-control-sm " placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                  </div>   
                  </div>
                <div class="col-lg-12 mt-4">
                  <div class="input-group ">
                    방송(시간)>&ensp;
                    <input type="time" class="form-control form-control-sm" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                  </div>   
                  <slot />
                
                </div>
              </div>
            </div>

            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-sm btn-primary">저장</button>
                 <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal"
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