export default function Page() {
  return <RecordHero />
}

function RecordHero() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 text-center w-full mb-12 max-w-2lg">
      <h3 className="scroll-m-20 text-3xl font-bold tracking-tight">
        Registra tus Datos
      </h3>
      <p className="text-base text-muted-foreground text-balance">
        Aquí podrás gestionar y controlar toda la información de manera
        eficiente. Con nuestras herramientas, podrás manipular los datos
        fácilmente y realizar análisis profundos que te ayudarán a tomar
        decisiones informadas.
      </p>
    </div>
  )
}
