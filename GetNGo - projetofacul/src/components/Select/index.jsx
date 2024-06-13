import { Container } from './styles'

export function Select() {
    return (
        <Container>
            <label htmlFor="category">Categoria</label>
            <div className="custom-select-wrapper">
                <select id="category" name="categoria">
                    <option value="meals">Shows</option>
                    <option value="deserts">Sports</option>
                    <option value="drinks">E-Sports</option>
                </select>
                <div className="custom-arrow"></div>
            </div>
        </Container>
    )
}