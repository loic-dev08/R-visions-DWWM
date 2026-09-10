const { useContext } = require("react");

function Header () {
    const { progression} = useContext (ProgressContext);
    const moyenne = Math.round (
        Object.values (progression).reduce ((a, b) => a+b , 0 ) / Object.values ( progression).length
    );
}

return (
    <header className="site-header">
        <h1>Révisions DWWM</h1>
        <p>Progression globale : {moyenne} %</p>

    </header>
);

