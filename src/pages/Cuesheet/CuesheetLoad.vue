

<template>
  
    <!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm text-black ">
    <div class="modal-content" >
        <div class="modal-header">
          <h6 class="modal-title" id="exampleModalLabel">운영참조 불러오기</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        

        <div class="modal-body " style="height:100px" >
          <div class="row">
            <div class="col-12">
              <div class="select-group ">                        
                    프로그램 선택&ensp;
                    
                      <select class="form-select form-select-sm" aria-label="Default select example" >
                          <option selected>MS24(경기, 인천, 주요, 기상)</option>
                          
                        </select>
                   
                   <slot />
                
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer justify-content-right">
            <button type="button" class="btn btn-primary btn-sm">확인</button>
              <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
            >취소</button>
        </div>
           
        </div>
     </div>
  </div>
</template>
