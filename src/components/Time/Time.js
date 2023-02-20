import Collaborator from '../Collaborator';
import './Time.css'

export const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria };

    return (
        props.collaborators.length > 0 ? <section className='time' style={css}>
            <h3 style={{color: props.corPrimaria}} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.collaborators.map(collaborator => <Collaborator corDeFundo={props.cor} key={collaborator.nome} nome={collaborator.nome} cargo={collaborator.cargo} imagem={collaborator.imagem}/>)}
            </div>
        </section>
        : ''
    );
}