$(document).ready(function (){
    // pc no 안적으면 경고창으로 알려주고 적었다면 save로 pass!
    $("#btn_save").on("click", function() {
        if ($("#pcname").val() ===''){
            alert("적어");
            $('#pcname').focus();
            return false;
        }else {
            save();
        }

    });
    //let writeForm = window.document.body.querySelector('#pcdata_form');

    /* save 펑션만들기*/
    function save(){
        //id와 파싱하여 데이터 넣는 함수
        var data = {

         //   no: $("#no").val(),
            pcname: $("#pcname").val(),
            cpu: $("#cpu").val(),
            mem: $("#mem").val(),
            ssd: $("#ssd").val(),
            hdd: $("#hdd").val()
            // ssd: getNameByValues($("input[name=ssd]")),
        };

        // var ssd = getNameByValues($("input[name=ssd]"));
        // $.each($("input[name=ssd]"), function (i, item){
        //     ssd.push($(this).val());
        // });
        // data.ssd = ssd;

        console.log(data);
        $.ajax({
            // type:"POST",
            method:"POST",
            url:"/dtsave",
            // data: data,
            data: JSON.stringify(data), // http body 데이터
            contentType:"application/json", //body데이터 어떤타입(MIME), 보내는 데이터 타입
            dataType:"json",   //서버에서 어떤타입으로 받을지
        }).done(function (resp){
            alert("등록완료");
        }).fail(function (){
            alert(JSON.stringify(error));
        });
    };


    /*   $("#data").click(function (){
          /!* document.*!/
       });*/
    /*데이터리스트 클릭시 활성화 */

    /* save 버튼 클릭 시 저장버튼 */
    /*      $(document).on('click', '#bts_save', function (e){
              if (writeForm.element['no'].value ===''){
                  alert('PC명을 입력해주세요');
                  return false;
              }
              e.preventDefault();
              $("#form").submit();
          });*/

    $("#btnSubmit").on("click", function(){
        //액션태그에 submits controller 주소 찾아갈 수 있게
        $("#regForm").attr("action", "submits");

        $("#regForm").submit();
    });


    /* 프린트버튼 클릭시 활성화 */
    $('#print').click(function(){
        makeHtml(); //프린트할 내용의 함수
    });


    // 인쇄할 html 보이는 영역
    function makeHtml(){
        var initBody;
        window.onbeforeprint = function (){
            initBody = document.body.innerHTML;
            document.body.innerHTML = document.getElementById('print_info').innerHTML;
        };
        window.print();
        return false;
    }



    // 인쇄할 html 보이는 영역 다른방법
    /* function makeHtml(){
         const obj = {html:''} ;

         var html = document.getElementById('top_info');
         document.body.innerHTML =  document.getElementById(html).innerHTML;
         obj.html = html;
         return obj;
         window.print();
     }*/
});

function getNameByValues(obj) {
    var list = [];
    $.each($(obj), function(i, item){
        list.push($(this).val());
    });
    return list;
}