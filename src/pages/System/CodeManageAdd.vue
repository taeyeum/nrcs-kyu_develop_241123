<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md text-black">
            <div class="modal-content ">
                <div class="modal-header">
                    <h6 class="modal-title" id="exampleModalLabel">사용자 등록</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>


                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="input-group ">
                                코드그룹&ensp;
                                <select class="form-select form-select-sm " aria-label="Default select example">
                                    <option selected>방송구분</option>

                                </select>
                            </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                                &ensp;&ensp;코드명&ensp;
                                <input type="text" class="form-control form-control-sm  datetimepicker-input "
                                    data-target="#reservationdate">

                            </div>
                        </div>

                        <div class="col-lg-12 mt-2 ml-5">
                            <div class="form-check-inline ">
                                &ensp;&ensp;<input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1" checked>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    타입
                                </label>&ensp;&ensp;

                                <div class="form-check-inline">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2" checked>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        공통
                                    </label>&ensp;&ensp;

                                    <div class="form-check-inline">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Image
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-2 ml-5">
                            <div class=" input-group ">
                                &ensp;&ensp;<input type=" text"
                                    class="form-control form-control-sm  datetimepicker-input "
                                    data-target="#reservationdate">&ensp;

                                <button type="button" class="btn btn-info btn-sm">
                                    등록
                                </button>
                            </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                                <div class="input-group ">
                                    &ensp;&ensp;&ensp;&ensp;설명&ensp;
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-2">
                            <div class="input-group ">
                                사용여부&ensp;
                                <select class="form-select form-select-sm " aria-label="Default select example">
                                    <option selected>Y</option>
                                    <option selected>N</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="modal-footer justify-content-between ">
                    <button type="button" class="btn btn-sm btn-primary">저장</button>
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">취소</button>
                </div>

            </div>
        </div>
    </div>

</template>


<script>

import { ref } from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';



export default {
    components: {
        AgGridVue,


    },
}

</script>