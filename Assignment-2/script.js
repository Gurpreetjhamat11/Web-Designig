$(document).ready(function () {
            $("#slide").click(function () {
                $("#slideDiv").slideDown("slow");
            });
        });

$(document).ready(function () {
                $("button").click(function () {
                    var text = $(".textDiv");
                    text.animate({ left: '100px' }, "slow");
                    text.animate({ fontSize: '5em' }, "slow");
                });
            });     