<template>

    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
        <div class="row">
            <div class="col-lg-12 ">

                <div class="card-header" style="height:50px; background-color: #828282; ">
                    <div class="row text-sm text-white">
                        <div class="col-lg-12 scrollable-div">

                            <div class="form-group">
                                <div class="row justify-content-start">

                                    <div class="col-4">
                                        <div class="input-group align-items-center">
                                            채널&ensp;
                                            <div class="row">
                                                <div class="col-12">
                                                    <select class="form-select form-select-sm "
                                                        aria-label="Default select example">
                                                        <option selected>MS</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-8">
                                        <div class="button-group  float-right">
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                                                신규
                                            </button>

                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
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
                                            &ensp;&ensp;&ensp;&ensp;채널&ensp;
                                            <select class="form-select form-select-sm "
                                                aria-label="Default select example" v-model="rinfos.chl">
                                                <option selected>MS</option>
                                                <option selected>WEB</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;장비명&ensp;
                                            <select class="form-select form-select-sm "
                                                aria-label="Default select example" v-model="rinfos.equipnm">
                                                <option selected>MS_SD</option>
                                                <option selected>T-DMB</option>
                                                <option selected>S-DMB</option>
                                                <option selected>해외방송</option>
                                                <option selected>MS_SD</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;Main IP&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" v-model="rinfos.mainip">

                                        </div>
                                    </div>


                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;&ensp;&ensp;Port&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate">&ensp;&ensp;

                                            <div class="form-check form-check-inline ">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                    value="option3">
                                                <label class="form-check-label" for="inlineCheckbox3">사용</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;SUB IP&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate">

                                        </div>
                                    </div>


                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;&ensp;&ensp;Port&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate">&ensp;&ensp;

                                            <div class="form-check form-check-inline ">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                    value="option3">
                                                <label class="form-check-label" for="inlineCheckbox3">사용</label>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-12 ml-5">
                                        <div class="form-check form-check-inline ">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                value="option3">
                                            <label class="form-check-label" for="inlineCheckbox3">변환전송</label>
                                        </div>
                                    </div>


                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;등록자&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" />

                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            등록일시&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" />
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;수정자&ensp;

                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" />

                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            수정일시&ensp;

                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" />

                                        </div>
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



export default {
    components: {
        AgGridVue,

    },



    data() {
        return {

            rinfos: '',
            columnDefs: [

                { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "chl", headerName: "채널", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "equipnm", headerName: "장비명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, minWidth: 400, maxWidth: 500 },
                { field: "mainip", headerName: "Main IP", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "useyn", headerName: "사용여부", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "registrant", headerName: "등록자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "date", headerName: "등록일시", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },



                // ...
            ],
            rowData: [
                { no: "1", chl: "MS", equipnm: "MS_SD", mainip: "192.168.0.0", useyn: "Y ", registrant: "정하윤", date: "24-07-21 12:23:22" },
                { no: "2", chl: "MS", equipnm: "T-DMB", mainip: "192.168.0.0", useyn: "Y ", registrant: "정호두", date: "24-07-26 12:23:22" },
                { no: "3", chl: "MS", equipnm: "S-DMB", mainip: "192.168.0.0", useyn: "N ", registrant: "정홍기", date: "24-08-01 12:23:22" },
                { no: "4", chl: "MS", equipnm: "해외방송", mainip: "192.168.0.0", useyn: "Y ", registrant: "정보리", date: "24-08-02 12:23:22" },
                { no: "5", chl: "MS", equipnm: "MS_SD", mainip: "192.168.0.0", useyn: "N ", registrant: "정안나", date: "24-09-21 12:23:22" },

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