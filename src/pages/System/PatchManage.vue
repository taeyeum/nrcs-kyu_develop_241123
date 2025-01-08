<template>

    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
        <div class="row">
            <div class="col-lg-12 ">

                <div class="card-header" style="height:50px; background-color: #828282; ">
                    <div class="row text-sm text-white">
                        <div class="col-lg-12 scrollable-div">

                            <div class="form-group">
                                <div class="row justify-content-start">

                                    <div class="col-12">
                                        <div class="button-group  float-right">
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                신규
                                            </button>
                                            <ModalComponent />
                                            <button type=" button" class="btn btn-info btn-sm mr-2 mb-2">
                                                저장
                                            </button>

                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                                                삭제
                                            </button>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="card-body p-0 m-0 text-sm">
                    <div class="row gx-1">

                        <div class="col-lg-8">
                            <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData"
                                :groupHeaders="true" :defaultColDef="defaultColDef" @cellClicked="onCellClicked"
                                :headerHeight="28" :rowHeight="35" class="ag-theme-alpine"
                                style="flex: 1 1 auto; height: 740px; " @grid-ready="onGridReady">

                            </ag-grid-vue>

                            <div class="nav text-sm " style="display:flex; justify-content: center; ">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div class="col-lg-4  ml-n2 text-sm">
                            <div class="card " style="height:740px;">
                                <div class="row gx-1 mx-1 mt-3">
                                    <div class="col-lg-6">
                                        <div class="input-group ">
                                            파일명&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" v-model="rinfos.filenm">

                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;버전&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" v-model="rinfos.version">

                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;형태&ensp;
                                            <select class="form-select form-select-sm "
                                                aria-label="Default select example" v-model="rinfos.Downtype">
                                                <option selected>binary</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 ml-5">
                                        <button type="button" class="btn btn-info btn-sm mt-2 ">
                                            FTP 파일 생성 및 전송( VtnFtp.ini )
                                        </button>
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


<script>


import { ref } from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';

import ModalComponent from "./PatchManageAdd.vue";


export default {
    components: {
        AgGridVue,
        ModalComponent,

    },



    data() {
        return {
            rinfos: '',

            columnDefs: [

                { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "filenm", headerName: "파일명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, minWidth: 800, maxWidth: 900 },
                { field: "version", headerName: "버전", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, maxWidth: 200 },
                { field: "Downtype", headerName: "다운로드형태", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },


                // ...
            ],
            rowData: [
                { no: "1", filenm: "Newsys.exe", version: "301", Downtype: "binary" },
                { no: "2", filenm: "Client.exe", version: "14", Downtype: "binary" },
                { no: "3", filenm: "docruzer.1.4.0.dll", version: "1", Downtype: "binary" },
                { no: "4", filenm: "Newsys.exe", version: "2", Downtype: "binary" },
                { no: "5", filenm: "Bmp_back.bmp", version: "3", Downtype: "binary" },

            ],



        }
    },



    methods: {
        onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;

        },
        onCellClicked(params) {


            console.log('params : ' + JSON.stringify(params.data));
            // 다른 input에 값 할당
            this.rinfos = params.data;


        }

    }
}




</script>



<style></style>