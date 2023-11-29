"use client";

import Image from "next/image";
import Header from "./components/Header";
import ContentWrapper from "./containers/ContentWrapper";
import Me from "../../public/images/me_square.jpg";
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
import Heading from "./components/Heading";
import ContactsLinkList from "./components/ContactsLinkList";

const page = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<section className='text-brand-body flex flex-col sm:items-start sm:flex-row py-2 gap-8'>
					<div className='flex flex-col w-full sm:w-1/3 gap-4'>
						<div className='m-auto w-2/3 sm:w-full'>
							<Image src={Me} alt='A picture of me' />
						</div>
						<Heading
							element='h1'
							classes='text-center sm:text-left md:text-4xl lg:text-5xl'
						>
							Hi, I&apos;m Robbie
						</Heading>
						<div className='text-2xl text-brand-sub w-3/4 m-auto sm:w-full'>
							<ul className='text-center sm:text-left'>
								<li>Web Developer.</li>
								<li>Musician.</li>
								<li>Bird Dad.</li>
							</ul>
						</div>
						<div className='flex justify-center sm:justify-start'>
							<ContactsLinkList />
						</div>
					</div>

					<div className='flex flex-col gap-4 w-full sm:w-2/3'>
						<div>
							<Heading element='h3' classes='mb-4'>
								Skills
							</Heading>
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
								<Heading element='h3' classes='mb-4'>
									About
								</Heading>
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
					</div>
				</section>
			</ContentWrapper>
		</>
	);
};

export default page;
