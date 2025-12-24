import react,{useState} from"react";
const TrafficLight = ()=>{
    const[color, setColor]= useState("red");
    const toggleColor = ()=> {
        setColor((prevColor) =>{
            if(prevColor=== "red") return"green";
            if(prevColor=== "green") return"yellow";
            return"red";

        });
    };
    const getButtonStyleAndText=()=>{
        switch(color){
            case"green":
            return {text:"go",buttonColor:"green"};
            case"yellow":
            return {text:"caution",buttonColor:"yellow"};
            case"red":
            return {text:"stop",buttonColor:"red"};
        }
    };
    const {text, buttonColor}= getButtonStyleAndText();

    return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Title */}
      <h1 style={{ fontFamily: "Arial, sans-serif", color: "#333", fontSize: "24px" }}>
        Traffic Light
      </h1>

      {/* Traffic light box */}
      <div
        style={{
          width: "80px",
          height: "240px",
          backgroundColor: "black",
          margin: "0 auto",
          padding: "15px",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {/* Red light */}
        <div
          onClick={() => setColor("red")}
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "red",
            opacity: color === "red" ? 1 : 0.3, // only bright if active
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></div>

        {/* Yellow light */}
        <div
          onClick={() => setColor("yellow")}
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "yellow",
            opacity: color === "yellow" ? 1 : 0.3,
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></div>

        {/* Green light */}
        <div
          onClick={() => setColor("green")}
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "green",
            opacity: color === "green" ? 1 : 0.3,
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></div>

        {/* Purple light (only shows when color === "purple") */}
        {color === "purple" && (
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "purple",
              borderRadius: "50%",
              opacity: 1,
            }}
          ></div>
        )}
      </div>

      {/* Main button (cycles traffic light colors) */}
      <button
        onClick={toggleColor}
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: buttonColor, // depends on current light
          color: "#fff",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonColor)}
      >
        {text} {/* Button label */}
      </button>

      
    </div>
  );
};

export default TrafficLight;
