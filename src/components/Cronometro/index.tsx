import Button from "../Button";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';

export default function Cronometro() {
    return(
       <div className={style.Cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômtro</p>
        <div className={style.relogioWrapper}>
            <Relogio/>
        </div>
        <Button>
            Começar
        </Button>
       </div> 
    );
}