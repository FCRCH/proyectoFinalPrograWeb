import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.css';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Note from "../Notes/Notes";
import axios from "axios";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {TextareaAutosize } from '@mui/material' ;


const Main = (props) => 
  {
  
    const [formValues, setFormValues] = React.useState();
    const [authenticated, setAuthenticated] = React.useState();
    const [users, setUsers] = React.useState();
    const [notes, setNotes] = React.useState();
    const [user,setUser]= React.useState(props.user);
  
    const urlDelApi = "http://localhost:8080/api/note/all";
  
    useEffect(()=>{
      const user=localStorage.getItem("user"); 
      setUser(props.user);
    },[])

    const mockNotes = [
      {
        NoteID: 1,
        UserID: 1,
        Title: "Nota 1",
        Content: "nueva nota",
        CreatedAt: "2023-10-10 15:56:41",
      },
      {
        NoteID: 2,
        UserID: 1,
        Title: "nota 2",
        Content: "This is the content of ToDo 2 for user 1.",
        CreatedAt: "2023-10-10 15:56:41",
      },
      {
        NoteID: 3,
        UserID: 2,
        Title: "nota 3",
        Content: "This is the content of Task 1 for user 2.",
        CreatedAt: "2023-10-10 15:56:41",
      },
    ];
    
    const onChancheInput = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      console.log(event);
      console.log(name);
      console.log(value);
  
      setFormValues({ ...formValues, [name]: value });
    };
    const callAPINotes = (event) => {
      const params = {
        id: '1',
      };
      axios
        .get(`${urlDelApi}`,{params},  {
          headers: {
            'Access-Control-Allow-Origin': '*',
            // Otros encabezados si son necesarios
          },
        })
        .then(function (response) {
          console.log(response);
          console.log(response.data.records);
          console.log(response.statusText);
          setNotes(response.data.records);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    
    const callAPMockNotes = (event) => {
      setNotes(mockNotes);
      setNotes([...mockNotes]);
    };
   
    const clearNotes = (event) => {
      setNotes();
    };
   
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
   
    return (
      
  <div className={styles.Home}>
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
      <a href="../perfilpersona">Profile</a>
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <a href="../main">Home</a>
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <a href="../login">Logout</a>
    </MenuItem>
      </Menu>
    </div>
      <h1>Bienvenido {user?.usuario}</h1>
        <Grid
          container
          spacing={2}
          style={{
            inset: 0,
            margin: "auto",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          <Grid item xs={12}>
            {/* ... */}
            
          </Grid>
          <Grid item xs={6}>
          <h1> Blog de Notas</h1>
            <Button onClick={callAPINotes} variant="contained" sx={{ mx: 2 }}>
              Ver notas
            </Button>
            <Button onClick={clearNotes} color="secondary" variant="text">
              Ocultar
            </Button>
          </Grid>
        </Grid>
  <br></br>
  <br></br>
  <br></br>

        <Card id="card-home" className={styles["card-home"]}>
          <Grid container spacing={4}>
            {notes?.map((nota, index) => 
            (
  
              <Grid item xs={6} key={index}>
                  <Note titulo="titulo" note={nota}>  
                  
                  </Note>

              </Grid>
            ))}
          </Grid>
        </Card>

      </div>
    );
  };
  

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
