import React from 'react';
import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0f1115]">
      {/* Cinematic Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-125"
      >
        <source src="/loginvid.mp4" type="video/mp4" />
      </video>

      {/* Radial gradient overlay: darker behind the form for readability, but fully transparent at the sides so the horror background is visible */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

      <div className="relative z-10 w-full px-4 flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
