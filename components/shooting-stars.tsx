export default function ShootingStars() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-0">
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute bg-white w-0.5 h-0.5 rounded-full animate-shooting-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 5}s`,
          }}
        />
      ))}
    </div>
  )
}

