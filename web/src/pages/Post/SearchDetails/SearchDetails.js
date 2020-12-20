import React, {useState} from "react";
import { useParams } from "react-router-dom";
import SearchCards from "../../../components/Main/Search/Search";


export default function PagesPostSearchDetails() {

  //abrir e fechar modal
  const [modalPerfil, setModalPerfil]= useState(false);

  const abrirFecharModalPerfil=()=>{
    setModalPerfil(!modalPerfil);
  }

  const {id} = useParams();

  return (
    <div>
        <SearchCards title="SearchDetails" modalPerfil={modalPerfil}
                          abrirFecharModalPerfil={abrirFecharModalPerfil}
                          id={Number.parseInt(id, 10)} />
    </div>
  );

}

