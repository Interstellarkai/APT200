import { useEffect, useState } from "react";

// Intraday Countdown
const useCountdown = () => {
    // Tomorrow
	const countDownDate = new Date((new Date()).setHours(24, 0, 0, 0).valueOf()).getTime();

	const [countDown, setCountDown] = useState(
		countDownDate - (new Date().getTime().valueOf() - new Date().getTime().valueOf())
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);

	return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
	// calculate time left
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds];
};

export { useCountdown };
