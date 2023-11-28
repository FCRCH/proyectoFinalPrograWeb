import React from 'react';
import PropTypes from 'prop-types';
import styles from './perfilpersona.module.css';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const Perfilpersona = () => {



 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickBorrar = (event) => {
    window.location.href='/Borrar';
  }
  const onClickEditar = (event) => {
    window.location.href='/Editar';
  }

  return (
  <div className={styles.Perfilpersona} data-testid="Perfilpersona">
<div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
      <a href="./perfilpersona">Profile</a>
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <a href="./main">Home</a>
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <a href="./login">Logout</a>
    </MenuItem>
      </Menu>
    </div>

  <h1>Perfil</h1>
  <form>
    <TextField required id="standard-basic" label="Titulo" variant="standard" name="titulo" type="text"/>
    <br/>
    <TextField required id="standard-basic" label="Nota" variant="standard" name="nota" type="text"/>
    <br/>
    <br/>
    <Button variant="contained" name="AgregarNota" type="submit">Agregar</Button>
    <Button variant="contained" name="Cancelar" type="reset">Cancelar</Button>
    <br></br>
    <h2>Eliminar/Editar Nota</h2>
    <Button onClick={onClickBorrar} variant="contained" name="EliminarNota" type="button">Eliminar Nota</Button>     
    <Button onClick={onClickEditar} variant="contained" name="EditarNota" type="reset">Editar</Button>
    
    <br/>
  </form>

  <br></br>
  </div>
  );

};


Perfilpersona.propTypes = {};

Perfilpersona.defaultProps = {};

export default Perfilpersona;
