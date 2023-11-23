"use client";

import Image from "next/image";
import Header from "./components/Header";
import ContentWrapper from "./containers/ContentWrapper";
import Me from "../../public/images/me_square.jpg";
import {
	AlternateEmail,
	GitHub,
	LinkedIn,
	SportsEsports,
	Telegram,
} from "@mui/icons-material";
import Link from "next/link";
import HTML from "../../public/images/skills-icons/html5.svg";
import CSS from "../../public/images/skills-icons/css3.svg";
import JS from "../../public/images/skills-icons/javascript.svg";
import TS from "../../public/images/skills-icons/typescript.svg";
import React from "../../public/images/skills-icons/react.svg";
import Java from "../../public/images/skills-icons/java.svg";
import Spring from "../../public/images/skills-icons/spring.svg";
import Nest from "../../public/images/skills-icons/nestjs.svg";
import Sass from "../../public/images/skills-icons/sass2.svg";
import Tailwind from "../../public/images/skills-icons/tailwindcss.svg";
import Mongo from "../../public/images/skills-icons/mongodb.svg";
import MySQL from "../../public/images/skills-icons/mysql.svg";
import Git from "../../public/images/skills-icons/git.svg";
import SkillIcon from "./components/SkillIcon";

const page = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<p className='text-xs text-brand-accent text-center'>
					Site still being built but deployed to give preliminary details of
					myself and my work. Best accessed on a computer/tablet. Small screens
					not fully supported. (23rd November, 2023)
				</p>
				<section className='text-brand-body flex flex-col sm:items-start sm:flex-row py-2 gap-8'>
					<div className='flex flex-col w-full sm:w-1/3 gap-4'>
						<div className='m-auto w-2/3 sm:w-full'>
							<Image src={Me} alt='A picture of me' />
						</div>
						<h1 className='text-center sm:text-left text-5xl text-brand-heading font-bold'>
							Hi, I&apos;m Robbie
						</h1>
						<h2 className='text-2xl text-brand-sub w-3/4 m-auto sm:w-full'>
							<ul className='text-center sm:text-left'>
								<li>Web Developer.</li>
								<li>Musician.</li>
								<li>Bird Dad.</li>
							</ul>
						</h2>
						<div className='flex justify-center sm:justify-start'>
							<ul className='flex flex-wrap sm:flex-col gap-2 justify-center'>
								<li className='text-spectrum-2'>
									<Link href='https://github.com/encodexed'>
										<span className='text-white'>
											<GitHub />
										</span>{" "}
										encodexed
									</Link>
								</li>
								<li className='text-spectrum-4'>
									<Link href='https://www.linkedin.com/in/robbie-gollan-b05684261/'>
										<span className='text-white'>
											<LinkedIn />
										</span>{" "}
										Robbie Gollan
									</Link>
								</li>
								<li className='text-spectrum-6'>
									<Link href='https://steamcommunity.com/id/alakaslam'>
										<span className='text-white'>
											<SportsEsports />
										</span>{" "}
										alakaslam (Steam)
									</Link>
								</li>
								<li className='text-spectrum-1'>
									<Link href='https://discordapp.com/users/352214108663447552'>
										<span className='text-white'>
											<Telegram />
										</span>{" "}
										alakaslam (Discord)
									</Link>
								</li>
								<li className='text-spectrum-5'>
									<span className='text-white'>
										<AlternateEmail />
									</span>{" "}
									robbiegollan@gmail.com
								</li>
							</ul>
						</div>
					</div>

					<div className='flex flex-col gap-4 w-full sm:w-2/3'>
						<div>
							<h2 className='text-2xl text-brand-heading mb-4 font-bold'>
								Skills
							</h2>
							<div className='flex flex-wrap'>
								<SkillIcon src={HTML} alt='HTML5 icon' text='HTML' />
								<SkillIcon src={CSS} alt='CSS3 icon' text='CSS' />
								<SkillIcon src={Sass} alt='Sass icon' text='SCSS/Sass' />
								<SkillIcon
									src={Tailwind}
									alt='Tailwind icon'
									text='TailwindCSS'
								/>
								<SkillIcon src={JS} alt='JavaScript icon' text='JavaScript' />
								<SkillIcon src={TS} alt='TypeScript icon' text='TypeScript' />
								<SkillIcon src={Java} alt='Java icon' text='Java' />
								<SkillIcon src={React} alt='React icon' text='React' />
								<SkillIcon src={Nest} alt='NestJS icon' text='NestJS' />
								<SkillIcon
									src={Spring}
									alt='Java Spring icon'
									text='Java Spring'
								/>
								<SkillIcon src={MySQL} alt='MySQL icon' text='MySQL' />
								<SkillIcon src={Mongo} alt='MongoDB icon' text='MongoDB' />
								<SkillIcon src={Git} alt='Git icon' text='Git' />
							</div>
							<div>
								<h2 className='text-2xl text-brand-heading mb-4 font-bold'>
									About
								</h2>
								<p>
									For 15 years, I was a private music educator, with a passion
									for writing my own music and playing the piano. I grew up
									playing many instruments and decided that my life would follow
									along a musical path, but...
									<br />
									<br />
									<span className='italic'>
										That was before I discovered programming.
									</span>{" "}
									<br />
									<br />
									I fell instantly in love with JavaScript and have been
									learning a variety of different technologies for the web ever
									since 2022. I love how creative I can be with code and the
									remarkable places it can take us. <br />
									<br />
									When I&apos;m not coding, I like to play games on my computer,
									play with my birds or have a hit of tennis.
								</p>
							</div>
						</div>
						{/* <div>
							<h2 className='text-2xl text-brand-heading mb-4 font-bold'>
								Check Me Out!
							</h2>
							<ul className='flex flex-col gap-2'>
								<li>
									<Button
										variant='outlined'
										size='small'
										sx={{ color: "white" }}
									>
										<Link href='/journey'>My Journey</Link>
									</Button>
									See where I&apos;ve come from and what I&apos;ve been up to!
								</li>
								<li>
									<Link href='/projects'>My Projects</Link> - Check out some
									detailed information about what I&apos; worked on in the past!
								</li>
								<li>
									<Link href='/contact'>My Details</Link> - Get in touch with me
									about hiring, freelancing or collaboration. Or just say hello!
									I love meeting new people.
								</li>
							</ul>
						</div> */}
					</div>
				</section>
			</ContentWrapper>
		</>
	);
};

export default page;
