import categorias from '../../data/categorias.json'

type CategoriaInputProps = {
  categoria: string;
};

export default function CategoriaInput({ categoria }: CategoriaInputProps) {

  const getOptions = (categoria: string) => {
    const items = categorias.filter(item => item.categoria === categoria)

    return items.map((item) => (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    ))
  }

  return (
    <div className="input-group">
      <label htmlFor="categoria">Categoria:</label>
      <select id="categoria" name="categoria">
        <option value="">Selecione uma categoria</option>
        {getOptions(categoria)}
      </select>
    </div>
  );
}
