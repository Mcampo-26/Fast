import { useState, useEffect } from "react";

export default function TournamentBracketGenerator() {
  const [rawInput, setRawInput] = useState("");
  const [players, setPlayers] = useState([]);
  const [round1Winners, setRound1Winners] = useState([]);
  const [round2Winners, setRound2Winners] = useState([]);
  const [round3Winners, setRound3Winners] = useState([]);
  const [round4Winners, setRound4Winners] = useState([]);
  const [showRound1, setShowRound1] = useState(false);
  const [showRound2, setShowRound2] = useState(false);
  const [showRound3, setShowRound3] = useState(false);
  const [showRound4, setShowRound4] = useState(false);
  const [manualWinnerSelected, setManualWinnerSelected] = useState(false);
  const [round5Winners, setRound5Winners] = useState([]);
  const [showRound5, setShowRound5] = useState(false);


  // Procesar los datos de Excel
  const parseExcelData = () => {
    // Dividir por saltos de línea y tabulaciones para manejar datos pegados de Excel
    const rows = rawInput.trim().split(/[\n\r]+/).map(line => line.split("\t"));
    let data = rows.map(cols => cols[0]?.trim()).filter(Boolean);

    // Si no hay datos, mostrar un mensaje
    if (data.length === 0) {
      alert("Por favor, ingresa al menos un competidor");
      return;
    }

    // Completar con "BYE" para llegar a la potencia de 2 más cercana
    const nextPowerOfTwo = 2 ** Math.ceil(Math.log2(data.length));
    const missing = nextPowerOfTwo - data.length;
    if (missing > 0) {
      for (let i = 0; i < missing; i++) {
        data.push("BYE");
      }
    }

    setPlayers(data);
    setRound1Winners([]);
    setRound2Winners([]);
    setRound3Winners([]);
    setRound4Winners([]);
    setShowRound1(true);
    setShowRound2(false);
    setShowRound3(false);
    setShowRound4(false);
  };

  // Avanzar automáticamente los BYE en la 1° ronda
  useEffect(() => {
    if (players.length > 0 && showRound1) {
      const newWinners = Array(players.length / 2).fill("");

      for (let i = 0; i < players.length / 2; i++) {
        const player1 = players[i * 2];
        const player2 = players[i * 2 + 1];

        // Si un jugador es BYE, el otro avanza automáticamente
        if (player1 === "BYE" && player2 !== "BYE") {
          newWinners[i] = player2;
        } else if (player1 !== "BYE" && player2 === "BYE") {
          newWinners[i] = player1;
        }
      }

      setRound1Winners(newWinners);
    }
  }, [players, showRound1]);

  // Función para generar la 2° ronda
  const generateRound2 = () => {
    setShowRound2(true);

    if (round1Winners.length > 0) {
      const newWinners = [];

      for (let i = 0; i < round1Winners.length / 2; i++) {
        const player1 = round1Winners[i * 2] || "";
        const player2 = round1Winners[i * 2 + 1] || "";

        if (player1 === "BYE" && player2 && player2 !== "BYE") {
          newWinners.push(player2);
        } else if (player2 === "BYE" && player1 && player1 !== "BYE") {
          newWinners.push(player1);
        } else {
          newWinners.push(""); // esperar selección manual
        }
      }

      setRound2Winners(newWinners);
    }
  };



  // Función para generar la 3° ronda
  const generateRound3 = () => {
    // Verificamos que haya ganadores en todas las llaves de la 2° ronda
    const allMatchesHaveWinner = round2Winners.every(winner => winner !== "");

    if (!allMatchesHaveWinner) {
      // Podemos forzar la selección automática en matches reales vs BYE
      const updatedWinners = [...round2Winners];

      for (let i = 0; i < round1Winners.length / 2; i++) {
        const player1 = round1Winners[i * 2] || "";
        const player2 = round1Winners[i * 2 + 1] || "";

        // Si un jugador es BYE, el otro avanza automáticamente
        if (player1 === "BYE" && player2 !== "BYE" && !updatedWinners[i]) {
          updatedWinners[i] = player2;
        } else if (player1 !== "BYE" && player2 === "BYE" && !updatedWinners[i]) {
          updatedWinners[i] = player1;
        }
      }

      setRound2Winners(updatedWinners);
    }

    setShowRound3(true);

    // Procesamos los BYE para la ronda 3
    if (round2Winners.length > 0) {
      const newWinners = Array(round2Winners.length / 2).fill("");

      for (let i = 0; i < round2Winners.length / 2; i++) {
        const player1 = round2Winners[i * 2] || "";
        const player2 = round2Winners[i * 2 + 1] || "";

        // Si un jugador es BYE, el otro avanza automáticamente
        if (player1 === "BYE" && player2 !== "BYE") {
          newWinners[i] = player2;
        } else if (player1 !== "BYE" && player2 === "BYE") {
          newWinners[i] = player1;
        }
      }

      setRound3Winners(newWinners);

    }
  };

  // Función para generar la 4° ronda
  const generateRound4 = () => {
    setShowRound4(true);

    // Procesamos los BYE para la ronda 4
    if (round3Winners.length > 0) {
      const newWinners = Array(round3Winners.length / 2).fill("");

      for (let i = 0; i < round3Winners.length / 2; i++) {
        const player1 = round3Winners[i * 2] || "";
        const player2 = round3Winners[i * 2 + 1] || "";

        // Si un jugador es BYE, el otro avanza automáticamente
        if (player1 === "BYE" && player2 !== "BYE") {
          newWinners[i] = player2;
        } else if (player1 !== "BYE" && player2 === "BYE") {
          newWinners[i] = player1;
        }
      }

      setRound4Winners(newWinners);
    }
  };


  const generateRound5 = () => {
    setShowRound5(true);

    if (round4Winners.length > 0) {
      const newWinners = Array(round4Winners.length / 2).fill("");

      for (let i = 0; i < round4Winners.length / 2; i++) {
        const player1 = round4Winners[i * 2] || "";
        const player2 = round4Winners[i * 2 + 1] || "";

        if (player1 === "BYE" && player2 !== "BYE") {
          newWinners[i] = player2;
        } else if (player1 !== "BYE" && player2 === "BYE") {
          newWinners[i] = player1;
        }
      }

      setRound5Winners(newWinners);
    }
  };
  useEffect(() => {
    const validWinners = round4Winners.filter(p => p && p !== "BYE");
    if (validWinners.length === 1 && getMaxRounds() === 5 && showRound4) {
      setRound5Winners(validWinners); // Pasá el ganador
      setShowRound5(true); // Mostrá la 5ta ronda aunque solo tenga 1
    }
  }, [round4Winners, showRound4]);
  

  const handleWinnerSelect = (round, matchIndex, winnerIndex) => {
    let matchPlayers = [];

    switch (round) {
      case 1:
        matchPlayers = [players[matchIndex * 2], players[matchIndex * 2 + 1]];
        const r1Winners = [...round1Winners];
        r1Winners[matchIndex] = matchPlayers[winnerIndex];
        setRound1Winners(r1Winners);
        setManualWinnerSelected(true); // <- AQUI
        break;

      case 2:
        matchPlayers = [round1Winners[matchIndex * 2], round1Winners[matchIndex * 2 + 1]];
        const r2Winners = [...round2Winners];
        r2Winners[matchIndex] = matchPlayers[winnerIndex];
        setRound2Winners(r2Winners);
        setManualWinnerSelected(true); // <- AQUI
        break;

      case 3:
        matchPlayers = [round2Winners[matchIndex * 2], round2Winners[matchIndex * 2 + 1]];
        const r3Winners = [...round3Winners];
        r3Winners[matchIndex] = matchPlayers[winnerIndex];
        setRound3Winners(r3Winners);
        setManualWinnerSelected(true); // <- AQUI
        break;

      case 4:
        matchPlayers = [round3Winners[matchIndex * 2], round3Winners[matchIndex * 2 + 1]];
        const r4Winners = [...round4Winners];
        const winner = matchPlayers[winnerIndex];
        console.log("🏆 Ganador elegido en ronda 4:", winner); // <-- Agregalo
        r4Winners[matchIndex] = winner;
        setRound4Winners(r4Winners);
        setManualWinnerSelected(true);
        break
      case 5:
        matchPlayers = [round4Winners[matchIndex * 2], round4Winners[matchIndex * 2 + 1]];
        const r5Winners = [...round5Winners];
        r5Winners[matchIndex] = matchPlayers[winnerIndex];
        setRound5Winners(r5Winners);
        setManualWinnerSelected(true);
        break;
      default:
        return;
    }
  };


  const renderMatch = (round, matchIndex) => {
    let player1, player2, winner;

    switch (round) {
      case 1:
        player1 = players[matchIndex * 2];
        player2 = players[matchIndex * 2 + 1];
        winner = round1Winners[matchIndex];
        break;
      case 2:
        player1 = round1Winners[matchIndex * 2];
        player2 = round1Winners[matchIndex * 2 + 1];
        winner = round2Winners[matchIndex];
        break;
      case 3:
        player1 = round2Winners[matchIndex * 2];
        player2 = round2Winners[matchIndex * 2 + 1];
        winner = round3Winners[matchIndex];
        break;
      case 4:
        player1 = round3Winners[matchIndex * 2];
        player2 = round3Winners[matchIndex * 2 + 1];
        winner = round4Winners[matchIndex];
        break;
      default:
        return null;
    }

    // Si ambos jugadores son BYE, no mostrar el match
    if (player1 === "BYE" && player2 === "BYE") {
      return null;
    }


    return (
      <div className="relative mb-6">
        {/* Línea horizontal hacia la siguiente ronda */}
        {winner && (
          <div className="bracket-line-horizontal"></div>
        )}

        {/* Línea vertical para conectar enfrentamientos pares */}
        {round < getMaxRounds() && matchIndex % 2 === 0 && (
          <div
            className="bracket-line-vertical"
            style={{
              height: '150px',
              top: '60%',
              transform: 'translateY(-45%)'
            }}
          ></div>
        )}
<div className="flex flex-col w-84 border-2 border-gray-300 rounded overflow-hidden relative pr-10">

          {/* Jugador 1 */}
          <div className={`relative p-3 border-b ${winner === player1 ? "bg-green-100" : "bg-white"}`}>
            <span className={`font-medium  text-2xl ${player1 === "BYE" ? "text-gray-500" : ""}`}>{player1}</span>
          </div>

          {/* Botón ganador player1 */}
          {player1 !== "BYE" && player2 !== "BYE" && (
            <button
              onClick={() => handleWinnerSelect(round, matchIndex, 0)}
              className={`absolute top-3 right-2 w-6 h-6 rounded-full border-2 text-xm ${winner === player1 ? "bg-green-500 border-green-600 text-white " : "bg-white border-gray-400"
                } flex items-center justify-center shadow`}
              title="Seleccionar ganador"
            >
              ✓
            </button>
          )}

          {/* Jugador 2 */}
          <div className={`relative p-3 ${winner === player2 ? "bg-green-100" : "bg-white"}`}>
            <span className={`font-medium text-2xl${player2 === "BYE" ? "text-gray-600" : ""}`}>{player2}</span>
          </div>

          {/* Botón ganador player2 */}
          {player1 !== "BYE" && player2 !== "BYE" && (
            <button
              onClick={() => handleWinnerSelect(round, matchIndex, 1)}
              className={`absolute bottom-3 right-2 w-6 h-6 rounded-full border-2 text-xs ${winner === player2 ? "bg-green-500 border-green-600 text-white" : "bg-white border-gray-400"
                } flex items-center justify-center shadow`}
              title="Seleccionar ganador"
            >
              ✓
            </button>
          )}
        </div>

      </div>
    );

  };

  const getMaxRounds = () => {
    if (!players.length) return 0;
    if (players.length <= 2) return 1;
    if (players.length <= 4) return 2;
    if (players.length <= 8) return 3;
    if (players.length <= 16) return 4;
    if (players.length <= 32) return 5;
    return 6;
  };

  const getChampion = () => {
    const allRounds = [round1Winners, round2Winners, round3Winners, round4Winners, round5Winners];
    const showRounds = [showRound1, showRound2, showRound3, showRound4, showRound5];
  
    const maxRounds = getMaxRounds();
  
    for (let i = allRounds.length - 1; i >= 0; i--) {
      const round = allRounds[i];
      const shown = showRounds[i];
  
      if (!shown || !round || round.length === 0) continue;
  
      const validWinners = round.filter(p => p && p !== "BYE");
  
      const isLastRound = i + 1 === maxRounds;
      const noLaterRoundsVisible = showRounds.slice(i + 1).every(s => !s);
  
      if (validWinners.length === 1 && isLastRound && noLaterRoundsVisible) {
        return validWinners[0];
      }
    }
  
    return null;
  };
  
  





  const renderBracket = () => {
    const maxRounds = getMaxRounds();
    const champion = getChampion();

    return (
      <div className="flex space-x-16 overflow-x-auto pb-8 pt-6">
        {/* Primera ronda */}
        {showRound1 && players.length > 0 && (
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4 text-center ">Primera Ronda</h3>
            <div className="space-y-4">
              {Array.from({ length: Math.ceil(players.length / 2) }).map((_, i) => (
                <div key={`r1-${i}`} className="bracket-item min-w-max">
                  {renderMatch(1, i)}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Segunda ronda */}
        {showRound2 && maxRounds >= 2 && (
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4 text-center mt-15">Segunda Ronda</h3>
            <div className="space-y-[50x]">
              {Array.from({ length: Math.floor(round1Winners.filter(p => p && p !== "BYE").length / 2) }).map((_, i) => (
                <div key={`r2-${i}`} className="bracket-item min-w-max">
                  {renderMatch(2, i)}
                </div>
              ))}


            </div>
          </div>
        )}

        {/* Tercera ronda */}
        {showRound3 && maxRounds >= 3 && (
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4 text-center mt-25">Tercera Ronda</h3>
            <div className="space-y-[100px]">
              {Array.from({ length: Math.floor(round2Winners.filter(p => p && p !== "BYE").length / 2) }).map((_, i) => (

                <div key={`r3-${i}`} className="bracket-item min-w-max">
                  {renderMatch(3, i)}
                </div>
              ))}

            </div>
          </div>
        )}

        {showRound4 && maxRounds >= 4 && round3Winners.filter(p => p && p !== "BYE").length >= 2 && (

          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4 text-center mt-45">Cuarta Ronda</h3>
            <div className="space-y-64">
              {Array.from({ length: Math.floor(round3Winners.filter(p => p && p !== "BYE").length / 2) }).map((_, i) => (
                <div key={`r4-${i}`} className="bracket-item min-w-max">
                  {renderMatch(4, i)}
                </div>
              ))}

            </div>
          </div>
        )}
        {/* Quinta ronda */}
        {showRound5 && maxRounds >= 5 && (
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4 text-center">Quinta Ronda</h3>
            <div className="space-y-64">
              {Array.from({ length: getValidMatches(round4Winners) }).map((_, i) => (
                <div key={`r5-${i}`} className="bracket-item min-w-max">
                  {renderMatch(5, i)}
                </div>
              ))}
            </div>
          </div>
        )}

      


{champion && (
  <div className="flex justify-center items-start mt-30 mb-12 ml-60">



  <div className="flex flex-col justify-center items-center space-y-4 p-6 bg-white rounded-lg shadow-lg border border-gray-300">
    <h3 className="font-bold text-2xl mb-2 text-center">🏆 Campeón</h3>
    <div className="text-4xl font-extrabold bg-green-100 border-4 border-green-500 rounded px-6 py-4 shadow-xl text-center">
      {champion}
    </div>
  </div>
</div>
)}

      </div>
    );
  };
  const getValidMatches = (roundWinners) => {
    return Math.floor(roundWinners.filter(p => p && p !== "BYE").length / 2);
  };

  return (
    <div className="p-4 max-w-full">
      <h1 className="text-2xl font-bold mb-4">Generador de Fixture de Torneos</h1>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Pega tu lista de participantes desde Excel (un nombre por línea)
        </label>
        <textarea
          value={rawInput}
          onChange={(e) => setRawInput(e.target.value)}
          rows={6}
          className="w-full border p-2 mb-4 font-mono border-gray-300 rounded"
          placeholder="Ejemplo:
Competidor 1
Competidor 2
Competidor 3"
        />
        <button
          onClick={parseExcelData}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Generar Primera Ronda
        </button>
      </div>

      {showRound1 && (
        <>
          {/* Este bloque se ve normalmente, pero no se imprime */}
          <div className="border rounded-lg p-4 bg-white shadow mb-6">
            <div className="flex flex-wrap gap-4 mb-6">
              {/* Botones de control */}
              <button onClick={generateRound2} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                Generar Segunda Ronda
              </button>
              {showRound2 && getMaxRounds() >= 3 && (
                <button onClick={generateRound3} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                  Generar Tercera Ronda
                </button>
              )}
              {showRound3 && getMaxRounds() >= 4 && (
                <button onClick={generateRound4} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                  Generar Cuarta Ronda
                </button>
              )}
              <button onClick={() => window.print()} className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded ml-auto">
                Imprimir Fixture
              </button>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-600">
                Haz clic en el botón "Ganador" junto al nombre de un competidor para marcarlo como ganador.
                Los competidores que enfrentan a "BYE" avanzan automáticamente.
              </p>
            </div>
          </div>

          {/* Este bloque es el que se imprime */}
          <div className="bracket-print">
            {renderBracket()}
          </div>
        </>
      )}


    </div>

  );
}
