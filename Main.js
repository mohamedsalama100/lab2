
 var imgs = ["1.jpg", "2.jpg", "3.jpg" ,"4.jpg", "5.jpg","6.jpg" ];
        var i = 0;
        var timer;
     var total   = 6
        function show() {
            document.getElementById("pic").src = "images/" + i + ".jpg";
        }

        function next() {
            if (i < imgs.length ) {
                i++;
                show();
            }
        }

        function previous() {
            if (i > 1) {
                i--;
                show();
            }
        }

        function slideshow() {
          stop();
           timer = setInterval(function () {
          i++;
          if (i > total) i = 1; 
          show();
    }, 2000);
        }

        function stop() {
            clearInterval(timer);
        }