import React from 'react'

export default function Card({
  name = "Unknown",
  role = "Unknown",
  description = "No description available",
  imageUrl = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=60"
}) {
  return (
    <div className="group relative h-96 w-80 overflow-hidden rounded-2xl shadow-xl">
      <img
        src={imageUrl}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-400">
          {role}
        </p>

        <h2 className="mt-1 text-2xl font-bold text-white">
          {name}
        </h2>

        <p className="mt-3 max-h-0 overflow-hidden text-sm text-gray-200 transition-all duration-500 group-hover:max-h-24">
          {description}
        </p>
      </div>
    </div>
  )
}