
import Icons from '../components/icons';

export const Fidelidade = (total: number) =>{
    const elements: JSX.Element[] = [];
    for (let i = 0; i < 8; i++) {
        elements.push(
            <div>
                {total > i && <Icons.Estrela />}
            </div>
        );
    }
    return elements;
}