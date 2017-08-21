(function () {

    var marks = [70, 50, 40, 90, 80, 10];

    var avg = function () {
        var totol = marks.reduce(function (previous, next) {

            return previous + next;
        }, 0);



        return "your avrage grade is " +totol+ ". "
    }

    var fail = function() {
        var failingSubject =
            marks.filter(function (item) {
                return item < 70;

            });
        return "you have failed " + failingSubject.length + " times";
    }

    console.log(fail());
    console.log(avg());


}()
);