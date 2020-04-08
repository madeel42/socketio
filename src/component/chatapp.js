import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import io from "socket.io-client";
import {store} from './../store/store'
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  topicWindow: { width: "30%", height: "300px", borderRight: "1px solid grey" },
  chatWindow: { width: "70%", height: "300px", padding: "20px" },
  chatBox: { width: "85%" },
  button: { width: "15%" },
}));
let socket;
const Chatapp = (props) => {
  console.log(props.chatData);
  const classes = useStyles();
  const allChat = Object.keys(props.chatData);
  const [activeTopic, setactiveTopic] = useState(allChat[0]);
  const [changeValue, setchangeValue] = useState({ value: "" });
  const changeTextValue = (evt) => {
    setchangeValue({ ...changeValue, value: evt.target.value });
  };
  
 
  const sendChatValue = (value) => {
    socket.emit("chat message", value);
  };
  if (socket === undefined) {
    socket = io(":7000");
    socket.on('chat message', function(msg){
      console.log(msg)
     store.dispatch({
        type:'Received_message',
        payload:msg
      })
    });
  }
  const user = 'username' + Math.random(100).toFixed(2)
  console.log(allChat);
  console.log(changeValue.value);
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h3" component="h3" gutterBottom>
          Chat app
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom>
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicWindow}>
            <List>
              {allChat.map((topic, i) => {
                return (
                  <ListItem
                    onClick={(e) => {
                      setactiveTopic(e.target.innerText);
                    }}
                    button
                  >
                    <ListItemText primary={topic} />
                  </ListItem>
                );
              })}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {props.chatData[activeTopic].map((chat) => {
              console.log(chat);
              return (
                <div className={classes.flex}>
                  <Chip label={chat.from} className={classes.chip} />
                  <Typography variant="body1" gutterBottom>
                    {chat.msg}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            label="send a chat"
            className={classes.chatBox}
            onChange={(evt) => changeTextValue(evt)}
            value={changeValue.value}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              sendChatValue({from:user,msg:changeValue.value,topic:activeTopic});
              setchangeValue({...changeValue,value:''})
            }}
          >
            send
          </Button>
        </div>
      </Paper>
    </div>
  );
};
const mapStateToprops = (state) => {
  return {
    chatData: state.chatReducers,
  };
};
export default connect(mapStateToprops)(Chatapp);
