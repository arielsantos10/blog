import React from "react";
import {Modal} from "@material-ui/core";
import PerfilCard from "../Card/Card";
import "./modal.css";


export default function ModalPerfil({modalPerfil,
                                      abrirFecharModalPerfil,
                                      filterUser
                                            }) {

      return (
        <div>
          <Modal
            open={modalPerfil}
            onClose={abrirFecharModalPerfil}>
              <div className="modal">
                  <PerfilCard user={filterUser} />
              </div>
          </Modal>
        </div>
      );
                           
}
