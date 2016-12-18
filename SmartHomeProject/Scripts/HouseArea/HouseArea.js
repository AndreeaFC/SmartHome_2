﻿var houseArea = {};
var houseAreas = [];
var inputName;
$(document).ready(function () {

    GetHouseArea();
});

function GetHouseArea() {
    jQuery.support.cors = true;
    $.ajax({
        url: 'http://localhost:53046/api/HouseAreaAPI/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            houseAreas = data;
            console.log(houseArea);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
            console.log(houseArea);
            houseAreas = {};
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
    houseArea = {
       // Id: houseArea.Id,
        AreaName: houseArea.areaName,
        LightsOn: lightsOn.is(':checked'),
        FloorHeating: floorHeating.is(':checked'),
        Alarm: alarm.is(':checked')
    };
    $.ajax({
        url: 'http://localhost:53046/api/HouseAreaAPI/' + houseArea.Id,
        type: 'PUT',
        data: JSON.stringify(houseArea),
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

function UppdateHouseArea() {
    jQuery.support.cors = true;
    var houseArea = {
        ID: $('#txtUpdateHouseAreaId').val(),
        Name: $('#txtUpdateName').val(),
        LightsOn: $('#txtUpdateLightsOn').val(),
        FloorHeating: $('#txtUpdateFloorHeating').val()
    };

    $.ajax({
        url: 'http://localhost:53046/api/HouseAreaAPI/' + houseArea.ID,
        type: 'PUT',
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

function DeleteHouseArea() {
    jQuery.support.cors = true;
    var id = $('#txtDelHouseAreaId').val();

    $.ajax({
        url: 'http://localhost:53046/api/HouseAreaAPI/' + id,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}