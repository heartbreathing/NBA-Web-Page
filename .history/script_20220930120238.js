<a class="btn"></a>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
  $('.btn').on('click', function () {
    $('.btn').toggleClass('btnc');
    $('.sidebar').toggleClass('side');
  });