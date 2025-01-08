

<template>
  
    <!-- Modal -->
<div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm text-black">
    <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">글꼴 설정</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

                       
            <div class="modal-body " style="height:230px;">
              <div class="row ">
                <div class="col-lg-12 ">          
                   <div class="select-group ">             
                        <div class="row ">
                          <div class="col-lg-12">                                
                                  글꼴&ensp;
                              <select class="form-select form-select-sm"  id="fontSelect" aria-label="Default select example" >
                                <option value="font1" style="font-family: 'Arial', sans-serif;">Arial</option>
                                <option value="font2" style="font-family: 'Verdana', sans-serif;">Verdana</option>
                                <option value="font3" style="font-family: 'Times New Roman', serif;">Times New Roman</option>
                              </select>
                          </div>

                           <div class="col-lg-12">                                
                                  스타일&ensp;
                              <select class="form-select form-select-sm" id="styleSelect" aria-label="Default select example" >
                              <option value="bold" style="font-weight: bold;">굵은 글씨</option>
                              <option value="italic" style="font-style: italic;">기울임꼴</option>
                            </select>
                          </div>

                           <div class="col-lg-12">                                
                                  색상&ensp;
                              <select class="form-select form-select-sm" id="colorSelect" aria-label="Default select example" >
                               <option value="red" style="color: red;">빨간색</option>
                              <option value="green" style="color: green;">녹색</option>
                              <option value="blue" style="color: blue;">파란색</option>
                            </select>
                          </div>
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
  </div>
</template>

                       