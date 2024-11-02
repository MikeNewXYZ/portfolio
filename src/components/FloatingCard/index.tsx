"use client";
import { useRef, useEffect, useCallback, ReactNode } from "react";
import isMobile from "is-mobile";
import { twMerge } from "tailwind-merge";

type Settings = {
	perspective?: string;
	transition?: string;
	multiplier?: number;
	hoverScale?: number;
};

type Props = {
	children: ReactNode;
	outerClassName?: string;
	innerClassName?: string;
	settings?: Settings;
};

const defaultSettings: Settings = {
	perspective: "1000px",
	transition: "transform 500ms ease-out",
	multiplier: 5,
	hoverScale: 1.1,
};

export default function FloatingCard({
	children,
	outerClassName,
	innerClassName,
	settings = defaultSettings,
}: Props) {
	settings = { ...defaultSettings, ...settings };
	const outerRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);
	const dimensions = useRef({
		top: 0,
		left: 0,
		halfHeight: 0,
		halfWidth: 0,
	});
	const isMobileDevice = isMobile();

	// Set perspective on the outer element.
	useEffect(() => {
		if (isMobileDevice) return;
		if (!outerRef.current || !innerRef.current) return;

		const outer = innerRef.current;
		const inner = innerRef.current;

		outer.style.perspective = settings.perspective!;
		inner.style.transition = settings.transition!;
	}, [isMobileDevice, settings]);

	// Add and remove mouse event listeners.
	useEffect(() => {
		if (isMobileDevice) return;
		if (!innerRef.current) return;

		const inner = innerRef.current;

		inner.addEventListener("mousemove", handleMouseMove);
		inner.addEventListener("mouseout", handleMouseOut);

		return () => {
			inner.removeEventListener("mousemove", handleMouseMove);
			inner.removeEventListener("mouseout", handleMouseOut);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMobileDevice, settings]);

	// Cache dimensions to prevent expensive calculations on every mouse event.
	useEffect(() => {
		if (isMobileDevice) return;

		updateDimensions();

		window.addEventListener("resize", updateDimensions);
		window.addEventListener("scroll", updateDimensions);

		return () => {
			window.removeEventListener("resize", updateDimensions);
			window.removeEventListener("scroll", updateDimensions);
		};
	}, [isMobileDevice]);

	const updateDimensions = () => {
		if (!innerRef.current) return;

		const inner = innerRef.current;

		const { top, left, height, width } = inner.getBoundingClientRect();
		dimensions.current = {
			top,
			left,
			halfHeight: height / 2,
			halfWidth: width / 2,
		};
	};

	// Animate floating card effect.
	const handleMouseMove = useCallback(
		(event: MouseEvent) => {
			if (!innerRef.current) return;

			const inner = innerRef.current;

			requestAnimationFrame(() => {
				const { top, left, halfHeight, halfWidth } = dimensions.current;
				const mouseY = event.clientY - top;
				const mouseX = event.clientX - left;
				const rotateY = -((mouseX - halfWidth) / halfWidth);
				const rotateX = (mouseY - halfHeight) / halfHeight;

				Object.assign(inner.style, {
					transform: `
                  rotateX(${rotateX * settings.multiplier!}deg)
                  rotateY(${rotateY * settings.multiplier!}deg)
                  scale(${settings.hoverScale})
              `,
				});
			});
		},
		[settings],
	);

	// Reset floating card effect.
	const handleMouseOut = useCallback(() => {
		if (!innerRef.current) return;

		const inner = innerRef.current;

		requestAnimationFrame(() => {
			Object.assign(inner.style, {
				transform: `
              rotateX(0deg)
              rotateY(0deg)
              scale(1)
          `,
			});
		});
	}, []);

	return (
		<div
			ref={outerRef}
			className={twMerge(outerClassName)}
			style={{ perspective: settings.perspective }}
		>
			<div
				ref={innerRef}
				className={twMerge(innerClassName)}
				style={{ transition: settings.transition }}
			>
				{children}
			</div>
		</div>
	);
}
