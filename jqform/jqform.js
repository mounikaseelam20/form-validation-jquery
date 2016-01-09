    $(document).ready(function() {

        $('input')[0].oninput = function() {
            sNamepattern = /^[A-Za-z]+$/;
            sName = $('#userName').val();
            if (sName.match(sNamepattern)) {
                $('#uincorrect').css("display", "block");
                $('#name').addClass("has-success");
                $('#ucorrect').css("display", "none");
                $('#name').removeClass("has-error");

            } else {
                $('#uincorrect').css("display", "none");
                $('#ucorrect').css("display", "block");
                $('#name').addClass("has-error");
            }
        };


        $('input')[1].oninput = function() {
            nAmount = $('#amount').val();
            if (nAmount > 0) {
                $('#acorrect').css("display", "block");
                $('#amt').addClass("has-success");
                $('#aincorrect').css("display", "none");
                $('#amt').removeClass("has-error");

            } else {
                $('#aincorrect').css("display", "block");
                $('#amt').addClass("has-error");
                $('#acorrect').css("display", "none");
            }

        };


        $('input')[2].oninput = function() {
            sPwdpattern = /^.+$/;
            sPwd = $('#password').val();
            if (sPwd.match(sPwdpattern) && sPwd.length > 10) {
                $('#pcorrect').css("display", "block");
                $('#pw').addClass("has-success");
                $('#pincorrect').css("display", "none");
                $('#pw').removeClass("has-error");

            } else {
                $('#pcorrect').css("display", "none");
                $('#pincorrect').css("display", "block");
                $('#pw').addClass("has-error");
            }

        };

        $('#button').click(function() {

            $('#uname').text("USER NAME  :-" + sName + "       " + "AMOUNT  :-" + nAmount);

        });
        $('#reset').click(function() {
            $('.has-feedback').removeClass("has-error");
            $('.has-feedback').removeClass("has-success");
            $('.glyphicon-ok').css("display", "none");
            $('.glyphicon-remove').css("display", "none");
            $('#uname').text("");
        });

    });
