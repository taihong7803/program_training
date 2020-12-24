
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("save").addEventListener("click",function() {
        var title = document.getElementById("title").value;
        var date = document.getElementById("date").value;
        var memo = document.getElementById("memo").value;

        localStorage.setItem("title",title);
        localStorage.setItem("date",date);
        localStorage.setItem("memo",memo);
        document.getElementById("status").innerText ="データを保存しました";
    });

    document.getElementById("load").addEventListener("click",function() {
        var title = localStorage.getItem("title");
        var date = localStorage.getItem("date");
        var memo = localStorage.getItem("memo");

        document.getElementById("title").value = title;
        document.getElementById("date").value = date;
        document.getElementById("memo").value = memo;
        document.getElementById("status").innerText =" 内容を読み出しました";
    });
}, true);
