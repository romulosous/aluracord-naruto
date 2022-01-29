import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React, {useState} from "react";
import appConfig from "../config.json";

export default function ChatPage() {
  // Sua lógica vai aqui
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  // ./Sua lógica vai aqui

  /**
     // Usuário
     - Usuario digita no campo textarea
     - Aperta enter para enviar
     - Tem que adicionar o texto na listagem


     //Dev
     - [X] Campo Criado
     - [] Vamos usar o onChange usa o o useState (ter if para caso seja enter limpar a variavel)
     - [] Lista de mensagens
     */

  const handleNewMessage = (newMessage) => {
    const message = {
      id: messageList.length + 1,
      from: "romulosous",
      text: newMessage,
    };
    setMessageList([message, ...messageList]);
    setMessage("");
  };

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList
            messageList={messageList}
            setMessageList={setMessageList}
          />

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  if (message.length > 0) handleNewMessage(message);
                }
              }}
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Button
              buttonColors={{}}
              disabled={message.length < 1}
              onClick={() => handleNewMessage(message)}
              colorVariant="dark"
              iconName="FaShare"
              size="sm"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList({ messageList, setMessageList }) {
  const [showButton, setShowButton] = useState(false);

  const handleDeleteMessage = (id) => {
    const newMessageList = messageList.filter((message) => message.id !== id);
    setMessageList(newMessageList);
  };
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {messageList && messageList.map((message) => {
        return (
          <Text
            key={message.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              onMouseEnter={(e) => {
                setShowButton(true);
              }}
              onMouseLeave={(e) => setShowButton(false)}
              styleSheet={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  styleSheet={{
                    marginBottom: "8px",
                  }}
                >
                  <Image
                    styleSheet={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "8px",
                    }}
                    src={`https://github.com/vanessametonini.png`}
                  />
                  <Text tag="strong">{message.from}</Text>
                  <Text
                    styleSheet={{
                      fontSize: "10px",
                      marginLeft: "8px",
                      color: appConfig.theme.colors.neutrals[300],
                    }}
                    tag="span"
                  >
                    {new Date().toLocaleDateString()}
                  </Text>
                </Box>
                {message.text}
              </Box>
              {showButton && (
                <Button
                  buttonColors={{
                    contrastColor: "#FFFFFF",
                    mainColor: "transparent",
                  }}
                  colorVariant="dark"
                  iconName="FaTrash"
                  size="md"
                  onClick={(e) => handleDeleteMessage(message.id)}
                />
              )}
            </Box>
          </Text>
        );
      })}
    </Box>
  );
}
