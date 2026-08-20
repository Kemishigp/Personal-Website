import { SkillTag } from "../ui/SkillTag";
import { AnimatedBox } from "./AnimatedBox";

export type volunteerJob = {
  project: string;
  client?: string;
  description: string;
  duration: string;
  skills: string[];
};

export type AnimatedvolunteerBoxProps = {
  volunteerJobs: volunteerJob[];
};

export const AnimatedvolunteerBox = ({
  volunteerJobs,
}: AnimatedvolunteerBoxProps) => {
  return (
    <AnimatedBox className="col-span-4 row-span-3 p-4">
      <h3 className="text-lg font-semibold text-zinc-100">volunteer</h3>
      <div className="mt-1 space-y-1">
        {volunteerJobs.map((job, index) => (
          <div key={index} className="rounded-lg">
            <div className="flex gap-2">
              <h4 className="text-zinc-100">{job.project}</h4>
              <p className="text-zinc-500">-</p>
              <p className="text-zinc-300">{job.client}</p>
            </div>
            <p className="text-zinc-400 text-sm">{job.description}</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {job.skills.map((skill, skillIndex) => (
                <SkillTag key={skillIndex} skill={skill} size="xs" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedBox>
  );
};
