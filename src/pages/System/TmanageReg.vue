<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm text-black">
            <div class="modal-content ">
                <div class="modal-header">
                    <h6 class="modal-title" id="exampleModalLabel">템플릿 그룹 등록</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>


                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="input-group ">
                                파일명&ensp;
                                <input type="text" class="form-control form-control-sm  datetimepicker-input "
                                    data-target="#reservationdate">

                            </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                                &ensp;&ensp;버전&ensp;
                                <input type="text" class="form-control form-control-sm  datetimepicker-input "
                                    data-target="#reservationdate">

                            </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                                &ensp;&ensp;형태&ensp;
                                <select class="form-select form-select-sm " aria-label="Default select example">

                                    <option selected>binary</option>

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