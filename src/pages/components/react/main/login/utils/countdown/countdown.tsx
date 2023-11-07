"use client";

import { useState, useEffect } from "react";
import { Props } from "./structs";

const CountDown = (props: Props) => {
	const { seconds, time } = props;

	//600 segundos son 10 minutos
	const [timer, setTimer] = useState(seconds);
	const [showTime, setShowTime] = useState(time);

	const formatTime = () => {
		const minutes = Math.floor(timer / 60);
		const seconds = timer % 60;
		const newMinutes = minutes < 10 ? `0${minutes.toString()}` : minutes;
		const newSeconds = seconds < 10 ? `0${seconds.toString()}` : seconds;

		const format = `${newMinutes}:${newSeconds}`;
		setShowTime(format);
	};

	useEffect(() => {
		if (timer > 0) {
			const time = setInterval(() => {
				setTimer(timer - 1);
			}, 1000);

			formatTime();
			return () => clearInterval(time);
		}
	}, [timer]);

	useEffect(() => {
		setTimer(seconds);
	}, []);

	return <>{showTime}</>;
};

export default CountDown;
