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
                <p>
                    Hello, I'm <span className="font-medium">Satish Maharaj</span>, a <span className="font-medium">first-class honors</span> graduate in <span className="font-medium">Computer Science (Special)</span> from the University of the West Indies. I'm passionate about creating innovative digital experiences.
                </p>

                <p>
                    I've worked with various programming frameworks and technologies, including <span className="font-medium">React</span>, <span className="font-medium">Flutter</span>, <span className="font-medium">PHP Laravel</span>, <span className="font-medium">Flask MVC</span>, <span className="font-medium">Java</span>, and <span className="font-medium">many more</span>. This experience has made me a versatile developer, adaptable to various project requirements and challenges.
                </p>

                <p>
                    Additionally, I've worked with various IaC tools and technologies, including <span className="font-medium">Ansible</span> and <span className="font-medium">Terraform</span> making me a versatile DevOps Engineer adaptable to various project requirements and challenges.
                </p>

                <p>
                    I'm committed to delivering high-quality solutions and exceptional user experiences, whether it's crafting interactive web applications, developing cross-platform mobile apps, or architecting robust backend systems.
                </p>

                <p>
                    I believe in <span className="font-medium">continuous learning</span> and am eager to explore new technologies and frameworks to stay at the forefront of innovation.
                </p>

                <p>
                    Beyond code, I'm an avid traveler, a voracious reader, and a fervent advocate for <span className="font-medium">environmental sustainability</span>. I believe that a well-rounded life fuels creativity and problem-solving.
                </p>

                <p>
                    Let's connect! Feel free to explore my portfolio, and if you have a project in mind or just want to connect, don't hesitate to reach out. Together, we can turn your ideas into digital realities.
                </p>

                <p>
                    Thank you for visiting my portfolio. I look forward to collaborating with you on exciting projects that push the boundaries of <span className="font-medium">technology and design</span>.
                </p>
            </div>

        </motion.section>
    );
}