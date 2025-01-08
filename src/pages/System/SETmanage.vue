<template>

    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
        <div class="row">
            <div class="col-lg-12 ">

                <div class="card-header" style="height:50px; background-color: #828282; ">
                    <div class="row text-sm text-white">
                        <div class="col-lg-12 scrollable-div">

                            <div class="form-group">
                                <div class="row justify-content-start">

                                    <div class="col-5 ">
                                        <div class="input-group align-items-center">
                                            사이트명&ensp;
                                            <div class="row">
                                                <div class="col-10">
                                                    <input type="text"
                                                        class="form-control form-control-sm  datetimepicker-input "
                                                        data-target="#reservationdate" />
                                                </div>

                                                <div class="col-1">
                                                    <button class="btn btn-info btn-sm mx-1">
                                                        검색
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-7">
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
                                    <div class="col-lg-12">
                                        <div class="input-group ">
                                            사이트명&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" v-model="rinfos.sitenm">

                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;IP&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" v-model="rinfos.ip">

                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;&ensp;&ensp;Port&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" v-model="rinfos.port">

                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;아이디&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" />&ensp;

                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            패스워드&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" />
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;&ensp;&ensp;방식&ensp;
                                            <select class="form-select form-select-sm "
                                                aria-label="Default select example" v-model="rinfos.method">
                                                <option selected>엑티브</option>

                                            </select>
                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-lg-5 ml-5 mt-2">
                                            <div class="form-check form-check-inline ">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                    value="option3" v-model="rinfos.article">
                                                <label class="form-check-label" for="inlineCheckbox3">기사</label>

                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="form-check form-check-inline">

                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                    value="option3" v-model="rinfos.scroll">
                                                <label class="form-check-label" for="inlineCheckbox3">스크롤</label>


                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;등록자&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate">

                                        </div>
                                    </div>


                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            등록일시&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate">&ensp;&ensp;

                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;수정자&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate">

                                        </div>
                                    </div>


                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            수정일시&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate">&ensp;&ensp;


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
                { field: "sitenm", headerName: "사이트명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 400, maxWidth: 500 },
                { field: "ip", headerName: "IP", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "port", headerName: "Port", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "method", headerName: "방식", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "article", headerName: "기사", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
                { field: "scroll", headerName: "스크롤", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },



                // ...
            ],
            rowData: [
                { no: "1", sitenm: "디지털 MS", ip: "192.168.0.0", port: "8080 ", method: "엑티브", article: "Y", scroll: "Y" },
                { no: "2", sitenm: "버스채널", ip: "192.168.0.0", port: "21 ", method: "엑티브", article: "Y", scroll: "Y" },
                { no: "3", sitenm: "지하철채널", ip: "192.168.0.0", port: "22 ", method: "엑티브", article: "Y", scroll: "Y" },
                { no: "4", sitenm: "디지털 MS", ip: "192.168.0.0", port: "8080 ", method: "엑티브", article: "Y", scroll: "Y" },
                { no: "5", sitenm: "버스채널", ip: "192.168.0.0", port: "22 ", method: "엑티브", article: "Y", scroll: "Y" },

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