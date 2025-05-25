import styles from "./page.module.css";
import { FaComputer, FaTruck, FaPlug, FaHandHoldingHeart } from "react-icons/fa6";

export default function Home() {
	return (
		<>
			{Hero()}
			{Testimonials()}
			{About()}
		</>
	);
}

function Hero() {
	return (
		<section>
			<div className={styles.heroRow}>
				<div className={styles.heroTextBlock}>
					<h6>Who we are?</h6>
					<h1>We Set Up Your Tech, <span>So You Don’t Have To</span></h1>
					<p>Laptops, printers, Wi-Fi, servers, anything in between — we’ll get everything working smoothly while you focus on your team.</p>
					<a className={styles.button} href="#">Let's chat about your IT problem</a>
				</div>

				<div className={styles.heroImgBlock}>
				</div>
			</div>

			<div className={styles.serviceIcons}>
				<div className={styles.serviceIconBlock}>
					<FaComputer />
					<p>Complete device setup</p>
				</div>

				<div className={styles.serviceIconBlock}>
					<FaTruck />
					<p>Help with office relocation</p>
				</div>

				<div className={styles.serviceIconBlock}>
					<FaPlug />
					<p>Peripheral configuration</p>
				</div>

				<div className={styles.serviceIconBlock}>
					<FaHandHoldingHeart />
					<p>Easy to understand process</p>
				</div>
			</div>
		</section>
	);
}

function Testimonials() {
	return (
		<section className={styles.testimonials}>
			<h2>What clients say</h2>
			<p>We place huge value on strong relationsps and have seen the benefit they bring to the businesses. Customer feedback is vital in helping us to get it right.</p>

			<div className={styles.testimonialsBlocks}>
				<div className={styles.testimonialCard}>
					<p>“We moved to a new location and needed everything—network, server, and devices—reinstalled. These guys handled it all smoothly over the weekend. Highly recommended!”</p>
					<h4>Alex G., Office Manager</h4>
				</div>
				<div className={styles.testimonialCard}>
					<p>“As a startup, we needed a quick and reliable tech setup without hiring in-house IT. This service was a lifesaver—easy communication, great support, and everything just worked.”</p>
					<h4>Liis S., Co-Founder</h4>
				</div>
				<div className={styles.testimonialCard}>
					<p>“We’re a small design studio with no in-house IT. When our office moved, they handled the tech side—computers, Wi-Fi, and backup drives—quickly and without hassle.”</p>
					<h4>Jaanus K., Manager</h4>
				</div>
			</div>
		</section>
	);
}

function About()
{
	return (
		<section>
			<h2><span>01</span> About Our Studio</h2>
			<div>
				<p>We’re a versatile IT partner for businesses of all sizes—offering everything from hands-on tech setup and office relocations to consulting, software development, testing, and recruiting. Whether you need your devices up and running or expert support to grow your team and systems, we’re here to help you move forward with confidence.</p>
			</div>
		</section>
	);
}
