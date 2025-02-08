export default function ReloadButton() {
 
    function reloadWindow() {
        window.location.reload();
    }
    return (
        <>
            <div className="">
                <button onClick={reloadWindow}>🎰</button>
            </div>
 
        </>
    )
}