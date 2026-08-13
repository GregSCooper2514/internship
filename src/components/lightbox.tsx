"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { type KeyboardEvent, type MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import styles from "./lightbox.module.css";

interface LightboxProps {
	images: string[];
	alt: string;
	startIndex: number;
	onClose: (index: number) => void;
}

export function Lightbox({ images, alt, startIndex, onClose }: LightboxProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex });
	const [selected, setSelected] = useState(startIndex);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (!dialog.open) dialog.showModal();
		emblaApi?.reInit();
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		const onSelect = () => setSelected(emblaApi.selectedScrollSnap());

		onSelect();
		emblaApi.on("select", onSelect);

		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi]);

	useEffect(() => {
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = previous;
		};
	}, []);

	const close = useCallback(() => dialogRef.current?.close(), []);

	const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
		if ((event.target as HTMLElement).closest("button, img")) return;
		close();
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
		if (event.key === "ArrowLeft") emblaApi?.scrollPrev();
		if (event.key === "ArrowRight") emblaApi?.scrollNext();
	};

	return (
		<dialog
			ref={dialogRef}
			className={styles.dialog}
			aria-label={`${alt} — full size`}
			onClose={() => onClose(selected)}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
		>
			<div className={styles.stage}>
				<div className={styles.viewport} ref={emblaRef}>
					<div className={styles.container}>
						{images.map((image) => (
							<div className={styles.slide} key={image}>
								<Image src={image} alt={alt} fill sizes="100vw" />
							</div>
						))}
					</div>
				</div>

				<button type="button" className={styles.close} onClick={close} aria-label="Close image viewer">
					&times;
				</button>

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
						<p className={styles.counter}>
							{selected + 1} / {images.length}
						</p>
					</>
				)}
			</div>
		</dialog>
	);
}
