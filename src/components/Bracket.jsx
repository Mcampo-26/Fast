import { useState, useRef, useEffect } from "react";

export default function TournamentBracketGenerator() {
  const [rawInput, setRawInput] = useState("");
  const [players, setPlayers] = useState([]);
  const [rounds, setRounds] = useState([]);
  const [showRounds, setShowRounds] = useState([]);
  const printRef = useRef();
  const containerRef = useRef();
  const [columnHeights, setColumnHeights] = useState([]);
  const [readyToDrawLines, setReadyToDrawLines] = useState(false);
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      const columns = containerRef.current.querySelectorAll('[data-round-column]');
      const newHeights = {};
      let maxHeight = 0;

      columns.forEach((col, i) => {
        const h = col.offsetHeight;
        newHeights[i] = h;
        if (h > maxHeight) maxHeight = h;
      });

      newHeights.max = maxHeight; // guardamos el más alto
      setColumnHeights(newHeights);
    }, 100);
    return () => clearTimeout(timer);
  }, [rounds.length, rounds, showRounds]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setReadyToDrawLines(true);
    }, 300); // Espera 100ms
    return () => {
      setReadyToDrawLines(false);
      clearTimeout(timer);
    };
  }, [rounds]);

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const printWindow = window.open('', '', 'width=1200,height=800');
    printWindow.document.write(`
      <html>

        <head>
         <title>Fixture - Categoría ${categoria}</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
   <style>
  @media print {
    @page {
      size: A4 landscape;
      margin: 0;
    }

    html, body {
      width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
      overflow: visible;
      transform: scale(1) !important;
      zoom: 1 !important;
    }

    svg {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      z-index: 0 !important;
      width: 100% !important;
      height: 100% !important;
      display: block !important;
    }
  print-container {
    width: 2400px;
    overflow: visible !important;
  }
    button, textarea {
      display: none !important;
    }
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setRounds([...rounds]);
    }, 0);
    return () => clearTimeout(timer);
  }, [showRounds]);
  const parseExcelData = () => {
    const names = rawInput.trim().split(/\n|\r+/).map(line => line.trim()).filter(name => name && name !== "BYE");
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    const total = 2 ** Math.ceil(Math.log2(names.length));
    const byesNeeded = total - names.length;
    const randomizedPlayers = shuffle([
      ...names,
      ...Array(byesNeeded).fill("BYE")
    ]);
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
    let players = [...winners];
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
        className="relative mb-6 w-64 p-2 border rounded bg-white shadow"
        data-round={rIdx}
        data-match={mIdx}
        id={`r${rIdx}m${mIdx}`}
      >
        {[p1, p2].map((player, idx) => (
          <div
            key={idx}
            className={`flex justify-between p-2 ${match.winner === player ? "bg-green-100" : ""}`}
          >
            <span
              data-player
              className={player === "BYE" ? "text-gray-400" : "font-medium"}
            >{player}</span>

            {p1 !== "BYE" && p2 !== "BYE" && (
              <button
                onClick={() => handleWinnerSelect(rIdx, mIdx, player)}
                className={`w-6 h-6 rounded-full border-2 text-xs ${match.winner === player ? "bg-green-500 text-white" : "bg-white border-gray-400"}`}
              >✓</button>
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

  const calculateLinePath = (x1, y1, x2, y2) => {
    const midX = (x1 + x2) / 2;
    return `M${x1},${y1} C${midX},${y1} ${midX},${y2} ${x2},${y2}`;
  };

  const getElementCenter = (id, isSource = true) => {
    const el = document.getElementById(id);
    const container = containerRef.current;
    if (!el || !container) return [0, 0];

    const nameEl = el.querySelector('[data-player]');
    const box = (nameEl || el).getBoundingClientRect();
    const containerBox = container.getBoundingClientRect();

    const x = isSource
      ? box.right - containerBox.left
      : box.left - containerBox.left;

    const y = box.top - containerBox.top + box.height / 2;

    return [x, y];
  };




  return (
    <div className="p-4 max-w-full">
      <div className="mb-4 w-fit">
      <label className="block text-md font-semibold text-gray-700 mb-1 tracking-wide">Categoría</label>

  <input
    type="text"
    value={categoria}
    onChange={(e) => setCategoria(e.target.value)}
    placeholder="Ingrese la categoría"
    className="border p-2 rounded border-gray-300 w-48"
  />
</div>

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
        <button
          onClick={parseExcelData}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          disabled={!categoria.trim()}
        >
          Generar Primera Ronda
        </button>
      </div>
      {rounds.length > 0 && canGenerateNext() && (
        <button onClick={generateNextRound} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-4">Generar Siguiente Ronda</button>
      )}
      <div ref={printRef} className="relative overflow-x-auto">
        <div
          ref={containerRef}
          className="relative"
          style={{ width: "1600px", height: "auto", overflow: "visible" }}
        >
          {readyToDrawLines && (
            <svg className="absolute inset-0 pointer-events-none" style={{ width: "100%", height: "100%", zIndex: 0 }}>
              {rounds.slice(0, -1).map((round, rIdx) =>
                round.map((match, mIdx) => {
                  const winner = match.winner;
                  if (!winner) return null;
                  const nextRound = rounds[rIdx + 1];
                  const nextMatchIdx = nextRound.findIndex(m => m.players.includes(winner));
                  if (nextMatchIdx === -1) return null;
                  const [x1, y1] = getElementCenter(`r${rIdx}m${mIdx}`);
                  const [x2, y2] = getElementCenter(`r${rIdx + 1}m${nextMatchIdx}`);
                  return (
                    <path
                      key={`${rIdx}-${mIdx}`}
                      d={calculateLinePath(x1, y1, x2, y2)}
                      stroke="black"
                      strokeWidth="2"
                      fill="none"
                    />
                  );
                })
              )}
            </svg>
          )}
          {categoria && (
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold">Categoría: {categoria}</h2>
            </div>
          )}
          <div className="w-[2200px] flex items-start justify-start space-x-48 z-10">

            {showRounds.map((show, idx) =>
              show ? (
                <div
                  key={idx}
                  data-round-column
                  className="flex flex-col items-center self-center transition-all duration-300"
                  style={{
                    transform: `scale(${1 - idx * 0.05})`,
                    transformOrigin: "top center",
                    marginTop: idx > 0 ? `-${idx * 20}px` : "0px"
                  }}
                >
                  <h3 className="font-bold text-center mb-4">Ronda {idx + 1}</h3>
                  {rounds[idx].map((match, mIdx) => renderMatch(match, idx, mIdx))}

                  {idx === rounds.length - 1 && getChampion() && (
                    <div className="flex flex-col items-center justify-center p-4 bg-green-100 rounded shadow text-green-800 font-bold text-sm h-40 min-w-[200px] mt-8 self-start">
                      <div>🏆 Campeón:</div>
                      <div className="text-lg">{getChampion()}</div>
                      <div className="text-sm mt-2 text-gray-600">Categoría: {categoria}</div>
                    </div>
                  )}
                </div>
              ) : null
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
