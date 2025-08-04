import { PieChart } from "@mui/x-charts/PieChart";

interface DadosGrafico {
  id: number
  value: number
  label: string
}

interface GraficoPizzaProps {
  dados: DadosGrafico[]
}

export default function GraficoPizza({ dados }: GraficoPizzaProps) {
  return(
   <PieChart
      series={[
        {
          data: dados,
          innerRadius: 50,
        },
      ]}
      width={200}
      height={200}
      slotProps={{
        legend: {
          sx: {
            color: 'var(--clr-text)'
          }
        }
      }}
    />
  )
}
