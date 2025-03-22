export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#fdfaf5] px-6 py-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
          Et si vous écoutiez enfin la voix qui vous comprend ?
        </h1>
  
        <audio
          autoPlay
          controls
          className="mt-4 mb-6"
          style={{ width: '100%', maxWidth: '400px' }}
        >
          <source src="/liora-voice.mp3" type="audio/mpeg" />
          Votre navigateur ne supporte pas l’audio.
        </audio>
  
        <p className="text-lg text-gray-600 max-w-xl">
          Liora vous accompagne avec une voix douce, une écoute réelle, et des
          conseils qui font du bien. Découvrez un soutien émotionnel inédit,
          gratuit et instantané.
        </p>
  
        <div className="mt-8 flex gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Recevoir l’app
          </button>
          <button className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
            En savoir plus
          </button>
        </div>
      </main>
    );
  }

