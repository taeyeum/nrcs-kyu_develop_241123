
<template>
   
    <!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md text-black">
    <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">Content plan</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

           
                    <div class="modal-body">   
                        <div class="row mx-1">
                            <div class="col-lg-6">
                                <div class="input-group">
                                <span class="input-group-date" id="basic-addon1">일자</span>&ensp;
                                <input type="date" class="form-control form-control-sm" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                                style="  height:30px; font-size: 12px;">
                                </div>   
                            </div>
                        </div>
                

                        <div class="row mx-1">
                            <div class="col-lg-6">&ensp;&ensp;
                                <div class="form-check-inline mt-2">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        일반
                                    </label>
                                </div>
                                <div class="form-check-inline mt-2">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        이슈
                                    </label>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="input-group mt-2">
                                    이슈&ensp;
                                    <select class="form-select form-select-sm" aria-label="Default select example" style=" font-size:14px;">
                                    <option selected>전체</option>
                                    
                                    </select>     
                                    
                                </div>
                            </div>
                        </div>

                        <div class="row mx-1">
                            <div class="col-lg-6">
                                <div class="input-group mt-2">
                                    형식&ensp;
                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                    <option selected>전체</option>
                                    
                                    </select>     
                                    
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="input-group mt-2">
                                    방송&ensp;
                                    <select class="form-select form-select-sm" aria-label="Default select example" >
                                    <option selected>전체</option>
                                    
                                    </select>    
                                    
                                </div>
                            </div>
                        </div>

                        <div class="row mx-1">
                            <div class="col-lg-6">
                                <div class="input-group mt-2">
                                    부서&ensp;
                                    <select class="form-select form-select-sm" aria-label="Default select example" >
                                    <option selected>전체</option>
                                    
                                    </select>    
                                    
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="input-group mt-2">
                                    기자&ensp;
                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                    <option selected>전체</option>
                                    
                                    </select>    
                                </div>
                            </div>
                        </div>

                        <div class="row mx-1">
                            <div class="col-lg-12">
                                    <div class="input-group mt-2 ">
                                        제목&ensp;
                                        <input class="form-control form-control-sm datetimepicker-input" type="text" data-bs-toggle="textreas" aria-expanded="false"
                                        >
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
                        <div class="row">
                            <div class="col-lg-12 ">
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-sm btn-primary ">저장</button>
                                   <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                                >취소</button>
                                </div>
                            </div>
                        </div>
                
          
            </div>
        </div>
    </div>        
 </div>
</template>
i

<style>

</style>