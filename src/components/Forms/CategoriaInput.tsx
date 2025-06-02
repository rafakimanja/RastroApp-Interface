type Categoria = {
  value: string;
  label: string;
};

type CategoriaInputProps = {
  categorias: Categoria[];
};


export default function CategoriaInput({ categorias }: CategoriaInputProps){
    return(
        <div className="input-group">
            <label htmlFor="categoria">Categoria:</label>
            <select name="" id="">
                {
                    categorias.map((cat, index) => (
                        <option key={index} value={cat.value}>
                            {cat.label}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}