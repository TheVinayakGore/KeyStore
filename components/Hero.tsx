import { FiShield, FiLock, FiCloud } from "react-icons/fi";

export default function Hero() {
  return (
    <main className="bg-gradient-to-t from-primary">
      <div className="container mx-auto py-10 md:py-36 px-4">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/20 border border-white/70 backdrop-blur-sm shadow-lg rounded-full px-4 md:px-6 py-2">
              <FiShield className="text-base md:text-xl" />
              <span className="text-sm md:text-base font-medium">Secure Password Manager</span>
            </div>
          </div>

          <h1 className="text-2xl md:text-6xl font-bold mb-3 md:mb-6">
            Store Your Passwords
            <span className="block">Securely in the Cloud</span>
          </h1>

          <p className="text-sm md:text-xl opacity-70 mb-5 md:mb-8 max-w-2xl mx-auto">
            KeyStore is your trusted companion for managing passwords safely.
            Built with Next.js and MongoDB for maximum security and reliability.
          </p>

          <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center text-white">
            <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-md md:rounded-lg px-3 md:px-4 py-1.5 md:py-2">
              <FiLock className="text-sm md:text-lg" />
              <span className="text-sm md:text-lg">End-to-End Encryption</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-md md:rounded-lg px-3 md:px-4 py-1.5 md:py-2">
              <FiCloud className="text-sm md:text-lg" />
              <span className="text-sm md:text-lg">Cloud Sync</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-md md:rounded-lg px-3 md:px-4 py-1.5 md:py-2">
              <FiShield className="text-sm md:text-lg" />
              <span className="text-sm md:text-lg">Zero-knowledge</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
