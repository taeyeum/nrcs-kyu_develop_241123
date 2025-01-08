

<template>
   
    <!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
            
          <div class="modal-header">
                  <h6 class="modal-title" id="exampleModalLabel">웹기사 정보</h6>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

        
                
          <div class="modal-body d-flex justify-content-center" >
              <div class="row ">
                  <div class="col-lg-12 mt-2 " >
              
                                          <h6>여야 대립 심화..."장외투쟁" vs. "정치적 노림수"<br></h6>
                                          <h7>http://www.MS.co.kr/_ln/0101_20130811111733597<br></h7>
                                          <h7>뷰 수 : 2342</h7>
                                          <ul class="">유입경로
                                              <li class="">1위 네이버</li>
                                              <li class="">2위 다음</li>
                                              <li class="">3위 네이트</li>
                                          </ul>

                                          <ul class="">장비별 접속 비율
                                              <li class="">모바일(70%)</li>
                                              <li class="">PC(30%)</li>
                                              
                                          </ul>
                                  
                      <slot />
              
                  </div>
              </div> 
           </div>
       

            <div class="modal-footer justify-content-right">
              
                <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal"
              >닫기</button>
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

