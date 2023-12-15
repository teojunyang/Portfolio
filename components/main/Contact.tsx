import React from "react";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <main className="grid md:grid-cols-2 my-12 md:my-12 py-24 md:py-24 gap-4 relative" id="contact">
        <div className="z-10">
        <h5 className="text-4xl font-bold text-white my-2 ">Connect With Me</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md mt-8 text-justify">
        I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <h4 className="pb-3 mt-6 text-white">Let&apos;s get in touch!</h4>
      <div className=" flex flex-row gap-4 mt-6">
        <Link href="https://github.com/teojunyang">
          <Image src="/github.png" alt="Github Icon" width={50} height={50} />
        </Link>
        <Link href="https://www.linkedin.com/in/jun-yang-teo-85ba04288/">
          <Image src="/linkedin.png" alt="Linkedin Icon" width={50} height={50} />
        </Link>
        <Link href="https://www.instagram.com/_junyangggg/" className="mt-1">
          <Image src="/instagram.png" alt="insta" width={50} height={50} />
        </Link>
        <Link href="mailto:teojyang311@gmail.com" className="mt-1">
          <Image src="/gmail.png" alt="email" width={50} height={50} />
        </Link>
      </div>
        </div>
    </main>
  );
};

export default Contact;
