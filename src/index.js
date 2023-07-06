function generateReceipt() {
	var fullName = document.getElementById('fullName').value;
	var phoneNo = document.getElementById('phoneNumber').value;
	var checkInDate = document.getElementById('checkInDate').value;
	var totalDays = document.getElementById('totalDays').value;
	var totalPersons = document.getElementById('totalPersons').value;
	var roomType = document.getElementById('roomType').value;
	var acChecked = document.getElementById('ac').checked;
	var lockerChecked = document.getElementById('locker').checked;
	var advanceAmount = document.getElementById('advanceAmount').value;

	var roomPrice = 0;
	if (roomType === 'deluxe') {
		roomPrice = 2500;
	} else if (roomType === 'suite') {
		roomPrice = 4000;
	}

	// Increment room prices if total persons for both rooms are more than 2
	if (totalPersons > 2) {
		roomPrice += 1000;
	}


	var amenitiesTotal = 0;
	if (acChecked) {
		amenitiesTotal += 1000;
	}
	if (lockerChecked) {
		amenitiesTotal += 300;
	}

	var totalPrice = (roomPrice + amenitiesTotal) * totalDays;
	var balance = totalPrice - advanceAmount;

	var receiptContent =
		'<p><strong> Customer Name : </strong>' + fullName + '</p>';
	receiptContent += '<p> <strong> Phone No.  </strong>' + phoneNo + '</p>';
	receiptContent +=
		'<p> <strong> Check-In Date : </strong>' + checkInDate + '</p>';
	receiptContent +=
		'<p> <strong> Total No. of Days :</strong>' + totalDays + '</p>';
	receiptContent +=
		'<p> <strong>  Total No. of Persons : </strong>' + totalPersons + '</p>';
	receiptContent +=
		'<p> <strong>  Select Room Type : </strong>' + roomType + '</p>';

	if (acChecked) {
		receiptContent +=
			'<p> <strong> Avail Amenities : </strong> AC - Price:  Rs. 1000 </p>';
	}
	if (lockerChecked) {
		receiptContent +=
			'<p> <strong>  Avail Amenities:</strong> Locker - Price: Rs. 300 </p>';
	}

	receiptContent +=
		'<p> <strong>  Advance Amount : </strong> Rs.' + advanceAmount + '</p>';
	receiptContent +=
		'<p><strong>Total Price : </strong> Rs. ' + totalPrice + '</p>';
	receiptContent += '<p><strong> Balance : </strong> Rs. ' + balance + '</p>';

	document.getElementById('receipt').innerHTML = receiptContent;
	document.getElementById('receiptContainer').classList.remove('hidden');
}
