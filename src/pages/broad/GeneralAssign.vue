
<template>
  
    <!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm  text-black">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">종편실 배정</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

                       
            <div class="modal-body">                                  
                <div class="row mx-1">                
                    <!-- /.card-header -->   
                     
                      <div class="col-12 ">
                            <div class="input-group " >
                              <span class="input-group-textarea" id="basic-addon1">배정내용</span>&ensp;
                              <input type="text" class="form-control form-control-sm" placeholder="1종편실" aria-label="1종편실" aria-describedby="basic-addon1">
                            </div>   
                            <slot />
                      </div>
                    
                                        
                    <div class="col-lg-12 mt-2">
                          <div class="modal-footer  justify-content-right">
                      
                            <div class="btn-group ">                            
                              <button class="btn btn-sm btn-primary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false"
                              >
                              확인 
                              </button>  
                            </div>
                          
                            <div class="btn-group">    
                              <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                               >취소</button>
                            </div>
                         </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
 
</template>

<style>


</style>