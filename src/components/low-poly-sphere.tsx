const MERIDIANS = [0, 30, 60, 90, 120, 150];

export function LowPolySphere() {
	return (
		<div
			className="mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center"
			style={{ perspective: "1000px" }}
		>
			<div className="sphere-bob aspect-square w-full">
				<div className="globe-scene sphere-spin relative h-full w-full">
					{MERIDIANS.map((deg) => (
						<div
							key={deg}
							className="globe-ring"
							style={{ transform: `rotateY(${deg}deg)` }}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
