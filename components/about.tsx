"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <div>
                <p className="mb-3">
                    Hello, I'm <span className="font-medium">Satish Maharaj</span>, and I'm passionate about creating innovative digital experiences. I graduated from the University of the West Indies with <span className="font-medium">first-class honors</span> in <span className="font-medium">Computer Science (Special)</span>, and I've been on an exciting journey in the world of technology ever since.
                </p>

                <p className="mb-3">
                    Throughout my academic career, I dedicated myself to mastering the art of programming. I've had the privilege of working with a diverse range of programming frameworks and technologies, including <span className="font-medium">React,</span> <span className="font-medium">Flutter,</span> <span className="font-medium">PHP Laravel,</span> <span className="font-medium">Flask MVC,</span> <span className="font-medium">Java,</span> <span className="font-medium">Svelte,</span> and many more. This diverse experience has allowed me to adapt to various project requirements and challenges, making me a versatile developer ready to take on any task.
                </p>

                <p className="mb-3">
                    I'm committed to delivering high-quality solutions and creating exceptional user experiences. Whether it's crafting interactive web applications, developing cross-platform mobile apps, or architecting robust backend systems, I thrive on turning ideas into reality through code.
                </p>

                <p className="mb-3">
                    In the ever-evolving tech landscape, I believe in the importance of <span className="font-medium">continuous learning</span>. I'm always eager to explore new technologies and frameworks to stay at the forefront of innovation. Learning isn't just a hobby; it's an integral part of my professional growth.
                </p>

                <p className="mb-3">
                    Beyond Code, when I'm not immersed in code, you can find me exploring my other passions. I'm an avid traveler, a voracious reader, and a fervent advocate for <span className="font-medium">environmental sustainability</span>. I believe that a well-rounded life fuels creativity and problem-solving.
                </p>

                <p className="mb-3">
                    Let's Connect! I'm excited to share my portfolio with you, showcasing my projects and achievements. Feel free to explore my work, and if you have a project in mind or just want to connect, don't hesitate to reach out. Together, we can turn your ideas into digital realities.
                </p>

                <p>
                    Thank you for visiting my portfolio, and I look forward to collaborating with you on exciting projects that push the boundaries of <span className="font-medium">technology and design</span>.
                </p>
            </div>
        </motion.section>
    );
}