import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import PagesPostSearch from "./Post/Search/Search";
import PagesPostSearchDetails from "./Post/SearchDetails/SearchDetails";
import Perfil from "./Perfil/Perfil";

export class routesConfig extends Component {
  render() {
    //switch agrupa o componente de rota
    //path ligar link com component, component chama a classe do conteúdo
    return (
      <div>
        <Switch>
          <Route path="/" exact component={PagesPostSearch} />
          <Route path="/detalhes/:id" component={PagesPostSearchDetails} />
          <Route path="/perfil" component={Perfil} />
        </Switch>
      </div>
    );
  }
}

export default routesConfig;
