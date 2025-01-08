<template>

    <!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog text-black">
    <div class="modal-content">
            
                 <div class="modal-header">
                          <h6 class="modal-title" id="exampleModalLabel">콘텐츠계획 수정</h6>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

            
                                      
                  <div class="modal-body ">
                    <div class="row mx-1">
                        <div class="col-lg-6">
                          <div class="form-check-inline">                           
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                일반
                            </label>&ensp;&ensp;                         
                            <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                            <label class="form-check-label" for="flexRadioDefault2">
                                이슈
                            </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 ">
                           <div class="input-group ">
                            <select class="form-select form-select-sm " aria-label="Default select example" >
                              <option selected></option>
                            </select>                
                            </div>      
                        </div>
                    </div>

                    <div class="row mx-1">
                      <div class="col-lg-6 mt-2">
                        <div class="input-group ">
                            형식&ensp;
                            <select class="form-select form-select-sm" aria-label="Default select example">
                              <option selected></option>
                            </select>
                        </div>
                      </div>

                      <div class="col-lg-6 mt-2">
                        <div class="input-group ">
                            방송&ensp;
                            <select class="form-select form-select-sm" aria-label="Default select example">
                              <option selected></option>
                            </select>
                        </div>
                      </div>

                      <div class="col-lg-6 mt-2">
                        <div class="input-group ">
                            부서&ensp;
                            <select class="form-select form-select-sm" aria-label="Default select example">
                              <option selected>정치부</option>
                            </select>
                        </div>
                      </div>

                       <div class="col-lg-6 mt-2">
                        <div class="input-group ">
                            기자&ensp;
                            <input type="text" class="form-control form-select-sm"  aria-label="Recipient's username" aria-describedby="basic-addon2" style="height:30px">
                          

                        </div>
                      </div>

                      <div class="col-lg-12 mt-2">
                        <div class="input-group ">                          
                            제목&ensp;
                            <input type="text" class="form-control form-control-sm"  aria-label="Recipient's username" aria-describedby="basic-addon2">
                            

                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="input-group mt-2">
                            상세설명
                            <textarea class="form-control form-control-sm" placeholder="Leave a comment here" id="floatingTextarea" rows="3"></textarea>
                      
                        </div>
                      </div>
                      <slot />
                    
                  
                </div>
              </div>
          
                <div class="modal-footer justify-content-between ">                
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

