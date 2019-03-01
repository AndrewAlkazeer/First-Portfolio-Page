$(document).ready(() => {


    $('#link1').click(function () {

        $path = $('#part2').offset().top;

        $('body').animate({ scrollTop: $path }, 1000);

    });

    $('#link2').click(function () {

        $path = $('#part1').offset().top;

        $('body').animate({ scrollTop: $path }, 1000);

    });

    $('#link2page2').click(function () {

        $path = $('#part3').offset().top;

        $('body').animate({ scrollTop: $path }, 1000);

    });

    $('#link3').click(function () {

        $path = $('#part2').offset().top;

        $('body').animate({ scrollTop: $path }, 1000);

    });


})

