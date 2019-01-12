/// <reference path="_references.js" />

function Submit()
{
    var Name = $.trim($("#Name").val());
    var Tel = $.trim($("#Tel").val());
    var San_ID = $.trim($("#San_ID").val());
    var Located = $.trim($("#Located").val());
    var Status = $.trim($("#Status").val());
    
    if (!Name.match("^[\u4e00-\u9fa5]{2,8}$")) alert("姓名填写不符合要求!");
    else if (!Tel.match("^1[1,3,5,7,8][0-9]{9}$")) alert("联系方式填写不符合要求!");
    else if (!San_ID.match("^[L,M,H,E,F,Q,X,T]-[0-9]{3}$")) alert("雨伞编号填写不符合要求!");
    else if (!Located.match("^厚德楼A栋大厅|四栋一楼楼梯口|岐头二楼餐厅门口|香山二楼餐厅门口|龙腾一楼餐厅门口$")) alert("请选择借伞点!");
    else if (!Status.match("^状况良好|轻微损坏|严重损坏$")) alert("请选择雨伞情况!");
    else {
        var $loadingToast = $('#loadingToast');
        $loadingToast.fadeIn(100);
        $.post("/Handler.ashx", { "cmd": "Lend", "Name": Name, "Tel": Tel, "San_ID": San_ID, "Located": Located, "Status": Status }, function (data) {
            //$loadingToast.fadeOut(100);
            setTimeout(function () {
                if (data == "No_Account_Exist") {
                    document.getElementById("ScriptDiv").innerHTML = "<div class='weui-cell'><div class='weui-cell__hd'><label class='weui-label'>学号</label></div><div class='weui-cell__bd'><input class='weui-input' type='number' id='Stu_ID' placeholder='请输入学号：' /></div></div><div class='weui-cell'><div class='weui-cell__hd'><label class='weui-label'>宿舍号</label></div><div class='weui-cell__bd'><input class='weui-input' type='text' id='Dorm' placeholder='请输入宿舍号（学生）：' /></div></div>";
                    document.getElementById("mark").innerHTML = "<a class='weui-btn weui-btn_primary' href='javascript:;' onclick='SignIn()'>确定</a>";
                    alert("由于你第一次使用本系统，所以请如实填写学号和宿舍号（学生）。");
                }
                else if (data == "Lent") alert("你处于借伞状态，请还伞后再借伞！");
                else if (data == "Success_Lend") alert("借伞成功，欢迎使用！");
                else if (data == "Error_Update_UserInfor_Status") alert("更新用户借伞状态出错，请联系 website@cheng.studio 解决。");
                else if (data == "Error_Insert_Account") alert("登记身份信息失败，请联系 website@cheng.studio 解决。");
                else if (data == "Error_Lend") alert("登记借伞状态出错，请联系 website@cheng.studio 解决。");
                else if (data == "No_San_ID_Exist") alert("此伞编号不存在，请检查伞编号是否填写正常。");
                else alert("不可预知错误，请联系 website@cheng.studio 解决。");
            }, 200);
        });
    }
}

