﻿

function loadGridStreet() {
debugger;

    let appName = document.getElementById("ulb_name").innerHTML;
$("#demoGrid3").dataTable().fnDestroy();
    $("#demoGrid3").DataTable({
        buttons: [

            {
                extend: 'excel', className: 'btn btn-sm btn-success filter-button-style', title: appName + ' Street Report', text: 'Export to Excel', exportOptions: { columns: [0, 1, 2, 3, 4, 5] }
            },
        ],
        //"sDom": "ltipr",
        dom: 'lBfrtip',
        lbFilter: false,
    //"sDom": "ltipr",
    //   "order": [[11, "desc"]],
    "processing": true, // for show progress bar
    "serverSide": true, // for process server side
    "filter": true, // this is for disable filter (search box)
    "orderMulti": false, // for disable multiple column at once
    //"pageLength": 10,

    "ajax": {
        "url": "/Datable/GetJqGridJson?rn=HSStreetDetails",
        "type": "POST",
        "datatype": "json"
    },

    "columnDefs":
        [{
            "targets": [0],
            "visible": false,
            "searchable": false
        },
        {
            "targets": [6],
            "visible": true,

            "render": function (data, type, full, meta) {
                if (full["QRCodeImage"] != null) {
                    return "<div style='cursor:pointer;display:inline-flex;'  onclick=PopImages(this)><img alt='Photo Not Found'  src='" + data +
                        "' style='height:35px;width:35px;cursor:pointer;margin-left:0px;'></img><span><ul class='dt_pop'  style='margin:2px -5px -5px -5px; padding:0px;list-style:none;display:none;'><li  class='li_date datediv' >" + full["Name"] + "</li><li class='addr-length' style='margin:0px 0px 0px 10px;'>"
                        + full["ReferanceId"] + "</li><li class='date_time'>" + full["modifiedDate"] + "</li><li style='display:none' class='li_title' >QR Code Image </li></ul></span></div>";
                }
                else {

                    return "<img alt='Photo Not Found' onclick='noImageNotification()' src='/Images/default.png' style='height:35px;width:35px;cursor:pointer;'></img>";
                }
            },
        }
        ],


    "columns": [
        { "data": "streetId", "name": "streetId", "autoWidth": true },
        { "data": "modifiedDate", "name": "modifiedDate", "autoWidth": true },
        { "data": "ReferanceId", "name": "ReferanceId", "autoWidth": true },
        { "data": "Name", "name": "Name", "autoWidth": true },
        { "data": "HouseLat", "name": "HouseLat", "autoWidth": true },
        { "data": "HouseLong", "name": "HouseLong", "autoWidth": true },
        { "data": "QRCodeImage", "name": "QRCodeImage", "autoWidth": true },

    ],

});
    //SearchStreet();
}

//Search();







function noImageNotification() {
    document.getElementById("snackbar").innerHTML = "Image not uploaded...";
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
}

function user_route(id) {
    window.location.href = "/HouseScanify/HSUserRoute?qrEmpDaId=" + id;
};
//////////////////////////////////////////////////////////////////////////////
function showInventoriesGrid() {
    Search();
}

function Search() {
    var value = ",,," + $("#sStreet").val();//txt_fdate + "," + txt_tdate + "," + UserId + "," + Client + "," + NesEvent + "," + Product + "," + catProduct + "," + 1;
    // alert(value );
    oTable = $('#demoGrid3').DataTable();
    oTable.search(value).draw();
    oTable.search("");
    document.getElementById('USER_ID_FK').value = -1;
}


function SearchStreet() {
    var txt_fdate, txt_tdate, Client, UserId;
    var name = [];
    var arr = [$('#txt_fdate').val(), $('#txt_tdate').val()];

    for (var i = 0; i <= arr.length - 1; i++) {
        name = arr[i].split("/");
        arr[i] = name[1] + "/" + name[0] + "/" + name[2];
    }

    txt_fdate = arr[0];
    txt_tdate = arr[1];
    UserId = $('#selectnumber').val();
    Client = " ";
    NesEvent = " ";
    var Product = "";
    var catProduct = "";
    var value = txt_fdate + "," + txt_tdate + "," + UserId + "," + $("#sStreet").val();//txt_fdate + "," + txt_tdate + "," + UserId + "," + Client + "," + NesEvent + "," + Product + "," + catProduct + "," + 1;
    // alert(value );
    oTable = $('#demoGrid3').DataTable();
    oTable.search(value).draw();
    oTable.search("");
    document.getElementById('USER_ID_FK').value = -1;
}