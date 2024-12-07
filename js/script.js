$(document).ready(function(){


    var winH = $(window).innerHeight(); //윈도우

    var conH = $('section').innerHeight(); //컨텐츠

    var sideH = $('.side_bar').innerHeight(); //왼쪽메뉴



    const maxValue = Math.max(winH, conH, sideH);



    $('section .contents').css({'height': maxValue + 'px'});

    $('.side_bar').css({'height': maxValue + 'px'});



    //이력관리 > 달력 날짜 선택

    $('#history .h_table .td').click(function(){

        if($(this).text() != ''){

            $('#history .h_table .td').removeClass('on');

            $(this).addClass('on');



            $('#history .tab').removeClass('on');

            $('#history .tab1').addClass('on');



            resizeBG();

        }

    });



    //이력관리 > 오늘이력 보기 (오늘 = 01/18일로 작업함)

    $('#history .bc1').click(function(){

        $('#history .h_table .td').removeClass('on');

        $('#history .td.today').addClass('on');



        $(this).parent().siblings('.d_tab').removeClass('on');

        $(this).parent().siblings('.d_tab1').addClass('on');



        $('#history .tab').removeClass('on');

        $('#history .tab1').addClass('on');



        resizeBG();

    });





    //이력관리 > 회원이름 클릭

    $('#history .tab1 .list_a').click(function(){

        $('#history .tab').removeClass('on');

        $('#history .tab2').addClass('on');



        resizeBG();

    });

    $('#history .tab3 .list_a').click(function(){

        $('#history .tab').removeClass('on');

        $('#history .tab2').addClass('on');



        resizeBG();

    });





    //이력관리 > 과거 이력 보기

    $('#history .bc2').click(function(){

        $(this).parent().siblings('.d_tab').removeClass('on');

        $(this).parent().siblings('.d_tab2').addClass('on');



        $('#history .tab').removeClass('on');

        $('#history .tab1').addClass('on');



        resizeBG();

    });





    //회원관리 > 회원 선택시

    $('#member .m_li').click(function(){

        $('#member .m_li').removeClass('on');

        $(this).addClass('on');



        $('.tab').removeClass('on');

        $('.tab2').addClass('on');



        resizeBG();

    });

    //회원관리 > 운동이력 선택시

    $('#member .tab2 .e_wrap .tr').click(function(){

        $('.tab').removeClass('on');

        $('.tab3').addClass('on');



        resizeBG();

    });

    //회원관리 > 회원추가버튼

    $('#member .m_con .add_btn').each(function(data,index){

        $('#member .m_con .add_btn').data('is_on', false);

    })

    $('#member .m_con .add_btn').click(function(){

        if($(this).data('is_on')){

            $(this).children('.false').addClass('on');

            $(this).children('.true').removeClass('on');

            $('.tab').removeClass('on');

            $('.tab1').addClass('on');

            $(this).data('is_on', false);

            $('#member .m_li').removeClass('on');

        }else{

            $(this).children('.false').removeClass('on');

            $(this).children('.true').addClass('on');

            $('#member .m_con .add_btn').addClass('on');

            $('.tab').removeClass('on');

            $('.tab4').addClass('on');

            $(this).data('is_on', true);

            $('#member .m_li').removeClass('on');

        }



        resizeBG();

    });



    //회원관리 > 새회원추가 > 저장 누를시

    $('#member .tab4 .btn1').click(function(){

        // $('#member .add_btn').children('.false').addClass('on');

        // $('#member .add_btn').children('.true').removeClass('on');

        // $('.tab').removeClass('on');

        // $('.tab1').addClass('on');

        // $('#member .add_btn').data('is_on', false);

        // resizeBG();



        alert("저장되었습니다.");

        location.href='member.html'

    });



    //회원관리 > 새회원추가 > 취소 누를시

    $('#member .tab4 .btn2').click(function(){

        $('#member .add_btn').children('.false').addClass('on');

        $('#member .add_btn').children('.true').removeClass('on');

        $('.tab').removeClass('on');

        $('.tab1').addClass('on');

        $('#member .add_btn').data('is_on', false);

        resizeBG();

    });



    //회원관리 > 회원 > 수정 누르면

    $('#member .tab2 .btn2').click(function(){

        $('#member .tab').removeClass('on');

        $('#member .tab5').addClass('on');

    });

    //회원관리 > 회원 > 삭제 누르면

    $('#member .tab2 .btn3').click(function(){

        if(confirm("삭제하시겠습니까?")){

            location.href='member.html';

        }

    });



    //회원관리 > 회원정보 수정 > 저장 클릭시

    $('#member .tab5 .btn1').click(function(){

        alert("저장되었습니다.")

        location.href='member.html';

    });

    //회원관리 > 회원정보 수정 > 취소 클릭시

    $('#member .tab5 .btn2').click(function(){

        $('#member .tab').removeClass('on');

        $('#member .tab2').addClass('on');

    });



    

    //클래스 관리

    $('#class .c_newbtn').each(function(data,index){

        $('#class .c_newbtn').data('willAdd', true);

    });



    $('#class .c_newbtn').click(function(){

        if($(this).data('willAdd')){

            $('#class .tab').removeClass('on');

            $('#class .tab2').addClass('on');

            $('#class .c_newbtn').data('willAdd', false);

            $(this).addClass('on');

            $('#class .cw_btn').removeClass('on');

            resizeBG();

        }else{

            $('#class .tab').removeClass('on');

            $('#class .tab1').addClass('on');

            $('#class .c_newbtn').data('willAdd', true);

            $(this).removeClass('on');

            $('#class .cw_btn').removeClass('on');

            resizeBG();

        }

    });



    //새 클래스 추가 > 편집

    $('#class .t_con .edit_btn').each(function(data,index){

        $('#class .t_con .edit_btn').data('willEdit', true);

    });

    $('#class .t_con .edit_btn').click(function(){

        if($(this).data('willEdit')){

            $(this).text("저장");
            $(this).data('willEdit' ,false);

            $(this).prev('.m_num').children('.input_r').removeClass('on');
            $(this).prev('.m_num').children('.input_n').addClass('on');


        }else{

            $(this).text("편집");
            $(this).data('willEdit' ,true);

            $(this).prev('.m_num').children('.input_n').removeClass('on');
            $(this).prev('.m_num').children('.input_r').addClass('on');

            var new_num = $('#new_num').val();
            var ed_num = $('#edit_num').val();

            $(this).prev('.m_num').children('.input_r.new').text(new_num);
            $(this).prev('.m_num').children('.input_r.edit').text(ed_num);

        }

    });



    //새 클래스 추가 > 저장

    $('#class .tab2 .btn1').click(function(){

        $('#class .tab').removeClass('on');

        $('#class .tab1').addClass('on');

        $('#class .c_newbtn').removeClass('on');

        $('#class .c_newbtn').data('willAdd', true);


        $('.classpop').addClass('on');

    });

    //새 클래스 추가 > 취소

    $('#class .tab2 .btn2').click(function(){

        $('#class .tab').removeClass('on');

        $('#class .tab1').addClass('on');

        $('#class .c_newbtn').removeClass('on');

        $('#class .c_newbtn').data('willAdd', true);

        resizeBG();

    });



    //새 클래스 추가 > 진행시간 숫자

    $('#class .gray_border .mbtn.plus').click(function(){

        var time = $(this).prev().children('input').val();

        var time2 = parseInt(time);

        $(this).prev().children('input').val(time2+1);

    });

    $('#class .gray_border .mbtn.minus').click(function(){

        var time = $(this).next().children('input').val();

        var time2 = parseInt(time);

        if(time2 > 0){

            $(this).next().children('input').val(time2-1);

        }

    });



    //새 클래스 추가 > 목표심박 선택

    $('#class .tc_right .show .text').click(function(){

        $(this).next('.tc_ul').addClass('on');

        $('.ul_close').addClass('on');

    });

    $('#class .tc_ul .def').click(function(){

        $('#class .tc_ul').removeClass('on');

        $('.ul_close').removeClass('on');  

    });

    $('#class .ul_close').click(function(){

        $('#class .tc_ul').removeClass('on');

        $('.ul_close').removeClass('on');  

    });



    $('#class .tc_ul .tc_li').click(function(){

        var text = $(this).text();

        $(this).parent('.tc_ul').siblings('.text').text(text);

        $(this).parent('.tc_ul').removeClass('on');

        $('.ul_close').removeClass('on');



        $(this).parent('.tc_ul').parent('.show').next('.mt10').removeClass('on');

    });

    $('#class .tc_ul .custom').click(function(){

        $(this).parent('.tc_ul').parent('.show').next('.mt10').addClass('on');

    });



    //회원매칭 팝업 > 회원선택

    $('.classpop .text').click(function(){

        $(this).next('.tc_ul').addClass('on');

        $('.classpop .ul_close').addClass('on');

    });

    $('.classpop .tc_li').click(function(){

        var text = $(this).text()

        $('.classpop .ul_close').removeClass('on');

        $(this).parent('.tc_ul').removeClass('on');

        $(this).parent('.tc_ul').prev('.text').text(text);

    });

    $('.classpop .ul_close').click(function(){

        $(this).removeClass('on');

        $('.classpop .tc_ul').removeClass('on');

    });

    $('.classpop .cont3 .ok_btn').click(function(){

        // $('.classpop').removeClass('on');

        // $('#class .tab').removeClass('on');

        // $('#class .tab3').addClass('on');

        // $('#class .c_newbtn').removeClass('on');

        // $('#class .c_newbtn').data('willAdd', true);

        // resizeBG();



        alert("저장되었습니다.");

        location.href='class.html'

    });



    //새 클래스 추가 > 저장 > 회원매칭 팝업

    $('.classpop .black_bg').click(function(){

        $('.classpop').removeClass('on');

    });



    //클래스관리 > 클래스 선택하면

    $('#class .cw_btn').click(function(){

        $('#class .cw_btn').removeClass('on');

        $(this).addClass('on');



        $('#class .c_newbtn').removeClass('on');

        $('#class .c_newbtn').data('willAdd', true);



        $('#class .tab').removeClass('on');

        $('#class .tab3').addClass('on');



        resizeBG();

    });



    //클래스관리 > 클래스 > 수정

    $('#class .t3_con .ct_btn2').click(function(){

        $('#class .tab').removeClass('on');

        $('#class .tab4').addClass('on');



        resizeBG();

    });

    //클래스관리 > 클래스 > 삭제

    $('#class .t3_con .ct_btn3').click(function(){

        if(confirm("삭제하시겠습니까?")){

            location.href='class.html'

        }

    });



    //클래스관리 > 클래스 수정 > 저장

    $('#class .tab4 .btn1').click(function(){

        // $('#class .tab').removeClass('on');

        // $('#class .tab3').addClass('on');



        // resizeBG();

        alert("저장되었습니다.")

        location.href='class.html'

    });



    //클래스관리 > 클래스 수정 > 취소

    $('#class .tab4 .btn2').click(function(){

        $('#class .tab').removeClass('on');

        $('#class .tab3').addClass('on');



        resizeBG();

    });

    //클래스 > 운동시작

    $('#class .t3_con .ct_btn1').click(function(){

        location.href='class_sub.html'

    });



    //클래스 > 운동이력 누르면

    $('#class .tab3 .detail').click(function(){

        $('#class .tab').removeClass('on');

        $('#class .tab5').addClass('on');



        resizeBG();

    });



    //클래스 > 운동이력상세 > 이름 누르면

    $('#class .tab5 .list_a').click(function(){

        $('#class .tab').removeClass('on');

        $('#class .tab6').addClass('on');



        resizeBG();

    });

    



    //클래스 운동화면 class_sub.html

    $('#class_sub .sw_li').click(function(){

        $('#class_sub .sw_li').removeClass('on');

        $(this).addClass('on');



        $('#class_sub .tab').removeClass('on');

        $('#class_sub .tab').eq($(this).index()).addClass('on');



        resizeBG();

    });



    //중지,시작 버튼

    $('#class_sub .sub_wrap .st_btn').each(function(data,index){

        $('#class_sub .sub_wrap .st_btn').data('willStop', true);

    });

    $('#class_sub .sub_wrap .st_btn').click(function(){

        if($(this).data('willStop')){

            $(this).children('img').removeClass('on');

            $(this).children('.start').addClass('on');

            $(this).data('willStop', false);

        }else{

            $(this).children('img').removeClass('on');

            $(this).children('.stop').addClass('on');

            $(this).data('willStop', true);

        }

    });





    //카디오링크 > 카디오링크 선택

    $('#cardio .m_li').click(function(){

        $('#cardio .m_li').removeClass('on');

        $(this).addClass('on');



        $('#cardio .tab').removeClass('on');

        $('#cardio .tab2').addClass('on');



        resizeBG();

    });

    //카디오링크 > 수정 클릭

    $('#cardio .tab2 .btn1').click(function(){

        $('#cardio .tab2').removeClass('on');

        $('#cardio .tab3').addClass('on');



        resizeBG();

    });

    //카디오링크 수정 > 저장 클릭

    $('#cardio .tab3 .btn1').click(function(){

        // $('#cardio .tab3').removeClass('on');

        // $('#cardio .tab2').addClass('on');



        // resizeBG();



        alert("저장되었습니다.");

        location.href='cardio_link.html';

    });

    //카디오링크 수정 > 취소 클릭

    $('#cardio .tab3 .btn2').click(function(){

        $('#cardio .tab3').removeClass('on');

        $('#cardio .tab2').addClass('on');



        resizeBG();

    });

    //카디오링크 > 신규 추가

    $('#cardio .s_area .add_btn').each(function(data,index){

        $('#cardio .s_area .add_btn').data('is_on', false);

    });

    $('#cardio .s_area .add_btn').click(function(){

        if($(this).data('is_on')){

            $(this).children('.false').addClass('on');

            $(this).children('.true').removeClass('on');

            $('#cardio .tab').removeClass('on');

            $('#cardio .tab1').addClass('on');

            $(this).data('is_on', false);

            $('#cardio .m_li').removeClass('on');



            resizeBG();

        }else{

            $(this).children('.false').removeClass('on');

            $(this).children('.true').addClass('on');

            $('#member .m_con .add_btn').addClass('on');

            $('#cardio .tab').removeClass('on');

            $('#cardio .tab4').addClass('on');

            $(this).data('is_on', true);

            $('#cardio .m_li').removeClass('on');



            resizeBG();

        }

    });



    //새 카디오링크 추가 > 저장

    $('#cardio .tab4 .btn1').click(function(){

        alert("저장되었습니다.");

        location.href='cardio_link.html'

    });



    //새 카디오링크 추가 > 취소 클릭시

    $('#cardio .tab4 .btn2').click(function(){

        $('#cardio .false').addClass('on');

        $('#cardio .true').removeClass('on');

        $('#cardio .tab').removeClass('on');

        $('#cardio .tab1').addClass('on');

        $('#cardio .add_btn').data('is_on', false);



        resizeBG();

    });



    //카디오링크 > 삭제

    $('#cardio .tab2 .btn2').click(function(){

        if(confirm("삭제하시겠습니까?")){

            location.href='cardio_link.html';

        }

    });





    //설정 > 사용자정보 > 수정 클릭

    $('#set1 .tab1 .e_btn').click(function(){

        $('#set1 .tab').removeClass('on');

        $('#set1 .tab2').addClass('on');



        resizeBG();

    });



    //사용자정보 수정 > 저장 클릭시

    $('#set1 .tab2 .btn1').click(function(){

        // $('#set1 .tab').removeClass('on');

        // $('#set1 .tab1').addClass('on');



        // resizeBG();



        alert("저장되었습니다.");

        location.href='set.html'

    });

    //사용자정보 수정 > 취소 클릭시

    $('#set1 .tab2 .btn2').click(function(){

        $('#set1 .tab').removeClass('on');

        $('#set1 .tab1').addClass('on');



        resizeBG();

    });



    //설정 > 허브설정 > 허브 클릭

    $('#set2 .hub').click(function(){

        $('#set2 .hub').removeClass('on');

        $(this).addClass('on');



        $('#set2 .tab').removeClass('on');

        $('#set2 .tab2').addClass('on');



        $('#set2 .h_btn').data('is_on', false);

        $('#set2 .h_btn').removeClass('on');



        resizeBG();

    });



    //허브 > 수정클릭

    $('#set2 .tab2 .tcb1').click(function(){

        $('#set2 .tab').removeClass('on');

        $('#set2 .tab3').addClass('on');



        resizeBG();

    });



    //허브수정 > 저장 클릭

    $('#set2 .tab3 .btn1').click(function(){

        // $('#set2 .tab').removeClass('on');

        // $('#set2 .tab2').addClass('on');



        // resizeBG();



        alert("저장되었습니다.");

        location.href='set_2.html'

    });



    //허브수정 > 취소 클릭

    $('#set2 .tab3 .btn2').click(function(){

        $('#set2 .tab').removeClass('on');

        $('#set2 .tab2').addClass('on');



        resizeBG();

    });



    //신규 허브 등록

    $('#set2 .h_btn').each(function(data,index){

        $('#set2 .h_btn').data('is_on', false);

    });

    $('#set2 .h_btn').click(function(){

        $('#set2 .hub').removeClass('on');



        if($(this).data('is_on')){

            $('#set2 .tab').removeClass('on');

            $('#set2 .tab1').addClass('on');

            $(this).data('is_on', false);

            $(this).removeClass('on');

            resizeBG();

        }else{

            $('#set2 .tab').removeClass('on');

            $('#set2 .tab4').addClass('on');

            $(this).data('is_on', true);

            $(this).addClass('on');

            resizeBG();

        }

    });

    //새 허브 추가 > 저장 클릭

    $('#set2 .tab4 .btn1').click(function(){

        // $('#set2 .tab').removeClass('on');

        // $('#set2 .tab1').addClass('on');

        // $('#set2 .h_btn').data('is_on', false);

        // $('#set2 .h_btn').removeClass('on');

        // resizeBG();



        alert("저장되었습니다.");

        location.href='set_2.html'

    });



    //새 허브 추가 > 취소 클릭

    $('#set2 .tab4 .btn2').click(function(){

        $('#set2 .tab').removeClass('on');

        $('#set2 .tab1').addClass('on');

        $('#set2 .h_btn').data('is_on', false);

        $('#set2 .h_btn').removeClass('on');

        resizeBG();

    });



    //설정 > 허브 > 삭제

    $('#set2 .tab2 .tcb2').click(function(){

        if(confirm("삭제하시겠습니까?")){

            location.href='set_2.html';

        }

    });



    //설정 > 로고변경 > 저장

    $('#set4 .btn1').click(function(){

        alert("저장되었습니다.");

        location.href='set_4.html'

    });






        //차트 = chart.js
    
    //도넛차트
    
    new Chart(document.getElementById("doughnut"), {
    
        type : 'doughnut',

        data : {

            // labels : [ 0,1,2,3,4],

            datasets : [

                    {

                        data : [ 6,16,28,13,37,],

                        backgroundColor: [

                            '#000000',

                            '#0E4AFF',

                            '#3CB01F',

                            '#E77A0F',

                            '#FA0A41',

                        ],

                        borderAlign: 'center',

                        borderWidth: 0,

                    }]

        },    

        options : {

            plugins:{

                legend:{

                    display:false

                },

            },

        }

    });

//선 차트

new Chart(document.getElementById("line-chart"), {

        type : 'line',

        data : {

            labels : [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],

            datasets : [

                    {

                        data : [ 90, 100, 120, 140, 160, 180, 210,

                                200, 200, 190, 180, 170, 150, 140, 130, 120 ],

                        // borderColor : "#3cba9f",

                        fill : false,

                        pointStyle : false,

                        yAxisID: 'y',

                        fontSize : 16,

                        tension : 0.1,

                        segment: {

                        borderColor: (ctx) => {

                        val = ctx.p0.parsed.y;

                        return val >= 180 ? '#FA0A41' : val >= 160 ? '#E77A0F' : val >= 140 ? '#3CB01F' : val >= 100 ? '#0E4AFF' : '#000000'

                        }

                    },

                    }]

        },        

        options : {

            title : {

                display : 'none',

            },

            plugins:{

                legend:{

                    display:false

                },

            },

            scales: {

                y : {

                    suggestedMin: 0,

                    suggestedMax: 250,

                }

            },

        }

    });



});





function resizeBG(){ //컨텐츠 높이 바뀔때마다 배경 높이값 다시 지정



    var sideH = $('.side_bar').innerHeight(); //왼쪽메뉴

    var whiteH = $('section .white_bg').innerHeight() + 180;

    //흰색배경 높이 + 배경이미지 사이즈



    if(sideH < whiteH){

        $('section .contents').css({'height': whiteH + 'px'});

    }else{

        $('section .contents').css({'height': sideH + 'px'});

    }



}





