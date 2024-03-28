
$(document).ready(function() {
    $(".process-text").mouseover(function() {
        // 當滑鼠移動到元素上時執行的代碼
        $(".process-content").css("left", 0);
        console.log("滑鼠已經移動到'成果發表大綱'上");
    });

    $(".process-text").mouseout(function() {
        // 當滑鼠移出元素時執行的代碼
        $(".process-content").css("left", "-1600px");
        console.log("滑鼠已經離開'成果發表大綱'");
    });
});

$(document).ready(function() {
    $(".publish-text").mouseover(function() {
        // 當滑鼠移動到元素上時執行的代碼
        $(".publish-content").css("left", 0);
        console.log("滑鼠已經移動到'成果發表大綱'上");
    });

    $(".publish-text").mouseout(function() {
        // 當滑鼠移出元素時執行的代碼
        $(".publish-content").css("left", "-1600px");
        console.log("滑鼠已經離開'成果發表大綱'");
    });
});