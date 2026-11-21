import React from "react";
import NextLink from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white">
      
      {/* Top Navigation */}
      <nav className="absolute top-0 w-full z-50 px-8 py-6 flex items-center justify-between">
        <h1 className="font-playfair text-xl text-zinc-100 tracking-[0.3em] uppercase drop-shadow-md">Your Logo</h1>
        <div className="flex items-center gap-8">
          <NextLink href="#" className="text-[11px] text-zinc-300 hover:text-white uppercase tracking-widest transition-colors drop-shadow-md">The Story</NextLink>
          <NextLink href="#" className="text-[11px] text-zinc-300 hover:text-white uppercase tracking-widest transition-colors drop-shadow-md">Gallery</NextLink>
          <NextLink href="/" className="text-[11px] text-zinc-300 hover:text-white uppercase tracking-widest transition-colors drop-shadow-md">Sign Out</NextLink>
        </div>
      </nav>

      {/* Main Landing Content */}
      <main className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
        
        {/* Cinematic Hero Banner */}
        <section className="relative w-full h-[60vh] min-h-[400px] rounded-2xl overflow-hidden border border-[#2a2a2c] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] group">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-1000 scale-105 group-hover:scale-100 ease-out"
            style={{ backgroundImage: "url('/mera1.jpg')" }}
          ></div>
          {/* Lighter Deep Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full max-w-3xl">
            <h2 className="font-playfair text-5xl md:text-6xl text-white tracking-wide mb-4 drop-shadow-xl">Welcome back.</h2>
            <p className="text-sm md:text-base text-zinc-200 leading-relaxed tracking-wide drop-shadow-lg">
              The shadows have deepened during your absence. Step back into the narrative and uncover what has been hiding in plain sight.
            </p>
          </div>
        </section>

        {/* Cinematic Two-Column Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[10px] text-zinc-400 uppercase tracking-[0.2em]">Chapter One</span>
            <h3 className="font-playfair text-3xl text-zinc-50 tracking-wide">The house at the edge of the woods.</h3>
            <p className="text-sm text-zinc-300 leading-relaxed tracking-wide">
              No one remembers who built it, only that it has always been there. It stands as a monument to forgotten memories, holding secrets that were never meant to be discovered. The deeper you go, the less the outside world makes sense.
            </p>
            <button className="mt-4 px-8 py-3 bg-zinc-200 hover:bg-white text-zinc-900 text-xs font-semibold tracking-widest uppercase transition-colors rounded-lg shadow-md">
              Begin Exploration
            </button>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-[#2a2a2c] bg-zinc-900/40 shadow-xl">
             <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              style={{ backgroundImage: "url('/mera3.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c0c0e] to-transparent"></div>
          </div>
        </section>

        {/* Feature/Mystery Grid */}
        <section className="space-y-12">
          <div className="text-center">
            <h3 className="font-playfair text-3xl text-zinc-50 tracking-wide mb-4">Discover the Unknown</h3>
            <p className="text-sm text-zinc-400 tracking-wide max-w-xl mx-auto">
              Every detail matters. Piece together the fragmented reality and uncover the truth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Lost Archives", desc: "Examine the torn pages left behind by previous inhabitants." },
              { title: "Echoes in the Dark", desc: "Listen closely to the audio recordings found in the basement." },
              { title: "The Artifacts", desc: "Inspect items that seemingly defy the laws of physics." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#111114] border border-[#2a2a2c] hover:border-[#444] hover:bg-[#151518] transition-colors shadow-lg group">
                <div className="w-10 h-10 mb-6 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 group-hover:border-zinc-400 transition-colors bg-zinc-800/50">
                  0{idx + 1}
                </div>
                <h4 className="font-playfair text-xl text-zinc-100 mb-3">{item.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed tracking-wide">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1c] py-8 text-center bg-[#0a0a0c]">
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">© 2026 Your Studio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
