<?php
echo "
<form id='' method='get' action='index.php' class='col-md-8 col-md-offset-2'>
	<input type='hidden' name='call' value='true' />
	<label>Header</label>
	<input type='text' name='header' class='form-control' />
	<label>Message</label>
	<textarea name='message' class='form-control'></textarea>
	<button class='btn btn-primary'>Save</button>
</form>
"
?>