import React from "react";

export default function About() {
	return (
		<section id="about">
			<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						Hi, I'm Hannah.
						<br className="hidden lg:inline-block" />I made all of these apps.
					</h1>
					<p className="mb-8 leading-relaxed">
						For this portfolio site I thought I'd show off some of the app and projects that im most proud of.
					</p>
					<div className="flex justify-center">
						<a
							href="#contact"
							className="inline-flex text-white bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg"
						>
							Like me?
						</a>
						<a
							href="#projects"
							className="ml-4 inline-flex text-red-900 bg-pink-300 border-0 py-2 px-6 focus:outline-none hover:bg-pink-400 hover:text-white rounded text-lg"
						>
							Past Works
						</a>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded-full"
						alt="deathmoth"
						src="./deathmoth.jpg"
					/>
				</div>
			</div>
		</section>
	);
}
