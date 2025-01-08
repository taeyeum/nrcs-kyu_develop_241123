<template>
      <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md text-black">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">기본편성관리일정 등록</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            

            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">               
                  
                    <div class="row mx-1">
                
                    <!-- /.card-header -->       
                      
                          <div class="col-lg-12">
                            <div class="input-group ">
                             프로그램명&ensp;
                              <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>출연</option>
                                  
                                </select>                         
                               
                            </div>
                          </div>
                    
                          <div class="col-lg-6   mt-2"> 
                          <div class="input-group ">
                            &ensp;&ensp;프로구분&ensp;                         
                            <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>국제뉴스</option>
                                  
                                </select>    
                          </div>
                      </div>

                      <div class="col-lg-6  mt-2"> 
                          <div class="input-group " >
                            &ensp;&ensp;방송일자&ensp;                         
                            <select class="form-select form-select-sm" aria-label="Default select example">
                                  <option selected>출연</option>
                                  
                                </select>    
                          </div>
                      </div>
                    
                        <div class="col-lg-6  mt-2 ">                           
                           <div class="input-group  ">
                            &ensp;&ensp;장르구분&ensp;
                              <select class="form-select form-select-sm" aria-label="Default select example"  >
                                  <option selected>기타</option>
                                  
                                </select>    
                              </div>
                        </div>
  
  
                        <div class="col-lg-6  mt-2"> 
                          <div class="input-group" >
                            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;채널&ensp;                        
                            <select class="form-select form-select-sm " aria-label="Default select example" >
                                  <option selected>YTN</option>
                                  
                                </select>    
                          </div>
                        </div>

                    
                       <div class="col-lg-6  mt-2">
                           
                        <div class="input-group ">
                           &ensp;&ensp;제작구분&ensp;
                           <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>녹화</option>
                                  
                                </select>    
                           </div>
                       </div>  
                        
                       <div class="col-lg-6   mt-2  d-flex justify-content-end" >
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                            <label class="form-check-label" for="inlineCheckbox1">큐시트 편집</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                            <label class="form-check-label" for="inlineCheckbox2">종영여부</label>
                          </div>
                        </div>                   

                        <div class="col-lg-6  mt-2">
                           
                          <div class="input-group ">
                           &ensp;&ensp;제작부서&ensp;
                           <select class="form-select form-select-sm" aria-label="Default select example" style="width:140px;">
                                  <option selected>CQ그룹</option>
                                  
                                </select>    
                           </div>
                       </div>
                   
                       

                       <div class="col-lg-6  mt-2">
                           
                           <div class="input-group  ">
                             &ensp;&ensp;제작년도&ensp;
                             <select class="form-select form-select-sm" aria-label="Default select example">
                                  <option selected>13</option>
                                  
                                </select>    
                            </div>
                        </div>
  
                       
                     
                        <div class="col-lg-6 mt-2">
                           
                          <div class="input-group  ">
                           &ensp;&ensp;스튜디오&ensp;
                           <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>스튜디오</option>
                                  
                                </select>    
                           </div>
                       </div>

                        <div class="col-lg-6  mt-2 "> 
                            <div class="input-group ml-4" style="float:right;">
                              &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;PD1&ensp;                          
                              <input type="text" class="form-control form-control-sm " placeholder="이양희"  aria-describedby="basic-addon2"
                              >  &ensp;     
                              <button class="btn btn-sm btn-outline-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false"
                             >
                              
                                </button>      
                                
                            </div>
                        </div>
                  
                        <div class="col-lg-6 mt-2">
                           
                           <div class="input-group  ">
                            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;부조&ensp;
                            <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>부조</option>
                                  
                                </select>    
                           </div>
                       </div>
  
                        <div class="col-lg-6  mt-2"> 
                            <div class="input-group  " style="float:right;">
                              &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;PD2&ensp;                          
                              <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                              >  &ensp;     
                              <button class="btn btn-sm btn-outline-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false"
                             >
                              
                                </button>      
                                
                            </div>
                        </div>

                   
                        <div class="col-lg-6   mt-2">
                           <div class="input-group  ">
                         &ensp;&ensp;&ensp;CG 위치&ensp;
                            <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>하</option>
                                  
                                </select>    
                           </div>
                       </div>
  

                        <div class="col-lg-6   mt-2 "> 
                            <div class="input-group  ml-4" style="float:right;">
                              &ensp;&ensp;&ensp;&ensp;&ensp;Anc1&ensp;                          
                              <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                              >  &ensp;     
                              <button class="btn btn-sm btn-outline-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false"
                             >
                              
                                </button>      
                                
                            </div>
                        </div>
                   
                          <div class="col-lg-6   mt-2">
                           <div class="input-group  ">
                         &ensp;&ensp;&ensp;&ensp;&ensp;Anc2&ensp;
                            <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>하</option>
                                  
                                </select>    
                           </div>
                       </div>
  

                        <div class="col-lg-6   mt-2 "> 
                            <div class="input-group  ml-4" style="float:right;">
                              &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;TD&ensp;                          
                              <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                              >  &ensp;     
                              <button class="btn btn-sm btn-outline-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false"
                             >
                              
                                </button>      
                                
                            </div>
                        </div>
                      
                    
                        <div class="col-lg-12   mt-2">
                          <div class="input-group ">
                            방송시간&ensp;
                             <input type="time" class="form-control form-control-sm " placeholder="13"  aria-describedby="basic-addon2" 
                             >   &ensp;~&ensp;  
                             <input type="time" class="form-control form-control-sm " placeholder="13"  aria-describedby="basic-addon2" 
                             >&ensp;
                             <input type="time" class="form-control form-control-sm " placeholder="13"  aria-describedby="basic-addon2" 
                             >
                            </div>
                        </div>
                    
                      <div class="col-lg-12   mt-2">
                        <div class="input-group ">
                          중계요일&ensp;
                          <div class="form-check form-check-inline ml-2">
                              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                              <label class="form-check-label" for="inlineCheckbox1">월</label>
                            </div>
                            <div class="form-check form-check-inline ml-2">
                              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                              <label class="form-check-label" for="inlineCheckbox2">화</label>
                            </div>
                            <div class="form-check form-check-inline ml-2">
                              <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                              <label class="form-check-label" for="inlineCheckbox3">수</label>
                            </div>
                            <div class="form-check form-check-inline ml-2">
                              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                              <label class="form-check-label" for="inlineCheckbox1">목</label>
                            </div>
                            <div class="form-check form-check-inline ml-2">
                              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                              <label class="form-check-label" for="inlineCheckbox2">금</label>
                            </div>
                            <div class="form-check form-check-inline ml-2">
                              <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                              <label class="form-check-label" for="inlineCheckbox3">토</label>
                            </div>   
                            <div class="form-check form-check-inline ml-2">
                              <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                              <label class="form-check-label text-red" for="inlineCheckbox3">일</label>
                            </div>   
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
