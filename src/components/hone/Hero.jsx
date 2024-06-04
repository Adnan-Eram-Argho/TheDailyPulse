/* eslint-disable react/no-unescaped-entities */

function Hero() {
  return (
    <div
      className="hero min-h-auto bg-base-200 text-black mt-5  rounded-lg"
      style={{
        backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8yNV9hZXN0aGV0aWNfcGFsZV9uZXdzcGFwZXJfY29sbGFnZV9lbXB0eV9zcGFjZV8zYzA0NDRkNS1hOTI0LTRmYjctYWNhYi1mOWQyZTMzMDAzYzRfMS5qcGc.jpg)`,
      }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">TheDailyPulse</h1>
          <p className="py-6">
            TheDailyPulse delivers up-to-the-minute news and in-depth analysis
            on global and local events. Stay informed with breaking news, expert
            opinions, and comprehensive coverage on politics, business,
            technology, and more. Trust TheDailyPulse to keep your finger on the
            pulse of what's happening around the world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
