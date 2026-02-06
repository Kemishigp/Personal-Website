"use client";

import Image from "next/image";
import Link from 'next/link';
import React, { useState } from "react";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="pt-20 ">
<header className="fixed top-0 w-full z-10 bg-white shadow-md">
  <nav className="container mx-auto p-4 flex justify-between items-center w-full">
    {/* --- Logo --- */}
    

  <Link href="/es">
  <button className="text-gray-800 border px-3 py-1 rounded hover:bg-gray-200 transition">🇲🇽 Español</button>
</Link>


    {/* --- Hamburger button (visible on mobile) --- */}
    <button
      className="md:hidden text-gray-800 hover:text-purple-700 focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {/* Simple 3-line hamburger icon */}
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    {/* --- Desktop menu --- */}
    <ul className="hidden md:flex items-center space-x-6">
      
      <li><a href="#about-section" className="hover:text-purple-700 transition">About Me</a></li>
      <li><a href="#portfolio-section" className="hover:text-purple-700 transition">Portfolio</a></li>
      <li><a href="#resume-section" className="hover:text-purple-700 transition">Resume</a></li>
    </ul>

    {/* --- Desktop button --- */}
    <a href="#contact-me-section" className="hidden md:block">
      <button className="text-purple-700 border-2 border-purple-700 bg-transparent hover:bg-purple-700 hover:text-white transition duration-300 px-5 py-2 rounded">
        Contact Me
      </button>
    </a>
  </nav>

  {/* --- Mobile menu (toggles on hamburger click) --- */}
  {menuOpen && (
    <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
      <ul className="flex flex-col space-y-4 p-4">
        <li><a href="#about-section" onClick={() => setMenuOpen(false)} className="hover:text-purple-700 transition">About Me</a></li>
        <li><a href="#portfolio-section" onClick={() => setMenuOpen(false)} className="hover:text-purple-700 transition">Portfolio</a></li>
        <li><a href="#resume-section" onClick={() => setMenuOpen(false)} className="hover:text-purple-700 transition">Resume</a></li>
        <li>
          <a href="#contact-me-section">
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full text-purple-700 border-2 border-purple-700 bg-transparent hover:bg-purple-700 hover:text-white transition duration-300 px-5 py-2 rounded"
            >
              Contact Me
            </button>
          </a>
        </li>
      </ul>
    </div>
  )}
</header>
{/* React */}



      {/* Existing Sections (No major changes) */}
      <section id="about-section" className="p-20 flex flex-col items-center justify-center space-y-8">
        {/* ... About Content ... */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <Image alt="Portrait of Kemish" src="/Portrait.jpg" 
            width={150} height={150} className="rounded-full shadow-lg"/>
            <p className="text-xl text-gray-700">Hey, I'm Kemish</p>
            <h1 className="text-4xl font-extrabold text-gray-900">Full Stack Developer</h1>
        </div>
        <div className="flex space-x-4">
          <Link href="https://github.com/Kemishigp" target="_blank" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center transition duration-200"aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.417 2.865 8.164 6.839 9.5.5.092.682-.217.682-.483 0-.237-.008-.884-.015-1.745-2.787.603-3.37-.99-3.37-2.012-.53-.88-.23-2.115-.823-2.548-1.554-.424-2.822-1.246-2.822-2.802 0-.903.32-1.64.845-2.203.084-.21.366-1.042-.08-2.18.27-.09 1.077.342 1.638.736.51.196 1.05.295 1.603.295.553 0 1.093-.099 1.603-.295.56-.394 1.37-.826 1.638-.736-.445 1.14-.16 1.97-.08 2.18.525.563.845 1.3.845 2.203 0 1.556-1.268 2.378-2.822 2.802-.59.433-.913 1.157-.913 1.85 0 1.344.007 2.428.015 2.753.003.267.18.575.689.482C19.136 20.18 22 16.433 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/kemish-gomez/" target="_blank"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center transition duration-200" aria-label="LinkedIn Profile">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.367-4-3.321-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
            </Link>
        </div>
        <p>Find more of my professional work and coding examples here.</p>
      </section>

      <section id="portfolio-section" className=" p-8 flex flex-col items-center justify-center space-y-8 bg-gray-50">
        {/* ... Portfolio Content ... */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <Image src="/Project1.jpg" alt="Project 1" width={400} height={200} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Movie WebApp</h3>
              <p className="text-gray-700">Responsive web application built with React that allows users to quickly search for movies using the TMDB API.</p>
              <div className="flex justify-between space-y-3 mt-4">

              <Link href="https://moviebrwsrapp.netlify.app/" target="_blank" 
              className="mt-4 inline-block text-purple-600 hover:text-purple-800 font-medium">View Project→</Link>
              
              <Link href="https://github.com/Kemishigp/Movie-App" target="_blank" 
              className="mt-4 inline-block text-purple-600 hover:text-purple-800 font-medium">Source Code →</Link>
            </div>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <Image src="/project2.jpg" alt="Project 2" width={400} height={200} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Project Title 2</h3>
              <p className="text-gray-700">Brief description of Project 2.</p>
              {/* <Link href="[LINK_TO_PROJECT_DEMO]" target="_blank" className="mt-4 inline-block text-purple-600 hover:text-purple-800 font-medium">View Project →</Link> */}
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <Image src="/project3.jpg" alt="Project 3" width={400} height={200} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Project Title 3</h3>
              <p className="text-gray-700">Brief description of Project 3.</p>
              {/* <Link href="[LINK_TO_PROJECT_DEMO]" target="_blank" className="mt-4 inline-block text-purple-600 hover:text-purple-800 font-medium">View Project →</Link> */}
            </div>
          </div>
        </div>
      </section>

      <section id="resume-section" className="p-10 flex flex-col items-center space-y-8">
        {/* ... Resume Content ... */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Resume</h2>
        
{/* 1. Download Button */}
<Link
  href="/KEMISH_GOMEZ.pdf"
  download="Kemish_Gomez_Resume.pdf"
  className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
>
  Download PDF Copy
</Link>

{/* 2. Inline Resume Preview */}
<div className="w-full max-w-4xl h-[800px] shadow-2xl border-4 border-gray-300 rounded-lg overflow-hidden">
  <iframe
    src="/KEMISH_GOMEZ.pdf#toolbar=0"
    title="Kemish Gomez Resume Preview"
    width="100%"
    height="100%"
    style={{ border: 'none' }}
  >
    Your browser does not support inline PDFs. Please use the download link above.
  </iframe>
</div>

      </section>

      {/* --- NEW SECTION: Contact Me --- */}
      <section id="contact-me-section" className="p-10 flex flex-col items-center justify-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-xl text-gray-600 max-w-lg text-center">
          I'm currently seeking new opportunities and projects. Feel free to reach out via email or LinkedIn!
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          {/* Email Button */}
          <a href="mailto:your.email@example.com">
            <button className="w-full md:w-auto bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              Email Me Directly
            </button>
          </a>
          
          {/* LinkedIn Button (re-use from above) */}
          <Link href="https://www.linkedin.com/in/kemish-gomez/" target="_blank">
            <button className="w-full md:w-auto text-purple-700 border-2 border-purple-700 bg-transparent hover:bg-purple-700 hover:text-white transition duration-300 px-6 py-3 rounded-lg font-bold flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zM11 19h-3v-11h3v11zM7.5 5.764c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 13.236h-3v-5.604c0-3.367-4-3.321-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              Connect on LinkedIn
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}