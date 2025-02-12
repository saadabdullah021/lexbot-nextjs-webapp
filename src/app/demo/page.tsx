"use client";
import React from "react";
import ReactPlayer from "react-player";
import Head from "next/head";
import Link from "next/link";

function DemoComponent() {
  return (
    <>
      <Head>
        <title>Lexbot/demo</title>
        <meta
          name="description"
          content="Demo to Lexbot to access your account."
        />
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-white lg:bg-gradient-to-r from-[#8711C180] to-[#2472FCCC] ">
        <div className="bg-white lg:rounded-3xl lg:shadow-lg w-full max-w-3xl p-4 mx-4 lg:mx-0 lg:px-8 lg:py-6 ">
          <h2 className="text-lg md:text-xl font-medium text-center mb-2">
            Let&apos;s get started with a quick demo
          </h2>
          <p className="text-center text-sm text-gray-600 mb-4">
            Here is a quick introduction of Lexbot.
          </p>
          <div className="text-center mb-4">
            <Link href="/create-chatbot-form">
              <button className="lg:bg-[#2472FC] flex w-full lg:w-auto  border border-[#2472FC] items-center gap-2 mx-auto text-blue-500 lg:text-white px-4 py-2 rounded-xl lg:rounded-lg justify-center hover:bg-blue-700 ">
                Skip{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-fast-forward"
                >
                  <polygon points="13 19 22 12 13 5 13 19" />
                  <polygon points="2 19 11 12 2 5 2 19" />
                </svg>
              </button>
            </Link>
          </div>
          <div className="relative mb-4">
            {/* Video Wrapper */}
            <div className="relative overflow-hidden rounded-xl">
              <ReactPlayer
                url="path-to-your-video.mp4" // Replace with your video URL
                controls
                playing={false}
                //   light="path-to-your-thumbnail.jpg" // Optional: Replace with your thumbnail image
                width="100%"
                height="100%"
                playIcon={
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.68-10.35l-3.88 2.25a1 1 0 000 1.7l3.88 2.25a1 1 0 001.52-.85V7.6a1 1 0 00-1.52-.85z" />
                    </svg>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DemoComponent;
