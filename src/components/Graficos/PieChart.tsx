import { PieChart } from "@mui/x-charts/PieChart";

export default function GraficoPizza() {

    const dados = [
        { id: 0, value: 400, label: 'Moradia' },
        { id: 1, value: 550, label: 'Educação'},
        { id: 2, value: 350, label: 'Transporte'},
        { id: 2, value: 100, label: 'Dependentes'},
    ]

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
