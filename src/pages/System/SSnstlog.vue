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

                        <div class="col-lg-12 ">
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
                {
                    field: "select", headerName: "선택", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100,
                    cellRenderer: params => {
                        const eInput = document.createElement('input');
                        eInput.type = 'checkbox';
                        eInput.checked = params.data.isChecked;
                        eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
                        return eInput;
                    }
                },
                { field: "sub", headerName: "기사제목", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, minWidth: 800, maxWidth: 900 },
                { field: "site", headerName: "사이트", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, minWidth: 360, maxWidth: 900 },
                { field: "chl", headerName: "채널", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "sdate", headerName: "전송일시", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 360, maxWidth: 500 },

                // ...
            ],
            rowData: [
                { no: "1", select: "", sub: "수사팀장 배제… 정치권 국정원 논란 재가열", site: "twitter", chl: "MS", sdate: "24-07-09 12:23:22", },
                { no: "2", select: "", sub: "10.30 재보선 선거운동 시작 첫 주말… 여야 지원전 나서", site: "twitter", chl: "MS", sdate: "24-07-16 12:23:22", },
                { no: "3", select: "", sub: "새누리. 민주당 집회 비판… ‘국감 성실해야’", site: "twitter", chl: "MS", sdate: "24-07-28 12:23:22", },
                { no: "4", select: "", sub: "민주당, 오늘 서울광장 장외집회 개최", site: "facebook", chl: "MS", sdate: "24-08-11 12:23:22", },
                { no: "5", select: "", sub: "추미애 의원, “재난관리기관 평가, 사후 조치 등 부실”", site: "facebook", chl: "MS", sdate: "24-08-23 12:23:22", },

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