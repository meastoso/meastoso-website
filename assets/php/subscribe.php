<?php

	if(isset($_POST['email'])) {

		$email = $_POST['email'];

		// MailChimp 
		$APIKey = '89d53601cd6c608607b3f4c60c3f5601-us8';
		$listID = '6df4a5661d';

		require_once('inc/MCAPI.class.php');

		$api = new MCAPI($APIKey);
		
		$list_id = $listID;

		if($api->listSubscribe($list_id, $email, '') === true) {

			$formstatus = 1;
			$message = 'Success! Check your email to confirm sign up.';

		} else {

			$formstatus = 0;
			$message = 'Error: ' . $api->errorMessage;

		}

		$result = array(
			"formstatus" => $formstatus,
			"message" => $message
		);
		
		echo json_encode($result);
		
	}

?>