<template>

    <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm text-black">
    <div class="modal-content">
            
                 <div class="modal-header">
                          <h6 class="modal-title" id="exampleModalLabel">의뢰 취소</h6>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

            
                                      
                  <div class="modal-body ">
                    <div class="row mx-1 ">
                       
                      <div class="col-lg-12">
                        
                            사유&ensp;
                            <textarea class="form-control form-control-sm" placeholder="Leave a comment here" id="floatingTextarea" rows="3">
이미지가 손상되었음.
                            </textarea>
                      
                        
                      </div>
                      <slot />
                    
                  
                    </div>
                  </div>
              
                    <div class="modal-footer justify-content-between ">                
                      <button type="button" class="btn btn-sm btn-primary">확인</button>
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

