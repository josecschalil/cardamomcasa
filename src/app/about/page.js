"use client";
import React from "react";

const CardamomCasa = () => {
  return (
    <div className="min-h-screen bg-white lg:px-20">
      {/* Top Section with Heading and Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:px-16 lg:pt-16 pb-8">
        {/* Left - Stylish Heading */}
        <div className="flex items-start">
          <h1 className="text-4xl lg:text-5xl font-bold font-serif text-emerald-800 leading-tight">
            Embracing Nature, Creating Memories at Cardamom Casa
          </h1>
        </div>

        {/* Right - House Image */}
        <div className="flex justify-end">
          <div className="w-full h-64 lg:h-80  rounded-lg overflow-hidden shadow-lg">
            <img src="/cardamom.jpg" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* Description Section in Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-16 pb-8">
        {/* Left Column - First half of description - positioned closer to heading */}
        <div className="space-y-4 lg:-mt-36">
          <p className="text-gray-700 text-base leading-relaxed">
            Welcome to Cardamom Casa, a sanctuary of sublime serenity nestled in
            the untouched heart of Bison Valley, Munnar. Here, where the air is
            sweet with the fragrance of wild cardamom and the mountains stand as
            ancient, watchful sentinels, we invite you to step out of the
            everyday and into an experience designed to rejuvenate your soul. At
            Cardamom Casa, our philosophy is simple yet profound: to create an
            escape where impeccable luxury is seamlessly woven into the raw,
            majestic embrace of nature.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            We believe a true getaway is not just about a change of place, but a
            change of pace. Our story is written in the rustle of leaves on the
            cardamom plantations that surround us, in the symphony of birdsong
            that greets you each morning, and in the golden light of sunrise as
            it spills over the peaks, bringing with it a new chapter of profound
            tranquility. It is more than a resort; it is an escape into the very
            lap of luxury and nature&apos;s most magnificent wonders—a place
            where memories are cultivated, and serenity is harvested.
          </p>
        </div>

        {/* Right Column - Second half of description */}
        <div className="space-y-4">
          <p className="text-gray-700 text-base leading-relaxed">
            Guided by a commitment to exceptional hospitality, our team ensures
            that your stay is not just comfortable but memorable. Explore the
            flavors of the land with visits to spice plantations and our own
            cardamom processing unit, adding a sensory delight to your retreat.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Cardamom Casa is more than a destination; it&apos;s a promise of
            rejuvenation, adventure, and the beauty of Bison Valley. Join us in
            this journey, where every moment becomes a cherished memory. Welcome
            to a world where nature and luxury intertwine – welcome to Cardamom
            Casa.
          </p>
        </div>
      </div>

      {/* Full Width Bottom Image */}
      <div className="w-full h-96 lg:h-[500px] relative overflow-hidden mt-8 pb-8 bg-white">
        <img src="/pano.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default CardamomCasa;
