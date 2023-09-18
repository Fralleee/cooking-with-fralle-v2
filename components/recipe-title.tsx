interface Props {
  title: string
}

export default function RecipeTitle({ title }: Props) {
  return (
    <header className="relative capitalize font-bold w-full text-center py-14 lg:py-24 bg-header">
      <h1
        className="text-6xl md:text-7xl lg:text-9xl animate-title bg-gradient-to-r from-cozy-start to-cozy-end bg-300 bg-clip-text opacity-0 ease-in-out"
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