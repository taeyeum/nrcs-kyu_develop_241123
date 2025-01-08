
<template>
        <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl text-black">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">편성공지일정 등록</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            

            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">               
                  
                    <div class="row mx-1">
                
                    <!-- /.card-header -->   
           
                        <div class="col-lg-2  mt-2">
                          <div class="input-group ">
                            제목&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="국정원 국정조사 계획서 본회의 통과"  aria-describedby="basic-addon2"
                          style="">                               
                                
                            
                          </div>
                        </div>

                        <div class="col-lg-3  mt-2">
                          <div class="input-group ">
                            작성&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="김형기"  aria-describedby="basic-addon2"
                         >  &ensp;    
                         <input type="text" class="form-control form-control-sm " placeholder="김형기"  aria-describedby="basic-addon2"
                         >  &ensp;                           
                          <input type="time" class="form-control form-control-sm " placeholder="김형기"  aria-describedby="basic-addon2"
                            >     
                          </div>
                      </div>

                      <div class="col-lg-3  mt-2">
                          <div class="input-group  ">
                            수정&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="윤순섭"  aria-describedby="basic-addon2"
                          >  &ensp;                                 
                          <input type="time" class="form-control form-control-sm " placeholder="윤순섭"  aria-describedby="basic-addon2"
                          >
                          </div>
                      </div>
               
                      <div class="col-lg-2  mt-2">
                          <div class="input-group ">
                            게시기간&ensp;                                                            
                          <input type="date" class="form-control form-control-sm " placeholder="윤순섭"  aria-describedby="basic-addon2"
                          >
                          </div>
                      </div>

                      <div class="col-lg-2 mt-2 " >
                            <div class="button-group" style="float:right;">                              
                            <button  class="btn btn-info btn-sm mr-2 mb-2" >
                                저장
                            </button>

                            <button class="btn btn-info btn-sm mr-2 mb-2">              
                                취소
                            </button>
                            
                            <button class="btn btn-info btn-sm mr-2 mb-2">
                                <i class="fas fa-print"></i>
                                인쇄
                            </button>
                        
                            </div>
                      </div>
                 </div>

                <div class="row mx-1  mt-2">
                        <div class="col-lg-12 mt-n2">
                            <div class="input-group">
                            방송내용&ensp;
                                <textarea id="compose-textarea" class="form-control" rows="10">
                            
                                
                                </textarea>
                            </div>
                        </div>
                </div>

                <div class="row mx-1">
                        <div class="col-lg-12 mt-2">
                          <div class="input-group ">
                            첨부파일&ensp;
                              <textarea id="compose-textarea" class="form-control" rows="5">                                                          
                              </textarea>      
                          </div>
                        </div>  
                         <div class="col-lg-12 mt-2 "> 
                           <div class="button-group" style="float:right;">                                                  
                            <button type="button" class="btn btn-sm btn-secondary ml-2"  >파일추가</button>
                            <button type="button" class="btn btn-sm btn-secondary ml-2" >파일삭제</button>
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

<style>


</style>