interface Props {
  title: string
}

export default function RecipeTitle({ title }: Props) {
  return (
    <header className="relative capitalize font-bold w-full text-center py-10 lg:py-20">
      <h1
        className="text-6xl md:text-7xl lg:text-9xl w-full py-4 animate-title bg-gradient-to-r from-cozy-start to-cozy-end bg-full bg-clip-text opacity-0 ease-in-out"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          WebkitTextStrokeWidth: '2px',
          WebkitTextStrokeColor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        {title}
      </h1>
    </header>
  )
}