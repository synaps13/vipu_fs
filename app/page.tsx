"use client"

import { useActionState, useEffect } from "react";
import { useFormState } from "react-dom";
import { sendEmail } from "./email/email";
import styles from "./page.module.css";
import { FaComputer, FaTruck, FaPlug, FaHandHoldingHeart } from "react-icons/fa6";

export default function Home() {
	return (
		<>
			<Hero />
			<Testimonials />
			<About />
			<CustomSolutions />
			<Process />
			<Planning />
			<Contact />
			<Footer />
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

			<div className={`${styles.serviceIcons} ${styles.sectionSpacing}`}>
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
		<section className={`${styles.testimonials} ${styles.sectionSpacing}`}>
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

function About() {
	return (
		<section className={`${styles.studioInfoSection} ${styles.sectionSpacing}`}>
			<div className={styles.studioInfo}>
				<h2 className={styles.sectionHeader}><span className={styles.highlighted}>01</span> About Our Studio</h2>
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

function CustomSolutions() {
	return (
		<section className={`${styles.customSolutionsSection} ${styles.sectionSpacing}`}>
			<div className={styles.customSolutionSectionContent}>
				<h2 className={styles.sectionHeader}>Professionals or on your own?</h2>
				<p>Choosing an external partner to plan, move, and set up your entire office or IT infrastructure is not just a convenience—it’s a strategic business decision. Our seasoned professionals bring years of expertise to streamline the entire process, ensuring faster implementation and minimizing costly disruptions. By leveraging our experience, you save valuable time and reduce final costs through efficient project management, proven methodologies, and access to trusted resources. Instead of diverting your internal team’s focus, you gain a reliable partner dedicated to delivering a smooth, hassle-free transition with maximum uptime. Invest smartly in your business’s future—partner with us for a seamless office and IT setup that accelerates productivity and keeps your budget on track.</p>
			</div>
		</section>
	);
}

function Process() {
	return (
		<section className={`${styles.processSection} ${styles.sectionSpacing}`}>
			<div className={styles.sectionBody}>
				<h2 className={styles.sectionHeader}><span>02</span> Solution for your business</h2>
				<div className={styles.twoColumnFlex}>
					<p>We help companies relocate, set up, and scale their offices with ease. From electronics assembly and transport to hardware consultation, procurement, and staffing, we manage the entire technical side of your workspace. Our team ensures your office is equipped, connected, and ready to perform—backed by expert support and custom software when you need it.</p>
					<p>Whether you're moving into a new space or upgrading your current one, we handle everything from hardware sourcing and installation to network setup and ongoing support. Need to rent or buy equipment? Looking for expert help with infrastructure or IT systems? We’ve got you covered—so your team can hit the ground running.</p>
				</div>
			</div>
		</section>
	);
}

function Planning() {
	return (
		<section className={`${styles.planningSection} ${styles.sectionSpacing}`}>
			<div className={styles.sectionBody}>
				<h2 className={styles.sectionHeader}><span className={styles.highlighted}>03</span> Planning and Execution</h2>
				<p>We start by engaging with you to thoroughly understand your unique needs and goals. Together, we discuss the project scope, identify critical priorities, and uncover any potential challenges. This collaborative approach allows us to craft a detailed, tailored plan that aligns perfectly with your business objectives and ensures every step is clearly mapped out for smooth execution.</p>
			</div>
		</section>
	);
}

function Contact() {
	return (
		<section className={`${styles.sectionBody} ${styles.sectionSpacing} ${styles.contactSection}`}>
			<h2 className={styles.sectionHeader}>Looking to collaborate? <span>Get in touch to find out how we can help</span></h2>
			<div className={styles.contactFormBlock}>
				<h3>Send us message with the form below</h3>
					<form action={sendEmail}>
						<input type="text" id="name" name="name" placeholder="Enter your name here"/>
						<input type="email" id="email" name="email" placeholder="Enter your email here"/>
						<textarea name="message" id="message" cols={30} rows={10} placeholder="Write a bit about your problem here"></textarea>
						<button type="submit">Send</button>
					</form>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer>
		</footer>
	);
}
