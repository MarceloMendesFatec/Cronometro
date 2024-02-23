import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const App = () => {
  
  const [btnText, setBtnText] = useState("Start");

  //variavel do relogio
  const [number, setNumber] = useState(0);
  const [timer, setTimer] = useState(null);
  const [lastTime, setLastTime] = useState(0);

  //função para iniciar o cronometro
  start = () => {
    //verificar se o timer está rodando e para ele
    if (timer !== null) {
      clearInterval(timer);
      setTimer(null);
      setBtnText("Start");
    } else {
      //iniciar o cronometro quando for nulo
      setTimer(
        setInterval(() => {
          setNumber((prevNumber) => prevNumber + 0.1);
        }, 100)
      );
      setBtnText("Stop");
    }
  };

  //função para limpar o cronometro
  clear = () => {
    if (timer !== null) {
      clearInterval(timer);
      setTimer(null);
    }
    setNumber(0);
    setBtnText("Start");
    setLastTime(number.toFixed(1));
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/cronometro.png")} style={styles.img} />
      <Text style={styles.textTimer}>{number.toFixed(1)}</Text>

      {/* Botões */}
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={start}>
          <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={clear}>
          <Text style={styles.btnText}>Clear</Text>
        </TouchableOpacity>
      </View>

      {/* Last Time */}
      <View>
        <Text style={styles.lastTime}>
          {lastTime > 0 ? "Last time is : " + lastTime : ""}
        </Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00aeef",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 250,
    marginTop: -200,
  },
  textTimer: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: -140,
    color: "#fff",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 100,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
  },
  lastTime: {
    marginTop: 80,
    width: 200,
    padding: 12,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
