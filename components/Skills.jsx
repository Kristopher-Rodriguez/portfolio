import Image from "next/image";

const Skills = () => {

  const skillz = [
    { image: "/../public/assets/skills/html.png", skill: "HTML" },
    { image: "/../public/assets/skills/css.png", skill: "CSS" },
    { image: "/../public/assets/skills/javascript.png", skill: "JavaScript" },
    { image: "/../public/assets/skills/react.png", skill: "React" },
    { image: "/../public/assets/skills/nextjs.png", skill: "Next.js" },
    { image: "/../public/assets/skills/tailwind.png", skill: "Tailwind" },
    { image: "/../public/assets/skills/bootstrap.png", skill: "Bootstrap" },
    { image: "/../public/assets/skills/node.png", skill: "Node.js" },
    { image: "/../public/assets/skills/mongo.png", skill: "MongoDB" },
    { image: "/../public/assets/skills/git.png", skill: "Git" },
    { image: "/../public/assets/skills/github.png", skill: "GitHub" },
    { image: "/../public/assets/skills/aws.png", skill: "AWS" },
  ];

  console.log(skillz);

  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#2dacac]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillz.map((skill, index) => (
            <div
              key={index}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={skill.image}
                    alt={`skill-${index + 1}`}
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.skill}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
