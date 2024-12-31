import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiStripe,
  SiGmail,
} from "react-icons/si";
import { UserCheck } from "lucide-react";

const techStack = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: UserCheck, name: "Clerk" },
  { icon: SiStripe, name: "Stripe" },
  { icon: SiGmail, name: "SendGrid" },
];

export default function MainProjectCard() {
  return (
    <Card
      className="w-full overflow-hidden animate-fade-in max-w-[46rem] border border-black/5 rounded-lg  bg-[#f4f5f7] hover:bg-gray-200  dark:text-white dark:bg-white/10 dark:hover:bg-white/20
    "
    >
      <div className="relative h-64 md:h-80">
        <Image
          src="/inkhubb.png"
          alt="Inkhub Screenshot"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Inkhub</h2>
        <p className="leading-relaxed text-gray-700 dark:text-white/70 mb-6">
          I designed and developed Inkhub, a full-stack SaaS platform for tattoo
          artists, from the ground up in 2024. The project showcases my
          expertise in both frontend and backend development, including
          interactive user interfaces, seamless payment integration, and
          automation features to streamline workflows.
        </p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge
                key={tech.name}
                variant="secondary"
                className="flex items-center gap-1 p-2 transition-transform duration-300 hover:scale-110"
              >
                <tech.icon className="w-4 h-4" />
                <span>{tech.name}</span>
              </Badge>
            ))}
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">Supported by:</h3>
        <div className="flex items-center space-x-6">
          <Image
            src="/founder-u.avif"
            alt="Founder University Logo"
            width={150}
            height={50}
            className="object-contain opacity-0 animate-fade-in-up dark:p-2 dark:bg-white/90 dark:rounded-lg"
          />
          <Image
            src="/google.svg"
            alt="Google Startups Logo"
            width={250}
            height={50}
            className="object-contain opacity-0 animate-fade-in-up dark:p-2 dark:bg-white/90 dark:rounded-lg"
          />
        </div>
      </CardContent>
    </Card>
  );
}
