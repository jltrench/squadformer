import { useState } from "react";
import { Button } from "../Button/Button";
import DropDown from "../DropDown";
import TextCamp from "../TextCamp";
import "./Form.css";

export const Form = (props) => {

  

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');


  const inSave = (e) => {
    e.preventDefault();
    props.inRegister({
      nome,
      cargo,
      imagem,
      time
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }

  return (
    <section className="form">
      <form onSubmit={inSave}>
        <h2>Complete as informações com os dados do integrante</h2>
        <TextCamp 
          mandatory={true} 
          label="Nome" 
          placeholder="Digite o seu nome" 
          valor={nome}
          Changed={valor => setNome(valor)}
        />
        <TextCamp 
          mandatory={true} 
          label="Cargo" 
          placeholder="Digite o seu cargo" 
          valor={cargo}
          Changed={valor => setCargo(valor)}
        />
        <TextCamp 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          valor={imagem}
          Changed={valor => setImagem(valor)}
        />
        <DropDown 
          mandatory={true} 
          label="Times" 
          itens={props.teams}
          valor={time}
          Changed={valor => setTime(valor)}
        />
        <Button>
          Criar Integrante
        </Button>
      </form>
    </section>
  );
};
