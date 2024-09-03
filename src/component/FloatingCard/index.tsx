import { useEffect, useRef, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import isMobile from "is-mobile";

type Dimensions = {
	top: number;
	left: number;
	halfWidth: number;
	halfHeight: number;
};

type Props = {
	outerClassName?: string;
	innerClassName?: string;
	rotateMultiplier?: number;
	onHoverScaleSize?: number;
	children: ReactNode;
};

function FloatingCard({
	outerClassName,
	innerClassName,
	rotateMultiplier = 15,
	onHoverScaleSize = 1.05,
	children,
}: Props) {
	const innerRef = useRef<HTMLDivElement>(null);
	const dimensions = useRef<Dimensions>({ top: 0, left: 0, halfWidth: 0, halfHeight: 0 });

	useEffect(() => {
		if (isMobile()) return;

		updateDimensions();
		addEventListener("resize", updateDimensions);
		addEventListener("scroll", updateDimensions);
		return () => {
			removeEventListener("resize", updateDimensions);
			removeEventListener("scroll", updateDimensions);
		};
	}, []);

	function updateDimensions() {
		const element = innerRef.current;
		if (!element) return;

		const { top, left, width, height } = element.getBoundingClientRect();
		dimensions.current = {
			top: top,
			left: left,
			halfWidth: width / 2,
			halfHeight: height / 2,
		};
	}

	function animateFloatingCard(event: React.MouseEvent) {
		if (isMobile()) return;

		const element = innerRef.current;
		if (!element) return;

		requestAnimationFrame(() => {
			const { top, left, halfHeight, halfWidth } = dimensions.current;
			const mouseY = event.clientY - top;
			const mouseX = event.clientX - left;
			const rotateY = -((mouseX - halfWidth) / halfWidth);
			const rotateX = (mouseY - halfHeight) / halfHeight;

			Object.assign(element.style, {
				transform: `
				rotateX(${rotateX * rotateMultiplier}deg)
				rotateY(${rotateY * rotateMultiplier}deg)
				scale(${onHoverScaleSize})
			`,
			});
		});
	}

	function resetFloatingCard() {
		const element = innerRef.current;
		if (!element) return;

		requestAnimationFrame(() => {
			Object.assign(element.style, {
				transform: `
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
        `,
			});
		});
	}

	return (
		<div className={outerClassName} style={{ perspective: 1000 }}>
			<div
				ref={innerRef}
				className={twMerge("transition-transform duration-1000 ease-out", innerClassName)}
				onMouseMove={animateFloatingCard}
				onMouseLeave={resetFloatingCard}
			>
				{children}
			</div>
		</div>
	);
}

export default FloatingCard;
