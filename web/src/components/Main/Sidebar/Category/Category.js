import React from "react";
import Card from '@material-ui/core/Card';
import "../sidebar.css";
//import Button from '@material-ui/core/Button';
import ToggleButton from '@material-ui/lab/ToggleButton';


export default function Category({categories, filterClick, filter}) {
    
  
  return (
    <div className="container-sidebar">
        <Card className="content-sidebar">
          {categories.map((category) => (
            <div className="container-botao" key={category.id}>
              <ToggleButton
                className="botao"
                selected={filter.has(category.id)}
                onClick={() => filterClick(category.id)}
              >
                {category.name}
              </ToggleButton>
    
            </div>
            
          ))}
        </Card>
    </div>
  );
}
