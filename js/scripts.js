$(document).ready(function() {
	$("#blanks form").submit(function(event) {
      var name = $("input#nameInput").val();
	    var date = $("input#dateInput").val();
      var start = $("input#startInput").val();
      var end = $("input#endInput").val();
			var array = [name, date, start, end];
			var arraynew = [];
			arraynew.push(array[2],array[0]);

      $(".nameInput").append(name);
      $(".dateInput").append(date);
      $(".startInput").append(start);
      $(".endInput").append(end);

  $("#output").show();

  event.preventDefault();
  });
});
