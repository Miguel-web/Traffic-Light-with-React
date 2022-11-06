import React, { useState } from "react";
//import OutsideClickHandler from "react-outside-click-handler";


export function TraficLight() {

	const [color, setColor] = useState("null");
	const [hidden, change] = useState("yes");

	return (
		<div className="container text-center">

			<div className="top"></div>

			<div className="traffic-ligth">
				<div
					className={
						color === "red" ? "red light selected" : "red light"
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						color === "yellow"
							? "yellow light selected"
							: "yellow light"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						color === "green"
							? "green light selected"
							: "green light"
					}
					onClick={() => setColor("green")}></div>
			</div>

			<br />

			<div className="text-center">
                <div className="changeColor">
                    <button
                        type="button"
                        className="btn btn-primary text-center m-3"
                        onClick={() =>
                            color === "red"
                                ? setColor("yellow")
                                : color === "yellow"
                                ? setColor("green")
								: color === "green"
                                ? setColor("red")
                                : hidden === "yes"
                        }>
                        Change color
                    </button>
                </div>
			</div>
		</div>
	);
}