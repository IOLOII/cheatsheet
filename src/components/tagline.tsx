import React from "react";

const Tagline = () => (
    <section className="dark:bg-gray-900 lg:pt-24">
        <h1 className="pt-6 text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
            Tailwind CSS 速查表
        </h1>

        <p className="max-w-6xl px-4 mx-auto mt-4 text-base text-center text-gray-500 dark:text-gray-400 md:text-lg">
            快速查找所有类名和 CSS 属性，使用这个交互式速查表。你将永远需要的唯一 Tailwind 速查表！
        </p>
        {/* <div className="flex items-center justify-center max-w-2xl px-4 mx-auto mt-4 text-base text-center text-gray-500 dark:text-gray-400 md:text-lg">
            <a href="https://www.material-tailwind.com/roots-of-ui-ux-design?ref=tc-cheatsheet" target="_blank">
                <img src="./banner-root-ui-ux-book.png" alt="Roots of UI/UX Design - Learn to Develop Intuitive Web Experiences." className="rounded-lg"/>
            </a>
        </div> */}

        <p className="max-w-6xl px-4 mx-auto mt-4 text-base italic text-center text-gray-500 dark:text-gray-400 md:text-lg">
            “永远不要记住你能查到的东西。” - 阿尔伯特·爱因斯坦
        </p>
    </section>
);

export default Tagline;
