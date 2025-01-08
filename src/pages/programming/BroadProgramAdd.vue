<template>
      <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md text-black">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">방송프로그램관리 등록</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            

            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">               
                  
                    <div class="row mx-1">
                
                    <!-- /.card-header -->       
                      
                           <div class="col-lg-12 ">
                          <div class="input-group ">
                            프로그램명&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="YTN24(테스트)"  aria-describedby="basic-addon2"
                          style="">                               
                                
                            
                          </div>
                        </div>
                 
                        <div class="col-lg-6 mt-2">
                          <div class="input-group ">
                           &ensp;&ensp;프로구분&ensp;
                           <select class="form-select form-control-sm" aria-label="Default select example" style="width:140px;">
                                  <option selected>국제뉴스</option>
                                  
                                </select>    
                           </div>
                        </div>

                        <div class="col-lg-6 mt-2"> 
                          <div class="input-group ">
                           &ensp;&ensp;시작일자&ensp;                          
                          <input type="date" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                          >     
                          </div>
                      </div>
                  
                      <div class="col-lg-6 mt-2">
                          <div class="input-group  ">
                           &ensp;&ensp;장르구분&ensp;
                           <select class="form-select form-control-sm " aria-label="Default select example" >
                                  <option selected>기타</option>
                                  
                                </select>   
                          </div>
                      </div>

                      <div class="col-lg-6 mt-2"> 
                          <div class="input-group ">
                            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;채널&ensp;                          
                            <select class="form-select form-control-sm " aria-label="Default select example" >
                                  <option selected>YTN24</option>
                                  
                                </select>   
                          </div>
                      </div>
                 
                      <div class="col-lg-6 mt-2">
                          <div class="input-group  ">
                           &ensp;&ensp;제작구분&ensp;
                           <select class="form-select form-control-sm " aria-label="Default select example" >
                                  <option selected>녹화</option>
                                  
                                </select>   
                          </div>
                      </div>

                      <div class="col-lg-6 mt-2"> 
                          <div class="input-group ">
                           &ensp;&ensp;제작부서&ensp;                          
                          <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                          >     
                          </div>
                      </div>
                 
                </div>
              </div>
            </div>
          </div>
                
           <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-sm btn-primary">저장</button>
                 <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal"
                >취소</button>
            </div>
           
            <!-- /.col -->
     
        </div>
       </div>
    </div>
  </template>
