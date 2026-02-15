"use client"
import { ReactNode, SVGProps } from "react";
import { motion } from "motion/react";

interface Props {
  title: string,
  content: string,
  icon: ReactNode
}

const Tie = ({ w = 40, h = 70, ...props }: {
  w?: number,
  h?: number,
} & SVGProps<SVGSVGElement>) => (
  <svg
    width={w}
    height={h}
    viewBox="0 0 40 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.5847 14.5833L11.4161 52.9224C10.766 55.9727 11.1222 57.1139 13.3632 59.3065L22.424 68.1633C23.6206 69.3322 24.2154 69.9167 24.959 69.9167C25.7025 69.9167 26.2973 69.3322 27.4939 68.1633L36.5548 59.3065C38.7958 57.1139 39.152 55.9727 38.5018 52.9224L30.3332 14.5833M14.7811 4.63717C14.5459 2.825 14.4318 1.91892 14.9609 1.33446C15.4935 0.75 16.4342 0.75 18.3155 0.75H31.6059C33.4838 0.75 34.4244 0.75 34.957 1.33792C35.4861 1.91892 35.372 2.825 35.1369 4.63717L34.9639 6.00321C34.4694 9.83504 34.2238 11.751 32.9927 12.9925C32.7898 13.1977 32.5731 13.3833 32.3425 13.5493C30.9211 14.5833 28.9326 14.5833 24.959 14.5833C20.9819 14.5833 18.9968 14.5833 17.5754 13.5493C17.3451 13.3829 17.1288 13.1978 16.9287 12.996C15.6941 11.751 15.4486 9.83504 14.9575 6.00321L14.7811 4.63717Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.8548 45.7084C10.7521 48.105 8.97111 49.1667 7.66731 49.1667C5.99002 49.1667 2.97436 44.9475 1.63598 41.8869C1.01002 40.4552 0.695314 39.7358 0.757564 38.8297C0.819814 37.9202 1.23136 37.2597 2.05444 35.9317C6.7059 28.4271 14.6324 21.5692 19.7715 14.5834"
      stroke="white"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
);

const CurvedBadgeCard = ({ title, content, icon }: Props) => {
  return (
    <div className="relative w-full h-90 overflow-hidden  rounded-[2.5rem]">
      <div className="p-5 bg-blue-600 h-full w-full">

        <div className="space-y-5 text-white">
          <Tie />
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p>{content}</p>
        </div>

        {/* Floating Circle */}
        <div className="
        absolute scale-125 bottom-0 right-0 -translate-y-[127%] -translate-x-3
        shadow-[50px_50px_0px_0px_#e4e4e4]
        w-24 aspect-square rounded-full
        " />
        <div className="
        absolute scale-125 bottom-0 right-0 -translate-x-[127%] -translate-y-3
        shadow-[50px_50px_0px_0px_#e4e4e4]
        w-24 aspect-square rounded-full 
        " />
        <div className="absolute scale-[1.3] bottom-0 right-0 w-24 aspect-square bg-background rounded-full" />
        <motion.div
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          initial={{
            scale: 0,
            opacity: 0
          }}
          whileInView={{
            scale: 1, opacity: 1
          }}
          className="text-white absolute bottom-0 right-0 w-24 aspect-square bg-blue-600 rounded-full flex items-center justify-center ">
          {icon}
        </motion.div>
      </div>
    </div>
  );
};

export default CurvedBadgeCard;
