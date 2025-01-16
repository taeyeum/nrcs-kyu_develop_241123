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
                                                        <option selected>MS WEATHER</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card-body p-0 m-0 text-sm">
                    <div class="row gx-1">
                        <div class="col-lg-2 ">
                            <div class="container">
                                <div class="card" style="height:740px;">
                                    <div class="container-fluid">
                                        <div class="tree mt-2 ">
                                            <ul>
                                                <li v-for="item in treeData" :key="item.id" @click="handleClick(item)">
                                                    {{ item.label }}
                                                    <ul v-if="item.children && item.children.length > 0"
                                                        style="margin-left: 20px;">
                                                        <li v-for="child in item.children" :key="child.id"
                                                            style="padding-top: 10px;">
                                                            <span class="node">{{ child.label }}</span>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-10 ">
                            <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData"
                                :groupHeaders="true" :defaultColDef="defaultColDef" @cellClicked="onCellClicked"
                                :headerHeight="28" :rowHeight="35" class="ag-theme-alpine ml-n3"
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
    name: 'Tree',
    props: {
        treeData: {
            type: Array,
            required: true,
        },
    },


    data() {
        return {


            columnDefs: [

                { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },


                { field: "id", headerName: "ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
                { field: "name", headerName: "이름", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
                { field: "division", headerName: "구분", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
                { field: "date", headerName: "일시", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 300, maxWidth: 400 },
                { field: "ip", headerName: "IP", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 300, maxWidth: 400 },
                { field: "maddress", headerName: "Mac Address", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 300, maxWidth: 400 },
                { field: "apath", headerName: "접속경로", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
                { field: "version", headerName: "버전", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },



                // ...
            ],
            rowData: [
                { no: "1", id: "000001", name: "정하윤", division: "로그인", date: "24-08-13 12:23:22", ip: "192.0.168.0", maddress: "00-C0-9F-A1-9D-4A", apath: "CS", version: "1.0" },
                { no: "2", id: "000002", name: "정홍기", division: "로그인", date: "24-08-13 12:23:22", ip: "192.0.168.0", maddress: "00-C0-9F-A1-9D-4A", apath: "CS", version: "1.0" },
                { no: "3", id: "000003", name: "정보리", division: "로그인", date: "24-08-13 12:23:22", ip: "192.0.168.0", maddress: "00-C0-9F-A1-9D-4A", apath: "CS", version: "1.0" },
                { no: "4", id: "000004", name: "정호두", division: "로그아웃", date: "24-08-13 12:23:22", ip: "192.0.168.0", maddress: "", apath: "WEB", version: "1.0" },
                { no: "5", id: "000005", name: "정안나", division: "로그인", date: "24-08-13 12:23:22", ip: "192.0.168.0", maddress: "00-C0-9F-A1-9D-4A", apath: "CS", version: "1.0" },


            ],

            treeData: [
                {
                    id: 1,
                    label: 'Newsys',
                    expanded: false,
                    children: [
                        { id: 2, label: '게시판', expanded: false },
                        { id: 3, label: '이슈', expanded: false },
                        { id: 4, label: '방송계획관리', expanded: false },
                        { id: 5, label: '기사', expanded: false },
                        { id: 6, label: '큐시트', expanded: false },
                        { id: 7, label: '자료관리', expanded: false },
                        { id: 8, label: '업무의뢰', expanded: false },
                        { id: 9, label: '시청률', expanded: false },
                        { id: 10, label: '시스템관리', expanded: false },
                        { id: 11, label: '방송로그관리', expanded: false },


                    ],
                },
                // ...
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


        },

        handleClick(item) {
            item.expanded = !item.expanded;
        }

    }
}




</script>



<style>
.node {
    cursor: pointer;

}
</style>