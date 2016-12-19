var houseArea = {};
var houseAreas = [];
var inputName;

var rooms = [
    "Livingroom",
    "Bedroom",
    "Bathroom",
    "Kitchen"
]

$(document).ready(function () {
   
    GetHouseArea();

    //$('#light-switch-Livingroom').change(function () {
    //    findHouseArea(room)
    //    if ($(this).is(':checked')) {
    //        updateHouseArea(room, true);
    //    }
    //    else {
    //        updateHouseArea(room, false)
    //    }
    //});
    console.log("ready!");
    var hubbie = $.connection.myHub;
    $.connection.hub.logging = true;
    hubbie.client.sendServerTime = function (serverTime) {
        $("#newTime").text(serverTime);
    };
    hubbie.client.lightsOn = function (roomIndex, status) {
        var room = rooms[roomIndex];
        var on = " : lights are ON";
        var off = " : lights are OFF";
        if (status == "on") {
            $("#text-" + room).text(room);
            $("#text-" + room).append(on);
            //$('#light-switch-' + room).val(true);
            //var id = "#light-switch-" + room;
            //document.getElementById("light-switch-" + room).checked = true;
            $('#light-switch-' + room).prop('checked', true);
            
        }
        else {
            $("#text-" + room).text(room);
            $("#text-" + room).append(off);
            //$('#light-switch-' + room).val(false);
            //document.getElementById("light-switch-" + room).checked = false;
            $('#light-switch-' + room).prop('checked', false);
        }
        
    };
    $.connection.hub.start();
    
});

function GetHouseArea() {
    jQuery.support.cors = true;
    $.ajax({
        url: 'http://localhost:53046/api/HouseAreaAPI',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            houseAreas = data;
            console.log(houseAreas);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
            console.log(houseArea);
            //houseAreas = {};
        }
    });
}

function findHouseArea(inputName) {
    houseArea = houseAreas.find(function (el) {
        return el.AreaName == inputName;
    });
}

function updateHouseArea(areaName, lightsOn, floorHeating, alarm) {
    jQuery.support.cors = true;
    findHouseArea(areaName); //gives us house area from db that we stored in array up there
    var thisHouseArea = {
        Id: houseArea.Id,
        AreaName: areaName,
        LightsOn: lightsOn.is(':checked'),
        FloorHeating: floorHeating.is(':checked'),
        Alarm: alarm.is(':checked')
    };
    $.ajax({
        url: 'http://localhost:53046/api/HouseAreaAPI/' + houseArea.Id,
        type: 'PUT',
        data: JSON.stringify(thisHouseArea),
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            alert("area updated");
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

function AddHouseArea() {
    jQuery.support.cors = true;
    var houseArea = {
        ID: $('#txtaddHouseAreaId').val(),
        AreaName: $('#txtaddName').val(),
        LightsOn: $('#txtaddLightsOn').val(),
        FloorHeating: $('#txtaddFloorHeating').val(),
        Alarm: $('#txtaddAlarm').val()
    };

    $.ajax({
        url: 'http://localhost:53046/api/HouseAreaAPI/',
        type: 'POST',
        data: JSON.stringify(houseArea),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

//function UppdateHouseArea() {
//    jQuery.support.cors = true;
//    var houseArea = {
//        ID: $('#txtUpdateHouseAreaId').val(),
//        Name: $('#txtUpdateName').val(),
//        LightsOn: $('#txtUpdateLightsOn').val(),
//        FloorHeating: $('#txtUpdateFloorHeating').val()
//    };

//    $.ajax({
//        url: 'http://localhost:53046/api/HouseAreaAPI/' + houseArea.ID,
//        type: 'PUT',
//        data: JSON.stringify(houseArea),
//        contentType: "application/json;charset=utf-8",
//        success: function (data) {
//            WriteResponse(data);
//        },
//        error: function (x, y, z) {
//            alert(x + '\n' + y + '\n' + z);
//        }
//    });
//}

//function DeleteHouseArea() {
//    jQuery.support.cors = true;
//    var id = $('#deleteId').val();

//    $.ajax({
//        url: 'http://localhost:53046/api/HouseAreaAPI/' + id,
//        type: 'DELETE',
//        contentType: "application/json;charset=utf-8",
//        success: function (data) {
//            GetHouseArea();
//            console.log(houseAreas);
//            //WriteResponse(data);
//        },
//        error: function (x, y, z) {
//            alert(x + '\n' + y + '\n' + z);
//        }
//    });
//}

