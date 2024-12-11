"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import WordRotate from '@/components/ui/word-rotate';
import { GlareCard } from '@/components/ui/glare-card';

const Hero = () => {
    return ( 
<div className="mt-24 ml-6 mr-6 md:ml-28 md:mr-36 lg:mr-0 flex flex-col-reverse md:flex-row items-center justify-between 
          space-y-8 md:space-y-0 md:space-x-8">
          {/* Mobile: Text Section (bottom in mobile, left in desktop) */}
          <div className="w-full md:w-1/2 -mt-24 text-center md:text-left order-2 md:order-1 flex flex-col md:flex-none items-center md:items-start">
            <TextGenerateEffect
              words="Come"
              duration={1}
              className="text-textHeader hidden lg:flex font-hancoke"
            />
            <TextGenerateEffect
              words="Join Us In"
              duration={1}
              className="text-textHeader hidden lg:flex font-hancoke"
            />
            <WordRotate
              images={[
                "/images/prakasa.png",
                "/images/sb25.png",
              ]}
              duration={3000}
              imgAlt="Prakasa Parama"
              className="md:p-0 p-4"
            />
          </div>
          {/* Mobile: Image Section (top in mobile, right in desktop) */}
          <div className="w-full md:w-1/2 flex justify-center items-center z-10 order-1 md:order-2">
            <GlareCard className="flex justify-center items-center">
              <img
                src="/images/maskot.png"
                alt="Glare Card Content"
                className="w-36 md:w-72 object-cover rounded-xl"
              />
            </GlareCard>
          </div>
        </div>
    );
}

export default Hero;