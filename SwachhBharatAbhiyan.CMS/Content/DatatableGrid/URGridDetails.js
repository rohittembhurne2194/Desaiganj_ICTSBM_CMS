﻿function LoadAGrid() {
    debugger;

    $("#demoGrid").dataTable().fnDestroy();
    $("#demoGrid").DataTable({
        "sDom": "ltipr",
        //   "order": [[11, "desc"]],
        "processing": true, // for show progress bar
        "serverSide": true, // for process server side
        "filter": true, // this is for disable filter (search box)
        "orderMulti": false, // for disable multiple column at once
        "pageLength": 10,

        "ajax": {
            "url": "/Datable/GetJqGridJson?rn=URAttendance&clientName=A",
            "type": "POST",
            "datatype": "json"
        },

        "columnDefs":
            [{
                "targets": [0],
                "visible": false,
                "searchable": false
            },

            ],


        "columns": [
            { "data": "EmpId", "name": "EmpId", "autoWidth": true },
            { "data": "lastModifyDateEntry", "name": "lastModifyDateEntry", "autoWidth": true },
            { "data": "EmpName", "name": "EmpName", "autoWidth": true },

            {
                "data": "type", "render": function (data, type, full, meta) {
                    if (full["type"] == 'A') {
                        return 'Admin';
                    }
                    else if (full["type"] == 'SA') {
                        return 'Sub Admin';
                    }

                    else {
                        return 'Not Available';
                    }
                }
            },

            {
                "data": "type", "render": function (data, type, full, meta) {
                    if (full["isActive"] == '1') {
                        return 'Active';
                    }

                    if (full["isActive"] == '0') {
                        return 'Non Active';
                    }

                    else {
                        return 'Not Available';
                    }
                }
            },

            { "render": function (data, type, full, meta) { return '<a  data-toggle="modal" class="tooltip1" style="cursor:pointer"   onclick="Edit(' + full["EmpId"] + ')"  ><i class="material-icons edit-icon">edit</i><span class="tooltiptext1">Edit</span> </a>'; }, "width": "10%" },


        ],

    });

}

function LoadNGrid() {
    debugger;

    $("#demoGrid").dataTable().fnDestroy();
    $("#demoGrid").DataTable({
        "sDom": "ltipr",
        //   "order": [[11, "desc"]],
        "processing": true, // for show progress bar
        "serverSide": true, // for process server side
        "filter": true, // this is for disable filter (search box)
        "orderMulti": false, // for disable multiple column at once
        "pageLength": 10,

        "ajax": {
            "url": "/Datable/GetJqGridJson?rn=URAttendance&clientName=N",
            "type": "POST",
            "datatype": "json"
        },

        "columnDefs":
            [{
                "targets": [0],
                "visible": false,
                "searchable": false
            },

            ],


        "columns": [
            { "data": "EmpId", "name": "EmpId", "autoWidth": true },
            { "data": "lastModifyDateEntry", "name": "lastModifyDateEntry", "autoWidth": true },
            { "data": "EmpName", "name": "EmpName", "autoWidth": true },

            {
                "data": "type", "render": function (data, type, full, meta) {
                    if (full["type"] == 'A') {
                        return 'Admin';
                    }
                    else if (full["type"] == 'SA') {
                        return 'Sub Admin';
                    }

                    else {
                        return 'Not Available';
                    }
                }
            },

            {
                "data": "type", "render": function (data, type, full, meta) {
                    if (full["isActive"] == '1') {
                        return 'Active';
                    }

                    if (full["isActive"] == '0') {
                        return 'Non Active';
                    }

                    else {
                        return 'Not Available';
                    }
                }
            },

            { "render": function (data, type, full, meta) { return '<a  data-toggle="modal" class="tooltip1" style="cursor:pointer"   onclick="Edit(' + full["EmpId"] + ')"  ><i class="material-icons edit-icon">edit</i><span class="tooltiptext1">Edit</span> </a>'; }, "width": "10%" },


        ],

    });

}

function user_route(id) {
    window.location.href = "/HouseScanifyEmp/AddUREmployeeDetails?EmpId=" + id;
};
//////////////////////////////////////////////////////////////////////////////
function showInventoriesGrid() {
   // Search();
}

function Edit(Id) {
    window.location.href = "/HouseScanifyEmp/AddUREmployeeDetails?teamId=" + Id;

};



