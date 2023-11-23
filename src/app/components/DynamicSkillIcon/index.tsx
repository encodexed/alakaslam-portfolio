import {
	CSS,
	Firestore,
	Git,
	HTML,
	Java,
	JavaScript,
	Jest,
	Mongo,
	MySQL,
	Nest,
	Next,
	React,
	ReactRouter,
	Sass,
	Spring,
	Tailwind,
	TypeScript,
} from "../../../../public/images/skills-icons/skillIcons";
import SkillIcon from "../SkillIcon";
import { SkillData } from "@/app/projects/page";

// TODO: Use import library / __import__ for dynamic imports
const DynamicSkillIcon = ({ tech }: { tech: SkillData }) => {
	switch (tech.icon) {
		case "CSS":
			return <SkillIcon src={CSS} alt='CSS3 icon' text={tech.label} />;
		case "Firestore":
			return (
				<SkillIcon
					src={Firestore}
					alt='Google Firestore icon'
					text={tech.label}
				/>
			);
		case "Git":
			return <SkillIcon src={Git} alt='Git icon' text={tech.label} />;
		case "HTML":
			return <SkillIcon src={HTML} alt='HTML5 icon' text={tech.label} />;
		case "Java":
			return <SkillIcon src={Java} alt='Java icon' text={tech.label} />;
		case "JavaScript":
			return (
				<SkillIcon src={JavaScript} alt='JavaScript icon' text={tech.label} />
			);
		case "Jest":
			return <SkillIcon src={Jest} alt='Jest icon' text={tech.label} />;
		case "Mongo":
			return <SkillIcon src={Mongo} alt='MongoDB icon' text={tech.label} />;
		case "Nest":
			return <SkillIcon src={Nest} alt='NestJS icon' text={tech.label} />;
		case "Next":
			return <SkillIcon src={Next} alt='Next icon' text={tech.label} />;
		case "MySQL":
			return <SkillIcon src={MySQL} alt='MySQL icon' text={tech.label} />;
		case "React":
			return <SkillIcon src={React} alt='ReactJS icon' text={tech.label} />;
		case "ReactRouter":
			return (
				<SkillIcon
					src={ReactRouter}
					alt='React Router icon'
					text={tech.label}
				/>
			);
		case "Sass":
			return <SkillIcon src={Sass} alt='Sass icon' text={tech.label} />;
		case "Spring":
			return <SkillIcon src={Spring} alt='Spring icon' text={tech.label} />;
		case "Tailwind":
			return <SkillIcon src={Tailwind} alt='Tailwind icon' text={tech.label} />;
		case "TypeScript":
			return (
				<SkillIcon src={TypeScript} alt='TypeScript icon' text={tech.label} />
			);
		default:
			return (
				<SkillIcon src={React} alt={`${tech.label} icon`} text={tech.label} />
			);
	}
};

export default DynamicSkillIcon;
