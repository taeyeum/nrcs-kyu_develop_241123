<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md text-black">
            <div class="modal-content ">
                <div class="modal-header">
                    <h6 class="modal-title" id="exampleModalLabel">이동</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>


                <div class="modal-body">
                    <div class="row">

                        <div class="col-lg-12 mt-2">
                            <div class="input-group ">
                                스토리지명&ensp;

                                <select class="form-select form-select-sm " aria-label="Default select example">
                                    <option selected></option>
                                    <option selected></option>
                                </select>
                                <button type="button" class="btn btn-info btn-sm">
                                    찾기
                                </button>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="modal-footer justify-content-right ">
                    <button type="button" class="btn btn-sm btn-primary">이동</button>
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