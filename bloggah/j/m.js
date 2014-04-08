$('document').ready(function(){
	var sourceArr = [];
	var check = true;
	$('#getUsers').keyup(function(){
		$.ajax({
			url: 'index.php',
			type: 'get',
			data: {
				controller: 'public',
				call: 'true',
				name: $('#getUsers').val(),
				getUsers: ''
			},
			dataType: 'json',
			success: function(response){
				console.log(response)
				for(var i in response){
					check = true;
					$('#userId').val(response[0].id)
					for (var a in sourceArr){
						if(sourceArr[a] == response[i].firstname){check = false}
					}
					if(check){sourceArr.push(response[i].firstname)}
				}
			},
			error: function (xhr) {
				console.log(xhr.responseText);
			}
		})//.ajax
	})
	$('#userSearch').submit(function(event){
		event.preventDefault()
		window.location.href = 'http://localhost:8888/lab/day6/?controller=public&userId='+$('#userId').val();
	})
	$('#getUsers').autocomplete({source:sourceArr})

//	CRUD for the messages
// this is also in php just in case but I wanted to get creative
	var rud = "<div id='close'></div><form method='get' id='pMsg' action='index.php' class='col-md-8 col-md-offset-2'><input type='hidden' name='call' value='true' /><label>Header</label><input type='text' name='header' id='header' class='form-control' /><label>Message</label><textarea name='message' id='msg' class='form-control'></textarea>"
	// this create a message
	$('#create').click(function(){
		$('#pop').html(rud+"<input type='hidden' name='create' value='true' /><button class='btn btn-primary'>Save</button></form>");
		$('#close').click(function(){$('#pop').empty()});
	})
	$('.edit').click(function(){ 
		$('#pop').html(rud+"<input type='hidden' name='update' value='true' /><input type='hidden' name='id' value='"+$(this).parent().attr('msgId')+"' /><a href='index.php?controller=users&call=true&del="+$(this).parent().attr('msgId')+"' >delete</a><button class='btn btn-primary'>Save</button></form>");
		$('#header').val($(this).siblings('h3').text())
		$('#msg').val($(this).siblings('p').text())
		$('#close').click(function(){$('#pop').empty()});	
	})

})// Document