import styles from "./page.module.css";
import { FaComputer, FaTruck, FaPlug, FaHandHoldingHeart } from "react-icons/fa6";

export default function Home() {
	return (
		<>
			{Hero()}
			{Testimonials()}
			{About()}
			{CustomSolutions()}
			{Process()}
			{Planning()}
			{Contact()}
			{Footer()}
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
		<section className={styles.studioInfoSection}>
			<div className={styles.studioInfo}>
				<h2 className={styles.sectionHeader}><span>01</span> About Our Studio</h2>
				<div className={styles.studioInfoTextBlock}>
					<p>We’re a versatile IT partner for businesses of all sizes—offering everything from hands-on tech setup and office relocations to consulting, software development, testing, and recruiting. Whether you need your devices up and running or expert support to grow your team and systems, we’re here to help you move forward with confidence.</p>
					<div className={styles.studioInfoServicesList}>
						<ol>
							<li>Electronics assembly/disassembly</li>
							<li>Transportation</li>
							<li>Hardware consultation</li>
							<li>Hardware procurement</li>
							<li>Hardware rent & purchase</li>
							<li>Hardware/software setup & support</li>
							<li>Software development</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
}

function CustomSolutions()
{
	return (
		<section className={styles.customSolutionsSection}>
			<div className={styles.customSolutionSectionContent}>
				<h2 className={styles.sectionHeader}>Professionals or on your own?</h2>
				<p>Choosing an external partner to plan, move, and set up your entire office or IT infrastructure is not just a convenience—it’s a strategic business decision. Our seasoned professionals bring years of expertise to streamline the entire process, ensuring faster implementation and minimizing costly disruptions. By leveraging our experience, you save valuable time and reduce final costs through efficient project management, proven methodologies, and access to trusted resources. Instead of diverting your internal team’s focus, you gain a reliable partner dedicated to delivering a smooth, hassle-free transition with maximum uptime. Invest smartly in your business’s future—partner with us for a seamless office and IT setup that accelerates productivity and keeps your budget on track.</p>
			</div>
		</section>
	);
}

function Process()
{
	return (
		<section>
			<h2 className={styles.sectionHeader}><span>02</span> Solution for your business</h2>
			<div>
				<p>We help businesses to innovate and grow by strengthening their ideas with our customized software solutions for multiple industries which includes healthcare, blockchain, education, insurance and many more.</p>
				<p>Column 2</p>
			</div>
		</section>
	);
}

function Planning()
{
	return (
		<section>
			<h2 className={styles.sectionHeader}><span>03</span> Descussing & planning</h2>
			<p>We start by engaging with you to thoroughly understand your unique needs and goals. Together, we discuss the project scope, identify critical priorities, and uncover any potential challenges. This collaborative approach allows us to craft a detailed, tailored plan that aligns perfectly with your business objectives and ensures every step is clearly mapped out for smooth execution.</p>
		</section>
	);
}

function Contact()
{
	return (
		<section>
			<h2 className={styles.sectionHeader}>Looking to collaborate? <span>Get in touch to find out how we can help</span></h2>
			<div>
				<h3>Send us message with the form below or contact us with email or telegram messenger</h3>
				<form>
					<input />
					<input />
					<input />
					<button>Send message</button>
				</form>
			</div>
		</section>
	);
}

function Footer()
{
	return (
		<footer>
		</footer>
	);
}
