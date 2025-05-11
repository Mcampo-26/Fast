import { useState, useRef, useEffect } from "react";

export default function TournamentBracketGenerator() {
  const [rawInput, setRawInput] = useState("");
  const [players, setPlayers] = useState([]);
  const [rounds, setRounds] = useState([]);
  const [showRounds, setShowRounds] = useState([]);
  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const printWindow = window.open('', '', 'width=1200,height=800');

    printWindow.document.write(`
      <html>
        <head>
          <title>Fixture</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <style>
            @media print {
              @page { size: landscape; }
              body { padding: 20px; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
              button { display: none; }
            }
          </style>
        </head>
        <body>${printContents}</body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 500);
  };

  const parseExcelData = () => {
    const names = rawInput.trim().split(/[\n\r]+/).map(line => line.split("\t")[0].trim()).filter(name => name && name !== "BYE");
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    const total = 2 ** Math.ceil(Math.log2(names.length));
    const byesNeeded = total - names.length;
    const fullPlayers = [...names, ...Array(byesNeeded).fill("BYE")];
    const randomizedPlayers = shuffle(fullPlayers);
    const firstRound = [];
    for (let i = 0; i < randomizedPlayers.length; i += 2) {
      const p1 = randomizedPlayers[i];
      const p2 = randomizedPlayers[i + 1];
      firstRound.push({ players: [p1, p2], winner: p1 === "BYE" ? p2 : p2 === "BYE" ? p1 : "" });
    }
    setPlayers(names);
    setRounds([firstRound]);
    setShowRounds([true]);
  };

  const handleWinnerSelect = (roundIndex, matchIndex, winner) => {
    const updated = [...rounds];
    updated[roundIndex][matchIndex].winner = winner;
    setRounds(updated);
  };

  const generateNextRound = () => {
    const current = rounds[rounds.length - 1];
    const winners = current.map(m => m.winner).filter(Boolean);
    const next = [];
    const isFirstRound = rounds.length === 1;
    let players = [...winners];
    if (isFirstRound && players.length % 2 !== 0) players.push("BYE");
    for (let i = 0; i < players.length; i += 2) {
      const p1 = players[i];
      const p2 = players[i + 1] || null;
      if (p1 === "BYE" && p2 === "BYE") continue;
      if (p1 === "BYE") next.push({ players: [p1, p2], winner: p2 });
      else if (p2 === "BYE") next.push({ players: [p1, p2], winner: p1 });
      else if (p2) next.push({ players: [p1, p2], winner: "" });
    }
    setRounds([...rounds, next]);
    setShowRounds([...showRounds, true]);
  };

  const canGenerateNext = () => {
    const current = rounds[rounds.length - 1];
    return current.every(m => m.winner && m.winner !== "");
  };

  const renderMatch = (match, rIdx, mIdx) => {
    const [p1, p2] = match.players;
    return (
      <div
        key={mIdx}
        className={`relative mb-3 w-72 p-2 border rounded bg-white ${
          rIdx < rounds.length - 1
            ? "after:absolute after:top-1/2 after:right-0 after:w-8 after:h-0.5 after:bg-black"
            : ""
        }`}
      >
        {[p1, p2].map((player, idx) => (
          <div
            key={idx}
            className={`flex justify-between p-2 ${
              match.winner === player ? "bg-green-100" : ""
            }`}
          >
            <span className={player === "BYE" ? "text-gray-400" : "font-medium"}>{player}</span>
            {p1 !== "BYE" && p2 !== "BYE" && (
              <button
                onClick={() => handleWinnerSelect(rIdx, mIdx, player)}
                className={`absolute ${
                  idx === 0 ? "top-2" : "bottom-2"
                } right-2 w-6 h-6 rounded-full border-2 text-xs ${
                  match.winner === player
                    ? "bg-green-500 text-white"
                    : "bg-white border-gray-400"
                }`}
              >
                ✓
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  const getChampion = () => {
    const last = rounds[rounds.length - 1];
    if (last && last.length === 1 && last[0].winner && last[0].winner !== "BYE") {
      return last[0].winner;
    }
    return null;
  };

  return (
    <div className="p-4 max-w-full">
      <h1 className="text-2xl font-bold mb-4">Generador de Fixture de Torneos</h1>
      <div className="flex justify-end">
        <button onClick={handlePrint} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded mb-4">🖨️ Imprimir Fixture</button>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Pega tu lista de participantes desde Excel (un nombre por línea)</label>
        <textarea
          value={rawInput}
          onChange={(e) => setRawInput(e.target.value)}
          rows={6}
          className="w-full border p-2 mb-4 font-mono border-gray-300 rounded"
          placeholder="Ejemplo:\nCompetidor 1\nCompetidor 2"
        />
        <button onClick={parseExcelData} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Generar Primera Ronda</button>
      </div>
      {rounds.length > 0 && canGenerateNext() && (
        <button onClick={generateNextRound} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-4">Generar Siguiente Ronda</button>
      )}
      <div ref={printRef} className="relative">
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {rounds.slice(0, -1).map((round, rIdx) => (
            round.map((match, mIdx) => {
              const nextRound = rounds[rIdx + 1];
              const winner = match.winner;
              if (!winner) return null;
              const nextMatchIdx = nextRound.findIndex(m => m.players.includes(winner));
              if (nextMatchIdx === -1) return null;
              const x1 = 290 * rIdx + 250;
              const y1 = 130 * mIdx + 35;
              const x2 = 290 * (rIdx + 1);
              const y2 = 130 * nextMatchIdx + 35;
              return <line key={`${rIdx}-${mIdx}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="1.5" />;
            })
          ))}
        </svg>

        <div className="flex gap-6 overflow-x-auto">
          {showRounds.map((show, idx) =>
            show ? (
              <div key={idx}>
                <h3 className="font-bold text-center mb-2">Ronda {idx + 1}</h3>
                {rounds[idx].map((match, mIdx) => renderMatch(match, idx, mIdx))}
              </div>
            ) : null
          )}

          {getChampion() && (
            <div className="flex items-center justify-center p-2 bg-green-100 rounded shadow text-green-800 font-bold text-sm h-20 min-w-[200px]">
              🏆 Campeón: {getChampion()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