function SignIn()
{
    var Name = $.trim($("#Name").val());
    var Tel = $.trim($("#Tel").val());
    var San_ID = $.trim($("#San_ID").val());
    var Located = $.trim($("#Located").val());
    var Status = $.trim($("#Status").val());
    var Stu_ID = $.trim($("#Stu_ID").val());
    var Dorm = $.trim($("#Dorm").val());
    if (Dorm == "") Dorm = "NULL";
    if (!Name.match("^[\u4e00-\u9fa5]{2,8}$")) alert("姓名填写不符合要求!");
    else if (!Tel.match("^1[1,3,5,7,8][0-9]{9}$")) alert("联系方式填写不符合要求!");
    else if (!San_ID.match("^[L,M,H,E,F,Q,X,T]-[0-9]{3}$")) alert("雨伞编号填写不符合要求!");
    else if (!Located.match("^厚德楼A栋大厅|四栋一楼楼梯口|岐头二楼餐厅门口|香山二楼餐厅门口|龙腾一楼餐厅门口$")) alert("请选择借伞点!");
    else if (!Status.match("^状况良好|轻微损坏|严重损坏$")) alert("请选择雨伞情况!");
    else if (!Stu_ID.match("^201[3-6][0-1]\\d[0-2]\\d{6}$")) alert("学号与姓名不匹配!");
    else if (!Dorm.match("^[\u4e00-\u9fa5|0-9|A-U|/-]{1,20}$")) alert("宿舍号填写不符合要求!");
    else {
        var $loadingToast = $('#loadingToast');
        $loadingToast.fadeIn(100);
        $.post("/Handler.ashx", { "cmd": "SignIn", "Name": Name, "Tel": Tel, "San_ID": San_ID, "Dorm": Dorm, "Located": Located, "Status": Status, "Stu_ID": Stu_ID }, function (data) {
            $loadingToast.fadeOut(100);
            setTimeout(function () {
                if (data == "Lent") alert("你处于借伞状态，请还伞后再借伞！");
                else if (data == "Success_Lend") alert("借伞成功，欢迎使用！");
                else if (data == "Error_Update_UserInfor_Status") alert("更新用户借伞状态出错，请联系 website@cheng.studio 解决。");
                else if (data == "Error_Insert_Account") alert("登记身份信息失败，请联系 website@cheng.studio 解决。");
                else if (data == "Error_Lend") alert("登记借伞状态出错，请联系 website@cheng.studio 解决。");
                else if (data == "No_San_ID_Exist") alert("此伞编号不存在，请检查伞编号是否填写正常。");
                else alert("不可预知错误，请联系 website@cheng.studio 解决。");
            }, 200);
        });
    }
}

function Give_Back()
{
    var Name = $.trim($("#Name").val());
    var Tel = $.trim($("#Tel").val());
    var San_ID = $.trim($("#San_ID").val());
    var Located = $.trim($("#Located").val());
    var Status = $.trim($("#Status").val());

    if (!Name.match("^[\u4e00-\u9fa5]{2,8}$")) alert("姓名填写不符合要求!");
    else if (!Tel.match("^1[1,3,5,7,8][0-9]{9}$")) alert("联系方式填写不符合要求!");
    else if (!San_ID.match("^[L,M,H,E,F,Q,X,T]-[0-9]{3}$")) alert("雨伞编号填写不符合要求!");
    else if (!Located.match("^凤翔宿管|18栋宿管|16栋宿管|香晖AB宿管|香晖CD宿管|10栋宿管|厚德楼A栋大厅|四栋一楼楼梯口|岐头二楼餐厅门口|香山二楼餐厅门口|龙腾一楼餐厅门口$")) alert("请选择还伞点!");
    else if (!Status.match("^状况良好|轻微损坏|严重损坏$")) alert("请选择雨伞情况!");
    else {
        var $loadingToast = $('#loadingToast');
        $loadingToast.fadeIn(100);
        $.post("/Handler.ashx", { "cmd": "Give_Back", "Name": Name, "Tel": Tel, "San_ID": San_ID, "Located": Located, "Status": Status }, function (data) {
            $loadingToast.fadeOut(100);
            setTimeout(function () {
                if (data == "Success_Give_Back") alert("还伞成功，欢迎您再次使用。");
                else if (data == "Error_Update_UserInfor_Status") alert("更新用户借伞状态出错，请联系 website@cheng.studio 解决。");
                else if (data == "Error_Give_Back") alert("登记还伞状态出错，请联系 website@cheng.studio 解决。");
                else if (data == "No_San_ID_Exist") alert("此伞编号不存在，请检查伞编号是否填写正常。");
                else alert("不可预知错误，请联系 website@cheng.studio 解决。");
            }, 200);
        });
    }
}