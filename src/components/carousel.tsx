"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./carousel.module.css";

interface CarouselProps {
	images: string[];
	alt: string;
	/* Intrinsic size of a slide; also fixes the viewport footprint and aspect ratio. */
	width: number;
	height: number;
	/* Milliseconds a slide stays on screen before autoplay advances. */
	delay?: number;
}

export function Carousel({ images, alt, width, height, delay = 4000 }: CarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true }),
	]);
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		if (!emblaApi) return;

		const onSelect = () => setSelected(emblaApi.selectedScrollSnap());

		onSelect();
		emblaApi.on("select", onSelect);

		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi]);

	if (images.length === 0) return null;

	return (
		<div className={styles.carousel} style={{ maxWidth: width }}>
			<div className={styles.viewport} ref={emblaRef} style={{ aspectRatio: `${width} / ${height}` }}>
				<div className={styles.container}>
					{images.map((image) => (
						<div className={styles.slide} key={image}>
							<Image src={image} alt={alt} width={width} height={height} />
						</div>
					))}
				</div>
			</div>

			{images.length > 1 && (
				<>
					<button
						type="button"
						className={`${styles.arrow} ${styles.prev}`}
						onClick={() => emblaApi?.scrollPrev()}
						aria-label="Previous image"
					>
						&lsaquo;
					</button>
					<button
						type="button"
						className={`${styles.arrow} ${styles.next}`}
						onClick={() => emblaApi?.scrollNext()}
						aria-label="Next image"
					>
						&rsaquo;
					</button>
					<div className={styles.dots}>
						{images.map((image, index) => (
							<button
								key={image}
								type="button"
								className={index === selected ? `${styles.dot} ${styles.dotActive}` : styles.dot}
								onClick={() => emblaApi?.scrollTo(index)}
								aria-label={`Go to image ${index + 1}`}
								aria-current={index === selected}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
}
