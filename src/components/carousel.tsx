"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import { Lightbox } from "./lightbox";

interface CarouselProps {
	images: string[];
	alt: string;
	width: number;
	height: number;
	delay?: number;
}

export function Carousel({ images, alt, width, height, delay = 4000 }: CarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true }),
	]);
	const [selected, setSelected] = useState(0);
	const [zoomed, setZoomed] = useState<number | null>(null);

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

	const openLightbox = (index: number) => {
		emblaApi?.plugins().autoplay?.stop();
		setZoomed(index);
	};

	const closeLightbox = (index: number) => {
		setZoomed(null);
		emblaApi?.scrollTo(index, true);
		emblaApi?.plugins().autoplay?.play();
	};

	return (
		<div className={styles.carousel} style={{ maxWidth: width }}>
			<div className={styles.viewport} ref={emblaRef} style={{ aspectRatio: `${width} / ${height}` }}>
				<div className={styles.container}>
					{images.map((image, index) => (
						<div className={styles.slide} key={image}>
							<button
								type="button"
								className={styles.zoom}
								onClick={() => openLightbox(index)}
								aria-haspopup="dialog"
								aria-label={`View image ${index + 1} of ${images.length} full size`}
							>
								<Image src={image} alt={alt} width={width} height={height} />
							</button>
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

			{zoomed !== null && <Lightbox images={images} alt={alt} startIndex={zoomed} onClose={closeLightbox} />}
		</div>
	);
}
