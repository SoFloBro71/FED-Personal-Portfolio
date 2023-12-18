import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
	return (
		<section id="skills">
			<div className="container px-5 py-10 mx-auto">
				<div className="text-center mb-20">
					<ChipIcon className="w-10 inline-block mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
						Skills, Applications &amp; Technologies
					</h1>
					<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
						Listed below are some of the skills I've learned / developed over my years in college.
					</p>
				</div>
				<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
					{skills.map((skill) => (
						<div key={skill} className="p-2 sm:w-1/2 w-full">
							<div className="bg-red-200 rounded flex p-4 h-full items-center">
								<BadgeCheckIcon className="text-blue-300 w-6 h-6 flex-shrink-0 mr-4" />
								<span className="title-font font-medium text-black">
									{skill}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
